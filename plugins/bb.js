let { execSync } = require('child_process')

let handler = async (m, { conn, text, isROwner }) => {

if (global.conn.user.jid == conn.user.jid) {

await conn.fakeReply(m.chat, 'https://chat.whatsapp.com/GyF5zdb2aK15pAexpvHhNC', '0@s.whatsapp.net', 'join with us', 'status@broadcast')

}

}

handler.help = ['groupss']

handler.tags = ['host']

handler.command = /^botkingdom$/i


handler.mods = false

handler.premium = false

handler.group = false

handler.private = false


handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

