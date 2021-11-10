const Discord = require("discord.js")
const robot = new Discord.Client();
const config = require("./config.json");

robot.login(config.token);

robot.on('ready', () => {
        robot.user.setActivity(config.prefix + `help — помощь и информация`);
});

robot.on("message", (message) => {
        if(message.content.startsWith(config.prefix + "help")) {
                const embed = new Discord.MessageEmbed()
                .setTitle(":star: Помощь")
                .setDescription("Данный бот поможет вам избавится от людей спамящих подобными сообщеними \n Вам не надо ничего настраивать! Бот уже работает как только вы его добавили в свою гильдию.")
                .setImage("https://cdn.discordapp.com/attachments/538473852427304982/907674939459534858/unknown.png")
                message.channel.send({embed})
        }
});