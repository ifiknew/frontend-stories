const childProcess = require('child_process')

const [ , , commitMessage] = process.argv

console.log('building docz...')
try {
  childProcess.execSync('npm run docz:build')
} catch (error) {
  console.error('error while building docz:', error)
  process.exit(1)
}
console.log('build done, start committing...')
try {
  childProcess.execSync('git add .')
  childProcess.execSync(`git commit -m '${commitMessage}'`)
} catch (error) {
  console.error('error when commit:', error)
  process.exit(1)
}
console.log('commit done.')

process.exit(0)