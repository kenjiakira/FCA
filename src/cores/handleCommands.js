const fs = require("fs")
const path = require("path")


module.exports = (client) => {
    const dirPath = path.join(__dirname, '..','modules/commands')
    const list = fs.readdirSync(dirPath)
    
    var errorCount = []

    list.forEach(file=>{
        const command = require(dirPath+`/${file}`)
        const name = command.config.name

        if(!name) return errorCount.push(name)
        if(!command.run) return errorCount.push(name)

        if(command.onload) client.onload.push(command.onload)
        if(command.noprefix) client.noprefix.set(name,command.noprefix)
        if(command.reply) client.reply.set(name,command.reply)
        if(command.reaction) client.reaction.set(name,command.reaction)

        client.commands.set(name, command.run)
    })

    
}