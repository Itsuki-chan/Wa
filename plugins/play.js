const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} california`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
「 *P L A Y  Y O U T U B E* 」

*T I T L E:* ${title}
*AUDIO FILESIZE:* ${filesizeF}
*VIDEO FILESIZE:* ${yt2.filesizeF}
*Y2MATE SERVER:* ${usedServer}
*YOUTUBE URL:* ${vid.url}

_Please wait until it's finished_
`.trim(), 'Ｃｒｅａｔｅｄ Ｗｉｔｈ ❤️ ｂｙ Ｉｔｓｕｋｉ', `Audio ( ${filesizeF} )`, `.yta ${vid.url}`, `Video ( ${yt2.filesizeF} )`, `.yt ${vid.url}`)
}
handler.help = ['play', 'p', 'play2'].map(v => v + ' <Query>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler

