function handler(m) {
  this.sendContact(m.chat, '60199782326', 'Owner Itsuki', m)
  this.sendContact(m.chat, '17624757650', 'Owner Itsuki2', m)
  this.fakeReply(m.chat, `Ini owner gw ya ${this.getName(m.sender}`, '17624757650@s.whatsapp.net', 'OWNER BOT', 'status@broadcast')
  this.send2Button(m.chat, `Yo, ${this.getName(m.sender}`, 'Mau Apa Sama Owner Gw?', 'SC BOT', '.src', 'Donasi', '.donate')
}
handler.help = ['owner', 'creator', 'itsukibotowner']
handler.tags = ['info']

handler.command = /^(owner|creator|itsukibotowner)$/i

module.exports = handler
