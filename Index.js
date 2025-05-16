//Tech mob project.....developed by Toputech/Topu art 

'use strict';

var __createBinding = this && this.__createBinding || (Object.create ? function (_0x46d0ab, _0xb6fca0, _0x332bf9, _0x37cdd0) {
  if (_0x37cdd0 === undefined) {
    _0x37cdd0 = _0x332bf9;
  }
  var _0x5c89a8 = Object.getOwnPropertyDescriptor(_0xb6fca0, _0x332bf9);
  if (!_0x5c89a8 || ('get' in _0x5c89a8 ? !_0xb6fca0.__esModule : _0x5c89a8.writable || _0x5c89a8.configurable)) {
    _0x5c89a8 = {
      'enumerable': true,
      'get': function () {
        return _0xb6fca0[_0x332bf9];
      }
    };
  }
  Object.defineProperty(_0x46d0ab, _0x37cdd0, _0x5c89a8);
} : function (_0x50b754, _0x147fcd, _0x23df13, _0x29d13e) {
  if (_0x29d13e === undefined) {
    _0x29d13e = _0x23df13;
  }
  _0x50b754[_0x29d13e] = _0x147fcd[_0x23df13];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x1892c6, _0x262ac2) {
  Object.defineProperty(_0x1892c6, "default", {
    'enumerable': true,
    'value': _0x262ac2
  });
} : function (_0x35ec67, _0x414930) {
  _0x35ec67['default'] = _0x414930;
});
var __importStar = this && this.__importStar || function (_0x15b46f) {
  if (_0x15b46f && _0x15b46f.__esModule) {
    return _0x15b46f;
  }
  var _0x4d4f45 = {};
  if (_0x15b46f != null) {
    for (var _0x1cf0b0 in _0x15b46f) if (_0x1cf0b0 !== "default" && Object.prototype.hasOwnProperty.call(_0x15b46f, _0x1cf0b0)) {
      __createBinding(_0x4d4f45, _0x15b46f, _0x1cf0b0);
    }
  }
  __setModuleDefault(_0x4d4f45, _0x15b46f);
  return _0x4d4f45;
};
var __importDefault = this && this.__importDefault || function (_0x1b5dba) {
  return _0x1b5dba && _0x1b5dba.__esModule ? _0x1b5dba : {
    'default': _0x1b5dba
  };
};
Object.defineProperty(exports, '__esModule', {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
let fs = require('fs-extra');
let path = require('path');
const FileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./bdd/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./bdd/antibot");
let evt = require(__dirname + "/framework/zokou");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./bdd/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./bdd/onlyAdmin");
let {
  reagir
} = require(__dirname + "/framework/app");
var session = conf.session.replace(/ALONE-MD;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/auth/creds.json")) {
      console.log("connected successfully...");
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/auth/creds.json") && session != 'zokk') {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), 'utf8');
    }
  } catch (_0x3ba580) {
    console.log("Session Invalid " + _0x3ba580);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
setTimeout(() => {
  async function _0x4b4ee2() {
    0x0;
    const {
      version: _0x1aed71,
      isLatest: _0x5902d7
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0xf49188,
      saveCreds: _0xae33be
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    0x0;
    const _0x301047 = {
      'version': _0x1aed71,
      'logger': pino({
        'level': 'silent'
      }),
      'browser': ["ALONE-MD", "safari", '1.0.0'],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0xf49188.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0xf49188.keys, logger)
      },
      'getMessage': async _0x3ac2cb => {
        if (store) {
          const _0x128b91 = await store.loadMessage(_0x3ac2cb.remoteJid, _0x3ac2cb.id, undefined);
          return _0x128b91.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x394ce2 = baileys_1["default"](_0x301047);
    store.bind(_0x394ce2.ev);
    const _0x16a8dd = new Map();
    function _0x1c00eb(_0x11cdcc) {
      const _0x51e599 = Date.now();
      if (!_0x16a8dd.has(_0x11cdcc)) {
        _0x16a8dd.set(_0x11cdcc, _0x51e599);
        return false;
      }
      const _0x269769 = _0x16a8dd.get(_0x11cdcc);
      if (_0x51e599 - _0x269769 < 0xbb8) {
        return true;
      }
      _0x16a8dd.set(_0x11cdcc, _0x51e599);
      return false;
    }
    const _0x47f3ca = new Map();
    async function _0x5b6bce(_0x533f07, _0xa85e7e) {
      if (_0x47f3ca.has(_0xa85e7e)) {
        return _0x47f3ca.get(_0xa85e7e);
      }
      try {
        const _0x12b108 = await _0x533f07.groupMetadata(_0xa85e7e);
        _0x47f3ca.set(_0xa85e7e, _0x12b108);
        setTimeout(() => _0x47f3ca["delete"](_0xa85e7e), 0xea60);
        return _0x12b108;
      } catch (_0x1de887) {
        if (_0x1de887.message.includes("rate-overlimit")) {
          await new Promise(_0x5e895b => setTimeout(_0x5e895b, 0x1388));
        }
        return null;
      }
    }
    process.on("uncaughtException", _0x170029 => {});
    process.on("unhandledRejection", _0x1ff655 => {});
    _0x394ce2.ev.on("messages.upsert", async _0x1a3e21 => {
      const {
        messages: _0x15fc8a
      } = _0x1a3e21;
      if (!_0x15fc8a || _0x15fc8a.length === 0x0) {
        return;
      }
      for (const _0x50eeab of _0x15fc8a) {
        if (!_0x50eeab.message) {
          continue;
        }
        const _0x114609 = _0x50eeab.key.remoteJid;
        if (_0x1c00eb(_0x114609)) {
          continue;
        }
      }
    });
    _0x394ce2.ev.on('groups.update', async _0x6ecd80 => {
      for (const _0x256f26 of _0x6ecd80) {
        const {
          id: _0xe7dc83
        } = _0x256f26;
        if (!_0xe7dc83.endsWith("@g.us")) {
          continue;
        }
        await _0x5b6bce(_0x394ce2, _0xe7dc83);
      }
    });
    _0x394ce2.ev.on("messages.upsert", async _0xbd915d => {
      const {
        messages: _0x385d81
      } = _0xbd915d;
      if (!_0x385d81 || _0x385d81.length === 0x0) {
        return;
      }
      for (const _0x5a9ac0 of _0x385d81) {
        if (!_0x5a9ac0.message) {
          continue;
        }
        const _0xb73a0f = _0x5a9ac0.key.remoteJid;
        if (_0x1c00eb(_0xb73a0f)) {
          continue;
        }
        processingQueue.push({
          'from': _0xb73a0f,
          'message': _0x5a9ac0.message
        });
        if (!isProcessingQueue) {
          processMessageQueue();
        }
      }
    });
    _0x394ce2.ev.on("groups.update", async _0x4653d4 => {
      for (const _0x3c2bda of _0x4653d4) {
        const {
          id: _0x2cd086
        } = _0x3c2bda;
        if (!_0x2cd086.endsWith("@g.us")) {
          continue;
        }
        console.log("🔄 Group update detected: " + _0x2cd086);
        const _0x4e579f = await _0x5b6bce(_0x394ce2, _0x2cd086);
        if (_0x4e579f) {
          console.log("📜 Updated group info:", _0x4e579f.subject);
        }
      }
    });
    const _0x3502d1 = require("google-tts-api");
    const _0x4cc106 = require("unlimited-ai");
    _0x394ce2.ev.on("messages.upsert", async _0x7748da => {
      const {
        messages: _0x2381e9
      } = _0x7748da;
      const _0x1974a2 = _0x2381e9[0x0];
      if (!_0x1974a2.message) {
        return;
      }
      const _0x3aaf2e = Object.keys(_0x1974a2.message)[0x0];
      const _0x55b21b = _0x1974a2.key.remoteJid;
      const _0x215c04 = _0x1974a2.message.conversation || _0x1974a2.message.extendedTextMessage?.["text"];
      if (_0x1974a2.key.fromMe || _0x55b21b === conf.NUMERO_OWNER + "@s.whatsapp.net") {
        return;
      }
      if (conf.DULLAH_CHATBOT !== "yes") {
        return;
      }
      if (_0x3aaf2e === "conversation" || _0x3aaf2e === "extendedTextMessage") {
        const _0x723017 = _0x215c04.trim();
        if (!_0x723017) {
          return;
        }
        let _0x53edd9 = [];
        try {
          const _0x307e91 = fs.readFileSync("store.json", "utf8");
          if (_0x307e91) {
            _0x53edd9 = JSON.parse(_0x307e91);
            if (!Array.isArray(_0x53edd9)) {
              _0x53edd9 = [];
            }
          }
        } catch (_0x36403b) {
          console.log("No previous conversation found, starting new one.");
        }
        const _0x2e1c39 = {
          'role': "user",
          'content': _0x723017
        };
        const _0x4dfd4c = {
          'role': "system",
          'content': "You are called Dullah md. Developed by Ibrahim Adams. You respond to user commands. Only mention developer name if someone asks."
        };
        _0x53edd9.push(_0x2e1c39);
        _0x53edd9.push(_0x4dfd4c);
        try {
          const _0x3f2ebf = await _0x4cc106.generate('gpt-4-turbo-2024-04-09', _0x53edd9);
          _0x53edd9.push({
            'role': "assistant",
            'content': _0x3f2ebf
          });
          fs.writeFileSync("store.json", JSON.stringify(_0x53edd9, null, 0x2));
          const _0x3f91fc = _0x3502d1.getAudioUrl(_0x3f2ebf, {
            'lang': 'en',
            'slow': false,
            'host': 'https://translate.google.com'
          });
          await _0x394ce2.sendMessage(_0x55b21b, {
            'audio': {
              'url': _0x3f91fc
            },
            'mimetype': 'audio/mp4',
            'ptt': true
          });
        } catch (_0x22b6c4) {
          console.error("Error with AI generation:", _0x22b6c4);
        }
      }
    });
    _0x394ce2.ev.on("messages.upsert", async _0x5d968 => {
      const {
        messages: _0x177ef0
      } = _0x5d968;
      const _0x180474 = _0x177ef0[0x0];
      if (!_0x180474.message) {
        return;
      }
      const _0x5d1c54 = Object.keys(_0x180474.message)[0x0];
      const _0x43411e = _0x180474.key.remoteJid;
      const _0x4939a1 = _0x180474.message.conversation || _0x180474.message.extendedTextMessage?.["text"];
      if (_0x180474.key.fromMe || _0x43411e === conf.NUMERO_OWNER + "@s.whatsapp.net") {
        return;
      }
      if (conf.CHATBOT === 'yes') {
        if (_0x5d1c54 === 'conversation' || _0x5d1c54 === "extendedTextMessage") {
          try {
            const _0x2a312c = "https://apis.ibrahimadams.us.kg/api/ai/gpt4?apikey=ibraah-tech&q=" + encodeURIComponent(_0x4939a1);
            let _0x264006 = await fetch(_0x2a312c);
            let _0x33583d = await _0x264006.json();
            if (_0x33583d && _0x33583d.result) {
              const _0x2aebf2 = _0x33583d.result;
              console.log("Primary API Response:", _0x33583d);
              await _0x394ce2.sendMessage(_0x43411e, {
                'text': _0x2aebf2
              });
            } else {
              throw new Error("Invalid response or missing \"result\" field in primary API.");
            }
          } catch (_0x3a2d0e) {
            console.error("Primary API Error:", _0x3a2d0e.message);
            try {
              const _0x42aa00 = 'https://api.davidcyriltech.my.id/ai/chatbot?query=' + encodeURIComponent(_0x4939a1);
              let _0x3ae371 = await fetch(_0x42aa00);
              let _0x79e69c = await _0x3ae371.json();
              if (_0x79e69c && _0x79e69c.result) {
                const _0x3e6cc1 = _0x79e69c.result;
                console.log("Fallback API Response:", _0x79e69c);
                await _0x394ce2.sendMessage(_0x43411e, {
                  'text': _0x3e6cc1,
                  'contextInfo': {
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': "120363295141350550@newsletter",
                      'newsletterName': "Tech mob project",
                      'serverMessageId': 0x8f
                    },
                    'externalAdReply': {
                      'title': "Enjoy...🍷",
                      'body': "chatbot online",
                      'thumbnailUrl': conf.URL,
                      'sourceUrl': conf.GURL,
                      'mediaType': 0x1
                    }
                  }
                }, {
                  'quoted': _0x180474
                });
              } else {
                console.warn("Fallback API returned no result.");
              }
            } catch (_0x3d5c19) {
              console.error("Fallback API Error:", _0x3d5c19.message);
            }
          }
        }
      }
    });
    setInterval(() => {
      store.writeToFile("store.json");
    }, 0xbb8);
    _0x394ce2.ev.on("messages.upsert", async _0x60f4ea => {
      const {
        messages: _0x13d29c
      } = _0x60f4ea;
      const _0x40c788 = _0x13d29c[0x0];
      if (!_0x40c788.message) {
        return;
      }
      const _0x4c20c0 = _0x14bce0 => {
        if (!_0x14bce0) {
          return _0x14bce0;
        }
        if (/:\d+@/gi.test(_0x14bce0)) {
          0x0;
          let _0x41f6cd = baileys_1.jidDecode(_0x14bce0) || {};
          return _0x41f6cd.user && _0x41f6cd.server && _0x41f6cd.user + '@' + _0x41f6cd.server || _0x14bce0;
        } else {
          return _0x14bce0;
        }
      };
      0x0;
      var _0x3c8c51 = baileys_1.getContentType(_0x40c788.message);
      var _0x2431e2 = _0x3c8c51 == "conversation" ? _0x40c788.message.conversation : _0x3c8c51 == "imageMessage" ? _0x40c788.message.imageMessage?.['caption'] : _0x3c8c51 == 'videoMessage' ? _0x40c788.message.videoMessage?.['caption'] : _0x3c8c51 == "extendedTextMessage" ? _0x40c788.message?.["extendedTextMessage"]?.["text"] : _0x3c8c51 == "buttonsResponseMessage" ? _0x40c788?.["message"]?.["buttonsResponseMessage"]?.['selectedButtonId'] : _0x3c8c51 == "listResponseMessage" ? _0x40c788.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] : _0x3c8c51 == 'messageContextInfo' ? _0x40c788?.['message']?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x40c788.message?.["listResponseMessage"]?.['singleSelectReply']?.['selectedRowId'] || _0x40c788.text : '';
      var _0x4fc40e = _0x40c788.key.remoteJid;
      var _0x1600c3 = _0x4c20c0(_0x394ce2.user.id);
      var _0x24fdbd = _0x1600c3.split('@')[0x0];
      const _0x5a2068 = _0x4fc40e?.["endsWith"]("@g.us");
      var _0x4ff4a9 = _0x5a2068 ? await _0x394ce2.groupMetadata(_0x4fc40e) : '';
      var _0x1cae59 = _0x5a2068 ? _0x4ff4a9.subject : '';
      var _0x13db6b = _0x40c788.message.extendedTextMessage?.['contextInfo']?.["quotedMessage"];
      var _0x155c2b = _0x4c20c0(_0x40c788.message?.["extendedTextMessage"]?.['contextInfo']?.['participant']);
      var _0x16f8fa = _0x5a2068 ? _0x40c788.key.participant ? _0x40c788.key.participant : _0x40c788.participant : _0x4fc40e;
      if (_0x40c788.key.fromMe) {
        _0x16f8fa = _0x1600c3;
      }
      var _0x3bc83e = _0x5a2068 ? _0x40c788.key.participant : '';
      const {
        getAllSudoNumbers: _0x41f4cc
      } = require('./bdd/sudo');
      const _0x8655b1 = _0x40c788.pushName;
      const _0x24a9a0 = await _0x41f4cc();
      const _0x547f0b = [_0x24fdbd, "255673750170", '255673750170', "255673750170", "255673750170", conf.NUMERO_OWNER].map(_0x3fabd1 => _0x3fabd1.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x3fbde5 = _0x547f0b.concat(_0x24a9a0);
      const _0x287695 = _0x3fbde5.includes(_0x16f8fa);
      var _0x3ccc10 = ["255673750170", '255673750170', "255673750170", "255673750170"].map(_0x1dad14 => _0x1dad14.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x16f8fa);
      function _0x1feae7(_0xc155e5) {
        _0x394ce2.sendMessage(_0x4fc40e, {
          'text': _0xc155e5
        }, {
          'quoted': _0x40c788
        });
      }
      console.log("\t [][]...{ALONE Md}...[][]");
      console.log("=========== New message ===========");
      if (_0x5a2068) {
        console.log("message from : " + _0x1cae59);
      }
      console.log("message from : [" + _0x8655b1 + " : " + _0x16f8fa.split("@s.whatsapp.net")[0x0] + " ]");
      console.log("type of message : " + _0x3c8c51);
      console.log("------end of your messages ------");
      console.log(_0x2431e2);
      function _0x50bb04(_0x21810b) {
        let _0x1925b1 = [];
        for (_0x60f4ea of _0x21810b) {
          if (_0x60f4ea.admin == null) {
            continue;
          }
          _0x1925b1.push(_0x60f4ea.id);
        }
        return _0x1925b1;
      }
      var _0x2c3eb5 = conf.ETAT;
      if (_0x2c3eb5 == 0x1) {
        await _0x394ce2.sendPresenceUpdate("available", _0x4fc40e);
      } else {
        if (_0x2c3eb5 == 0x2) {
          await _0x394ce2.sendPresenceUpdate('composing', _0x4fc40e);
        } else if (_0x2c3eb5 == 0x3) {
          await _0x394ce2.sendPresenceUpdate("recording", _0x4fc40e);
        } else {
          await _0x394ce2.sendPresenceUpdate("unavailable", _0x4fc40e);
        }
      }
      const _0x142123 = _0x5a2068 ? await _0x4ff4a9.participants : '';
      let _0x2e1d82 = _0x5a2068 ? _0x50bb04(_0x142123) : '';
      const _0x48154b = _0x5a2068 ? _0x2e1d82.includes(_0x16f8fa) : false;
      var _0x7fe784 = _0x5a2068 ? _0x2e1d82.includes(_0x1600c3) : false;
      const _0x32e00d = _0x2431e2 ? _0x2431e2.trim().split(/ +/).slice(0x1) : null;
      const _0x59a1c3 = _0x2431e2 ? _0x2431e2.startsWith(prefixe) : false;
      const _0x231b3d = _0x59a1c3 ? _0x2431e2.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x4cad50 = conf.URL.split(',');
      function _0x30e6eb() {
        const _0x8f25db = Math.floor(Math.random() * _0x4cad50.length);
        const _0x5f14c6 = _0x4cad50[_0x8f25db];
        return _0x5f14c6;
      }
      var _0x26b9e3 = {
        'superUser': _0x287695,
        'dev': _0x3ccc10,
        'verifGroupe': _0x5a2068,
        'mbre': _0x142123,
        'membreGroupe': _0x3bc83e,
        'verifAdmin': _0x48154b,
        'infosGroupe': _0x4ff4a9,
        'nomGroupe': _0x1cae59,
        'auteurMessage': _0x16f8fa,
        'nomAuteurMessage': _0x8655b1,
        'idBot': _0x1600c3,
        'verifZokouAdmin': _0x7fe784,
        'prefixe': prefixe,
        'arg': _0x32e00d,
        'repondre': _0x1feae7,
        'mtype': _0x3c8c51,
        'groupeAdmin': _0x50bb04,
        'msgRepondu': _0x13db6b,
        'auteurMsgRepondu': _0x155c2b,
        'ms': _0x40c788,
        'mybotpic': _0x30e6eb
      };
      function _0x4194a5() {
        const _0x5e1025 = {
          'timeZone': "Africa/kenya",
          'year': 'numeric',
          'month': "2-digit",
          'day': "2-digit",
          'hour': '2-digit',
          'minute': "2-digit",
          'second': "2-digit",
          'hour12': false
        };
        const _0x264409 = new Intl.DateTimeFormat("en-KE", _0x5e1025).format(new Date());
        return _0x264409;
      }
      setInterval(async () => {
        if (conf.AUTOBIO === "yes") {
          const _0x11b2f9 = _0x4194a5();
          const _0x27e655 = "ALONE MD ALWAYS ONLINE\n" + _0x11b2f9;
          await _0x394ce2.updateProfileStatus(_0x27e655);
          console.log("Updated Bio: " + _0x27e655);
        }
      }, 0xea60);
      _0x394ce2.ev.on('call', async _0x7cf2b6 => {
        if (conf.ANTICALL === "yes") {
          const _0x51d2f3 = _0x7cf2b6[0x0].id;
          const _0x23c2f4 = _0x7cf2b6[0x0].from;
          await _0x394ce2.rejectCall(_0x51d2f3, _0x23c2f4);
          await _0x394ce2.sendMessage(_0x23c2f4, {
            'text': conf.ANTICALL_MSG
          });
        }
      });
      if (conf.AUTO_READ_MESSAGES === "yes") {
        _0x394ce2.ev.on("messages.upsert", async _0x11d659 => {
          const {
            messages: _0x20942f
          } = _0x11d659;
          for (const _0x3a8ca1 of _0x20942f) {
            if (!_0x3a8ca1.key.fromMe) {
              await _0x394ce2.readMessages([_0x3a8ca1.key]);
            }
          }
        });
      }
      try {
        const _0xbe3ffd = await verifierEtatJid(_0x4fc40e);
        if (_0x2431e2.includes("https://") && _0x5a2068 && _0xbe3ffd) {
          console.log("lien detecté");
          var _0x59e3fe = _0x5a2068 ? _0x2e1d82.includes(_0x1600c3) : false;
          if (_0x287695 || _0x48154b || !_0x59e3fe) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0xdd9b87 = {
            'remoteJid': _0x4fc40e,
            'fromMe': false,
            'id': _0x40c788.key.id,
            'participant': _0x16f8fa
          };
          var _0x1f1a97 = "link detected!!\n";
          var _0x4d7174 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Alone Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': '#000000'
          });
          await _0x4d7174.toFile("st1.webp");
          var _0x2b86d4 = await recupererActionJid(_0x4fc40e);
          if (_0x2b86d4 === "remove") {
            _0x1f1a97 += "message deleted \n @" + _0x16f8fa.split('@')[0x0] + " removed from group by ALONE-MD .";
            await _0x394ce2.sendMessage(_0x4fc40e, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x394ce2.sendMessage(_0x4fc40e, {
              'text': _0x1f1a97,
              'mentions': [_0x16f8fa]
            }, {
              'quoted': _0x40c788
            });
            try {
              await _0x394ce2.groupParticipantsUpdate(_0x4fc40e, [_0x16f8fa], "remove");
            } catch (_0x3d5a50) {
              console.log("antiien ") + _0x3d5a50;
            }
            await _0x394ce2.sendMessage(_0x4fc40e, {
              'delete': _0xdd9b87
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x2b86d4 === "delete") {
              _0x1f1a97 += "message deleted \n @" + _0x16f8fa.split('@')[0x0] + " avoid sending link.";
              await _0x394ce2.sendMessage(_0x4fc40e, {
                'text': _0x1f1a97,
                'mentions': [_0x16f8fa]
              }, {
                'quoted': _0x40c788
              });
              await _0x394ce2.sendMessage(_0x4fc40e, {
                'delete': _0xdd9b87
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x2b86d4 === 'warn') {
                const {
                  getWarnCountByJID: _0x2cf7c8,
                  ajouterUtilisateurAvecWarnCount: _0x3eb2e2
                } = require("./bdd/warn");
                let _0x1332d0 = await _0x2cf7c8(_0x16f8fa);
                let _0x104606 = conf.WARN_COUNT;
                if (_0x1332d0 >= _0x104606) {
                  var _0x3009ab = "link detected , you will be remove because of reaching warn-limit";
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'text': _0x3009ab,
                    'mentions': [_0x16f8fa]
                  }, {
                    'quoted': _0x40c788
                  });
                  await _0x394ce2.groupParticipantsUpdate(_0x4fc40e, [_0x16f8fa], 'remove');
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'delete': _0xdd9b87
                  });
                } else {
                  var _0x36051b = _0x104606 - _0x1332d0;
                  var _0x1870e2 = "Link detected , your warn_count was upgrade ;\n rest : " + _0x36051b + " ";
                  await _0x3eb2e2(_0x16f8fa);
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'text': _0x1870e2,
                    'mentions': [_0x16f8fa]
                  }, {
                    'quoted': _0x40c788
                  });
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'delete': _0xdd9b87
                  });
                }
              }
            }
          }
        }
      } catch (_0x1018e6) {
        console.log("bdd err " + _0x1018e6);
      }
      if (_0x40c788.message?.["viewOnceMessage"] || _0x40c788.message?.["viewOnceMessageV2"] || _0x40c788.message?.["viewOnceMessageV2Extension"]) {
        if (conf.ANTI_VV.toLowerCase() === "yes" && !_0x40c788.key.fromMe) {
          const _0x5398f2 = _0x40c788.message[_0x3c8c51];
          if (_0x5398f2.imageMessage) {
            const _0x2b6068 = await _0x394ce2.downloadAndSaveMediaMessage(_0x5398f2.imageMessage);
            const _0x50e327 = _0x5398f2.imageMessage.caption;
            const _0x496ed6 = {
              'image': {
                'url': _0x2b6068
              },
              'caption': _0x50e327
            };
            const _0x397a30 = {
              'quoted': _0x40c788
            };
            await _0x394ce2.sendMessage(_0x1600c3, _0x496ed6, _0x397a30);
          } else {
            if (_0x5398f2.videoMessage) {
              const _0x39de38 = await _0x394ce2.downloadAndSaveMediaMessage(_0x5398f2.videoMessage);
              const _0x4ccbf7 = _0x5398f2.videoMessage.caption;
              const _0x531312 = {
                'video': {
                  'url': _0x39de38
                },
                'caption': _0x4ccbf7
              };
              const _0x2b1140 = {
                'quoted': _0x40c788
              };
              await _0x394ce2.sendMessage(_0x1600c3, _0x531312, _0x2b1140);
            } else {
              if (_0x5398f2.audioMessage) {
                const _0x3b8c5a = await _0x394ce2.downloadAndSaveMediaMessage(_0x5398f2.audioMessage);
                const _0x1f70c = {
                  'audio': {
                    'url': _0x3b8c5a
                  },
                  'mymetype': 'audio/mp4'
                };
                const _0x329303 = {
                  'quoted': _0x40c788,
                  'ptt': false
                };
                await _0x394ce2.sendMessage(_0x1600c3, _0x1f70c, _0x329303);
              }
            }
          }
        }
      }
      if (_0x40c788.message?.["imageMessage"] || _0x40c788.message?.["audioMessage"] || _0x40c788.message?.["videoMessage"] || _0x40c788.message?.["stickerMessage"] || _0x40c788.message?.["documentMessage"]) {
        let _0x1ad679;
        if (_0x40c788.has("antispam")) {
          _0x1ad679 = _0x40c788.get("antispam").includes(_0x4fc40e);
        } else {
          const _0x438c51 = await antispamFunctions();
          _0x1ad679 = _0x438c51.includes(_0x4fc40e);
          _0x40c788.set("antispam", _0x438c51);
        }
        if (_0x5a2068 && _0x1ad679 && !_0x287695 && !_0x48154b) {
          console.warn("------------------Media------sent--------------------");
          const _0x11b8ac = spamCache.get(_0x16f8fa + '_' + _0x4fc40e);
          if (_0x11b8ac) {
            if (_0x11b8ac.length >= 0x4) {
              _0x11b8ac.push(_0x40c788.key);
              _0x11b8ac.forEach(_0x5dc7b5 => {
                const _0x581cb2 = {
                  'delete': _0x5dc7b5
                };
                _0x394ce2.sendMessage(_0x4fc40e, _0x581cb2);
              });
              _0x394ce2.groupParticipantsUpdate(_0x4fc40e, [_0x16f8fa], "remove").then(() => {
                _0x394ce2.sendMessage(_0x4fc40e, {
                  'text': '@' + _0x16f8fa.split('@')[0x0] + " removed because of spamming in group",
                  'mentions': [_0x16f8fa]
                });
              })["catch"](_0x3462e2 => console.log(_0x3462e2));
            } else {
              _0x11b8ac.push(_0x40c788.key);
              spamCache.set(_0x16f8fa + '_' + _0x4fc40e, _0x11b8ac, 0x78);
            }
          } else {
            spamCache.set(_0x16f8fa + '_' + _0x4fc40e, [_0x40c788.key]);
          }
        }
      }
      const _0x56c570 = () => {
        try {
          const _0x4c1d95 = path.join(__dirname, 'media', "chatbot.json");
          const _0x591135 = fs.readFileSync(_0x4c1d95, "utf8");
          return JSON.parse(_0x591135);
        } catch (_0x5426f6) {
          console.error("Error loading chatbot responses:", _0x5426f6.message);
          return {};
        }
      };
      let _0x12dd3f = 0x0;
      const _0x122682 = (_0x1f49b1, _0x2887cc) => {
        const _0x480747 = _0x1f49b1.toLowerCase().split(/\s+/);
        for (const _0x2d8ba2 of _0x480747) {
          if (_0x2887cc[_0x2d8ba2]) {
            return _0x2887cc[_0x2d8ba2];
          }
        }
        return null;
      };
      if (conf.CHAT_BOT === "yes") {
        console.log("CHAT_BOT is enabled. Listening for messages...");
        _0x394ce2.ev.on("messages.upsert", async _0x501115 => {
          try {
            const {
              messages: _0x2a7420
            } = _0x501115;
            const _0x2b03a2 = _0x56c570();
            for (const _0xbe3d9d of _0x2a7420) {
              if (!_0xbe3d9d.key || !_0xbe3d9d.key.remoteJid) {
                continue;
              }
              const _0x2c3789 = _0xbe3d9d.message?.['conversation'] || _0xbe3d9d.message?.["extendedTextMessage"]?.['text'] || '';
              const _0xe12e0b = _0x122682(_0x2c3789, _0x2b03a2);
              const _0x103e56 = Date.now();
              if (_0x103e56 - _0x12dd3f < 0x1388) {
                console.log("Rate limit applied. Skipping reply.");
                continue;
              }
              if (_0xe12e0b) {
                try {
                  await _0x394ce2.sendMessage(_0xbe3d9d.key.remoteJid, {
                    'text': _0xe12e0b
                  });
                  console.log("Text reply sent: " + _0xe12e0b);
                  _0x12dd3f = _0x103e56;
                } catch (_0x5a4715) {
                  console.error("Error sending text reply: " + _0x5a4715.message);
                }
              } else {
                console.log("No matching keyword detected. Skipping message.");
              }
              await new Promise(_0x27228e => setTimeout(_0x27228e, 0xbb8));
            }
          } catch (_0x1e7ed7) {
            console.error("Error in message processing:", _0x1e7ed7.message);
          }
        });
      }
      if (_0x40c788.key && _0x40c788.key.remoteJid === "status@broadcast" && conf.AUTO_STATUS_REPLY === "yes") {
        const _0x2cf19c = _0x40c788.key.participant;
        await _0x394ce2.sendMessage(_0x2cf19c, {
          'text': "status viewed justnow with ALONE MD",
          'react': {
            'text': '❤️',
            'key': _0x40c788.key
          }
        }, {
          'quoted': _0x40c788
        });
      }
      if (_0x40c788.key && _0x40c788.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x394ce2.readMessages([_0x40c788.key]);
      }
      if (_0x40c788.key && _0x40c788.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x40c788.message.extendedTextMessage) {
          var _0x213760 = _0x40c788.message.extendedTextMessage.text;
          await _0x394ce2.sendMessage(_0x1600c3, {
            'text': _0x213760
          }, {
            'quoted': _0x40c788
          });
        } else {
          if (_0x40c788.message.imageMessage) {
            var _0x5c17e8 = _0x40c788.message.imageMessage.caption;
            var _0x5532df = await _0x394ce2.downloadAndSaveMediaMessage(_0x40c788.message.imageMessage);
            await _0x394ce2.sendMessage(_0x1600c3, {
              'image': {
                'url': _0x5532df
              },
              'caption': _0x5c17e8
            }, {
              'quoted': _0x40c788
            });
          } else {
            if (_0x40c788.message.videoMessage) {
              var _0x5c17e8 = _0x40c788.message.videoMessage.caption;
              var _0xfb84eb = await _0x394ce2.downloadAndSaveMediaMessage(_0x40c788.message.videoMessage);
              await _0x394ce2.sendMessage(_0x1600c3, {
                'video': {
                  'url': _0xfb84eb
                },
                'caption': _0x5c17e8
              }, {
                'quoted': _0x40c788
              });
            }
          }
        }
      }
      if (!_0x3ccc10 && _0x4fc40e == "120363158701337904@g.us") {
        return;
      }
      if (_0x2431e2 && _0x16f8fa.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x3af558
        } = require('./bdd/level');
        try {
          await _0x3af558(_0x16f8fa);
        } catch (_0x165d84) {
          console.error(_0x165d84);
        }
      }
      try {
        if (_0x40c788.message[_0x3c8c51].contextInfo.mentionedJid && (_0x40c788.message[_0x3c8c51].contextInfo.mentionedJid.includes(_0x1600c3) || _0x40c788.message[_0x3c8c51].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x4fc40e == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x287695) {
            console.log("hummm");
            return;
          }
          let _0x3a21b8 = require('./bdd/mention');
          let _0x19dde0 = await _0x3a21b8.recupererToutesLesValeurs();
          let _0x3c8dfe = _0x19dde0[0x0];
          if (_0x3c8dfe.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x535da8;
          if (_0x3c8dfe.type.toLocaleLowerCase() === "image") {
            _0x535da8 = {
              'image': {
                'url': _0x3c8dfe.url
              },
              'caption': _0x3c8dfe.message
            };
          } else {
            if (_0x3c8dfe.type.toLocaleLowerCase() === "video") {
              _0x535da8 = {
                'video': {
                  'url': _0x3c8dfe.url
                },
                'caption': _0x3c8dfe.message
              };
            } else {
              if (_0x3c8dfe.type.toLocaleLowerCase() === "sticker") {
                let _0x1a5cf7 = new Sticker(_0x3c8dfe.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x2478c3 = await _0x1a5cf7.toBuffer();
                _0x535da8 = {
                  'sticker': _0x2478c3
                };
              } else if (_0x3c8dfe.type.toLocaleLowerCase() === "audio") {
                _0x535da8 = {
                  'audio': {
                    'url': _0x3c8dfe.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x394ce2.sendMessage(_0x4fc40e, _0x535da8, {
            'quoted': _0x40c788
          });
        }
      } catch (_0x13e135) {}
      if (conf.GROUP_CONTROL === "yes") {
        _0x394ce2.ev.on("messages.upsert", async _0x44d200 => {
          const {
            messages: _0x59ead1
          } = _0x44d200;
          const _0x2f1ff6 = _0x59ead1[0x0];
          if (!_0x2f1ff6.message) {
            return;
          }
          const _0x3d23b2 = _0x2f1ff6.message.conversation || _0x2f1ff6.message.extendedTextMessage?.["text"] || '';
          const _0x53d4da = _0x2f1ff6.key;
          const _0x3e28c6 = _0x53d4da.remoteJid;
          if (!store.chats[_0x3e28c6]) {
            store.chats[_0x3e28c6] = [];
          }
          store.chats[_0x3e28c6].push(_0x2f1ff6);
          if (_0x3d23b2.includes('chat.whatsapp.com') && !conf.superUser.includes(_0x2f1ff6.key.participant) && conf.verifAdmin && !conf.groupeAdmin.includes(_0x2f1ff6.key.participant) && _0x2f1ff6.key.remoteJid.includes("@g.us")) {
            _0x1feae7("_Alone md have just detected group link🧐_");
            const _0x2a318a = _0x2f1ff6.key.participant || _0x2f1ff6.key.remoteJid;
            const _0x579dbc = _0x2f1ff6.key.remoteJid;
            await _0x394ce2.sendMessage(_0x579dbc, {
              'delete': {
                'remoteJid': _0x579dbc,
                'fromMe': false,
                'id': _0x2f1ff6.key.id,
                'participant': _0x2a318a
              }
            });
            await _0x394ce2.groupParticipantsUpdate(_0x579dbc, [_0x2a318a], 'remove');
            await _0x394ce2.sendMessage(_0x579dbc, {
              'text': "Removed!\n\n@" + _0x2a318a.split('@')[0x0] + " sending group links is prohibited!",
              'contextInfo': {
                'mentionedJid': [_0x2a318a]
              }
            }, {
              'quoted': _0x2f1ff6
            });
          }
        });
      }
      try {
        const _0x167f89 = _0x40c788.key?.['id']?.["startsWith"]("BAES") && _0x40c788.key?.['id']?.["length"] === 0x10;
        const _0x432dbc = _0x40c788.key?.['id']?.["startsWith"]("BAE5") && _0x40c788.key?.['id']?.['length'] === 0x10;
        if (_0x167f89 || _0x432dbc) {
          if (_0x3c8c51 === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x29b176 = await atbverifierEtatJid(_0x4fc40e);
          if (!_0x29b176) {
            return;
          }
          ;
          if (_0x48154b || _0x16f8fa === _0x1600c3) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x3ba54e = {
            'remoteJid': _0x4fc40e,
            'fromMe': false,
            'id': _0x40c788.key.id,
            'participant': _0x16f8fa
          };
          var _0x1f1a97 = "bot detected, \n";
          var _0x4d7174 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Alone-Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': '12345',
            'quality': 0x32,
            'background': '#000000'
          });
          await _0x4d7174.toFile("st1.webp");
          var _0x2b86d4 = await atbrecupererActionJid(_0x4fc40e);
          if (_0x2b86d4 === "remove") {
            _0x1f1a97 += "message deleted \n @" + _0x16f8fa.split('@')[0x0] + " removed from group.";
            await _0x394ce2.sendMessage(_0x4fc40e, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x394ce2.sendMessage(_0x4fc40e, {
              'text': _0x1f1a97,
              'mentions': [_0x16f8fa]
            }, {
              'quoted': _0x40c788
            });
            try {
              await _0x394ce2.groupParticipantsUpdate(_0x4fc40e, [_0x16f8fa], 'remove');
            } catch (_0x13c464) {
              console.log("antibot ") + _0x13c464;
            }
            await _0x394ce2.sendMessage(_0x4fc40e, {
              'delete': _0x3ba54e
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x2b86d4 === "delete") {
              _0x1f1a97 += "message delete \n @" + _0x16f8fa.split('@')[0x0] + " Avoid sending link.";
              await _0x394ce2.sendMessage(_0x4fc40e, {
                'text': _0x1f1a97,
                'mentions': [_0x16f8fa]
              }, {
                'quoted': _0x40c788
              });
              await _0x394ce2.sendMessage(_0x4fc40e, {
                'delete': _0x3ba54e
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x2b86d4 === "warn") {
                const {
                  getWarnCountByJID: _0x1bc8ce,
                  ajouterUtilisateurAvecWarnCount: _0x452056
                } = require("./bdd/warn");
                let _0x8c2949 = await _0x1bc8ce(_0x16f8fa);
                let _0x3293b9 = conf.WARN_COUNT;
                if (_0x8c2949 >= _0x3293b9) {
                  var _0x3009ab = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'text': _0x3009ab,
                    'mentions': [_0x16f8fa]
                  }, {
                    'quoted': _0x40c788
                  });
                  await _0x394ce2.groupParticipantsUpdate(_0x4fc40e, [_0x16f8fa], "remove");
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'delete': _0x3ba54e
                  });
                } else {
                  var _0x36051b = _0x3293b9 - _0x8c2949;
                  var _0x1870e2 = "bot detected , your warn_count was upgrade ;\n rest : " + _0x36051b + " ";
                  await _0x452056(_0x16f8fa);
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'text': _0x1870e2,
                    'mentions': [_0x16f8fa]
                  }, {
                    'quoted': _0x40c788
                  });
                  await _0x394ce2.sendMessage(_0x4fc40e, {
                    'delete': _0x3ba54e
                  });
                }
              }
            }
          }
        }
      } catch (_0x5811fc) {
        console.log(".... " + _0x5811fc);
      }
      if (_0x59a1c3) {
        const _0x411268 = evt.cm.find(_0x439684 => _0x439684.nomCom === _0x231b3d || _0x439684.nomCom === _0x231b3d || _0x439684.aliases && _0x439684.aliases.includes(_0x231b3d));
        if (_0x411268) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x287695) {
              return;
            }
            if (!_0x287695 && _0x4fc40e === _0x16f8fa && conf.PM_PERMIT === 'no') {
              _0x1feae7("ERROR!! ❌\n\nYou don't have acces to commands here");
              return;
            }
            if (!_0x287695 && _0x5a2068) {
              let _0x54a557 = await isGroupBanned(_0x4fc40e);
              if (_0x54a557) {
                return;
              }
            }
            if (!_0x48154b && _0x5a2068) {
              let _0x2eaf82 = await isGroupOnlyAdmin(_0x4fc40e);
              if (_0x2eaf82) {
                return;
              }
            }
            if (!_0x287695) {
              let _0x26db11 = await isUserBanned(_0x16f8fa);
              if (_0x26db11) {
                _0x1feae7("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x4fc40e, _0x394ce2, _0x40c788, _0x411268.reaction);
            _0x411268.fonction(_0x4fc40e, _0x394ce2, _0x26b9e3);
          } catch (_0x2be6b2) {
            console.log("😡😡 " + _0x2be6b2);
            _0x394ce2.sendMessage(_0x4fc40e, {
              'text': "😡😡 " + _0x2be6b2
            }, {
              'quoted': _0x40c788
            });
          }
        }
      }
    });
    const {
      recupevents: _0x382448
    } = require("./bdd/welcome");
    _0x394ce2.ev.on("group-participants.update", async _0x203043 => {
      console.log(_0x203043);
      let _0x4fbfdc;
      try {
        _0x4fbfdc = await _0x394ce2.profilePictureUrl(_0x203043.id, 'image');
      } catch {
        _0x4fbfdc = 'https://files.catbox.moe/eoc0y3.jpg';
      }
      try {
        const _0xdf959c = await _0x394ce2.groupMetadata(_0x203043.id);
        if (_0x203043.action == "add" && (await _0x382448(_0x203043.id, "welcome")) == 'on') {
          let _0x34ee46 = "╔════◇◇◇═════╗\n║ welcome to new(s) member(s)\n║ * 𝚃𝙷𝙸𝚂 𝙸𝚂 𝙰𝙻𝙾𝙽𝙴 𝙼𝙳 𝚆𝙰 𝙱𝙾𝚃:*\n";
          let _0x327752 = _0x203043.participants;
          for (let _0x5931b1 of _0x327752) {
            _0x34ee46 += "║ @" + _0x5931b1.split('@')[0x0] + "\n";
          }
          _0x34ee46 += "║\n╚════◇◇◇═════╝\n◇ *WElOME BUDDY... READ THE GRPUP DESCRIPTION 😊 *   ◇\n\n" + _0xdf959c.desc + "\n\n> POWERED BY TOPU TECH.";
          _0x394ce2.sendMessage(_0x203043.id, {
            'image': {
              'url': _0x4fbfdc
            },
            'caption': _0x34ee46,
            'mentions': _0x327752
          });
        } else {
          if (_0x203043.action == "remove" && (await _0x382448(_0x203043.id, 'goodbye')) == 'on') {
            let _0x25acce = "one or somes member(s) left group;\n";
            let _0x1975b6 = _0x203043.participants;
            for (let _0x346043 of _0x1975b6) {
              _0x25acce += '@' + _0x346043.split('@')[0x0] + "\n";
            }
            _0x394ce2.sendMessage(_0x203043.id, {
              'text': _0x25acce,
              'mentions': _0x1975b6
            });
          } else {
            if (_0x203043.action == 'promote' && (await _0x382448(_0x203043.id, 'antipromote')) == 'on') {
              if (_0x203043.author == _0xdf959c.owner || _0x203043.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x203043.author == decodeJid(_0x394ce2.user.id) || _0x203043.author == _0x203043.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x394ce2.groupParticipantsUpdate(_0x203043.id, [_0x203043.author, _0x203043.participants[0x0]], 'demote');
              _0x394ce2.sendMessage(_0x203043.id, {
                'text': '@' + _0x203043.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x203043.author.split('@')[0x0] + " and @" + _0x203043.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x203043.author, _0x203043.participants[0x0]]
              });
            } else {
              if (_0x203043.action == 'demote' && (await _0x382448(_0x203043.id, "antidemote")) == 'on') {
                if (_0x203043.author == _0xdf959c.owner || _0x203043.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x203043.author == decodeJid(_0x394ce2.user.id) || _0x203043.author == _0x203043.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x394ce2.groupParticipantsUpdate(_0x203043.id, [_0x203043.author], "demote");
                await _0x394ce2.groupParticipantsUpdate(_0x203043.id, [_0x203043.participants[0x0]], "promote");
                _0x394ce2.sendMessage(_0x203043.id, {
                  'text': '@' + _0x203043.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x203043.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x203043.author, _0x203043.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0x498022) {
        console.error(_0x498022);
      }
    });
    function _0x41c316(_0x72299d) {
      const _0x5dbe77 = _0x72299d.key.participant || _0x72299d.key.remoteJid;
      let _0x4d46d4 = "*❣️ALONE MD ANTIDELETE😋*\n\n";
      _0x4d46d4 += "*Time deleted🥀:* " + new Date().toLocaleString() + "\n";
      _0x4d46d4 += "*Deleted by🌷:* @" + _0x5dbe77.split('@')[0x0] + "\n\n*Powered by Toputech*\n\n";
      return _0x4d46d4;
    }
    async function _0x2c79c8(_0x3ae2c8) {
      try {
        if (_0x3ae2c8.imageMessage) {
          return await _0x394ce2.downloadMediaMessage(_0x3ae2c8.imageMessage);
        } else {
          if (_0x3ae2c8.videoMessage) {
            return await _0x394ce2.downloadMediaMessage(_0x3ae2c8.videoMessage);
          } else {
            if (_0x3ae2c8.documentMessage) {
              return await _0x394ce2.downloadMediaMessage(_0x3ae2c8.documentMessage);
            } else {
              if (_0x3ae2c8.audioMessage) {
                return await _0x394ce2.downloadMediaMessage(_0x3ae2c8.audioMessage);
              } else {
                if (_0x3ae2c8.stickerMessage) {
                  return await _0x394ce2.downloadMediaMessage(_0x3ae2c8.stickerMessage);
                } else {
                  if (_0x3ae2c8.voiceMessage) {
                    return await _0x394ce2.downloadMediaMessage(_0x3ae2c8.voiceMessage);
                  } else {
                    if (_0x3ae2c8.gifMessage) {
                      return await _0x394ce2.downloadMediaMessage(_0x3ae2c8.gifMessage);
                    }
                  }
                }
              }
            }
          }
        }
      } catch (_0x1f85da) {
        console.error("Error downloading media:", _0x1f85da);
      }
      return null;
    }
    _0x394ce2.ev.on("messages.upsert", async _0x14a3c8 => {
      if (conf.ADM === "yes") {
        const {
          messages: _0x2a387b
        } = _0x14a3c8;
        const _0x499ba2 = _0x2a387b[0x0];
        if (!_0x499ba2.message) {
          return;
        }
        const _0x2c3bce = _0x499ba2.key;
        const _0x47f42d = _0x2c3bce.remoteJid;
        if (!store.chats[_0x47f42d]) {
          store.chats[_0x47f42d] = [];
        }
        store.chats[_0x47f42d].push(_0x499ba2);
        if (_0x499ba2.message.protocolMessage && _0x499ba2.message.protocolMessage.type === 0x0) {
          const _0x37927d = _0x499ba2.message.protocolMessage.key;
          const _0x15d972 = store.chats[_0x47f42d];
          const _0x8e13e9 = _0x15d972.find(_0x273127 => _0x273127.key.id === _0x37927d.id);
          if (_0x8e13e9) {
            try {
              const _0x563e7b = _0x41c316(_0x8e13e9);
              if (_0x8e13e9.message.conversation) {
                await _0x394ce2.sendMessage(_0x47f42d, {
                  'text': _0x563e7b + ("*Message:* " + _0x8e13e9.message.conversation),
                  'mentions': [_0x8e13e9.key.participant]
                });
              } else {
                if (_0x8e13e9.message.imageMessage || _0x8e13e9.message.videoMessage || _0x8e13e9.message.documentMessage || _0x8e13e9.message.audioMessage || _0x8e13e9.message.stickerMessage || _0x8e13e9.message.voiceMessage || _0x8e13e9.message.gifMessage) {
                  const _0xf02664 = await _0x2c79c8(_0x8e13e9.message);
                  if (_0xf02664) {
                    let _0x5c9383 = 'audio';
                    if (_0x8e13e9.message.imageMessage) {
                      _0x5c9383 = "image";
                    }
                    if (_0x8e13e9.message.videoMessage) {
                      _0x5c9383 = "video";
                    }
                    if (_0x8e13e9.message.documentMessage) {
                      _0x5c9383 = "document";
                    }
                    if (_0x8e13e9.message.stickerMessage) {
                      _0x5c9383 = 'sticker';
                    }
                    if (_0x8e13e9.message.voiceMessage) {
                      _0x5c9383 = "audio";
                    }
                    if (_0x8e13e9.message.gifMessage) {
                      _0x5c9383 = "video";
                    }
                    await _0x394ce2.sendMessage(_0x47f42d, {
                      [_0x5c9383]: _0xf02664,
                      'caption': _0x563e7b,
                      'mentions': [_0x8e13e9.key.participant]
                    });
                  }
                }
              }
            } catch (_0x23f9fd) {
              console.error("Error handling deleted message:", _0x23f9fd);
            }
          }
        }
      }
    });
    let _0x508840 = new Set();
    _0x394ce2.ev.on("messages.upsert", async _0x2f34cd => {
      const {
        messages: _0x36a345
      } = _0x2f34cd;
      const _0x39f141 = _0x36a345[0x0];
      if (!_0x39f141.message) {
        return;
      }
      const _0x23b00a = _0x39f141.message.conversation || _0x39f141.message.extendedTextMessage?.["text"] || '';
      const _0x24276b = _0x39f141.key.remoteJid;
      const _0x386d3e = _0x39f141.key.remoteJid;
      const _0x482f22 = _0x386d3e.split('@')[0x0];
      auto_reply_message = "Hello @" + _0x482f22 + ", A brief departure is on the horizon, but I shall return posthaste. Please bear with me for a fleeting moment, and I’ll rejoin you shortly \n\n*powered by Alone Md*.";
      if (_0x23b00a.match(/^[^\w\s]/) && _0x39f141.key.fromMe) {
        const _0x5ef0bb = _0x23b00a[0x0];
        const _0x29f60a = _0x23b00a.slice(0x1).split(" ")[0x0];
        const _0x123101 = _0x23b00a.slice(_0x5ef0bb.length + _0x29f60a.length).trim();
        if (_0x29f60a === "setautoreply" && _0x123101) {
          auto_reply_message = _0x123101;
          await _0x394ce2.sendMessage(_0x24276b, {
            'text': "Auto-reply message has been updated to:\n\"" + auto_reply_message + "\""
          });
          return;
        }
      }
      if (conf.AUTO_REPLY === "yes" && !_0x508840.has(_0x24276b) && !_0x39f141.key.fromMe && !_0x24276b.includes("@g.us")) {
        await _0x394ce2.sendMessage(_0x24276b, {
          'text': auto_reply_message,
          'mentions': [_0x386d3e]
        });
        _0x508840.add(_0x24276b);
      }
    });
    if (conf.AUTO_REACT === "yes") {
      _0x394ce2.ev.on("messages.upsert", async _0x527129 => {
        const {
          messages: _0xbe4691
        } = _0x527129;
        const _0x51862c = path.resolve(__dirname, 'media', 'emojis.json');
        let _0x5c508a = [];
        try {
          const _0x3cdbf9 = fs.readFileSync(_0x51862c, "utf8");
          _0x5c508a = JSON.parse(_0x3cdbf9);
        } catch (_0x2fa13c) {
          console.error("Error reading emojis file:", _0x2fa13c);
          return;
        }
        for (const _0x5971d4 of _0xbe4691) {
          if (!_0x5971d4.key.fromMe) {
            const _0x192786 = _0x5c508a[Math.floor(Math.random() * _0x5c508a.length)];
            await _0x394ce2.sendMessage(_0x5971d4.key.remoteJid, {
              'react': {
                'text': _0x192786,
                'key': _0x5971d4.key
              }
            });
          }
        }
      });
    }
    const _0x5da44e = _0x297d52 => new Promise(_0x4e5670 => setTimeout(_0x4e5670, _0x297d52));
    let _0x37add5 = 0x0;
    const _0x4e7cc0 = ['❤️', '💖', '💘', '💝', '💓', '💌', '💕', '😎', '🔥', '💥', '💯', '✨', '🌟', '🌈', '⚡', '💎', '🌀', '👑', '🎉', '🎊', '🦄', '👽', '🛸', '🚀', '🦋', '💫', '🍀', '🎶', '🎧', '🎸', '🎤', '🏆', '🏅', '🌍', '🌎', '🌏', '🎮', '🎲', '💪', "🏋️", '🥇', '👟', '🏃', '🚴', '🚶', '🏄', '⛷️', '🕶️', '🧳', '🍿', '🍿', '🥂', '🍻', '🍷', '🍸', '🥃', '🍾', '🎯', '⏳', '🎁', '🎈', '🎨', '🌻', '🌸', '🌺', '🌹', '🌼', '🌞', '🌝', '🌜', '🌙', '🌚', '🍀', '🌱', '🍃', '🍂', '🌾', '🐉', '🐍', '🦓', '🦄', '🦋', '🦧', '🦘', '🦨', '🦡', '🐉', '🐅', '🐆', '🐓', '🐢', '🐊', '🐠', '🐟', '🐡', '🦑', '🐙', '🦀', '🐬', '🦕', '🦖', '🐾', '🐕', '🐈', '🐇', '🐾'];
    if (conf.AUTO_LIKE_STATUS === "yes") {
      console.log("AUTO_LIKE_STATUS is enabled. Listening for status updates...");
      _0x394ce2.ev.on("messages.upsert", async _0x1f7b5d => {
        const {
          messages: _0x1d8a22
        } = _0x1f7b5d;
        for (const _0x1ef7d4 of _0x1d8a22) {
          if (_0x1ef7d4.key && _0x1ef7d4.key.remoteJid === "status@broadcast") {
            console.log("Detected status update from:", _0x1ef7d4.key.remoteJid);
            const _0xf919b0 = Date.now();
            if (_0xf919b0 - _0x37add5 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x40bacf = _0x394ce2.user && _0x394ce2.user.id ? _0x394ce2.user.id.split(':')[0x0] + "@s.whatsapp.net" : null;
            if (!_0x40bacf) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            const _0x1a112a = _0x4e7cc0[Math.floor(Math.random() * _0x4e7cc0.length)];
            await _0x394ce2.sendMessage(_0x1ef7d4.key.remoteJid, {
              'react': {
                'key': _0x1ef7d4.key,
                'text': _0x1a112a
              }
            }, {
              'statusJidList': [_0x1ef7d4.key.participant]
            });
            _0x37add5 = Date.now();
            console.log("Successfully reacted to status update by " + _0x1ef7d4.key.remoteJid + " with " + _0x1a112a);
            await _0x5da44e(0x7d0);
          }
        }
      });
    }
    async function _0x319bc9() {
      const _0xb1eabb = require('node-cron');
      const {
        getCron: _0xaee95f
      } = require("./bdd/cron");
      let _0xef540a = await _0xaee95f();
      console.log(_0xef540a);
      if (_0xef540a.length > 0x0) {
        for (let _0x35db36 = 0x0; _0x35db36 < _0xef540a.length; _0x35db36++) {
          if (_0xef540a[_0x35db36].mute_at != null) {
            let _0x49d09d = _0xef540a[_0x35db36].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0xef540a[_0x35db36].group_id + " a " + _0x49d09d[0x0] + " H " + _0x49d09d[0x1]);
            _0xb1eabb.schedule(_0x49d09d[0x1] + " " + _0x49d09d[0x0] + " * * *", async () => {
              await _0x394ce2.groupSettingUpdate(_0xef540a[_0x35db36].group_id, "announcement");
              _0x394ce2.sendMessage(_0xef540a[_0x35db36].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
          if (_0xef540a[_0x35db36].unmute_at != null) {
            let _0x1cf4c6 = _0xef540a[_0x35db36].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x1cf4c6[0x0] + " H " + _0x1cf4c6[0x1] + " ");
            _0xb1eabb.schedule(_0x1cf4c6[0x1] + " " + _0x1cf4c6[0x0] + " * * *", async () => {
              await _0x394ce2.groupSettingUpdate(_0xef540a[_0x35db36].group_id, "not_announcement");
              _0x394ce2.sendMessage(_0xef540a[_0x35db36].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': 'Africa/Nairobi'
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x394ce2.ev.on("contacts.upsert", async _0xe4c51b => {
      const _0x2bf698 = _0x28499d => {
        for (const _0xab388b of _0x28499d) {
          if (store.contacts[_0xab388b.id]) {
            Object.assign(store.contacts[_0xab388b.id], _0xab388b);
          } else {
            store.contacts[_0xab388b.id] = _0xab388b;
          }
        }
        return;
      };
      _0x2bf698(_0xe4c51b);
    });
    _0x394ce2.ev.on("connection.update", async _0x238a04 => {
      const {
        lastDisconnect: _0x9e0706,
        connection: _0x183b84
      } = _0x238a04;
      if (_0x183b84 === "connecting") {
        console.log("ℹ️ ALONE-MD connecting in your account...");
      } else {
        if (_0x183b84 === 'open') {
          console.log("✅ ALONE-MD connected successfully☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log("------");
          0x0;
          await baileys_1.delay(0x12c);
          console.log("------------------/-----");
          console.log("ALONE-MD by TOPUTECH installing cmds😇\n\n");
          console.log("chargement des commandes ...\n");
          fs.readdirSync(__dirname + "/commandes").forEach(_0x2aa7c8 => {
            if (path.extname(_0x2aa7c8).toLowerCase() == ".js") {
              try {
                require(__dirname + '/commandes/' + _0x2aa7c8);
                console.log(_0x2aa7c8 + "Successfully installed ALONE-MD commands✔️");
              } catch (_0xc3691e) {
                console.log(_0x2aa7c8 + " n'a pas pu être chargé pour les raisons suivantes : " + _0xc3691e);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x400a34;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x400a34 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x400a34 = "private";
          } else {
            _0x400a34 = "undefined";
          }
          console.log("Alone-MD successfully connected✅");
          await _0x319bc9();
          if (conf.DP.toLowerCase() === 'no') {
            let _0x38c202 = "ALONE-MD  RUNNING ...\n    \n    Prefix : [ " + prefixe + " ]\n    Mode :" + _0x400a34 + " mode\n    Total Command : " + evt.cm.length + "\n    Owner : TOPU TECH 🦸  \n\n> ❣️ *Im here laways 4r you* ❣️\n";
            await _0x394ce2.sendMessage('255673750170@s.whatsapp.net', {
              'text': _0x38c202
            });
          }
        } else {
          if (_0x183b84 == 'close') {
            let _0x32a064 = new boom_1.Boom(_0x9e0706?.["error"])?.["output"]["statusCode"];
            if (_0x32a064 === baileys_1.DisconnectReason.badSession) {
              console.log("Wrong session Id format, rescan again...");
            } else {
              if (_0x32a064 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x4b4ee2();
              } else {
                if (_0x32a064 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error😞 ,,beltah trying to reconnect... ");
                  _0x4b4ee2();
                } else {
                  if (_0x32a064 === baileys_1.DisconnectReason?.['connectionReplaced']) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x32a064 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("session disconnected,,, replace a new session id");
                    } else {
                      if (_0x32a064 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x4b4ee2();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x32a064);
                        const {
                          exec: _0x368ec5
                        } = require("child_process");
                        _0x368ec5("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x183b84);
            _0x4b4ee2();
          }
        }
      }
    });
    _0x394ce2.ev.on('creds.update', _0xae33be);
    _0x394ce2.downloadAndSaveMediaMessage = async (_0x32d556, _0xa1c4b3 = '', _0x5ec08f = true) => {
      let _0x2b8581 = _0x32d556.msg ? _0x32d556.msg : _0x32d556;
      let _0x34c0b5 = (_0x32d556.msg || _0x32d556).mimetype || '';
      let _0x16fa35 = _0x32d556.mtype ? _0x32d556.mtype.replace(/Message/gi, '') : _0x34c0b5.split('/')[0x0];
      0x0;
      const _0x4ccea6 = await baileys_1.downloadContentFromMessage(_0x2b8581, _0x16fa35);
      let _0x46f895 = Buffer.from([]);
      for await (const _0x260134 of _0x4ccea6) {
        _0x46f895 = Buffer.concat([_0x46f895, _0x260134]);
      }
      let _0xc64a6b = await FileType.fromBuffer(_0x46f895);
      let _0x3ced2f = './' + _0xa1c4b3 + '.' + _0xc64a6b.ext;
      await fs.writeFileSync(_0x3ced2f, _0x46f895);
      return _0x3ced2f;
    };
    _0x394ce2.awaitForMessage = async (_0x36eb47 = {}) => {
      return new Promise((_0x4470f0, _0x5bfebc) => {
        if (typeof _0x36eb47 !== 'object') {
          _0x5bfebc(new Error("Options must be an object"));
        }
        if (typeof _0x36eb47.sender !== "string") {
          _0x5bfebc(new Error("Sender must be a string"));
        }
        if (typeof _0x36eb47.chatJid !== "string") {
          _0x5bfebc(new Error("ChatJid must be a string"));
        }
        if (_0x36eb47.timeout && typeof _0x36eb47.timeout !== "number") {
          _0x5bfebc(new Error("Timeout must be a number"));
        }
        if (_0x36eb47.filter && typeof _0x36eb47.filter !== 'function') {
          _0x5bfebc(new Error("Filter must be a function"));
        }
        const _0x206dc3 = _0x36eb47?.["timeout"] || undefined;
        const _0x27821d = _0x36eb47?.["filter"] || (() => true);
        let _0x50594f = undefined;
        let _0x5693de = _0x1e7548 => {
          let {
            type: _0x148a2b,
            messages: _0x36218d
          } = _0x1e7548;
          if (_0x148a2b == "notify") {
            for (let _0x154179 of _0x36218d) {
              const _0xfdcee4 = _0x154179.key.fromMe;
              const _0x132fb3 = _0x154179.key.remoteJid;
              const _0x1450e1 = _0x132fb3.endsWith("@g.us");
              const _0x5e4fff = _0x132fb3 == "status@broadcast";
              const _0x54621a = _0xfdcee4 ? _0x394ce2.user.id.replace(/:.*@/g, '@') : _0x1450e1 || _0x5e4fff ? _0x154179.key.participant.replace(/:.*@/g, '@') : _0x132fb3;
              if (_0x54621a == _0x36eb47.sender && _0x132fb3 == _0x36eb47.chatJid && _0x27821d(_0x154179)) {
                _0x394ce2.ev.off('messages.upsert', _0x5693de);
                clearTimeout(_0x50594f);
                _0x4470f0(_0x154179);
              }
            }
          }
        };
        _0x394ce2.ev.on('messages.upsert', _0x5693de);
        if (_0x206dc3) {
          _0x50594f = setTimeout(() => {
            _0x394ce2.ev.off('messages.upsert', _0x5693de);
            _0x5bfebc(new Error("Timeout"));
          }, _0x206dc3);
        }
      });
    };
    return _0x394ce2;
  }
  let _0x138cbc = require.resolve(__filename);
  fs.watchFile(_0x138cbc, () => {
    fs.unwatchFile(_0x138cbc);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x138cbc];
    require(_0x138cbc);
  });
  _0x4b4ee2();
}, 0x1388);
