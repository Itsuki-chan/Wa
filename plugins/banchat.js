let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Bot successful muted in this group')
  // } else m.reply('There is a host number here...')
}
handler.help = ['mute']
handler.tags = ['owner']
handler.command = /^mute$/i
handler.owner = true

module.exports = handler
