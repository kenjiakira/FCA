const { logtext } = require("../utils/log")

function handleMessage(api, event, client) {
    const args = event.body.trim().split(" ")
    const noprefixFristArgs = args[0].replace(client.config.PREFIX,"")

    if(args[0].charAt(0) === client.config.PREFIX) {
        if(!client.commands.get(noprefixFristArgs)) return api.sendMessage(logtext("Không tìm thấy câu lệnh bạn vừa nhập", "warn"), event.threadID, event.messageID)
        return client.commands.get(noprefixFristArgs)(api, event, args, client)
    }
    if(client.noprefix.get(noprefixFristArgs)) return client.noprefix.get(noprefixFristArgs)(api, event, args, client)
}

module.exports = (client, api) => {
    client.onload.forEach(item => item(api, client))
    api.listenMqtt((err, event) => {
        if (err) return console.error(err)

        client.events.forEach((value, key) => value(api, event, client))

        switch (event.type) {
            case "message":
                handleMessage(api, event, client)
                break;
            case "message_reply":
                handleMessageReply()
                break;
            case "message_reaction":
                handleMessageReaction()
                break;
        }
    })
}