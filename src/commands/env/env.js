const { generateCommandsHelp, generateExamplesHelp } = require('../../utils')

const { createEnvGetCommand } = require('./get')
const { createEnvImportCommand } = require('./import')
const { createEnvListCommand } = require('./list')
const { createEnvSetCommand } = require('./set')
const { createEnvUnsetCommand } = require('./unset')

/**
 * The env command
 * @param {import('commander').OptionValues} options
 * @param {import('../base-command').BaseCommand} command
 */
const env = (options, command) => {
  command.help()
}

/**
 * Creates the `netlify env` command
 * @param {import('../base-command').BaseCommand} program
 * @returns
 */
const createEnvCommand = (program) => {
  createEnvGetCommand(program)
  createEnvImportCommand(program)
  createEnvListCommand(program)
  createEnvSetCommand(program)
  createEnvUnsetCommand(program)

  return program
    .command('env')
    .description('(Beta) Control environment variables for the current site')
    .addHelpText(
      'after',
      generateExamplesHelp([
        'netlify env:list',
        'netlify env:get VAR_NAME',
        'netlify env:set VAR_NAME value',
        'netlify env:unset VAR_NAME',
        'netlify env:import fileName',
      ]),
    )
    .addHelpText('after', generateCommandsHelp('env', program))
    .action(env)
}

module.exports = { createEnvCommand }
