let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  conn.sendButton(m.chat, `
[ *AWAY FROM KEYBOARD* ]

${conn.getName(m.sender)} IS NOW AFK${text ? ': ' + text : ''}
`, 'root@BOT-CHAN:~# :V', 'UDH SIAP AFK', '.gabut')
}
handler.help = ['afk [reason]']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler
