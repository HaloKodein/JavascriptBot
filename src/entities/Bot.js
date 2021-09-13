import { Client, Intents } from 'discord.js'
import { getIntents, getPartials } from '../utils/Client.js'
import { EventService } from '../services/event/index.js'
import { CommandService } from '../services/command/index.js'
import config from '../config.js'

export class Bot extends Client {
    constructor(
    ) {
        super({ intents: getIntents(), partials: getPartials() })
    }

    eventService = new EventService()
    commandService = new CommandService()
    defaultColor = config.command.defaultColor
}