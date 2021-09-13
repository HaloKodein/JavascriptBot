import { config } from 'dotenv'
config()

export default {
    client: {
        token: process.env.CLIENT_TOKEN,
        id: process.env.CLIENT_ID
    },
    command: {
        prefix: process.env.COMMAND_PREFIX,
        defaultColor: process.env.COMMAND_DEFAULT_COLOR
    }
}