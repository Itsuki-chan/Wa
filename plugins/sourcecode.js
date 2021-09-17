function handler(m) {
  m.reply('Sc? Tanya @60199782326')
}
handler.help = ['sc', 'sourcecode', 'src']
handler.tags = ['info']

handler.command = /^(sc|sourcecode|src)$/i

module.exports = handler
