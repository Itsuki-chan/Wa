function handler(m) {
  this.send2Button(m.chat, `*ITSUKIBOTZ*

Silahkan pilih ya kak`, 'root@Itsukibotz:~#', 'Button Menu', '.?', 'All Menu', '.? all', m)
}
handler.command = /^(menu|help)$/i

module.exports = handler
