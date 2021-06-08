const { VK } = require('vk-io');
const { HearManager } = require("@vk-io");

const vk = new VK({
	token: 'ae050f1c2c2c68106e3fdd2925f3fbf58b25c4ea842f5c5568301221676c17e419c29e7dfedadad25ca86'
})
const bot = new HearManager();

vk.updates.on('message_new', bot.middleware);


bot.hear(/пися/i, msg  => {
	msg.send('Привет, твой id - ${msg.senderId}');
})

vk.updates.start().catch(console.error);