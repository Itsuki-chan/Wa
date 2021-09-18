let { MessageType, Presence } = require('@adiwajshing/baileys');
let chalk = require("chalk");
let handler = async(m, { conn, text }) => {
   
   if (!text) return m.reply('*Masukkan Nama Grup*')
   try{
    await m.reply(global.wait)
    await conn.updatePresence(m.chat, Presence.composing)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nBOT'))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Done create group *' + text + '*_\n\n*Group Name:* ' + text + '\n*ID Group:* ' + group.gid + '\n*Link Group:* ' + url + '\n\n*©Itsuki*')
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
handler.help = ['creategroup']
handler.tags = ['owner']
handler.command = /^((create|buat)(gc|grup|group))$/
handler.owner = true

module.exports = handler
