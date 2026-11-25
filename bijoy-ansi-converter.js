// Adapted from Naim Howlader's MIT-licensed bijoy-unicode-converter.
(function (global) {
  var map = {
    "MÖ":"গ্র","Mª":"গ্র","i¨":"র্য","ª¨":"্র্য","°":"ক্ক","±":"ক্ট","³":"ক্ত","K¡":"ক্ব","¯Œ":"স্ক্র","µ":"ক্র","K¬":"ক্ল","¶":"ক্ষ","ÿ":"ক্ষ","·":"ক্স","¸":"গু","»":"গ্ধ","Mœ":"গ্ন","Nœ":"ঘ্ন","M¥":"গ্ম","M­":"গ্ল","¼":"ঙ্ক","•¶":"ঙ্ক্ষ","•L":"ঙ্খ","½":"ঙ্গ","•N":"ঙ্ঘ","•":"ঙ্","”P":"চ্চ","”Q":"চ্ছ","”Q¡":"চ্ছ্ব","”T":"চ্ঞ","¾¡":"জ্জ্ব","¾":"জ্জ","À":"জ্ঝ","Á":"জ্ঞ","R¡":"জ্ব","Â":"ঞ্চ","Ã":"ঞ্ছ","Ä":"ঞ্জ","Å":"ঞ্ঝ","Æ":"ট্ট","U¡":"ট্ব","U¥":"ট্ম","Ç":"ড্ড","È":"ণ্ট","É":"ণ্ঠ","Ý":"ন্স","Ê":"ণ্ড","š‘":"ন্তু","Y^":"ণ্ব","Y\\^":"ণ্ব","Ë":"ত্ত","Ë¡":"ত্ত্ব","Ì":"ত্থ","Z¥":"ত্ম","š—¡":"ন্ত্ব","Z¡":"ত্ব","Î":"ত্র","_¡":"থ্ব","˜M":"দ্গ","˜N":"দ্ঘ","Ï":"দ্দ","×":"দ্ধ","˜¡":"দ্ব","Ø":"দ্ব","™¢":"দ্ভ","Ù":"দ্ম","`ª“":"দ্রু","aŸ":"ধ্ব","a¥":"ধ্ম","›U":"ন্ট","Ú":"ন্ঠ","Û":"ন্ড","šÍ":"ন্ত","š—":"ন্ত","š¿":"ন্ত্র","š’":"ন্থ","›`":"ন্দ","›Ø":"ন্দ্ব","Ü":"ন্ধ","bœ":"ন্ন","š^":"ন্ব","š\\^":"ন্ব","b¥":"ন্ম","Þ":"প্ট","ß":"প্ত","cœ":"প্ন","à":"প্প","cø":"প্ল","c­":"প্ল","á":"প্স","d¬":"ফ্ল","â":"ব্জ","ã":"ব্দ","ä":"ব্ধ","eŸ":"ব্ব","e­":"ব্ল","å":"ভ্র","gœ":"ম্ন","¤ú":"ম্প","ç":"ম্ফ","¤\\^":"ম্ব","¤¢":"ম্ভ","¤£":"ম্ভ্র","¤§":"ম্ম","¤­":"ম্ল","i“":"রু","iæ":"রু","iƒ":"রূ","é":"ল্ক","ê":"ল্গ","ë":"ল্ট","ì":"ল্ড","í":"ল্প","î":"ল্ফ","j¦":"ল্ব","j¥":"ল্ম","jø":"ল্ল","ï":"শু","ð":"শ্চ","kœ":"শ্ন","kø":"শ্ল","k­":"শ্ল","k¦":"শ্ব","k¥":"শ্ম","®‹":"ষ্ক","®Œ":"ষ্ক্র","ó":"ষ্ট","ô":"ষ্ঠ","ò":"ষ্ণ","®ú":"ষ্প","õ":"ষ্ফ","®§":"ষ্ম","¯‹":"স্ক","÷":"স্ট","ö":"স্খ","¯—":"স্ত","¯Í":"স্ত","¯‘":"স্তু","¯¿":"স্ত্র","¯’":"স্থ","mœ":"স্ন","¯ú":"স্প","ù":"স্ফ","¯\\^":"স্ব","¯§":"স্ম","¯­":"স্ল","¹":"জ্ঞ","²":"ক্ষ্ণ","´":"ক্ম","º":"গ্দ","ñ":"শ্ছ","è":"্ন","ú":"্প","ø":"্ল","æ":"ু","û":"হু","nè":"হ্ণ","ý":"হ্ন","þ":"হ্ম","n¬":"হ্ল","ü":"হৃ","©":"র্","Av":"আ","A":"অ","B":"ই","C":"ঈ","D":"উ","E":"ঊ","F":"ঋ","G":"এ","H":"ঐ","I":"ও","J":"ঔ","K":"ক","L":"খ","M":"গ","N":"ঘ","O":"ঙ","P":"চ","Q":"ছ","R":"জ","S":"ঝ","T":"ঞ","U":"ট","V":"ঠ","W":"ড","X":"ঢ","Y":"ণ","Z":"ত","_":"থ","`":"দ","a":"ধ","b":"ন","c":"প","d":"ফ","e":"ব","f":"ভ","g":"ম","h":"য","i":"র","j":"ল","k":"শ","l":"ষ","m":"স","n":"হ","o":"ড়","p":"ঢ়","q":"য়","r":"ৎ","0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","v":"া","w":"ি","x":"ী","y":"ু","z":"ু","~":"ূ","„":"ৃ","‡":"ে","†":"ে","‰":"ৈ","\\ˆ":"ৈ","Š":"ৗ","Ô":"‘","Õ":"’","|":"।","Ò":"“","Ó":"”","s":"ং","t":"ঃ","u":"ঁ","ª":"্র","Ö":"্র","«":"্র","¨":"্য","\\&":"্","&":"্","…":"ৃ"
  };
  // Bijoy Classic can emit these alternate forms for the same characters.
  var aliases = { "R¦":"জ্ব", "&F":"ঋ" };
  var replacements = Object.assign({}, map, aliases);
  var replacementPattern = new RegExp(Object.keys(replacements)
    .sort(function (a, b) { return b.length - a.length; })
    .map(function (key) { return key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
    .join("|"), "g");
  function isPreKar(c) { return c === "ি" || c === "ৈ" || c === "ে"; }
  function isPostKar(c) { return "াোৌৗুূীৃ".indexOf(c) !== -1; }
  function isKar(c) { return isPreKar(c) || isPostKar(c); }
  function isNukta(c) { return "ংঃঁ".indexOf(c) !== -1; }
  function isHalant(c) { return c === "্"; }
  function isConsonant(c) { return /[\u0995-\u09B9\u09DC\u09DD\u09DF]/.test(c); }
  function isSpace(c) { return c === " " || c === "\t" || c === "\n" || c === "\r"; }
  function rearrange(str) {
    for (var i = 0; i < str.length; i++) {
      if (i > 0 && str.charAt(i) === "\u09CD" && (isKar(str.charAt(i - 1)) || isNukta(str.charAt(i - 1))) && i < str.length - 1) {
        str = str.substring(0, i - 1) + str.charAt(i) + str.charAt(i + 1) + str.charAt(i - 1) + str.substring(i + 2);
      }
      if (i > 0 && i < str.length - 1 && str.charAt(i) === "\u09CD" && str.charAt(i - 1) === "র" && str.charAt(i - 2) !== "\u09CD" && isKar(str.charAt(i + 1))) {
        str = str.substring(0, i - 1) + str.charAt(i + 1) + str.charAt(i - 1) + str.charAt(i) + str.substring(i + 2);
      }
      if (i < str.length - 1 && str.charAt(i) === "র" && isHalant(str.charAt(i + 1)) && !isHalant(str.charAt(i - 1))) {
        var j = 1;
        while (i - j >= 0) {
          if (isConsonant(str.charAt(i - j)) && isHalant(str.charAt(i - j - 1))) j += 2;
          else if (j === 1 && isKar(str.charAt(i - j))) j++;
          else break;
        }
        str = str.substring(0, i - j) + str.charAt(i) + str.charAt(i + 1) + str.substring(i - j, i) + str.substring(i + 2);
        i++;
        continue;
      }
      if (i < str.length - 1 && isPreKar(str.charAt(i)) && !isSpace(str.charAt(i + 1))) {
        var clusterLength = 1;
        while (isConsonant(str.charAt(i + clusterLength))) {
          var next = str.charAt(i + clusterLength + 1);
          if (isHalant(next)) clusterLength += 2;
          else if (next === "\u09BC") {
            clusterLength++;
            if (isHalant(str.charAt(i + clusterLength + 1))) clusterLength++;
            else break;
          } else break;
        }
        var tail = "";
        var extra = 0;
        if (str.charAt(i) === "ে" && str.charAt(i + clusterLength + 1) === "া") { tail = "ো"; extra = 1; }
        else if (str.charAt(i) === "ে" && str.charAt(i + clusterLength + 1) === "ৗ") { tail = "ৌ"; extra = 1; }
        else tail = str.charAt(i);
        str = str.substring(0, i) + str.substring(i + 1, i + clusterLength + 1) + tail + str.substring(i + clusterLength + extra + 1);
        i += clusterLength;
      }
      if (i < str.length - 1 && str.charAt(i) === "ঁ" && isPostKar(str.charAt(i + 1))) {
        str = str.substring(0, i) + str.charAt(i + 1) + str.charAt(i) + str.substring(i + 2);
      }
    }
    return str;
  }
  global.convertBijoyAnsiToUnicode = function (text) {
    var converted = String(text || "").replace(replacementPattern, function (key) {
      return replacements[key];
    });
    converted = rearrange(converted);
    return converted.replace(/অা/g, "আ");
  };
})(window);
