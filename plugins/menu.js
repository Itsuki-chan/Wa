let levelling = require('../lib/levelling')
let { MessageType, Presence } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `Uptime : %uptime
Time : %time
Date : %date
Day : %week
Total Hit : %totalreg
Name : %name
Limit : %limit
Level : %level
Exp : %exp
Role : %role
`.trimStart(),
  header: '─「 %category 」─',
  body: '❏ %cmd %islimit %isPremium',
  footer: '\n',
  after: `Created with JavaScript`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  await conn.updatePresence(m.chat, Presence.recording)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'sticker', 'kerangajaib', 'quotes', 'anime', 'nsfw', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Main',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Sticker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'anime': 'Anime',
    'nsfw': 'NSFW (NOT SAFE FOR WORK)',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Audio Changer',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Created By Itsuki',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'NSFW'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Created By Itsuki'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Eval'
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
          "title": `「 Menu 」`.trim(),
          "description": "‏‏‎ ‏‏‎  ‏‏‎ ‏‏‎Created by Itsuki‎‎",
          "buttonText": "𝕮𝖑𝖎𝖈𝖐 𝕳𝖊𝖗𝖊 ?? 𝕳𝖒𝖒",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `All Menu`,
                  "description": "LIST ALL MENU",
                  "rowId": ".? all"
                }, {
                  "title": "Game Menu",
                  "description": "List Game Menu",
                  "rowId": ".? game"

                }, {
                  "title": "Exp Menu",
                  "description": "List XP Menu",
                  "rowId": ".? xp"

                }, {
                  "title": "Sticker Menu",
                  "description": "List Sticker Menu",
                  "rowId": ".? sticker"
                }, {
                  "title": "Kerang Ajaib Menu",
                  "description": "List Kerang Ajaib",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "Quotes Menu",
                  "description": "List Quotes Menu",
                  "rowId": ".? quotes"
                }, {
                  "title": "Anime Menu",
                  "description": "List Anime Menu😌",
                  "rowId": ".? anime"
                }, {
                  "title": "NSFW Menu",
                  "description": "LAH KOK ISO",
                  "rowId": ".? nsfw"
                }, {
                  "title": "Admin Menu",
                  "description": "Admin Group Only",
                  "rowId": ".? admin"
                }, {
                  "title": "Group Menu",
                  "description": "Group Only",
                  "rowId": ".? grup"
                }, {
                  "title": "Internet Menu",
                  "description": "List Internet Menu",
                  "rowId": ".? internet"
                }, {
                  "title": "Anonymous Chat Menu",
                  "description": "List Anonymous Chat",
                  "rowId": ".? anonymous"
                }, {
                  "title": "Nulis & Logo Menu",
                  "description": "list nulis",
                  "rowId": ".? nulis"
                }, {
                  "title": "Downloader Menu",
                  "description": "List Downloader Menu",
                  "rowId": ".? downloader"
                }, {
                  "title": "Tools Menu",
                  "description": "Tools Menu",
                  "rowId": ".? tools"
                }, {
                  "title": "For Fun Menu",
                  "description": "Fun Menu",
                  "rowId": ".? fun"
                }, {
                  "title": "Database Menu",
                  "description": "database?",
                  "rowId": ".? database"
                }, {
                  "title": "Vote & Absen Menu",
                  "description": "vothing hire",
                  "rowId": ".? vote"
                }, {
                  "title": "Al-Qur\'an Menu",
                  "description": "Sentiasa tobat bang:v",
                  "rowId": ".? quran"
                }, {
                  "title": "Audio Changer Menu",
                  "description": "Change your audio style:v",
                  "rowId": ".? audio"
                }, {
                  "title": "Baileys Menu",
                  "description": "Biar lo jadibot:v",
                  "rowId": ".? jadibot"
                }, {
                  "title": "Info Menu",
                  "description": "Info",
                  "rowId": ".? info"
                }, {
                  "title": "Owner Menu",
                  "description": "List Owner Menu",
                  "rowId": ".? owner"
                }, {
                  "title": "Ping",
                  "description": "speed bot",
                  "rowId": ".ping"
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
    await conn.sendButtonLoc(m.chat, await (await fetch(back)).buffer(), `*${me}*`, text.trim(), 'Ownerbot', ',owner', m)
    conn.updatePresence(m.chat, Presence.composing)
    conn.updatePresence(m.chat, Presence.available)
    conn.updatePresence(m.chat, Presence.composing)
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
  res = "Good morning 🌄"
  if (time >= 4) {
    res = "Good morning 🌄"
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
