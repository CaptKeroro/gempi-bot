const TeleBot = require('telebot');
const bot = new TeleBot('5083599076:AAHZ89l_aMiXPbJW2K7AtX7XHFrHzWcZ1n4');

bot.on(['/start'], (msg) => msg.reply.text('Hai beb'));
bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
  });
  
bot.start();