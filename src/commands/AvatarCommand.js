import { MessageEmbed } from 'discord.js'

export default {
    config: {
        name: 'avatar',
        description: 'Envia o avatar da pessoa mencionada.',
        aliases: ['av']
    },
    execute: async ({ message, args, client }) => {
        const target = message.mentions.users.first() || message.author
        const avatar = target.displayAvatarURL({ dynamic: true })

        const avatarEmbed = new MessageEmbed()
            .setDescription(`Avatar de [${target.username}](${avatar})`)
            .setColor(client.defaultColor)
            .setImage(avatar)

        message.channel.send({
            embeds: [avatarEmbed]
        })
    }
}