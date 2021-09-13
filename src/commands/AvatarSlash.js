import { MessageEmbed } from 'discord.js'

export default {
    config: {
        name: 'avatar',
        description: 'Envia o avatar da pessoa mencionada.',
        options: [
            {
                name: 'target',
                description: 'Mencione a pessoa.',
                type: 'USER',
                required: false
            }
        ]
    },
    execute: async ({ interaction, client }) => {
        const target = interaction.options.getUser('target') || interaction.user
        const avatar = target.displayAvatarURL({ dynamic: true })

        const avatarEmbed = new MessageEmbed()
            .setDescription(`Avatar de [${target.username}](${avatar})`)
            .setColor(client.defaultColor)
            .setImage(avatar)

        interaction.followUp({
            embeds: [avatarEmbed]
        })
    }
}