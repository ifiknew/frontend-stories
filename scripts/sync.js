/**
 * build docz,
 * then git add, commit and push
 */
const childProcess = require('child_process')

const [ , , commitMessage = 'sync docs'] = process.argv

console.log('building docz')
try {
  childProcess.execSync('npm run docz:build', { stdio: "inherit" })
} catch (error) {
  console.error('error while building docz:', error)
  process.exit(1)
}
console.log('build done, start sync')
try {
  childProcess.execSync('git add .', { stdio: "inherit" })
  childProcess.execSync(`git commit -m '${commitMessage}'`, { stdio: "inherit" })
  childProcess.execSync('git push', { stdio: "inherit" })
} catch (error) {
  console.error('error when commit:', error)
  process.exit(1)
}
console.log('sync done')

process.exit(0)