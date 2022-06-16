const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
   
  name: "yardım",
  description: "Arena Sound", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed().setTitle('Arena Sound')
                      .setDescription(
    `
\`${ayarlar.PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır** \n
\`${ayarlar.PREFIX}atla\` : **Sıradaki Şarkıyı Atlar**\n
\`${ayarlar.PREFIX}durdur\` : **Şarkıyı Durdurur**\n
\`${ayarlar.PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir**\n
\`${ayarlar.PREFIX}sıra\` : **Şarkı Sırasını Gösterir**\n
\`${ayarlar.PREFIX}şarkı\` : **Oynatılan Şarkının Adını Gösterir**\n
`)
                       .setColor("ffc300")
                      )    
}
} 