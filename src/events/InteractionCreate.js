import config from '../config.js'

export default {
    name: 'interactionCreate',
    invoke: async (client, interaction) => {
        await client.commandService
            .handleInteraction({
                interaction,
                client
            })
    }
}