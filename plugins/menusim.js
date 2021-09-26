const faketroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2937,status: 1,surface : 1,message: 'Itsuki Botz',orderTitle: 'By Itsuki',thumbnail: back, sellerJid: '0@s.whatsapp.net'}}}

function handler(m) {
  m.reply('Please wait...')
  this.send2Button(m.chat, `*Itsuki Bot*

Please select below`, 'BETA BOTZ', 'Button Menu', '.?', 'All Menu', '.? all', { quoted: faketroli })
}
handler.command = /^(menu|help)$/i

module.exports = handler
