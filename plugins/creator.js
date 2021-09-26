function handler(m) {
  this.sendContactArray(m.chat, ['60199782326', 'Itsuki-chan', '0', '0', '0', '0', '0', '0'], m)
  .then(() => this.sendMessage(m.chat, 'Nih kontak ownerku', text, m))
}
handler.help = ['owner', 'creator', 'itsukibotowner']
handler.tags = ['info']

handler.command = /^(owner|creator|itsukibotowner)$/i

module.exports = handler
