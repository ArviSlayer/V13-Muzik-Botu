module.exports = {
  name: "devam", 
  description: "Arena Sound",
  execute (client, message, args) {
     
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**❌・Herhangi Bir Ses Kanalında Bulunmalısın**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('**❌・Oynatılan Bir Mevcut Şarkı Bulunmuyor**')
    if(serverQueue.playing) return message.channel.send(`❌・Durdurulmuş Bir Şarkı Yok`)
     
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("✅ **・Duraklatılan Şarkı Devam Ettiriliyor**") 
 } 
    
    message.channel.send("**❌・Duraklatılan Bir Şarkı Yok**")
    
  }
}