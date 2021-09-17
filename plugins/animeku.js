let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}anime\nSilahkan ketik: ${usedPrefix}anime [query]\nContoh: ${usedPrefix}anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`, m)
    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
  await m.reply(global.wait)

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', 'nyaa', m)
            })
            .catch(() => {
                m.reply(`Ada emror toddd
Chat : @60199782326`)
            })
    } else {
        conn.reply(m.chat, `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}animeku untuk melihat list query`, m)
    }

}

handler.help = ['animeku <query>']
handler.tags = ['anime']
handler.command = /^(animeku)$/i

module.exports = handler
