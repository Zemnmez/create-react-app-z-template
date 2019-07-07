const program = require('commander');
const chalk = require('chalk');


program
  .description('prepares the example/package.json by linking peerDependencies')
  .option('--packagejson <path>', 'root package.json')
  .option('--examplepackagejson <path>', 'example package.json')
  .option('--out <path>', 'destination for merged example package.json')
  .parse(process.argv);

const abbr = (n) => (str) =>
  str.slice(0, n-1) + (str.length > n?chalk.grey('…'):"");

const { promisify } = require('util');
const { readFile: readFileCb, writeFile: writeFileCb } = require('fs');
const [ readFile, writeFile] = [ readFileCb, writeFileCb].map(promisify);

const ora = require('ora');

const orify = (funcNametoFuncMap) => {
  const [ [ funcName, func ] ] = Object.entries(funcNametoFuncMap);
  return async (...args) => {
    const spinner = ora(
      abbr(process.stdout.columns -3)(`${chalk.white(funcName)}(${chalk.grey(JSON.stringify(args).slice(1,-1))})`)
    );
    let ret;
    try {
      ret = await func(...args)
    } catch (e) {
      spinner.fail();
      throw(e);
    }

    spinner.succeed();
    return ret;
  }
}


const read = orify({readFile});
const write = orify({writeFile});

const readJson = async (...args) => JSON.parse(await read(...args))


const Do = async () => {
  const { packagejson, examplepackagejson, out } = program;
  Object.entries({packagejson, examplepackagejson, out})
    .forEach(([name, value]) => {
      if (!value) throw new Error(`missing --${name}`)
    });

  ora(`generating ${examplepackagejson}`).info();

  const [ pkg, exPkg ] = await Promise.all(
    [packagejson, examplepackagejson].map(async filename => readJson(filename))
  )

  exPkg.name = `${pkg.name}-example`;

  // filter out any existing link: dependency
  exPkg.dependencies = Object.entries(exPkg.dependencies)
    .filter(([k, v]) => /^link:/.test(v))
    .reduce((a, [k, v]) => { a[k] = v; return a }, {});

  exPkg.dependencies = {
    [pkg.name]: "link:..",
    ...exPkg.dependencies,
    ...Object.keys(pkg.peerDependencies)
      .map((k) => [ k, `link:../node_modules/${k}` ])
      .reduce((a, [k, v]) => { a[k] = v; return a }, {})
  }

  await write(out, JSON.stringify(exPkg, null, 2));
}

Do().catch(err => { console.log(err); process.exit(1) })
