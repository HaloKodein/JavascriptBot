export function getIntents() {
    return new Array(
        'GUILDS',
        'DIRECT_MESSAGES',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILD_BANS',
        'GUILD_INVITES'
    )
}

export function getPartials() {
    return new Array(
        'CHANNEL',
        'MESSAGE',
        'REACTION',
        'GUILD_MEMBER',
        'USER'
    )
}