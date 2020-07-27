const { resolve } = require("path")
const rootDir = resolve(__dirname, "../")
const srcDir = resolve(rootDir, "src")
const outputDir = resolve(rootDir, "dist")

module.exports = {
  rootDir,
  srcDir,
  outputDir
}
