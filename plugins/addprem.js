let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) throw `🌹 Error!\n\n${conn.getName(who)} is already premium!`
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    m.reply(`🌹 Premium Add!

User : @${who.split`@`[0]} ( ${conn.getName(who)} )
Is now Premium for 30 Days!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['premium add/del [@user]']
handler.tags = ['owner']
handler.command = /^premium ?add$/i

handler.rowner = true

module.exports = handler
