const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
const Genius = require('genius-lyrics');
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");
zokou({
  'nomCom': "poll",
  'reaction': '✨',
  'categorie': 'General'
}, async (_0x5a8b63, _0x30d276, _0x378335) => {
  const {
    repondre: _0x301409,
    arg: _0x43e456,
    ms: _0x2cced6
  } = _0x378335;
  const _0x3836c5 = _0x43e456.join(" ");
  let [_0x3a1263, _0xb29520] = _0x3836c5.split('/');
  if (_0xb29520.split(',').length < 0x2) {
    return _0x301409("Format incorrect.\nExemple : poll Quelle est la réponse/Option 1, Option 2");
  }
  let _0x3f4836 = [];
  for (let _0x5de2da of _0xb29520.split(',')) {
    _0x3f4836.push(_0x5de2da.trim());
  }
  await _0x30d276.sendMessage(_0x5a8b63, {
    'poll': {
      'name': _0x3a1263.trim(),
      'values': _0x3f4836
    }
  });
});
zokou({
  'nomCom': "fact",
  'reaction': '✌️',
  'categorie': 'User'
}, async (_0x3aad24, _0x5f2c5e, _0x121606) => {
  const {
    repondre: _0x4240f2,
    arg: _0x2b5ad5,
    ms: _0x272cfc
  } = _0x121606;
  const _0x41cdf6 = await axios.get('https://nekos.life/api/v2/fact');
  const _0x528974 = _0x41cdf6.data;
  _0x4240f2("◆━━━━━━✦FACT✦━━━━━━◆  \n*◇* " + _0x528974.fact + "\n\n*◇* Powered by *𝘡𝘌𝘡𝘌47 𝘛𝘌𝘊𝘏*\n\n╔═════◇\n║◇ *KEEP USING 𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃*\n╚════════════════════>  ");
});
zokou({
  'nomCom': "quotes",
  'reaction': '🗿',
  'categorie': 'User'
}, async (_0x2e39b2, _0x23c30a, _0x41e67d) => {
  const {
    repondre: _0x552b37,
    arg: _0x15007f,
    ms: _0x136045
  } = _0x41e67d;
  const _0x6fd026 = await axios.get("https://favqs.com/api/qotd");
  const _0x281df0 = _0x6fd026.data;
  const _0x565cef = "\n◆━━━━━━✦𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃✦━━━━━━◆ \n◇ _" + _0x281df0.quote.body + "_\n\n◇ *AUTHOR:* " + _0x281df0.quote.author + "\n\n◇ _Powered by:_ *𝘡𝘌𝘡𝘌47 𝘛𝘌𝘊𝘏*\n\n╔═════◇\n║◇ *KEEP USING 𝐙𝐄𝐙𝐄𝟒𝟕-𝐌𝐃*\n╚════════════════════> ";
  _0x552b37(_0x565cef);
});
zokou({
  'nomCom': 'define',
  'reaction': '😁',
  'categorie': "Search"
}, async (_0x319b96, _0x31232c, _0x476af0) => {
  const {
    repondre: _0x162d0e,
    arg: _0x1cd363,
    ms: _0x2f5dc4
  } = _0x476af0;
  if (!_0x1cd363 || _0x1cd363.length === 0x0) {
    return _0x162d0e("Veuillez fournir un terme à définir.");
  }
  const _0x2fab97 = _0x1cd363.join(" ");
  try {
    const {
      data: _0x2c9414
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x2fab97);
    const _0x3a6210 = "\n        Mot : " + _0x2fab97 + "\n        Définition : " + _0x2c9414.list[0x0].definition.replace(/\[/g, '').replace(/\]/g, '') + "\n        Exemple : " + _0x2c9414.list[0x0].example.replace(/\[/g, '').replace(/\]/g, '');
    _0x162d0e(_0x3a6210);
  } catch (_0x11211f) {
    return _0x162d0e("Aucun résultat pour " + _0x2fab97);
  }
});
zokou({
  'nomCom': "lyrics",
  'reaction': '✨',
  'categorie': "Search"
}, async (_0x3fdec5, _0x3210a6, _0x6d0b8e) => {
  const {
    repondre: _0x27a116,
    arg: _0x16f6bb,
    ms: _0x3ae011
  } = _0x6d0b8e;
  try {
    if (!_0x16f6bb || _0x16f6bb.length === 0x0) {
      return _0x27a116("Veuillez me fournir le nom de la chanson.");
    }
    const _0x172eb3 = _0x16f6bb.join(" ");
    const _0x986ee2 = await Client.songs.search(_0x172eb3);
    const _0x523fc8 = _0x986ee2[0x0];
    const _0x26bb6e = await _0x523fc8.lyrics();
    await _0x3210a6.sendMessage(_0x3fdec5, {
      'text': _0x26bb6e
    }, {
      'quoted': _0x3ae011
    });
  } catch (_0x4c1896) {
    console.log(_0x4c1896);
    return _0x27a116("Je n'ai pas trouvé de paroles pour " + text + ". Essayez de chercher une autre chanson.");
  }
});
