/*
Project Name : nima 
Creator      : nima King ( Mr Lord nima )
Repo         : https://github.com/Nimeshamadhushan/nima.git
Support      : wa.me/94726800969
*/

const config = require('../settings');
const { nima } = require('../nima');
const { runtime } = require('../lib/functions');

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

nima({
    pattern: "support",
    alias: ["follow", "links"],
    desc: "Display support and follow links",
    category: "main",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const uptimeFormatted = runtime(process.uptime());

        const message = `
╭─『 *nima SUPPORT* 』─
│ 👤 *Developer* : Mr nima 🇺🇬
│ ⚙️ *Mode*      : ${config.MODE}
│ ⏱️ *Uptime*    : ${uptimeFormatted}
│ 💠 *Prefix*    : ${config.PREFIX}
│ 🔖 *Version*   : ${config.version}
│ 🕰️ *Time*      : ${currentTime}
╰─────────────

📢 *Follow & Support nima XD* ${readMore}

🔔 *Official WhatsApp Channel*
https://whatsapp.com/channel/0029VbAnuvT6RGJ9Qrf3NJ0L

🎬 *YouTube Channel*
https://youtube.com/@nimatechhub-i9u

👨‍💻 *Developer Contact*
wa.me/256789966218?text=Hi%20nima,%20I%20need%20support!

>💡Powered By nima Tech Hub
        `.trim();

        await conn.sendMessage(from, {
            image: { url: 'https://i.postimg.cc/029xmZVt/IMG-20250801-003906-211.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419075720962@newsletter',
                    newsletterName: '🪀『 nima 』🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Support Cmd Error:", e);
        reply(`⚠️ An error occurred:\n${e.message}`);
    }
});
