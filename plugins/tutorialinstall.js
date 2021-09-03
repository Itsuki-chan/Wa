let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'tutorial')).buffer(), `
「 Tutorial Install Bot 」
- _Note : Sc ini tidak support termux_

◉ Deploy To Heroku : https://heroku.com/deploy?template=https://github.com/Itsuki-chan/Wa
◉ Install In (Windows or RDP)
- Install these packages
  - Git : https://git-scm.com/downloads
  - NodeJs : https://nodejs.org/en/download
  - ImageMagick : https://imagemagick.org/script/download.php ( Jangan Lupa Add FFMPEG )
- Open Run ( Win + R ) and Type cmd
  - Then Type
\`\`\`> git clone https://github.com/Itsuki-chan/Wa.git
> cd Wa
> npm install
Run :
> node .
\`\`\`
`.trim(), '© Itsuki', 'Back To Menu', '.gabut')
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = ['tutorial']

module.exports = handler
