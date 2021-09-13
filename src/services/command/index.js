import { readdir } from 'fs/promises'
import { log } from '../../utils/Logger.js'

export class CommandService {
    constructor() {}

    commands = new Map()
    aliases = new Map()

    interactions = new Array()
    slashCommands = new Map()

    async initialize() {
        const handlers = await readdir('./src/commands')

        for (const handler of handlers) {
            const { default: command } = await import(`../../commands/${handler}`)
            const commandName = command.config.name.toLowerCase()

            if (command.config.hasOwnProperty('options')) {
                log(
                    `Slash Command: ${command.config.name}`,
                    'initialize'
                )
                
                this.slashCommands.set(
                    commandName,
                    command
                )

                return this.interactions.push({
                    ...command.config
                })
            }

            this.commands.set(
                commandName,
                command
            )

            command.config.aliases.forEach(a => {
                this.aliases.set(
                    a.toLowerCase(),
                    commandName
                )
            })
        }
    }

    async handleCommand({ message, client, prefix }) {
        if (message.author.bot) return
        if (message.channel.type === 'DM') return
        if (!message.content.startsWith(prefix)) return
        
        const args = message.content
            .slice(prefix.length)
            .split(/ +/g)
        
        const target = args
            .shift()
            .toLowerCase()
        
        const command = this.commands.get(target)
            || this.commands.get(this.aliases.get(target))

        if (!command) return

        try {
            await command.execute({ message, client, args })
        } catch (err) {
            return log(
                `Command ${command.config.name} error: ${err.message}`,
                'invoke'
            )
        }
    }

    async handleInteraction({ interaction, client }) {
        if (!interaction.isCommand()) return

        await interaction.deferReply()

        const command = this.slashCommands.get(interaction.commandName)
        
        if (!command) return

        try {
            await command.execute({ interaction, client })
        } catch (err) {
            return log(
                `Command ${command.config.name} error: ${err.message}`,
                'invoke'
            )
        }
    }
}