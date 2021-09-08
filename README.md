<p align="center">
	<img src="https://a.uguu.se/dpedLJXD.jpeg" width="92%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Itsuki Bot</h1>


## This script is doesn't support Termux

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Itsuki-chan/Wa)

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/60199782326)

## For Rdp/Windows/Vps Users

* Install [`Git`](https://git-scm.com/downloads)
* Install [`NodeJS`](https://nodejs.org/en/download)
* Install [`Ffmpeg`](https://ffmpeg.org/download.html) (**Don't Forget to Add FFmpeg to the PATH environment variable**)
* Install [`ImageMagick`](https://imagemagick.org/script/download.php)

```cmd
git clone https://github.com/Itsuki-chan/Wa
cd Wa
npm i
npm update
node .
```

---------

## For Heroku Users

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git

---------

## Arguments for `node . [--options] [<session name>]`

#### Contoh: `node . --self --restrict --autoread`

### `--self`

Enable self mode (Ignore others)

### `--prefix <prefixes>`

* `prefixes` separated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through the website

### `--db <json-server-url>`

Use external db instead of local db, 
Example Server `https://json-server.nurutomo.repl.co/`
Code: [Code](https://repl.it/@Nurutomo/json-server)

`node . --db 'https://json-server.nurutomo.repl.co/'`

The server must have specifications like this

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small unicode qr doesn't support

### `--restrict`

Activate restricted plugins (which may cause your number to be **blocked** if used too often)

* Group Administration `add, kick, promote, demote`

### `--img`

Enable image checker via terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--nyimak`

No bots, just print the received message and add the user to the database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

 [![ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) | [![Adiixyz](https://github.com/Adiixyz.png?size=100)](https://github.com/Adiixyz)
----|----
[ariffb](https://github.com/ariffb25) | [Adiixyz](https://github.com/Adiixyz)
 Author / Creator | Rewriter
