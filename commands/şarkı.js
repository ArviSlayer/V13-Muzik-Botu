module.exports = {
  name: "şarkı",
  description: "Arena Sound",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**❌・Herhangi Bir Ses Kanalında Bulunmalısın**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
    if (!serverQueue) {
      return message.channel.send("**❌・Şu Anda Herhangi Bir Şarkı Oynatmıyorum**");
    }
    message.channel.send(serverQueue.songs[0].title + ' - **✅・Şu anda Oynatılan Şarkı**')

    
    
    
  }
}