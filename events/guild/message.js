module.exports = (Discord, client, message) =>{
    const prefix = '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a=>a.aliases && a.aliases.includes(cmd));

    try{
        command.execute(client,message,args,cmd,Discord);
    }
    catch(err){
        message.reply("There was an error trying to execute this command! Note: only youtube search and youtube url are working || -queue (viewing the queue) is still in development and Using spotify links is still unavailable!! Available commands: -play -skip -stop");
        console.log(err);
    }
}