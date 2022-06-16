module.exports = {
  name: "atla",
  description: "Arena Sound",
  execute(client, message, args) {
    const { channel } = message.member.voice;
   
    if (!channel) {
      return message.channel.send("**❌・Herhangi Bir Ses Kanalında Bulunmalısın**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**❌・Atlayabileceğim Bir Şarkı Yok**");
    } 
    serverQueue.connection.dispatcher.end();
    message.channel.send("✅ **・Şarkı Geçildi**");
  }
};