aconst { zokou } = require("../framework/zokou");
const { format } = require("../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require("../set");

zokou({ 
    nomCom: "sc", 
    categorie: "General",
    reaction: "📂" 
}, async (dest, zk, commandeOptions) => {
    const { ms, repondre, mybotpic, nomAuteurMessage } = commandeOptions;
    
    try {
        const mode = s.MODE.toLowerCase() === "yes" ? "public" : "private";
        moment.tz.setDefault('Etc/GMT');
        const time = moment().format('HH:mm:ss');
        const date = moment().format('DD/MM/YYYY');

        const repoInfo = `
 𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃 

◈━━━━━━━━━━━━━━━━◈
│❒ Yo ${nomAuteurMessage}, here’s the lowdown on ZEZE source code! 📂
│❒ *🔗 𝐆𝐢𝐭𝐇𝐮𝐛*:❣️ 𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃 🌹
│❒ *📢 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥*: https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r
│❒ *🖥️ 𝐑𝐀𝐌 𝐔𝐬𝐚𝐠𝐞*: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
│❒ *🌐 𝐌𝐨𝐝�{e*: ${mode}
│❒ *📅 𝐃𝐚𝐭�{e*: ${date}
│❒ *⏰ 𝐓𝐢�{m𝐞 (GMT)*: ${time}
│❒ *👑 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬*: @255682937675 (𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃 ), @255760109840 (𝘡𝘌𝘡𝘌47 𝘛𝘌𝘊𝘏)
│❒ Powered by xh_clinton
◈━━━━━━━━━━━━━━━━◈
        `;

        const media = mybotpic();
        
        if (media.match(/\.(mp4|gif|jpeg|png|jpg)$/i)) {
            await zk.sendMessage(
                dest,
                { 
                    [media.match(/\.(mp4|gif)$/i) ? 'video' : 'image']: { url: media },
                    caption: repoInfo,
                    footer: `Hey ${nomAuteurMessage}! I'm 𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃 , created by 𝘡𝘌𝘡𝘌47 𝘛𝘌𝘊𝘏❣️`,
                    mentions: [
                        '255760109840@s.whatsapp.net',
                        '255682937675@s.whatsapp.net'
                    ],
                    gifPlayback: media.match(/\.gif$/i) ? true : undefined
                },
                { quoted: ms }
            );
        } else {
            await repondre(repoInfo);
        }
    } catch (error) {
        console.error("Error in sc command:", error);
        await repondre(`𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃 \n\n◈━━━━━━━━━━━━━━━━◈\n│❒ TOTAL BUST, ${nomAuteurMessage}! 𝔗𝔬𝔵𝔦𝔠 𝔐𝔇 crashed while fetching source code info: ${error.message} 😡 Try again or flop! 😣\n◈━━━━━━━━━━━━━━━━◈`);
    }
});
