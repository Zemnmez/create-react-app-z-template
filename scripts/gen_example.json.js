const program = require('commander');


program
  .description('prepares the example/package.json by linking peerDependencies')
  .option('--packagejson', 'root package.json')
  .option('--examplepackagejson', 'example package.json')

const { promisify } = require('util');
const { readFile: readFileCb, writeFile: writeFileCb } = require('fs');
const [ readFilePromise, writeFilePromise ] = [ readFileCb, writeFileCb].map(promisify);

const ora = require('ora');

const orify = (funcNametoFuncMap) => {
  const [ [ funcName, func ] ] = Object.entries(funcNametoFuncMap);
  return async (...args) => {
    const spinner = ora(`${funcName}(${JSON.stringify(args).slice(1,-1)})`);
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


const readFile = orify({readFile: readFilePromise});
const writeFile = orify({writeFile: writeFilePromise});

const readJson = async (...args) => JSON.parse(await readFile(...args))


const Do = async () => {
  const { packagejson, examplepackagejson } = program;
  Object.entries({packagejson, examplepackagejson})
    .forEach(([name, value]) => {
      if (!value) throw new Error(`missing --${name}`)
    });

  const [ pkg, exPkg ] = Promise.all(
    ...[packagejson, examplepackagejson].map(readJson)
  )

  exPkg.name = `${pkg.name}-example`;

  // filter out any existing link: dependency
  exPkg.dependencies = Object.entries(exPkg.dependencies)
    .filter(([k, v]) => /^link:/.test(v))
    // convert back to object
    .reduce(([k, v], c) => { c[k] = v; return c }, {});

  exPkg.dependencies = {
    ...exPkg.dependencies,
    ...Object.keys(pkg.peerDependencies)
      .map(([k]) => [ k, `link:../node_modules/${k}` ])
      .reduce(([k, v], c) => { c[k] = v; return c }, {})
  }

  await writeFile(examplepackagejson, JSON.stringify(exPkg));
}

Do().catch(err => {throw new Error(err)})
