const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong'
  if (!age) throw 'Umur tidak boleh kosong'
  age = parseInt(age)
  if (age > 70) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendButton(m.chat, `🌹 DAFTAR BERHASIL!

🔖 Nama: ${name}
🔖 Umur: ${age} tahun
🔖 SN: ${sn}

_Created By Adii_`.trim(), 'YAH ITU GUE PUNYA', 'MENU', '.menu', m)
  m.reply('Thank You For Register at Itsuki Bot')
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

