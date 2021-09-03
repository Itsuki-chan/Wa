function handler(m) {
  m.reply('Okeh nyala')
}
handler.help = ['tes']
handler.tags = ['info']

handler.command = /^(tes|test)$/i

module.exports = handler
