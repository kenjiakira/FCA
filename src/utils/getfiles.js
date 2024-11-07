const fs = require("fs")
const path = require("path")

module.exports.getAllCommandsName = () => {
    return fs.readdirSync(path.join(__dirname, '..', 'modules/commands'), "utf-8")
}

module.exports.getAllEventsName = () => {
    return fs.readdirSync(path.join(__dirname, '..', 'modules/events'), "utf-8")
}

module.export.getCommandConfig = (name = new String()) => {
    const filePath = path.join(__dirname, '..', 'modules/commands')
    const filename = name.includes(".js") ? name : name + ".js"

    const command = filePath+`/${filename}`

    return command.config
}

module.export.getEventConfig = (name = new String()) => {
    const filePath = path.join(__dirname, '..', 'modules/events')
    const filename = name.includes(".js") ? name : name + ".js"

    const command = filePath+`/${filename}`

    return command.config
}