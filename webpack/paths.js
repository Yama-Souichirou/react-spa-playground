const { resolve } = require("path")
const rootDir = resolve(__dirname, "../")
const clientDir = resolve(rootDir, "app", "client")
const srcDir = resolve(clientDir, "src")

module.exports = {
  rootDir,
  clientDir,
  srcDir
}
