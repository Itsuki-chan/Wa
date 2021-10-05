function handler(m) {
  m.reply('Reading *menusim.js*')
  this.send2Button(m.chat, `*Itsuki Bot*

Please select below`, 'BETA BOTZ', 'Button Menu', '.?', 'All Menu', '.? all', m)
}
handler.command = /^(menu|help)$/i

module.exports = handler
