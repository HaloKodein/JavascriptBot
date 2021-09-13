import chalk from 'chalk'
import dateAn from 'date-and-time'

export function log(message, module = 'debug') {
    function getFormatTime(date) {
        return dateAn.format(date, 'hh:mm:ss')
    }

    console.log(`[${chalk.cyan(module.toUpperCase())}] ${chalk.grey(getFormatTime(new Date()))} ${message}`)
}