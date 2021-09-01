function handler(m) {
  m.reply('2in')
  this.send2Button(m.chat, `「 SET MODE 」

Mode : undefined`, 'Click Here', 'PUBLIC-MODE', '.on public', 'SELF-MODE', '.off public')
}
handler.help = ['set', 'mode']
handler.tags = ['owner']

handler.command = /^(set|mode)$/i
handler.owner = true

module.exports = handler