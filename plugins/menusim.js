function handler(m) {
  m.reply('Please wait...')
  this.send2Button(m.chat, `*Itsuki Bot*

Please select below`, 'root@Itsukibotz:~#', 'Button Menu', '.?', 'All Menu', '.? all', m)
}
handler.command = /^(menu|help)$/i

module.exports = handler
