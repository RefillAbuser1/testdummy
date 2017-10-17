const Discord = require("discord.js");
const testbot = new Discord.Client();
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("yourtube-info");

var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

testbot.login(process.env.BOT_TOKEN);
