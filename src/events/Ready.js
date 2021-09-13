import { log } from '../utils/Logger.js'
 
export default {
    name: 'ready',
    invoke: async (client) => {
        const commands = client.application.commands

        await commands
            .set(client.commandService.interactions)

        log(`Ready in ${client.user.username}`, 'client')
    }
}