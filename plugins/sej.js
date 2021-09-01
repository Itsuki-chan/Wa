function handler(m) {
  m.reply('pantek')
  this.send2Button(m.chat, `「 WELCOME 」

To Use welcome`, 'Click Here Bang. Kalo Gak Gw Tembak Lo Aowkaowk', 'WELCOME ON', '.enable welcome', 'WELCOME OFF', '.disable welcome')
}
handler.help = ['welcome']
handler.tags = ['owner']

handler.command = /^(welcome)$/i

module.exports = handler