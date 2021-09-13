import config from '../config.js'

export default {
    name: 'messageCreate',
    invoke: async (client, message) => {
        await client.commandService
            .handleCommand({
                message,
                client,
                prefix: config.command.prefix
            })
    }
}