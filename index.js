#!/usr/bin/env node

'use strict'

process.env.NODE_PATH = __dirname + '/../node_modules'

const program = require('commander')

program.version(require('./package').version)

program.usage('<command>')

program.command('init').description('Generate a new project')
  .alias('i')
  .action(() => {
    require('./init.js')()
  })

program.parse(process.argv)