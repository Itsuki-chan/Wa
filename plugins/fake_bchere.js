let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => conn.send3ButtonLoc(m.chat, await (await fetch(back)).buffer(), `
*BROADCAST HERE!*

${text}
`.trim(), 'Created by Itsuki', 'MENU', '.menu', 'SC BOT', '.sc', 'DONASI', '.donasi')
handler.help = ['bchere']
handler.tags = ['owner']
handler.command = ['bchere']
handler.rowner = true

module.exports = handler
