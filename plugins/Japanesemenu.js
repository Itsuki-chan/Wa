let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `ボット名 : %me
あなたの名前 : %name
オーナー : wa.me/60199782326
稼働時間 : %uptime
制限 : %limit
プレフィックス : マルチ
XP : %exp
ユーザー: %totalreg
役割 : %role
時間 : %time
日にち : %date
日 : %week
`.trimStart(),
  header: '⋮☰「 ```%category``` 」',
  body: '▷ %cmd %islimit ',
  footer: '\n',
  after: `いつき作成`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'main',
    'game': 'game',
    'xp': 'exp & limit',
    'sticker': 'sticker',
    'kerang': 'magic shells',
    'quotes': 'quotes',
    'admin': `admin ${global.opts['restrict'] ? '' : '(disabled)'}`,
    'group': 'group',
    'premium': 'premium',
    'internet': 'internet',
    'anonymous': 'anonymous chat',
    'nulis': 'write',
    'downloader': 'downloader',
    'tools': 'tools',
    'fun': 'fun',
    'database': 'database',
    'vote': 'voting',
    'absen': 'absen',
    'quran': 'Al Qur\'an',
    'audio': 'audio changer',
    'jadibot': 'baileys',
    'info': 'info',
    '': 'no category',
  }
  if (teks == 'game') tags = {
    'game': 'game'
  }
  if (teks == 'xp') tags = {
    'xp': 'exp & limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'sticker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'magic shells'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `admin ${global.opts['restrict'] ? '' : '(disable)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'group'
  }
  if (teks == 'premium') tags = {
    'premium': 'premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'anonymous chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'write'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'fun'
  }
  if (teks == 'database') tags = {
    'database': 'database'
  }
  if (teks == 'vote') tags = {
    'vote': 'voting',
    'absen': 'absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'audio changer'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'baileys'
  }
  if (teks == 'info') tags = {
    'info': 'info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'no category'
  }
  if (teks == 'owner') tags = {
    'owner': 'owner',
    'host': 'host',
    'advanced': 'eval'
  }



  try {
    await conn.fakeReply(m.chat, '[❗] *いつきのメニューが処理されるのを待つ*', '0@s.whatsapp.net', `${ucapan()} , ${conn.getName(m.sender)}`, 'status@broadcast')
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['パヒン', '月曜日', '賃金', 'クリウォン', '法律'][Math.floor(d / 84600000) % 5]
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
          "title": `*ITSUKI BOT*\n\n稼働時間 : ${uptime}\n名前 : ${name}`.trim(),
          "description": "プレフィックス：マルチ",
          "buttonText": "ここをクリック >_<",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `すべてのメニュー`,
                  "description": "\n\nList All Menu",
                  "rowId": ".? all"
                }, {
                  "title": "ゲームメニュー",
                  "description": "\n\nList Game Menu",
                  "rowId": ".? game"

                }, {
                  "title": "Exp メニュー",
                  "description": "\n\nList XP Menu",
                  "rowId": ".? xp"

                }, {
                  "title": "ステッカーメニュー",
                  "description": "\n\nList Sticker Menu",
                  "rowId": ".? stiker"
                }, {
                  "title": "マジックシェルメニュー",
                  "description": "\n\nList magic shells",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "引用メニュー",
                  "description": "\n\nQuotes",
                  "rowId": ".? quotes"
                }, {
                  "title": "管理メニュー",
                  "description": "\n\nAdmin Group Only",
                  "rowId": ".? admin"
                }, {
                  "title": "グループメニュー",
                  "description": "\n\nGroup Only",
                  "rowId": ".? grup"
                }, {
                  "title": "インターネットメニュー",
                  "description": "\n\nList Internet Menu",
                  "rowId": ".? internet"
                }, {
                  "title": "Anonymous Chat メニュー",
                  "description": "\n\nAnonymous Chat",
                  "rowId": ".? anonymous"
                }, {
                  "title": "メニューを書く",
                  "description": "\n\nwrite here:v",
                  "rowId": ".? nulis"
                }, {
                  "title": "ダウンローダーメニュー",
                  "description": "\n\nList Downloader Menu",
                  "rowId": ".? downloader"
                }, {
                  "title": "ツールメニュー",
                  "description": "\n\nTools Menu",
                  "rowId": ".? tools"
                }, {
                  "title": "For Fun メニュー",
                  "description": "\n\nFun Menu",
                  "rowId": ".? fun"
                }, {
                  "title": "データベースメニュー",
                  "description": "\n\nAlias of storage",
                  "rowId": ".? database"
                }, {
                  "title": "Vote & Absen メニュー",
                  "description": "\n\nidk:v",
                  "rowId": ".? vote"
                }, {
                  "title": "Al-Qur\'an Menu",
                  "description": "\n\nSentiasa tobat bang:v",
                  "rowId": ".? quran"
                }, {
                  "title": "音声変更メニュー",
                  "description": "\n\nChange your audio style:v",
                  "rowId": ".? audio"
                }, {
                  "title": "Baileys メニュー",
                  "description": "\n\nidk:v",
                  "rowId": ".? jadibot"
                }, {
                  "title": "メニュー情報",
                  "description": "\n\nInfo",
                  "rowId": ".? info"
                }, {
                  "title", "no category"
                  "description": "",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "オーナーメニュー",
                  "description": "\n\nList Owner Menu",
                  "rowId": ".? owner"
                }, {
                  "title": "インドネシア料理 ( Indonesia menu )",
                  "description": "\nback to Menu",
                  "rowId": ".gabut"
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
    // wabusinessを利用する場合はこちらをご利用ください
    //   m.reply(`
    // ┌〔 メニューリスト 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
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
    // └────  
    //     `.trim()
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
    await conn.send3ButtonLoc(m.chat, await (await fetch(back)).buffer(), `「 ITSUKI BOT 」

自分, ${name}
${ucapan()}
⋮☰ リストメニュー`, text.trim(), 'オーナー', '.owner', 'ソースコードボット', '.sc', '⋮☰ メニューに戻る', '.japanesemenu', m)
  } catch (e) {
    conn.sendButton(m.chat, '申し訳ありませんが、メニューに誤りがあります', 'どうしてエラーなの？', 'チャットの所有者', 'zowner', m)
    throw e
  }
}
handler.help = ['japanesemenu']
handler.tags = ['main']
handler.command = /^(japanesemenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join('.')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "おはよう 🌄"
  if (time >= 4) {
    res = "おはよう 🌄"
  }
  if (time >= 12) {
    res = "こんにちは 🏜️"
  }
  if (time >= 15) {
    res = "こんにちは 🌅"
  }
  if (time >= 18) {
    res = "おやすみなさい 🌃"
  }
  return res
}
