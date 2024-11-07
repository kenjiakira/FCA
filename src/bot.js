
const login = require("fca-unofficial")
const fs = require("fs")
const path = require("path")
const log = require("./utils/log")

if (!fs.existsSync(path.join(__dirname, 'config.json'))) return log("Không tìm thấy file config.json trong dự án", "error")
if (!fs.existsSync(path.join(__dirname, '..', '.env'))) return log("Không tìm thấy thư mục cấu hình dự án (.env)", "error")

var client = {
    commands: new Map(),
    events: new Map(),
    noprefix: new Map(),
    onload: new Array(),
    reply: new Map(),
    reaction: new Map(),

    config: JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')))
}

const appstate = {
    appState: JSON.parse(fs.readFileSync(path.join(__dirname, client.config.APPSTATE_PATH), "utf-8"))
}

const options = { forceLogin: true, listenEvents: true, selfListen: true, updatePresence: true, autoMarkDelivery: true, autoMarkRead: true, userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Mobile Safari/537.36' }

login(appstate, options, (err, api) => {
    if (err) return console.error(err)
})