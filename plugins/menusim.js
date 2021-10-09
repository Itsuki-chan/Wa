let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => conn.send2ButtonLoc(m.chat, await (await fetch(picmenu)).buffer(), `
*_• ITSUKI BOTZ_*

*- O W N E R*
wa.me/60199782326

*- R E S T - A P I*
https://itsuki-api.herokuapp.com

*- S C R I P T  B O T*
https://github.com/Itsuki-chan/Wa

_Note: Jika button tidak muncul. Ketik ${usedPrefix}command
`.trim, '_Silahkan pilih dibawah_', 'BUTTON MENU', '.command', 'ALL MENU', '.? all', {quoted:m})
handler.help = ['menu', 'help']
handler.tags = ['info']
handler.command = ['menu', 'help']

module.exports = handler
