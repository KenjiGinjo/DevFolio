const fs = require('node:fs')
const path = require('node:path')

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename

    let fileContent = fs.readFileSync(filePath, 'utf8')

    if (!fileContent.startsWith('\'use client\'')) {
      fileContent = `'use client'\n\n${fileContent}`
      fs.writeFileSync(filePath, fileContent, 'utf8')
    }

    return `export { default as Icon${exportName} } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate
