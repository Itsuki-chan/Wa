function handler(m) {
  this.sendContactArray(m.chat, ['60199782326', 'CREATOR BOTZ', '994406631981', 'MY BOTZ', '0', '0', '0', '0'], m)
  this.send2Button(m.chat, `Hello *-* ,
Itu Owner gw

Mau tanya apa?`, 'BOTZ BY ITSUKI', 'SC BOT', '.sc', 'DONASI', '.donate', m)
}
handler.help = ['owner', 'creator', 'itsukibotowner']
handler.tags = ['info']

handler.command = /^(owner|creator|itsukibotowner)$/i

module.exports = handler
