module.exports = {
  name: "sıra",
  description: "Arena Sound",
  execute: (client, message, args) => {
     
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**❌・Herhangi Bir Ses Kanalında Bulunmalısın**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**❌・Kuyrukta Herhangi Bir Şarkı Bulamadım**");
    } 
 
    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};