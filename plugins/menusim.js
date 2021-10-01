function handler(m) {
  this.send2Button(m.chat, `*Itsuki Bot*

Please select below`, 'BETA BOTZ', 'Button Menu', '.?', 'All Menu', '.? all', m)
}
handler.command = /^(menu|help)$/i

module.exports = handler
