let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(back)).buffer(), `
┌〔 Donasi • PULSA 〕
├ 60199782326
└────
donasi bang. biar bot ga ke ban mark kontol:v
`.trim(), 'donasi lah sayang:v', 'owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
