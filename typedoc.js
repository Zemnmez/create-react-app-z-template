module.exports = {
  "entryPoint": require('./package.json').name,
  "theme": "markdown",
  "mode": "modules",
  "includes": ".",
  "exclude": ["example", "node_modules", "dist"],
  "listInvalidSymbolLinks": true
}
