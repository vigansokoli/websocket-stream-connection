import chalk from 'chalk'

export default {
  success: (message) => {
    console.log(chalk.green.inverse.bold((new Date()).toISOString(), 'Success:', message));
  },
  notice: (message) => {
    console.log(chalk.grey.inverse.bold((new Date()).toISOString(), 'Notice:', message));
  },
  failure: (message) => {
    console.log((chalk.red.inverse.bold((new Date()).toISOString(), 'Failure', message)))
  },
};