exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;

  if (channelID !== botChannel) {
    member.send("You need to join the voice channel first!").catch(console.error);
    return;
  }

  return true;
};

let config;

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}

exports.TOKEN = 'your-token-goes-here'
exports.PREFIX = '$'
exports.YOUTUBE_API_KEY = 'AIzaSyA11WHa7BnHwvTOLkkVHWoafbXDb_qoIE8'
exports.SOUNDCLOUD_CLIENT_ID = config ? config.SOUNDCLOUD_CLIENT_ID : process.env.SOUNDCLOUD_CLIENT_ID;
exports.MAX_PLAYLIST_SIZE = config ? config.MAX_PLAYLIST_SIZE : process.env.MAX_PLAYLIST_SIZE;
exports.PRUNING = config ? config.PRUNING : process.env.PRUNING;
exports.STAY_TIME = config ? config.STAY_TIME : process.env.STAY_TIME;
exports.DEFAULT_VOLUME = config ? config.DEFAULT_VOLUME: process.env.DEFAULT_VOLUME;
