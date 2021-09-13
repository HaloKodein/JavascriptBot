import { readdir } from 'fs/promises'
import { log } from '../../utils/Logger.js'

export class EventService {
    constructor(){}

    async initialize(client) {
        try {
            const handlers = await readdir('./src/events')

            for (const handler of handlers) {
                const { default: event } = await import(`../../events/${handler}`)

                client
                    .on(
                        event.name,
                        event.invoke
                            .bind(null, client)
                    )
            }
        } catch (err) {
            return log(`Event error: ${err.message}`, 'initialize')
        }
    }
}