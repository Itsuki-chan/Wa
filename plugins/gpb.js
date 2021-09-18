let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter text'
  m.reply(global.wait)
  let res = `https://api.zeks.xyz/api/gplaybutton?text=${response}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'gplaybutton.jpg', `Nihh Kak`, m, false)
}
handler.help = ['gplaybutton'].map(v => v + ' <teks>')
handler.tags = ['premium']
handler.command = /^(gplaybutton)$/i
handler.premium = true

module.exports = handler
