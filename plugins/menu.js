let levelling = require('../lib/levelling')
let { MessageType, Presence } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `*_ITSUKI • Bot_*

- *I N F O  B O T*
Base : Ariffb
Recode : Itsuki
Bot Name : Itsuki Botz
Bot Username : %me
Uptime : %uptime
Total Hit : %totalreg

- *D A T E  &  T I M E*
Time : %time
Date : %date
Day : %week

- *I N F O  U S E R*
Name : %name
Limit : %limit
Level : %level
Exp : %exp
Role : %role
`.trimStart(),
  header: '- *%category*',
  body: '%cmd %isLimit %isPremium',
  footer: '\n',
  after: `
Itsuki-Bot@^1.1.2
\`\`\`Created by Itsuki\`\`\`
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'sticker', 'kerangajaib', 'quotes', 'anime', 'nsfw', 'admin', 'grup', 'premium', 'music', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'M A I N',
    'game': 'G A M E',
    'xp': 'X P / L I M I T',
    'sticker': 'S T I C K E R',
    'kerang': 'K E R A N G',
    'quotes': 'Q U O T E S',
    'anime': 'A N I M E',
    'nsfw': 'N S F W',
    'admin': `A D M I N`,
    'group': 'G R O U P',
    'premium': 'P R E M I U M',
    'music': 'M U S I C'
    'internet': 'I N T E R N E T',
    'anonymous': 'A N O N Y M O U S  C H A T',
    'nulis': 'N U L I S',
    'downloader': 'D O W N L O A D E R',
    'tools': 'T O O L S',
    'fun': 'F U N',
    'database': 'D A T A B A S E',
    'vote': 'V O T E',
    'absen': 'A B S E N',
    'quran': 'A L  Q U R A N',
    'audio': 'A U D I O',
    'jadibot': 'S E S S I O N',
    'info': 'I N F O',
    '': 'Created By Itsuki',
  }
  if (teks == 'game') tags = {
    'game': 'G A M E'
  }
  if (teks == 'xp') tags = {
    'xp': 'X P / L I M I T'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'S T I C K E R'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'K E R A N G'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Q U O T E S'
  }
  if (teks == 'anime') tags = {
    'anime': 'A N I M E'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'N S F W'
  }
  if (teks == 'admin') tags = {
    'admin': `A D M I N`
  }
  if (teks == 'grup') tags = {
    'group': 'G R O U P'
  }
  if (teks == 'premium') tags = {
    'premium': 'P R E M I U M'
  }
  if (teks == 'music') tags = {
    'music': 'M U S I C'
  }
  if (teks == 'internet') tags = {
    'internet': 'I N T E R N E T'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'A N O N Y M O U S  C H A T'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'N U L I S'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'D O W N L O A D E R'
  }
  if (teks == 'tools') tags = {
    'tools': 'T O O L S'
  }
  if (teks == 'fun') tags = {
    'fun': 'F U N'
  }
  if (teks == 'database') tags = {
    'database': 'D A T A B A S E'
  }
  if (teks == 'vote') tags = {
    'vote': 'V O T E',
    'absen': 'A B S E N'
  }
  if (teks == 'quran') tags = {
    'quran': 'A L  Q U R A N'
  }
  if (teks == 'audio') tags = {
    'audio': 'A U D I O'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'S E S S I O N'
  }
  if (teks == 'info') tags = {
    'info': 'I N F O'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'IDK'
  }
  if (teks == 'owner') tags = {
    'owner': 'O W N E R',
    'host': 'H O S T',
    'advanced': 'E V A L'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `*L I S T - M E N U*`.trim(),
          "description": "‏‏‎Jika button tidak muncul...\nSilahkan ketik .menu all",
          "buttonText": "𝕮𝖑𝖎𝖈𝖐 𝕳𝖊𝖗𝖊",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": "G A M E  M E N U",
                  "description": "",
                  "rowId": ".? game"

                }, {
                  "title": "XP / L I M I T  M E N U",
                  "description": "",
                  "rowId": ".? xp"

                }, {
                  "title": "S T I C K E R",
                  "description": "",
                  "rowId": ".? sticker"
                }, {
                  "title": "K E R A N G  M E N U",
                  "description": "",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "Q U O T E S  M E N U",
                  "description": "",
                  "rowId": ".? quotes"
                }, {
                  "title": "A N I M E  M E N U",
                  "description": "",
                  "rowId": ".? anime"
                }, {
                  "title": "N S F W  M E N U",
                  "description": "",
                  "rowId": ".? nsfw"
                }, {
                  "title": "A D M I N  M E N U",
                  "description": "",
                  "rowId": ".? admin"
                }, {
                  "title": "G R O U P  M E N U",
                  "description": "",
                  "rowId": ".? grup"
                }, {
                  "title": "I N T E R N E T  M E N U",
                  "description": "",
                  "rowId": ".? internet"
                }, {
                  "title": "ANONYMOUS CHAT MENU",
                  "description": "",
                  "rowId": ".? anonymous"
                }, {
                  "title": "N U L I S  M E N U",
                  "description": "",
                  "rowId": ".? nulis"
                }, {
                  "title": "D O W N L O A D E R  M E N U",
                  "description": "",
                  "rowId": ".? downloader"
                }, {
                  "title": "T O O L S  M E N U",
                  "description": "",
                  "rowId": ".? tools"
                }, {
                  "title": "F U N  M E N U",
                  "description": "",
                  "rowId": ".? fun"
                }, {
                  "title": "D A T A B A S E  M E N U",
                  "description": "",
                  "rowId": ".? database"
                }, {
                  "title": "P R E M I U M",
                  "description": "",
                  "rowId": ".? premium"
                }, {
                  "title": "M U S I C",
                  "description": "",
                  "rowId": ".? music"
                }, {
                  "title": "V O T E  &  A B S E N  M E N U",
                  "description": "",
                  "rowId": ".? vote"
                }, {
                  "title": "A L  Q U R A N  M E N U",
                  "description": "",
                  "rowId": ".? quran"
                }, {
                  "title": "A U D I O  M E N U",
                  "description": "",
                  "rowId": ".? audio"
                }, {
                  "title": "S E S S I O N  M E N U",
                  "description": "",
                  "rowId": ".? jadibot"
                }, {
                  "title": "I N F O  M E N U",
                  "description": "",
                  "rowId": ".? info"
                }, {
                  "title": "O W N E R  M E N U",
                  "description": "",
                  "rowId": ".? owner"
                }, {
                  "title": "S C  B O T",
                  "description": "",
                  "rowId": ".sc"
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   conn.fakeReply(m.chat, `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} anime
    // ├ ${_p + command} nsfw
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpakategori
    // ├ ${_p + command} owner
    // └────`.trim(), '0@s.whatsapp.net', 'Menu', 'status@broadcast')
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.sendButtonLoc(m.chat, await (await fetch(back)).buffer(), text.trim(), 'CREATED BY ITSUKI', 'O W N E R', '.creator')
   } catch (e) {
    m.reply('Maaf menu error...\nChat Owner : @60199782326')
    throw e
  }
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(lagkoluso|\?|gabut)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? 'hh' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? 'mm' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? 'ss' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "PAGI"
  if (time >= 4) {
    res = "P"
  }
  if (time >= 12) {
    res = "Good afternoon 🏜️"
  }
  if (time >= 15) {
    res = "Good afternoon 🌅"
  }
  if (time >= 18) {
    res = "Good night 🌃"
  }
  return res
}
