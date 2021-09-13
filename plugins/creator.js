function handler(m) {
  this.sendContact(m.chat, '60199782326', 'itsuki-chan', m)
  this.fakeReply(m.chat, `Ini owner gw ya bwang`, '0@s.whatsapp.net', 'OWNER BOT', 'status@broadcast')
  m.reply('nih nomor whatsapp @0 :v')
}
handler.help = ['owner', 'creator', 'itsukibotowner']
handler.tags = ['info']

handler.command = /^(owner|creator|itsukibotowner)$/i

module.exports = handler
