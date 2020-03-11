#!/usr/bin/env node

const { semver, error } = require('@vue/cli-shared-utils')

const Service = require('@vue/cli-service/lib/Service')
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())

const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv, {
  boolean: [
    // build
    'modern',
    'report',
    'report-json',
    'inline-vue',
    'watch',
    // serve
    'open',
    'copy',
    'https',
    // inspect
    'verbose'
  ]
})
const command = args._[0]
console.log(command, args, rawArgv)
service.run(command, args, rawArgv).catch(err => {
  error(err)
  process.exit(1)
})

module.exports = {
  configureWebpack: {
      entry: './example/main.js'
  }
}