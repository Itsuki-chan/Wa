function handler(m) {
  m.reply('pantek')
  this.send2Button(m.chat, `「 WELCOME 」`, 'pilih disini', 'WELCOME ON', '.enable welcome', 'WELCOME OFF', '.disable welcome')
}
handler.help = ['welcome']
handler.tags = ['owner']

handler.command = /^(welcome)$/i

module.exports = handler
