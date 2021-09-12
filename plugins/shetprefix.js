let handler = async(m, { conn, text }) => {

  if (!text) throw `Prefix????`

  global.prefix = new RegExp('^[' + (opts['prefix'] || `${text}`) + ']')
    await m.reply(`Prefix changed to *= ${text}*`)
}
handler.help = ['setprefix <prefix>']
handler.tags = ['owner']
handler.command = /^(setprefix)$/i
handler.rowner = true

module.exports = handler
