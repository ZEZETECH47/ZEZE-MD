const {
  zokou
} = require("../framework/zokou");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require("../bdd/antilien");
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../bdd/antibot");
const conf = require("../set");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': 'profile',
  'aliases': ['pp', 'whois'],
  'desc': "to generate profile picture",
  'categorie': "Fun"
}, async (_0x507bd7, _0x20c9ba, _0x110cf2) => {
  const {
    ms: _0x2dc7f9,
    arg: _0x2491fc,
    repondre: _0x120831,
    auteurMessage: _0x49d0c2,
    nomAuteurMessage: _0x6dd084,
    msgRepondu: _0xe1aac1,
    auteurMsgRepondu: _0x1c7d9e
  } = _0x110cf2;
  let _0x4ea1bf = null;
  let _0x3aae99 = null;
  try {
    if (!_0xe1aac1) {
      _0x4ea1bf = _0x49d0c2;
      _0x3aae99 = _0x6dd084;
    } else {
      _0x4ea1bf = _0x1c7d9e;
      _0x3aae99 = '@' + _0x1c7d9e.split('@')[0x0];
    }
    let _0x5d8d7b;
    try {
      _0x5d8d7b = await _0x20c9ba.profilePictureUrl(_0x4ea1bf, "image");
    } catch (_0x50d2fc) {
      console.error("Error retrieving profile picture:", _0x50d2fc);
      _0x5d8d7b = conf.URL;
    }
    let _0x3c67f5;
    try {
      _0x3c67f5 = await _0x20c9ba.fetchStatus(_0x4ea1bf);
    } catch (_0x44b23a) {
      console.error("Error retrieving user status:", _0x44b23a);
      _0x3c67f5 = {
        'status': "About not accessible due to user privacy"
      };
    }
    const _0x3e61b9 = {
      'image': {
        'url': _0x5d8d7b
      },
      'caption': "Name: " + _0x3aae99 + "\nAbout:\n" + _0x3c67f5.status,
      'mentions': _0xe1aac1 ? [_0x1c7d9e] : []
    };
    await _0x20c9ba.sendMessage(_0x507bd7, _0x3e61b9, {
      'quoted': _0x2dc7f9
    });
  } catch (_0x78db48) {
    console.error("Unexpected error in profile command:", _0x78db48);
  }
});
zokou({
  'nomCom': "profile2",
  'aliases': ["pp2", "whois2"],
  'desc': "to generate business profile picture",
  'categorie': "Fun"
}, async (_0x1cf99a, _0x3be611, _0x3ae5b0) => {
  const {
    ms: _0x49e6d8,
    arg: _0x202171,
    repondre: _0x34e437,
    auteurMessage: _0x1d4337,
    nomAuteurMessage: _0x48d6c,
    msgRepondu: _0x298f16,
    auteurMsgRepondu: _0x4a71c1
  } = _0x3ae5b0;
  let _0x149bcb = null;
  let _0x301c0d = null;
  try {
    if (!_0x298f16) {
      _0x149bcb = _0x1d4337;
      _0x301c0d = _0x48d6c;
    } else {
      _0x149bcb = _0x4a71c1;
      _0x301c0d = '@' + _0x4a71c1.split('@')[0x0];
    }
    let _0x142791;
    try {
      _0x142791 = await _0x3be611.profilePictureUrl(_0x149bcb, "image");
    } catch (_0x283a59) {
      console.error("Error retrieving profile picture:", _0x283a59);
      _0x142791 = conf.URL;
    }
    let _0x57f568;
    try {
      _0x57f568 = await _0x3be611.fetchStatus(_0x149bcb);
    } catch (_0x3cdf87) {
      console.error("Error retrieving user status:", _0x3cdf87);
      _0x57f568 = {
        'status': "About not accessible due to user privacy"
      };
    }
    let _0x2cb100;
    try {
      _0x2cb100 = await _0x3be611.getBusinessProfile(_0x149bcb);
    } catch (_0x281193) {
      console.error("Error retrieving business profile:", _0x281193);
      _0x2cb100 = {
        'description': "No business profile available",
        'category': 'Unknown'
      };
    }
    const _0x3bf9ba = {
      'image': {
        'url': _0x142791
      },
      'caption': "Name: " + _0x301c0d + "\nAbout:\n" + _0x57f568.status + "\nBusiness Description: " + _0x2cb100.description + "\nBusiness Category: " + _0x2cb100.category,
      'mentions': _0x298f16 ? [_0x4a71c1] : []
    };
    await _0x3be611.sendMessage(_0x1cf99a, _0x3bf9ba, {
      'quoted': _0x49e6d8
    });
  } catch (_0x54e3b5) {
    console.error("Unexpected error in profile command:", _0x54e3b5);
  }
});
zokou({
  'nomCom': "tagalladmin",
  'categorie': 'Group',
  'reaction': '📣'
}, async (_0xd7a408, _0x30e8c2, _0x502268) => {
  const {
    ms: _0x1bf309,
    repondre: _0x6a07c8,
    arg: _0x2da2d3,
    verifGroupe: _0x3425a0,
    nomGroupe: _0x26428c,
    infosGroupe: _0x3388fc,
    nomAuteurMessage: _0x49cf44,
    verifAdmin: _0x5a82f2,
    superUser: _0x41e0ae
  } = _0x502268;
  if (!_0x3425a0) {
    _0x6a07c8("✋🏿 ✋🏿 This command is reserved for groups ❌");
    return;
  }
  if (!_0x5a82f2 && !_0x41e0ae) {
    _0x6a07c8("Command reserved for admins ❌");
    return;
  }
  let _0x560e10 = _0x2da2d3 && _0x2da2d3 !== " " ? _0x2da2d3.join(" ") : "Aucun Message";
  let _0x15bc3e = _0x3388fc.participants.filter(_0x4e130c => _0x4e130c.admin);
  let _0xd57e3 = "  \n\n╭─────────────━┈⊷ \n\n│❤️\n\n╰─────────────━┈⊷🌹𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃 \n\n\n│👥 *Group* : " + _0x26428c + " \n\n│👤 *Hey😀* : *" + _0x49cf44 + "* \n\n│📜 *Message* : *" + _0x560e10 + "* \n\n╰─────────────━┈⊷\n\n";
  let _0x450cf6 = ['🦴', '👀', "😮‍💨", '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', "🙏🏿", '⛔️', '$', '😟', '🥵', '🐅'];
  let _0x3ae1ec = Math.floor(Math.random() * _0x450cf6.length);
  for (const _0x38629b of _0x15bc3e) {
    _0xd57e3 += _0x450cf6[_0x3ae1ec] + "      @" + _0x38629b.id.split('@')[0x0] + "\n";
  }
  _0x30e8c2.sendMessage(_0xd7a408, {
    'text': _0xd57e3,
    'mentions': _0x15bc3e.map(_0x4b83e1 => _0x4b83e1.id)
  }, {
    'quoted': _0x1bf309
  });
});
zokou({
  'nomCom': 'fakereply',
  'categorie': "Tools"
}, async (_0x101069, _0x5b7be5, _0x236cf5) => {
  let {
    ms: _0x35e0ac,
    repondre: _0x558908
  } = _0x236cf5;
  const _0x43ef2a = () => {
    let _0x5b379c = Math.floor(Math.random() * 0x5) + 0x3;
    let _0x5b76cb = '';
    for (let _0x51757f = 0x0; _0x51757f < _0x5b379c; _0x51757f++) {
      let _0x219cc7 = Math.floor(Math.random() * "abcdefghijklmnopqrstuvwxyz".length);
      _0x5b76cb += "abcdefghijklmnopqrstuvwxyz"[_0x219cc7];
    }
    return _0x5b76cb.charAt(0x0).toUpperCase() + _0x5b76cb.slice(0x1);
  };
  let _0x24bc3c = _0x43ef2a();
  _0x558908(_0x24bc3c);
});
zokou({
  'nomCom': "chifumi",
  'categorie': 'Games',
  'reaction': '📺'
}, async (_0x58510f, _0x4299dc, _0x1cd275) => {
  const {
    repondre: _0x143ad0,
    ms: _0xa41d82,
    auteurMessage: _0x39c209,
    auteurMsgRepondu: _0x545aa7,
    msgRepondu: _0x408ae6,
    arg: _0x469bf7,
    idBot: _0x26aee1
  } = _0x1cd275;
  if (_0x408ae6) {
    _0x4299dc.sendMessage(_0x58510f, {
      'text': '@' + _0x39c209.split('@')[0x0] + " invite @" + _0x545aa7.split('@')[0x0] + " Pour jouer au jeu de chifoumi (Pierre-feuille-ciseaux);\n\nPour accepter le défi, tapez oui",
      'mentions': [_0x39c209, _0x545aa7]
    });
    try {
      const _0x3d8f05 = await _0x4299dc.awaitForMessage({
        'sender': _0x545aa7,
        'chatJid': _0x58510f,
        'timeout': 0x7530
      });
      console.log(_0x3d8f05);
      if (_0x3d8f05.message.conversation.toLowerCase() === "oui" || _0x3d8f05.message.extendedTextMessage.text.toLowerCase() === 'oui') {
        let _0x524270 = "*joueur 1 :* @" + _0x545aa7.split('@')[0x0] + "\n\n*joueur 2 :* @" + _0x39c209.split('@')[0x0] + "\n\n*Regle :* Le jeu va bientot debute , vous avez 1min maxi seconde pour faire un choix dans ma discussion  priver chacun son tours ;";
        _0x4299dc.sendMessage(_0x58510f, {
          'text': _0x524270,
          'mentions': [_0x39c209, _0x545aa7]
        });
        let _0x3943c6 = [_0x39c209, _0x545aa7];
        let _0x335780 = [];
        try {
          for (const _0x54ced3 of _0x3943c6) {
            _0x4299dc.sendMessage(_0x58510f, {
              'text': '@' + _0x54ced3.split('@')[0x0] + " Veillez vous diriger dans cette discussion pour faire un choix https://wa.me/" + _0x26aee1.split('@')[0x0] + " ",
              'mentions': [_0x54ced3]
            });
            _0x4299dc.sendMessage(_0x54ced3, {
              'text': "Vous avez droit a 3 choix ;\n\n   pierre\n\n   papier\n\n   ciseaux\n\n Veillez envoyez votre choix"
            });
            const _0x532dea = await _0x4299dc.awaitForMessage({
              'sender': _0x54ced3,
              'chatJid': _0x54ced3,
              'timeout': 0x7530
            });
            console.log("voici le message de " + _0x54ced3);
            console.log(_0x532dea);
            _0x335780.push(_0x532dea.message.extendedTextMessage.text.toLowerCase());
          }
          console.log(_0x335780);
          const _0x4e976a = ["pierre", "papier", "ciseaux"];
          const _0x3bd8e5 = _0x335780[0x0];
          const _0x4fd195 = _0x335780[0x1];
          if (!_0x4e976a.includes(_0x3bd8e5) || !_0x4e976a.includes(_0x4fd195)) {
            _0x4299dc.sendMessage(_0x58510f, {
              'text': "*joueur 1 :* @" + _0x545aa7.split('@')[0x0] + "\n\n*joueur 2 :* @" + _0x39c209.split('@')[0x0] + "\n\n*resultat :* l'un ou les deux choix ne sont pas valides.",
              'mentions': [_0x39c209, _0x545aa7]
            });
          } else {
            if (_0x3bd8e5 === _0x4fd195) {
              _0x4299dc.sendMessage(_0x58510f, {
                'text': "*joueur 1 :* @" + _0x545aa7.split('@')[0x0] + " a choisi(e) *" + _0x4fd195 + "* \n\n*joueur 2 :* @" + _0x39c209.split('@')[0x0] + " a choisi(e) *" + _0x3bd8e5 + "*\n\nresultat : il y'a donc match nul",
                'mentions': [_0x39c209, _0x545aa7]
              });
            } else if (_0x3bd8e5 === "pierre" && _0x4fd195 === 'ciseaux' || _0x3bd8e5 === "papier" && _0x4fd195 === "pierre" || _0x3bd8e5 === "ciseaux" && _0x4fd195 === "papier") {
              _0x4299dc.sendMessage(_0x58510f, {
                'text': "*joueur 1 :* @" + _0x545aa7.split('@')[0x0] + " a choisi(e) *" + _0x4fd195 + "* \n\n*joueur 2 :* @" + _0x39c209.split('@')[0x0] + " a choisi(e) *" + _0x3bd8e5 + "*\n\n*resultat :* @" + _0x39c209.split('@')[0x0] + " remporte la partie ",
                'mentions': [_0x39c209, _0x545aa7]
              });
            } else {
              _0x4299dc.sendMessage(_0x58510f, {
                'text': "*joueur 1 :* @" + _0x545aa7.split('@')[0x0] + " a choisi(e) *" + _0x4fd195 + "* \n\n*joueur 2 :* @" + _0x39c209.split('@')[0x0] + " a choisi(e) *" + _0x3bd8e5 + "*\n\n*resultat :* @" + _0x545aa7.split('@')[0x0] + " remporte la partie ",
                'mentions': [_0x39c209, _0x545aa7]
              });
            }
          }
        } catch (_0x3ff83f) {
          if (_0x3ff83f.message === "Timeout") {
            _0x4299dc.sendMessage(_0x58510f, {
              'text': "*joueur 1 :* @" + _0x545aa7.split('@')[0x0] + "\n\n*joueur 2 :* @" + _0x39c209.split('@')[0x0] + "\n\n*resultat :* nos joueurs ont mis trop de temps pour ce decider ;\n\nPar consequent , le jeu est annuler",
              'mentions': [_0x39c209, _0x545aa7]
            });
          } else {
            console.error(_0x3ff83f);
          }
        }
      } else {
        _0x143ad0("invitation refuse");
      }
    } catch (_0x3e6e00) {
      if (_0x3e6e00.message === "Timeout") {
        _0x4299dc.sendMessage(_0x58510f, {
          'text': '@' + _0x545aa7.split('@')[0x0] + " a mis trop de temps pour repondre a l'invitation de @" + _0x39c209.split('@')[0x0] + " ;\n\nPar consequent , le jeu est annuler",
          'mentions': [_0x39c209, _0x545aa7]
        });
      } else {
        console.error(_0x3e6e00);
      }
    }
  }
});
zokou({
  'nomCom': "quizz",
  'categorie': "Games",
  'reaction': "👨🏿‍💻"
}, async (_0x20d367, _0x2f285b, _0x222572) => {
  const {
    repondre: _0xc54ecb,
    auteurMessage: _0x21a60d
  } = _0x222572;
  try {
    let _0x7ff7e9 = await axios.get("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile");
    let _0x430346 = "     Hacking-Quizz-Games\n\n*Categorie :* " + _0x7ff7e9.data.quizzes[0x0].category + "\n\n*Question :* " + _0x7ff7e9.data.quizzes[0x0].question + "\n\n*Propositon de reponses :*\n";
    let _0x14b6c9 = [];
    for (const _0x2efccb of _0x7ff7e9.data.quizzes[0x0].badAnswers) {
      _0x14b6c9.push(_0x2efccb);
    }
    ;
    _0x14b6c9.push(_0x7ff7e9.data.quizzes[0x0].answer);
    async function _0x161e29(_0xde7cc7) {
      const _0x7d02d1 = _0xde7cc7.slice();
      for (let _0x2de554 = _0x7d02d1.length - 0x1; _0x2de554 > 0x0; _0x2de554--) {
        const _0x3795d9 = Math.floor(Math.random() * (_0x2de554 + 0x1));
        [_0x7d02d1[_0x2de554], _0x7d02d1[_0x3795d9]] = [_0x7d02d1[_0x3795d9], _0x7d02d1[_0x2de554]];
      }
      return _0x7d02d1;
    }
    ;
    let _0x7d2382 = await _0x161e29(_0x14b6c9);
    for (let _0x351a32 = 0x0; _0x351a32 < _0x7d2382.length; _0x351a32++) {
      _0x430346 += '*' + (_0x351a32 + 0x1) + " :* " + _0x7d2382[_0x351a32] + "\n";
    }
    _0x430346 += "\n\nEntrez le chiffre de votre choix";
    _0xc54ecb(_0x430346);
    let _0x1b0e89 = await _0x2f285b.awaitForMessage({
      'sender': _0x21a60d,
      'chatJid': _0x20d367,
      'timeout': 0x3a98
    });
    let _0x332645;
    try {
      _0x332645 = _0x1b0e89.message.extendedTextMessage.text;
    } catch {
      _0x332645 = _0x1b0e89.message.conversation;
    }
    ;
    if (_0x7d2382[_0x332645 - 0x1] == _0x7ff7e9.data.quizzes[0x0].answer) {
      _0xc54ecb("Bravo vous avez trouvez la bonne reponse ;");
    } else {
      _0xc54ecb("Erreur fin du quizz");
    }
  } catch (_0x444a0f) {
    console.log(_0x444a0f);
  }
});
zokou({
  'nomCom': "getall",
  'categorie': 'owner',
  'reaction': '📜',
  'fromMe': true,
  'desc': "Get JIDs of all members of groups, personal chats, or all groups.",
  'usage': "[ members / user / groups ]",
  'filename': __filename,
  'public': false
}, async (_0x38335d, _0x1ac8e1, _0x305ded) => {
  try {
    let _0x5a357d = _0x1ac8e1.body.split(" ")[0x1];
    let _0x53a294 = '';
    if (!_0x5a357d) {
      return _0x38335d.reply("*Use:* " + prefix + "getall members | user | groups");
    }
    if (_0x5a357d === "members" || _0x5a357d === 'member') {
      if (!_0x1ac8e1.isGroup) {
        return _0x38335d.reply(tlang("group"));
      }
      const _0xaf6fc = _0x1ac8e1.metadata.participants || [];
      for (let _0x34f493 of _0xaf6fc) {
        _0x53a294 += "📍 " + _0x34f493.id + "\n";
      }
      if (_0x53a294) {
        _0x38335d.reply("*「 LIST OF GROUP MEMBERS 」*\n\n" + _0x53a294);
      } else {
        _0x38335d.reply("*Request Denied!*");
      }
    } else {
      if (_0x5a357d === "user" || _0x5a357d === 'pm' || _0x5a357d === 'pc') {
        let _0x3c00ad = (await zokou.chats.all()).filter(_0x4df349 => _0x4df349.id.endsWith(".net"));
        for (let _0x250335 of _0x3c00ad) {
          _0x53a294 += "📍 " + _0x250335.id + "\n";
        }
        if (_0x53a294) {
          _0x38335d.reply("*「 LIST OF PERSONAL CHATS 」*\n\nTotal " + _0x3c00ad.length + " users in personal chat.\n\n" + _0x53a294);
        } else {
          _0x38335d.reply("*Request Denied!*");
        }
      } else {
        if (_0x5a357d === "group" || _0x5a357d === "groups" || _0x5a357d === 'gc') {
          let _0x35c045 = await zokou.groupFetchAllParticipating();
          const _0x1024f0 = Object.entries(_0x35c045).map(([_0x256516, _0x477159]) => _0x477159.id);
          for (let _0x363d8c of _0x1024f0) {
            _0x53a294 += "📍 " + _0x363d8c + "\n";
          }
          if (_0x53a294) {
            _0x38335d.reply("*「 LIST OF GROUP CHAT JIDS 」*\n\n" + _0x53a294);
          } else {
            _0x38335d.reply("*Request Denied!*");
          }
        } else {
          return _0x38335d.reply("*Use:* " + prefix + "getall members | user | groups");
        }
      }
    }
  } catch (_0x3df562) {
    console.error(_0x3df562);
    _0x38335d.reply("*Error in getall command:* " + _0x3df562.message);
  }
});
zokou({
  'nomCom': "timezone",
  'aliases': ["timee", "datee"],
  'desc': "Check the current local time and date for a specified timezone.",
  'categorie': 'new',
  'reaction': "🕰️"
}, async (_0x3dc37f, _0x21c3d4, _0xda19a0) => {
  const {
    repondre: _0x3d7034,
    arg: _0x3fad01
  } = _0xda19a0;
  const _0x1af091 = _0x3fad01[0x0];
  if (!_0x1af091) {
    return _0x3d7034("❌ Please provide a timezone code. Example: .timezone TZ");
  }
  try {
    const _0x585f44 = new Date();
    const _0x9b0277 = {
      'hour': "2-digit",
      'minute': '2-digit',
      'second': "2-digit",
      'hour12': true,
      'timeZone': _0x1af091
    };
    const _0x5a56ed = {
      ..._0x9b0277,
      'weekday': 'long',
      'year': "numeric",
      'month': "long",
      'day': 'numeric'
    };
    const _0x5cf81e = _0x585f44.toLocaleTimeString("en-US", _0x9b0277);
    const _0x2c49da = _0x585f44.toLocaleDateString("en-US", _0x5a56ed);
    _0x3d7034("🕰️ *Current Local Time:* " + _0x5cf81e + "\n📅 *Current Date:* " + _0x2c49da);
  } catch (_0x1b8b4e) {
    console.error("Error in .timezone command:", _0x1b8b4e);
    _0x3d7034("❌ An error occurred. Please try again later.");
  }
});
zokou({
  'nomCom': 'color',
  'aliases': ["rcolor", "colorcode"],
  'desc': "Generate a random color with name and code.",
  'categorie': "script",
  'reaction': '🤦'
}, async (_0x448b5c, _0x54c353, _0x4c7bb1) => {
  const {
    repondre: _0x2de344,
    arg: _0x418c05
  } = _0x4c7bb1;
  try {
    const _0x46b05f = ["Red", "Green", "Blue", 'Yellow', "Orange", 'Purple', 'Pink', 'Brown', "Black", "White", "Gray", "Cyan", "Magenta", "Violet", 'Indigo', "Teal", 'Lavender', "Turquoise"];
    const _0x18d536 = '#' + Math.floor(Math.random() * 0xffffff).toString(0x10).padStart(0x6, '0');
    const _0x59491e = _0x46b05f[Math.floor(Math.random() * _0x46b05f.length)];
    _0x2de344("🎨 *Random Color:* \nName: " + _0x59491e + "\nCode: " + _0x18d536);
  } catch (_0x3a0576) {
    console.error("Error in .color command:", _0x3a0576);
    _0x2de344("❌ An error occurred while generating the random color.");
  }
});
zokou({
  'nomCom': 'binary',
  'aliases': ["binarydgt", "binarycode"],
  'desc': "Convert text into binary format",
  'categorie': "script",
  'reaction': '🤦'
}, async (_0x221c36, _0x1f1fcc, _0x21f286) => {
  const {
    repondre: _0x30347a,
    arg: _0x2ca399
  } = _0x21f286;
  const _0x508e74 = _0x2ca399.join(" ");
  if (!_0x508e74) {
    return _0x30347a("Please provide a text to convert to binary.");
  }
  try {
    const _0x3e46ad = _0x508e74.split('').map(_0xec48f2 => {
      return ("00000000" + _0xec48f2.charCodeAt(0x0).toString(0x2)).slice(-0x8);
    }).join(" ");
    _0x30347a("🔑 *Binary Representation:* \n" + _0x3e46ad);
  } catch (_0x51f25d) {
    console.error("Error in .binary command:", _0x51f25d);
    _0x30347a("❌ An error occurred while converting to binary.");
  }
});
zokou({
  'nomCom': "dbinary",
  'aliases': ["binarydecode", "decodebinary"],
  'desc': "Decode binary string into text.",
  'categorie': "script",
  'reaction': '🔓'
}, async (_0x25bd7e, _0x3e8750, _0x85f54b) => {
  const {
    repondre: _0x236b96,
    arg: _0x40cbaf
  } = _0x85f54b;
  const _0x4cd8b5 = _0x40cbaf.join(" ");
  if (!_0x4cd8b5) {
    return _0x236b96("❌ Please provide the binary string to decode.");
  }
  try {
    const _0x4dd160 = _0x4cd8b5.split(" ").map(_0x477f6b => {
      return String.fromCharCode(parseInt(_0x477f6b, 0x2));
    }).join('');
    _0x236b96("🔓 *Decoded Text:* \n" + _0x4dd160);
  } catch (_0x121ecf) {
    console.error("Error in .dbinary command:", _0x121ecf);
    _0x236b96("❌ An error occurred while decoding the binary string.");
  }
});
zokou({
  'nomCom': 'base64',
  'aliases': ["base64encode", "encodebase64"],
  'desc': "Encode text into Base64 format.",
  'categorie': "script",
  'reaction': '🔒'
}, async (_0x40a91f, _0x9c142, _0x13c4be) => {
  const {
    repondre: _0x511a51,
    arg: _0x213798
  } = _0x13c4be;
  const _0x33b9a0 = _0x213798.join(" ");
  if (!_0x33b9a0) {
    return _0x511a51("❌ Please provide the text to encode into Base64.");
  }
  try {
    const _0x24e711 = Buffer.from(_0x33b9a0).toString("base64");
    _0x511a51("🔑 *Encoded Base64 Text:* \n" + _0x24e711);
  } catch (_0x5b92a4) {
    console.error("Error in .base64 command:", _0x5b92a4);
    _0x511a51("❌ An error occurred while encoding the text into Base64.");
  }
});
zokou({
  'nomCom': 'unbase64',
  'aliases': ['base64decode', "decodebase64"],
  'desc': "De
