function handler(m) {
  m.reply(`[ GET PREMIUM ]

mau premium?

bayar
Rp 10k = via saweria/pulsa

Saweria : https://saweria.co/itsukichan
Pulsa : 60199782326

chat @60199782326 untuk beli:v`)
}
handler.help = ['getprem']
handler.tags = ['info']

handler.command = /^(getprem)$/i

module.exports = handler
