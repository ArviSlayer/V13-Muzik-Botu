module.exports = {
  name: "durdur",
  description: "Arena Sound",
  execute (client, message, args) {
     
  const { channel } = message.member.voice;
    if (!channel) {
    
      return message.channel.send("**❌・Herhangi Bir Ses Kanalında Bulunmalısın**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**❌・Duraklatabileceğim Bir Şarkı Çalmıyor**");
    }
    if(!serverQueue.playing) return message.channel.send('**❌・Şarkılar Zaten Duraklatılmış**')
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      return message.channel.send("✅ **・Oynatılan Şarkı Duraklatıldı**")
  }  
  }
}