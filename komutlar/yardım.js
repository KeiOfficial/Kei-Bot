const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Kullanıcı Komutları**", `k!avatarım = BOT Avatarınınızı Gösterir. \nk!yaz = BOT İstediğiniz Şeyi Yazar. \nk!sunucuresmi = BOT Sunucunun Resmini Atar. \nk!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nk!kullanıcıbilgim = BOT Sizin Bilgilerinizi Gösterir. `)
  .addField("**Yetkili Komutları**", `k!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nk!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nk!sustur = İstediğiniz Kişiyi Susturur. \nk!oylama = Oylama Açar. \nk!duyuru = Güzel Görünümlü Bir Duyuru Yayınlar \nk!kilit = Belirtilen Süre Boyunca Bot Kanalı Kilitler. \nk!temizle = Belirtilen Miktarda Mesaj Silinir.`)
  .addField("**Ana Komutlar**", "k!yardım = BOT Kendi Komutlarını Gösterir. \nk!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nk!ping = BOT Gecikme Süresini Söyler. \nk!davet = BOT Davet Linkini Atar. \nk!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Kei#0001** ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
