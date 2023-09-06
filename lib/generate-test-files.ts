import fs from 'fs'

const testFileTemplate = (name: string, path: string) => `
import func from "${path}";

describe('${name}', () => {
  it('Example 1', () => {
    expect(func()).toEqual()
  });
});
`

// recursively go thru src directory and generate test files
const generateTestFiles = (path: string) => {
  const files = fs.readdirSync(path)
  for(const file of files) {
    const filePath = `${path}/${file}`
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      const testPath = filePath.replace('src', 'test')
      if (!fs.existsSync(testPath)) {
        fs.mkdirSync(testPath, { recursive: true })
      }
      generateTestFiles(filePath)
    } else {
      const testPath = filePath.replace('src', 'test').replace('.ts', '.test.ts')
      if (!fs.existsSync(testPath)) {
        console.log(filePath);
        fs.writeFileSync(testPath, testFileTemplate(
          file.split('.')[0],
          filePath.replace('src', '$').replace('.ts', '')
        ))
      }
    }
  }
}

const [path = 'src'] = process.argv.slice(2)

generateTestFiles(path)
