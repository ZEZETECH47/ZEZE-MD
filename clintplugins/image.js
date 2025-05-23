const {
  zokou
} = require('../framework/zokou');
const gis = require('g-i-s');
const axios = require("axios");
const conf = require(__dirname + '/../set');
zokou({
  'nomCom': "screenswidth",
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x459641, _0x26540d, _0x48716c) => {
  const {
    repondre: _0x4ba5e2,
    ms: _0x423658,
    arg: _0x2cabf0
  } = _0x48716c;
  try {
    if (!_0x2cabf0[0x0]) {
      return _0x4ba5e2("Please insert a website link to take a screenshot!");
    }
    const _0xb74ec5 = 'https://image.thum.io/get/width/' + _0x2cabf0[0x0];
    await _0x26540d.sendMessage(_0x459641, {
      'image': {
        'url': _0xb74ec5
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x423658
    });
  } catch (_0x40a6a2) {
    console.error(_0x40a6a2);
    _0x4ba5e2("An error occurred while processing the screenshot: " + _0x40a6a2.message);
  }
});
zokou({
  'nomCom': "screenscrop",
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x21ca1e, _0x29ffcd, _0x385c54) => {
  const {
    repondre: _0x376f66,
    ms: _0xf816e8,
    arg: _0x975dc
  } = _0x385c54;
  try {
    if (!_0x975dc[0x0]) {
      return _0x376f66("Please insert a website link to take a screenshot!");
    }
    const _0xd392c1 = "https://image.thum.io/get/crop/" + _0x975dc[0x0];
    await _0x29ffcd.sendMessage(_0x21ca1e, {
      'image': {
        'url': _0xd392c1
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0xf816e8
    });
  } catch (_0x136469) {
    console.error(_0x136469);
    _0x376f66("An error occurred while processing the screenshot: " + _0x136469.message);
  }
});
zokou({
  'nomCom': "maxage",
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0xd22c10, _0x267c63, _0x4d0df3) => {
  const {
    repondre: _0x41b3dc,
    ms: _0x3730a0,
    arg: _0x212b1a
  } = _0x4d0df3;
  try {
    if (!_0x212b1a[0x0]) {
      return _0x41b3dc("Please insert a website link to take a screenshot!");
    }
    const _0x3a4a03 = "https://image.thum.io/get/maxAge/" + _0x212b1a[0x0];
    await _0x267c63.sendMessage(_0xd22c10, {
      'image': {
        'url': _0x3a4a03
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x3730a0
    });
  } catch (_0x4aefa6) {
    console.error(_0x4aefa6);
    _0x41b3dc("An error occurred while processing the screenshot: " + _0x4aefa6.message);
  }
});
zokou({
  'nomCom': "jpg",
  'categorie': 'tak-screenshots',
  'reaction': "🎞️"
}, async (_0x1e26e5, _0xb7179d, _0x2d5a46) => {
  const {
    repondre: _0x27b48e,
    ms: _0x53a9c1,
    arg: _0x4a7f30
  } = _0x2d5a46;
  try {
    if (!_0x4a7f30[0x0]) {
      return _0x27b48e("Please insert a website link to take a screenshot!");
    }
    const _0x3f49a1 = 'https://image.thum.io/get/allowJPG/' + _0x4a7f30[0x0];
    await _0xb7179d.sendMessage(_0x1e26e5, {
      'image': {
        'url': _0x3f49a1
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x53a9c1
    });
  } catch (_0x3ace6e) {
    console.error(_0x3ace6e);
    _0x27b48e("An error occurred while processing the screenshot: " + _0x3ace6e.message);
  }
});
zokou({
  'nomCom': 'png',
  'aliases': ['ss', "sshot"],
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x62f5c4, _0x439436, _0x3a287c) => {
  const {
    repondre: _0x53a3c4,
    ms: _0x4740e9,
    arg: _0x5df5cf
  } = _0x3a287c;
  try {
    if (!_0x5df5cf[0x0]) {
      return _0x53a3c4("Please insert a website link to take a screenshot!");
    }
    const _0x4aa3eb = "https://image.thum.io/get/png/" + _0x5df5cf[0x0];
    await _0x439436.sendMessage(_0x62f5c4, {
      'image': {
        'url': _0x4aa3eb
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x4740e9
    });
  } catch (_0x4ef4b4) {
    console.error(_0x4ef4b4);
    _0x53a3c4("An error occurred while processing the screenshot: " + _0x4ef4b4.message);
  }
});
zokou({
  'nomCom': "noanimate",
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x4dea9e, _0x19327a, _0xd4e16b) => {
  const {
    repondre: _0x57ed13,
    ms: _0x552a3a,
    arg: _0x3b39e0
  } = _0xd4e16b;
  try {
    if (!_0x3b39e0[0x0]) {
      return _0x57ed13("Please insert a website link to take a screenshot!");
    }
    const _0x4c8c61 = "https://image.thum.io/get/noanimate/" + _0x3b39e0[0x0];
    await _0x19327a.sendMessage(_0x4dea9e, {
      'image': {
        'url': _0x4c8c61
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x552a3a
    });
  } catch (_0xf9c722) {
    console.error(_0xf9c722);
    _0x57ed13("An error occurred while processing the screenshot: " + _0xf9c722.message);
  }
});
zokou({
  'nomCom': "wait1",
  'aliases': ['ss', "sshot"],
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x9840bd, _0x3d32ac, _0x1316b0) => {
  const {
    repondre: _0x27beb4,
    ms: _0x2aeb94,
    arg: _0x538688
  } = _0x1316b0;
  try {
    if (!_0x538688[0x0]) {
      return _0x27beb4("Please insert a website link to take a screenshot!");
    }
    const _0x3fa6bd = "https://image.thum.io/get/wait/" + _0x538688[0x0];
    await _0x3d32ac.sendMessage(_0x9840bd, {
      'image': {
        'url': _0x3fa6bd
      },
      'caption': "*Screenshot take by ALONE QUEEN v²"
    }, {
      'quoted': _0x2aeb94
    });
  } catch (_0x2714cd) {
    console.error(_0x2714cd);
    _0x27beb4("An error occurred while processing the screenshot: " + _0x2714cd.message);
  }
});
zokou({
  'nomCom': "viewportwidth",
  'aliases': ['ss', "sshot"],
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x428143, _0x327cf8, _0x53645c) => {
  const {
    repondre: _0x5936b7,
    ms: _0x45bd2b,
    arg: _0x398232
  } = _0x53645c;
  try {
    if (!_0x398232[0x0]) {
      return _0x5936b7("Please insert a website link to take a screenshot!");
    }
    const _0x2a27eb = "https://image.thum.io/get/viewportWidth/" + _0x398232[0x0];
    await _0x327cf8.sendMessage(_0x428143, {
      'image': {
        'url': _0x2a27eb
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x45bd2b
    });
  } catch (_0x51ae5a) {
    console.error(_0x51ae5a);
    _0x5936b7("An error occurred while processing the screenshot: " + _0x51ae5a.message);
  }
});
zokou({
  'nomCom': "iphone5",
  'categorie': "take-screenshots",
  'reaction': '🎞️'
}, async (_0x3c89b2, _0x4e0930, _0x22e62a) => {
  const {
    repondre: _0x5b4e17,
    ms: _0x489553,
    arg: _0x574dd0
  } = _0x22e62a;
  try {
    if (!_0x574dd0[0x0]) {
      return _0x5b4e17("Please insert a website link to take a screenshot!");
    }
    const _0x2a748e = "https://image.thum.io/get/iphone5/" + _0x574dd0[0x0];
    await _0x4e0930.sendMessage(_0x3c89b2, {
      'image': {
        'url': _0x2a748e
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x489553
    });
  } catch (_0x279a77) {
    console.error(_0x279a77);
    _0x5b4e17("An error occurred while processing the screenshot: " + _0x279a77.message);
  }
});
zokou({
  'nomCom': 'iphone6',
  'aliases': ['ss', 'sshot'],
  'categorie': "take-screenshots",
  'reaction': '🎞️'
}, async (_0xa09dea, _0x5d9049, _0x343442) => {
  const {
    repondre: _0x50bc52,
    ms: _0x9cc598,
    arg: _0x16b800
  } = _0x343442;
  try {
    if (!_0x16b800[0x0]) {
      return _0x50bc52("Please insert a website link to take a screenshot!");
    }
    const _0x163164 = "https://image.thum.io/get/iphone6/" + _0x16b800[0x0];
    await _0x5d9049.sendMessage(_0xa09dea, {
      'image': {
        'url': _0x163164
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x9cc598
    });
  } catch (_0x5cc102) {
    console.error(_0x5cc102);
    _0x50bc52("An error occurred while processing the screenshot: " + _0x5cc102.message);
  }
});
zokou({
  'nomCom': "iphone6plus",
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x2bfc68, _0xc360aa, _0x50db98) => {
  const {
    repondre: _0x26e714,
    ms: _0x3553d7,
    arg: _0x1c98c9
  } = _0x50db98;
  try {
    if (!_0x1c98c9[0x0]) {
      return _0x26e714("Please insert a website link to take a screenshot!");
    }
    const _0x1f8e1c = "https://image.thum.io/get/iphone6plus/" + _0x1c98c9[0x0];
    await _0xc360aa.sendMessage(_0x2bfc68, {
      'image': {
        'url': _0x1f8e1c
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x3553d7
    });
  } catch (_0x456ad9) {
    console.error(_0x456ad9);
    _0x26e714("An error occurred while processing the screenshot: " + _0x456ad9.message);
  }
});
zokou({
  'nomCom': "iphoneX",
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x38ab48, _0x477000, _0x490e4c) => {
  const {
    repondre: _0x2056ba,
    ms: _0x136d47,
    arg: _0x160f38
  } = _0x490e4c;
  try {
    if (!_0x160f38[0x0]) {
      return _0x2056ba("Please insert a website link to take a screenshot!");
    }
    const _0x4f3d01 = "https://image.thum.io/get/iphoneX/" + _0x160f38[0x0];
    await _0x477000.sendMessage(_0x38ab48, {
      'image': {
        'url': _0x4f3d01
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x136d47
    });
  } catch (_0x17697b) {
    console.error(_0x17697b);
    _0x2056ba("An error occurred while processing the screenshot: " + _0x17697b.message);
  }
});
zokou({
  'nomCom': "iphone12pro",
  'aliases': ['ss', "sshot"],
  'categorie': 'take-screenshots',
  'reaction': "🎞️"
}, async (_0x20b20d, _0x350ff2, _0x35448e) => {
  const {
    repondre: _0x46ce03,
    ms: _0x3efc6b,
    arg: _0x55f47e
  } = _0x35448e;
  try {
    if (!_0x55f47e[0x0]) {
      return _0x46ce03("Please insert a website link to take a screenshot!");
    }
    const _0x10e68a = "https://image.thum.io/get/iphone12pro/" + _0x55f47e[0x0];
    await _0x350ff2.sendMessage(_0x20b20d, {
      'image': {
        'url': _0x10e68a
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x3efc6b
    });
  } catch (_0x5dd0ab) {
    console.error(_0x5dd0ab);
    _0x46ce03("An error occurred while processing the screenshot: " + _0x5dd0ab.message);
  }
});
zokou({
  'nomCom': "iphone14promax",
  'aliases': ['ss', "sshot"],
  'categorie': "take-screenshots",
  'reaction': "🎞️"
}, async (_0x3f8dfc, _0x4b3d4b, _0x41e6b3) => {
  const {
    repondre: _0x5367a2,
    ms: _0x4b9f6e,
    arg: _0xb6f84
  } = _0x41e6b3;
  try {
    if (!_0xb6f84[0x0]) {
      return _0x5367a2("Please insert a website link to take a screenshot!");
    }
    const _0x44b842 = "https://image.thum.io/get/iphone14promax/" + _0xb6f84[0x0];
    await _0x4b3d4b.sendMessage(_0x3f8dfc, {
      'image': {
        'url': _0x44b842
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x4b9f6e
    });
  } catch (_0x5502b4) {
    console.error(_0x5502b4);
    _0x5367a2("An error occurred while processing the screenshot: " + _0x5502b4.message);
  }
});
zokou({
  'nomCom': "galaxys5",
  'aliases': ['ss', 'sshot'],
  'categorie': "take-screenshots",
  'reaction': '🎞️'
}, async (_0x1c860d, _0x589ccc, _0x5ce82d) => {
  const {
    repondre: _0x10d8ed,
    ms: _0x47a3c1,
    arg: _0x35f2d1
  } = _0x5ce82d;
  try {
    if (!_0x35f2d1[0x0]) {
      return _0x10d8ed("Please insert a website link to take a screenshot!");
    }
    const _0x4c781d = "https://image.thum.io/get/galaxys5/" + _0x35f2d1[0x0];
    await _0x589ccc.sendMessage(_0x1c860d, {
      'image': {
        'url': _0x4c781d
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x47a3c1
    });
  } catch (_0x4c3832) {
    console.error(_0x4c3832);
    _0x10d8ed("An error occurred while processing the screenshot: " + _0x4c3832.message);
  }
});
zokou({
  'nomCom': "screenshot",
  'aliases': ['ss', "sshot"],
  'categorie': "take-screenshots",
  'reaction': '🎞️'
}, async (_0x5314d6, _0x4c6fac, _0x3a0426) => {
  const {
    repondre: _0x9d70e6,
    ms: _0x16152d,
    arg: _0x274e71
  } = _0x3a0426;
  try {
    if (!_0x274e71[0x0]) {
      return _0x9d70e6("Please insert a website link to take a screenshot!");
    }
    const _0x2707a9 = "https://image.thum.io/get/fullpage/" + _0x274e71[0x0];
    await _0x4c6fac.sendMessage(_0x5314d6, {
      'image': {
        'url': _0x2707a9
      },
      'caption': "*Screenshot taken by ALONE QUEEN v²"
    }, {
      'quoted': _0x16152d
    });
  } catch (_0x1563c5) {
    console.error(_0x1563c5);
    _0x9d70e6("An error occurred while processing the screenshot: " + _0x1563c5.message);
  }
});
zokou({
  'nomCom': "imgs",
  'aliases': ["image", "images"],
  'categorie': 'mod-image',
  'reaction': '📷'
}, async (_0x2a275c, _0x1d65b5, _0x4f4884) => {
  const {
    repondre: _0x16860f,
    ms: _0x5e12b2,
    arg: _0x4ede6c
  } = _0x4f4884;
  if (!_0x4ede6c[0x0]) {
    _0x16860f("Which image?");
    return;
  }
  const _0x12e97e = _0x4ede6c.join(" ");
  gis(_0x12e97e, (_0x3f70f2, _0x4982d2) => _0x5249a1(_0x3f70f2, _0x4982d2));
  function _0x5249a1(_0x5477d5, _0x4dd8a6) {
    if (_0x5477d5) {
      _0x16860f("Oops, an error occurred.");
      return;
    }
    if (!_0x4dd8a6 || _0x4dd8a6.length === 0x0) {
      _0x16860f("No images found.");
      return;
    }
    for (let _0x51851e = 0x0; _0x51851e < Math.min(_0x4dd8a6.length, 0x5); _0x51851e++) {
      _0x1d65b5.sendMessage(_0x2a275c, {
        'image': {
          'url': _0x4dd8a6[_0x51851e].url
        },
        'caption': "*Downloaded by " + conf.BOT + '*',
        'contextInfo': {
          'externalAdReply': {
            'title': "Image Search Result",
            'body': "Here's the image you searched for: " + _0x12e97e,
            'thumbnailUrl': _0x4dd8a6[_0x51851e].url,
            'sourceUrl': conf.GURL,
            'mediaType': 0x1,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x5e12b2
      });
    }
  }
});
zokou({
  'nomCom': "messi",
  'categorie': "mod-image",
  'reaction': '🐐'
}, async (_0x1e0edf, _0x4ef92d, _0x2e8bce) => {
  const {
    repondre: _0x2e4582,
    ms: _0x3a926e
  } = _0x2e8bce;
  try {
    const _0x132d8c = await axios.get("https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json");
    const _0x4ae32b = _0x132d8c.data;
    if (!Array.isArray(_0x4ae32b) || _0x4ae32b.length === 0x0) {
      throw new Error("No images found in the response.");
    }
    for (let _0x28feda = 0x0; _0x28feda < 0x5; _0x28feda++) {
      const _0x527055 = Math.floor(Math.random() * _0x4ae32b.length);
      const _0x1a61d7 = _0x4ae32b[_0x527055];
      await _0x4ef92d.sendMessage(_0x1e0edf, {
        'image': {
          'url': _0x1a61d7
        },
        'caption': "*Downloaded by " + conf.BOT + '*',
        'contextInfo': {
          'externalAdReply': {
            'title': "Modern-Logo Search Result",
            'body': "Here's an inspiring logo related to: messi",
            'thumbnailUrl': conf.URL,
            'sourceUrl': conf.GURL,
            'mediaType': 0x1,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x3a926e
      });
    }
  } catch (_0x305290) {
    console.error("Error occurred while retrieving data:", _0x305290);
    _0x2e4582("Error occurred while retrieving data: " + _0x305290.message);
  }
});
zokou({
  'nomCom': 'waifues',
  'categorie': "mod-image",
  'reaction': '🙄'
}, async (_0x313fbb, _0x1dc7ef, _0x5052ba) => {
  const {
    repondre: _0x57b21e,
    ms: _0x491224
  } = _0x5052ba;
  try {
    for (let _0x2674de = 0x0; _0x2674de < 0x5; _0x2674de++) {
      const _0xf648a9 = await axios.get('https://api.waifu.pics/nsfw/waifu');
      const _0x953d0d = _0xf648a9.data.url;
      await _0x1dc7ef.sendMessage(_0x313fbb, {
        'image': {
          'url': _0x953d0d
        },
        'caption': "*Downloaded by " + conf.BOT + '*',
        'contextInfo': {
          'externalAdReply': {
            'title': "Image Search Result",
            'body': "Here's a great image related to: waifu",
            'thumbnailUrl': conf.URL,
            'sourceUrl': conf.GURL,
            'mediaType': 0x1,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x491224
      });
    }
  } catch (_0x5e9f6d) {
    _0x57b21e("Error retrieving data: " + _0x5e9f6d.message);
  }
});
zokou({
  'nomCom': "traps",
  'categorie': "mod-image",
  'reaction': '🙄'
}, async (_0x20bfc0, _0x4b6e0f, _0xfcd73c) => {
  const {
    repondre: _0x5243f8,
    ms: _0x37c473
  } = _0xfcd73c;
  try {
    for (let _0x13d906 = 0x0; _0x13d906 < 0x5; _0x13d906++) {
      const _0x7ea91c = await axios.get('https://api.waifu.pics/nsfw/trap');
      const _0x5266ac = _0x7ea91c.data.url;
      await _0x4b6e0f.sendMessage(_0x20bfc0, {
        'image': {
          'url': _0x5266ac
        },
        'caption': "*Downloaded by " + conf.BOT + '*',
        'contextInfo': {
          'externalAdReply': {
            'title': "Image Search Result",
            'body': "Here's a great image related to: waifu",
            'thumbnailUrl': conf.URL,
            'sourceUrl': conf.GURL,
            'mediaType': 0x1,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x37c473
      });
    }
  } catch (_0x7b1d34) {
    _0x5243f8("Error retrieving data: " + _0x7b1d34.message);
  }
});
zokou({
  'nomCom': "gneko",
  'categorie': "mod-image",
  'reaction': '🙄'
}, async (_0x562ba5, _0xd19cfd, _0x48b852) => {
  const {
    repondre: _0xb301df,
    ms: _0x256e8f
  } = _0x48b852;
  try {
    for (let _0x58c4f1 = 0x0; _0x58c4f1 < 0x5; _0x58c4f1++) {
      const _0x3b1caf = await axios.get("https://api.waifu.pics/nsfw/neko");
      const _0x710d94 = _0x3b1caf.data.url;
      await _0xd19cfd.sendMessage(_0x562ba5, {
        'image': {
          'url': _0x710d94
        },
        'caption': "*Downloaded by " + conf.BOT + '*',
        'contextInfo': {
          'externalAdReply': {
            'title': "Image Search Result",
            'body': "Here's a great image related to: waifu",
            'thumbnailUrl': conf.URL,
            'sourceUrl': conf.GURL,
            'mediaType': 0x1,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x256e8f
      });
    }
  } catch (_0xafd961) {
    _0xb301df("Error retrieving data: " + _0xafd961.message);
  }
});
zokou({
  'nomCom': "blowjobs",
  'categorie': 'mod-image',
  'reaction': '🙄'
}, async (_0x253906, _0x386e80, _0x1cec16) => {
  const {
    repondre: _0x22fbc7,
    ms: _0x349b2b
  } = _0x1cec16;
  try {
    for (let _0x4b7f57 = 0x0; _0x4b7f57 < 0x5; _0x4b7f57++) {
      const _0x46b3af = await axios.get("https://api.waifu.pics/nsfw/blowjob");
      const _0x394cd3 = _0x46b3af.data.url;
      await _0x386e80.sendMessage(_0x253906, {
        'image': {
          'url': _0x394cd3
        },
        'caption': "*Downloaded by " + conf.BOT + '*',
        'contextInfo': {
          'externalAdReply': {
            'title': "Image Search Result",
            'body': "Here's a great image related to: waifu",
            'thumbnailUrl': conf.URL,
            'sourceUrl': conf.GURL,
            'mediaType': 0x1,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x349b2b
      });
    }
  } catch (_0x911c1d) {
    _0x22fbc7("Error retrieving data: " + _0x911c1d.message);
  }
});
zokou({
  'nomCom': "lulcaty",
  'reaction': '📡',
  'categorie': "mod-image"
}, async (_0x1eab5c, _0x30b781, _0x1e21e8) => {
  const {
    repondre: _0x22b28c,
    arg: _0x1e9484,
    ms: _0x2be120
  } = _0x1e21e8;
  try {
    if (!_0x1e9484 || _0x1e9484.length === 0x0) {
      return _0x22b28c("Provide some text.");
    }
    const _0x2f00c9 = _0x1e9484.join(" ");
    const _0x5b6df3 = "https://api.popcat.xyz/lulcat?text=" + _0x2f00c9;
    _0x30b781.sendMessage(_0x1eab5c, {
      'image': {
        'url': _0x5b6df3
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x2be120
    });
  } catch (_0x645d39) {
    console.error("Error:", _0x645d39.message || "An error occurred");
    _0x22b28c("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "sadcaty",
  'reaction': '📡',
  'categorie': "mod-image"
}, async (_0x3fe1c1, _0x4e6f04, _0x22adb1) => {
  const {
    repondre: _0xd6c117,
    arg: _0x5bd73d,
    ms: _0x5ebcf1
  } = _0x22adb1;
  try {
    if (!_0x5bd73d || _0x5bd73d.length === 0x0) {
      return _0xd6c117("Provide some text.");
    }
    const _0x5942db = _0x5bd73d.join(" ");
    const _0x12709a = "https://api.popcat.xyz/sadcat?text=" + _0x5942db;
    _0x4e6f04.sendMessage(_0x3fe1c1, {
      'image': {
        'url': _0x12709a
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x5ebcf1
    });
  } catch (_0x2c4e77) {
    console.error("Error:", _0x2c4e77.message || "An error occurred");
    _0xd6c117("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "nokiah",
  'reaction': '📡',
  'categorie': "mod-image"
}, async (_0x558917, _0x41abdc, _0x55e820) => {
  const {
    repondre: _0x4310ad,
    arg: _0x2436e0,
    ms: _0x4c7329
  } = _0x55e820;
  try {
    if (!_0x2436e0 || _0x2436e0.length === 0x0) {
      return _0x4310ad("Provide some text.");
    }
    const _0x12a2a8 = _0x2436e0.join(" ");
    const _0x5d386e = "https://api.popcat.xyz/nokia?image=" + _0x12a2a8;
    _0x41abdc.sendMessage(_0x558917, {
      'image': {
        'url': _0x5d386e
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x4c7329
    });
  } catch (_0xf6656e) {
    console.error("Error:", _0xf6656e.message || "An error occurred");
    _0x4310ad("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': 'unforgivab',
  'reaction': '📡',
  'categorie': 'mod-image'
}, async (_0x4b3654, _0x3299ee, _0x4ef5c4) => {
  const {
    repondre: _0x535b4b,
    arg: _0x1f006e,
    ms: _0x148118
  } = _0x4ef5c4;
  try {
    if (!_0x1f006e || _0x1f006e.length === 0x0) {
      return _0x535b4b("Provide some text.");
    }
    const _0x50c7e6 = _0x1f006e.join(" ");
    const _0x222b1f = "https://api.popcat.xyz/unforgivable?text=" + _0x50c7e6;
    _0x3299ee.sendMessage(_0x4b3654, {
      'image': {
        'url': _0x222b1f
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x148118
    });
  } catch (_0x49334b) {
    console.error("Error:", _0x49334b.message || "An error occurred");
    _0x535b4b("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': 'poohh',
  'reaction': '📡',
  'categorie': "mod-image"
}, async (_0x2be0a7, _0x48c441, _0x2a7316) => {
  const {
    repondre: _0x5eb4dc,
    arg: _0x58cc51,
    ms: _0x473b3f
  } = _0x2a7316;
  try {
    if (!_0x58cc51 || _0x58cc51.length === 0x0) {
      return _0x5eb4dc("Provide some text.");
    }
    const _0x2455b3 = _0x58cc51.join(" ");
    const _0x3386d9 = "https://api.popcat.xyz/pooh?text1=&text2=" + _0x2455b3;
    _0x48c441.sendMessage(_0x2be0a7, {
      'image': {
        'url': _0x3386d9
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x473b3f
    });
  } catch (_0x4eb748) {
    console.error("Error:", _0x4eb748.message || "An error occurred");
    _0x5eb4dc("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "ohogway",
  'reaction': '📡',
  'categorie': "mod-image"
}, async (_0x75e72b, _0x45d909, _0x4a3b05) => {
  const {
    repondre: _0x39b481,
    arg: _0x391960,
    ms: _0x45ab0e
  } = _0x4a3b05;
  try {
    if (!_0x391960 || _0x391960.length === 0x0) {
      return _0x39b481("Provide a quote.");
    }
    const _0x9912df = _0x391960.join(" ");
    const _0x6933e3 = 'https://api.popcat.xyz/oogway?text=' + _0x9912df;
    _0x45d909.sendMessage(_0x75e72b, {
      'image': {
        'url': _0x6933e3
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x45ab0e
    });
  } catch (_0x294c3a) {
    console.error("Error:", _0x294c3a.message || "An error occurred");
    _0x39b481("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "jbiden",
  'reaction': '📡',
  'categorie': 'mod-image'
}, async (_0x327ede, _0x4c9b73, _0x266a5d) => {
  const {
    repondre: _0x5e9ba3,
    arg: _0x13a1e0,
    ms: _0x38675e
  } = _0x266a5d;
  try {
    if (!_0x13a1e0 || _0x13a1e0.length === 0x0) {
      return _0x5e9ba3("Provide some text.");
    }
    const _0x1024b2 = _0x13a1e0.join(" ");
    const _0x260ac6 = "https://api.popcat.xyz/biden?text=" + _0x1024b2;
    _0x4c9b73.sendMessage(_0x327ede, {
      'image': {
        'url': _0x260ac6
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x38675e
    });
  } catch (_0x193587) {
    console.error("Error:", _0x193587.message || "An error occurred");
    _0x5e9ba3("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': 'hdrip',
  'reaction': '📡',
  'categorie': "mod-image"
}, async (_0x36f7ee, _0x1b6921, _0x32ec82) => {
  const {
    repondre: _0x3f2d1e,
    arg: _0x29f1f6,
    ms: _0x2ff1c5
  } = _0x32ec82;
  try {
    if (!_0x29f1f6 || _0x29f1f6.length === 0x0) {
      return _0x3f2d1e("Provide an image URL.");
    }
    const _0x59f87e = "https://api.popcat.xyz/drip?image=" + _0x29f1f6.join(" ");
    _0x1b6921.sendMessage(_0x36f7ee, {
      'image': {
        'url': _0x59f87e
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x2ff1c5
    });
  } catch (_0x2e4979) {
    console.error("Error:", _0x2e4979.message || "An error occurred");
    _0x3f2d1e("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "clowns",
  'reaction': '📡',
  'categorie': "mod-image"
}, async (_0x3307e4, _0x1efb76, _0x2e4bbf) => {
  const {
    repondre: _0x3596ec,
    arg: _0x173146,
    ms: _0x42b678
  } = _0x2e4bbf;
  try {
    if (!_0x173146 || _0x173146.length === 0x0) {
      return _0x3596ec("Provide some text.");
    }
    const _0x4b6e35 = _0x173146.join(" ");
    const _0x2bf2f8 = 'https://api.popcat.xyz/clown?text=' + _0x4b6e35;
    _0x1efb76.sendMessage(_0x3307e4, {
      'image': {
        'url': _0x2bf2f8
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x42b678
    });
  } catch (_0x59be4e) {
    console.error("Error:", _0x59be4e.message || "An error occurred");
    _0x3596ec("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': 'imag-generate',
  'reaction': '📡',
  'category': "mod-image"
}, async (_0x287c67, _0x49caed, _0x26643a) => {
  const {
    respond: _0x532575,
    args: _0x5ef1c5,
    messageInstance: _0x53f2a4
  } = _0x26643a;
  try {
    if (!_0x5ef1c5 || _0x5ef1c5.length === 0x0) {
      return _0x532575("Please enter the necessary information to generate the image.");
    }
    const _0xe079ea = _0x5ef1c5.join(" ");
    const _0x152537 = 'https://www.samirxpikachu.run.place/marjia?prompt=' + _0xe079ea;
    _0x49caed.sendMessage(_0x287c67, {
      'image': {
        'url': _0x152537
      },
      'caption': "*powered by ALONE QUEEN v²"
    }, {
      'quoted': _0x53f2a4
    });
  } catch (_0x18c4e1) {
    console.error("Error:", _0x18c4e1.message || "An error occurred");
    _0x532575("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "toextract",
  'reaction': '📡',
  'category': 'mod-image'
}, async (_0x344431, _0x21a0e2, _0x28188b) => {
  const {
    respond: _0x8fad60,
    args: _0x30ffc7,
    messageInstance: _0x1b1c04
  } = _0x28188b;
  try {
    if (!_0x30ffc7 || _0x30ffc7.length === 0x0) {
      return _0x8fad60("Please insert the image URL and ALONE-MD will extract the text for you.");
    }
    const _0x1b0386 = _0x30ffc7.join(" ");
    const _0x24d922 = "https://www.samirxpikachu.run.place/extract/text?url=" + _0x1b0386;
    _0x21a0e2.sendMessage(_0x344431, {
      'image': {
        'url': _0x24d922
      },
      'caption': "*powered by ALONE queen v²"
    }, {
      'quoted': _0x1b1c04
    });
  } catch (_0x5e465a) {
    console.error("Error:", _0x5e465a.message || "An error occurred");
    _0x8fad60("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "flux-img",
  'reaction': '📡',
  'category': "mod-image"
}, async (_0x1e2acb, _0x43d657, _0x56ed15) => {
  const {
    respond: _0x407ada,
    args: _0x20a9c9,
    messageInstance: _0x27a896
  } = _0x56ed15;
  try {
    if (!_0x20a9c9 || _0x20a9c9.length === 0x0) {
      return _0x407ada("Please describe your image and ALONE-MD will generate it.");
    }
    const _0x1cad81 = _0x20a9c9.join(" ");
    const _0x590b18 = "https://www.samirxpikachu.run.place/flux?prompt=" + _0x1cad81;
    _0x43d657.sendMessage(_0x1e2acb, {
      'image': {
        'url': _0x590b18
      },
      'caption': "*powered by ALONE MD v²*"
    }, {
      'quoted': _0x27a896
    });
  } catch (_0x14682b) {
    console.error("Error:", _0x14682b.message || "An error occurred");
    _0x407ada("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': 'mi',
  'reaction': '📡',
  'category': "mod-image"
}, async (_0x59ac47, _0x43cc00, _0x436f4e) => {
  const {
    respond: _0x407706,
    args: _0x23e607,
    messageInstance: _0x4464fe
  } = _0x436f4e;
  try {
    if (!_0x23e607 || _0x23e607.length === 0x0) {
      return _0x407706("Please describe your image and ALONE-MD will generate it.");
    }
    const _0x28671e = _0x23e607.join(" ");
    const _0x3e5ccf = "https://www.samirxpikachu.run.place/multi/Ml?prompt=" + _0x28671e;
    _0x43cc00.sendMessage(_0x59ac47, {
      'image': {
        'url': _0x3e5ccf
      },
      'caption': "*powered by ᴅᴜʟʟᴀʜ-xᴍᴅ v²"
    }, {
      'quoted': _0x4464fe
    });
  } catch (_0x1a9531) {
    console.error('Error:', _0x1a9531.message || "An error occurred");
    _0x407706("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "dbeautify",
  'reaction': '📡',
  'category': 'mod-image'
}, async (_0x3dd59f, _0x45952c, _0x204faf) => {
  const {
    respond: _0x5db2ab,
    args: _0x55aac8,
    messageInstance: _0x1e91d5
  } = _0x204faf;
  try {
    if (!_0x55aac8 || _0x55aac8.length === 0x0) {
      return _0x5db2ab("Kindly enter a valid image URL to beautify your image.");
    }
    const _0x43c2f7 = _0x55aac8.join(" ");
    const _0x480fea = 'https://samirxpikachuio.onrender.com/remacne?url=' + _0x43c2f7;
    _0x45952c.sendMessage(_0x3dd59f, {
      'image': {
        'url': _0x480fea
      },
      'caption': "*powered by ᴅᴜʟʟᴀʜ-xᴍᴅ v²"
    }, {
      'quoted': _0x1e91d5
    });
  } catch (_0x311e7d) {
    console.error("Error:", _0x311e7d.message || "An error occurred");
    _0x5db2ab("Oops, an error occurred while processing your request");
  }
});
