'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('./templates.json')
const chalk = require('chalk')

module.exports = () => {
  co(function *() {
    const tplName = yield prompt('Template name (you can input one like egg-vue): ')
    const projectName = yield prompt('Project name: ')
    let gitUrl, branch;
    // console.log(config.tpl)
    if (!config.tpl[tplName]) {
      console.log('\n x Template dose not support!')
      process.exit()
    }
    gitUrl = config.tpl[tplName].url
    branch = config.tpl[tplName].branch

    let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch} && git remote remove origin`

    exec(cmdStr, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
        process.exit()
      }
      console.log(chalk.green('\n Generation complated !'))
      console.log(`\n cd ${projectName} && npm install \n`)
      process.exit()
    })
  })
}