# NOTE!!!
THIS PROJECT WILL NOT MAINTENED BY THE OWNER
SO PULL REQS/ISSUES WILL BE IGNORED

<h1 align="center">ITSUKI BOT</h1>



<a href="https://github.com/Itsuki-chan/Wa/network/members"><img title="forks" src="https://img.shields.io/github/forks/Itsuki-chan/Wa?label=forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Itsuki-chan/Wa/watchers"><img title="watchers" src="https://img.shields.io/github/watchers/Itsuki-chan/Wa?label=watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Itsuki-chan/Wa/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Itsuki-chan/Wa?label=stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Itsuki-chan/Wa/issues"><img title="Issues" src="https://img.shields.io/github/issues/Itsuki-chan/Wa?label=issues&color=success&style=flat-square"></a>
<a href="https://github.com/Itsuki-chan/Wa/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/Itsuki-chan/Wa?label=issue%20closed&color=red&style=flat-square"></a>
<a href="https://github.com/Itsuki-chan/Wa/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/Itsuki-chan/Wa?label=pull%20request&color=success&style=flat-square"></a>
<a href="https://github.com/Itsuki-chan/Wa/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/Itsuki-chan/Wa?label=pr%20closed&color=red&style=flat-square"></a>

## DEPLOY TO HEROKU
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Itsuki-chan/Wa)

## WHATSAPP BOT
[![WhatsApp](https://img.shields.io/badge/WhatsApp%20Bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/+6283169900452)

# Install
_________

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

# if you want edit
* Edit owner in this  [section](https://github.com/Ccyynisa/Wa/blob/38638d6e269d105bce96f521ee9b6bfe8927953b/config.js)
* Edit apikey in this [section](https://github.com/Itsuki-chan/Wa/blob/aac6518cf05fad0e9ff5497933a5481e6ed53f7b/config.js#L19)
* Edit packname in this [section](https://github.com/Ccyynisa/Wa/blob/38638d6e269d105bce96f521ee9b6bfe8927953b/config.js#L31L31)
* Edit author in this [section](https://github.com/Ccyynisa/Wa/blob/38638d6e269d105bce96f521ee9b6bfe8927953b/config.js#L32L32)

# Get Apikeys
* Get Xteam Apikey at this [section](https://api.xteam.xyz)
----

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
Example Server `https://json-server.adiixyz.repl.co/`
* Code: [Code](https://repl.it/@Nurutomo/json-server)

`node . --db 'https://json-server.adiixyz.repl.co/'`

The server must have specifications like this

#### POST

```http
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small unicode qr doesn't support

### `--restrict`

Activate restricted plugins (which may cause your number to be **banned** if used too often)

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
