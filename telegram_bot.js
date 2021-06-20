import { Telegraf } from 'telegraf'
import { google_function } from './auth_google.js'

const bot = new Telegraf('1882211651:AAGOTrBDx5Wmjx_CFQTFkRUKTRIRJx4qsFU');
bot.start((ctx) => ctx.reply('Welcome')) //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('fdgd')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => google_function) // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.launch() // запуск бота