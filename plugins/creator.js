function handler(m) {
  this.sendContact(m.chat, '60199782326', 'Itsuki-san', m)
}
handler.help = ['owner', 'creator', 'itsukibotowner']
handler.tags = ['info']

handler.command = /^(owner|creator|itsukibotowner)$/i

module.exports = handler
