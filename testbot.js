const Discord = require("discord.js");
const testbot = new Discord.Client();

testbot.on('ready', () => {
  console.log(`Logged in as ${testbot.user.tag}!`);
});

testbot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

testbot.login(process.env.BOT_TOKEN);
