let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who)) throw `🌹 Error!\n\n${conn.getName(who)} is not an premium user!`
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    m.reply(`🌹 Premium Delete:(

User _${conn.getName(who)}_
Will not an premium user for forever

Chat @60199782326 to activate premium again!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.command = /^premium ?del$/i

handler.rowner = true

module.exports = handler
