const fs = require("fs")
const path = require("path")


module.exports = (client) => {
    const dirPath = path.join(__dirname, '..','modules/events')
    const list = fs.readdirSync(dirPath)
    
    var errorCount = []

    list.forEach(file=>{
        const command = require(dirPath+`/${file}`)
        const name = command.config.name

        if(!name) return errorCount.push(name)
        if(!command.run) return errorCount.push(name)

        if(command.onload) client.onload.push(command.onload)

        client.commands.set(name, command.run)
    })

    
}