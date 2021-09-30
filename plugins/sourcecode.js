function handler(m) {
  m.reply(`Sc Bot

Bot ini menggunakan sc : github.com/Itsuki-chan/Wa
Jangan lupa kasih star.

@Adiixyz~`)
}
handler.help = ['sc', 'sourcecode', 'src']
handler.tags = ['info']

handler.command = /^(sc|sourcecode|src)$/i

module.exports = handler
