const { zokou } = require("../framework/zokou");
const { downloadMediaMessage } = require("@whiskeysockets/baileys");

zokou(
  {
    nomCom: "vv",
    categorie: "General",
    reaction: "🗿",
  },
  async (dest, zk, commandeOptions) => {
    const { ms, msgRepondu, repondre, nomAuteurMessage } = commandeOptions;

    try {
      if (!msgRepondu) {
        return repondre(
          `𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃\n\n◈━━━━━━━━━━━━━━━━◈\n│❒ Yo ${nomAuteurMessage}, reply to a media message (image, video, or audio) first! 😡\n◈━━━━━━━━━━━━━━━━◈`
        );
      }

      let msg = msgRepondu.message;

      // Handle view-once message wrappers
      msg = msg?.viewOnceMessage?.message ||
            msg?.viewOnceMessageV2?.message ||
            msg?.viewOnceMessageV2Extension?.message ||
            msg;

      if (!msg) {
        return repondre(
          `𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃\n\n◈━━━━━━━━━━━━━━━━◈\n│❒ Yo ${nomAuteurMessage}, that message has no media! 😕\n◈━━━━━━━━━━━━━━━━◈`
        );
      }

      const messageType = Object.keys(msg)[0];

      if (!["imageMessage", "videoMessage", "audioMessage"].includes(messageType)) {
        return repondre(
          `𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃\n\n◈━━━━━━━━━━━━━━━━◈\n│❒ Yo ${nomAuteurMessage}, unsupported media type! Please reply to image, video, or audio only. 🚫\n◈━━━━━━━━━━━━━━━━◈`
        );
      }

      await repondre(
        `𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃\n\n◈━━━━━━━━━━━━━━━━◈\n│❒ Processing your media, ${nomAuteurMessage}! Please wait... ⏳\n◈━━━━━━━━━━━━━━━━◈`
      );

      const buffer = await downloadMediaMessage(msgRepondu, "buffer", {});
      if (!buffer) {
        return repondre(
          `𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃\n\n◈━━━━━━━━━━━━━━━━◈\n│❒ Failed to download media. Try again, ${nomAuteurMessage}! ⚠️\n◈━━━━━━━━━━━━━━━━◈`
        );
      }

      const mediaContent = {
        [messageType.replace("Message", "").toLowerCase()]: buffer,
        mimetype: msg[messageType].mimetype || (
          messageType === "imageMessage" ? "image/jpeg" :
          messageType === "videoMessage" ? "video/mp4" :
          "audio/ogg"
        ),
        ...(messageType === "audioMessage" ? { ptt: true } : {}),
        caption: msg[messageType].caption || `Media retrieved by Zeze MD`,
        footer: `Hey ${nomAuteurMessage}, this was handled by Zeze MD!`,
      };

      await zk.sendMessage(dest, mediaContent, { quoted: ms });

      await repondre(
        `𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃\n\n◈━━━━━━━━━━━━━━━━◈\n│❒ Success, ${nomAuteurMessage}! Media decrypted and sent back. ✅\n◈━━━━━━━━━━━━━━━━◈`
      );

    } catch (error) {
      console.error("vv command error:", error);
      await repondre(
        `𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃\n\n◈━━━━━━━━━━━━━━━━◈\n│❒ Error occurred: ${error.message} ❌\n│❒ Try again later, ${nomAuteurMessage}!\n◈━━━━━━━━━━━━━━━━◈`
      );
    }
  }
);
