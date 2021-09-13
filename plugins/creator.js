function handler(m) {
  this.sendContact(m.chat, '60199782326', 'Owner Itsuki', m)
  this.fakeReply(m.chat, `Ini owner gw ya ${this.getName(m.sender}`, '0@s.whatsapp.net', 'OWNER BOT', 'status@broadcast')
}
handler.help = ['owner', 'creator', 'itsukibotowner']
handler.tags = ['info']

handler.command = /^(owner|creator|itsukibotowner)$/i

module.exports = handler
