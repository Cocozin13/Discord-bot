require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ["MESSAGE"]
}); //permite acessar o server/client

const BOT_PREFIX = '!';
const MOD_COMANDO = 'moderador-já!';

client.on('ready', () => {
  console.log(`ESTÁ PRONTINHO CARALHO!!!!`);
});

client.on("messageDelete", msg => {
  msg.channel.send('TENS ALGUMA COISA A ESCONDER JUVENIL!?');
})

client.on("message", msg => {
  if(msg.content === 'ping')
  msg.reply('Pong!')
});

client.on("message", msg => {
  if(msg.content === "food") {
    msg.channel.send("eat")
  }

  if(msg.content === 'Cocozin13 é lindo') {
    msg.react('❤');
    msg.react('👌');
    msg.react('💋');
  }

});

client.on("message", msg => {
  if (msg.content === `${BOT_PREFIX}${MOD_COMANDO}`) {
   modID(msg.member);
  }
});

function modID(member) {
  member.roles.add("850495625291235358")
}

client.login(process.env.BOT_TOKEN);