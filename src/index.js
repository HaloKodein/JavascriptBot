import { Bot } from './entities/Bot.js'
import config from './config.js'

const client = new Bot()

async function bootstrap() {
    await client.eventService
        .initialize(client)

    await client.commandService
        .initialize()

    await client.login(config.client.token)
}

bootstrap()
