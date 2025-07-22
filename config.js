const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FcxF3Zba#V4EfxlNrxk0VdBrg28vT-f7-2DtRHrGC7qEUsk7538M"
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃bot name 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : Bot Name",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
