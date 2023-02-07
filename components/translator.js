const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  // Reverse object key/value pairs
  reverseDict(obj) {
    // Method1: Using Object.fromEntries and map
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

    /* // Method2: Using .reduce
    return Object.entries(obj).reduce((accum, [k, v])=> {
        accum[v]=k;
        return accum;
      }, {}) */

    /* // Method3: Using Object.assign and map(return new obj inside) 
    return Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({[v]: k}))); */
  }

  // translator logic
  translate(text, dict, titles, timeRegex, locale) {
    const lowerText = text.toLowerCase();
    const matchesMap = {};

    // Search for titles and add'em to the matchesMap object
    Object.entries(titles).map(([k, v]) => {
      if (lowerText.includes(k)) {
        console.log("- We found a title inside the text: ", k);
        matchesMap[k] = v.charAt(0).toUpperCase() + v.slice(1);
      }
    });

    // Filter words with spaces from current dictionary
    const wordsWithSpace = Object.fromEntries(
      Object.entries(dict).filter(([k, v]) => k.includes(" "))
    );

    // Search for spaced word matches and add'em to the matchesMap object
    Object.entries(wordsWithSpace).map(([k, v]) => {
      if (lowerText.includes(k)) {
        console.log("- We found a title inside the text: ", k);
        matchesMap[k] = v;
      }
    });

    // Search for individual word matches and add'em to the matchesMap object
    lowerText.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).map((word) => {
      if (dict[word]) return (matchesMap[word] = dict[word]);
    });

    const matchTimes = lowerText.match(timeRegex);
    console.log("matchTimes: ", matchTimes);
    if (matchTimes) {
      matchTimes.map((e) => {
        if (locale === "toBritish") {
          return (matchesMap[e] = e.replace(":", "."));
        }
        return (matchesMap[e] = e.replace(".", ":"));
      });
    }

    if (Object.keys(matchesMap).length === 0) return null;

    //return logic
    console.log("matchesMap :>> ", matchesMap);
    const translation = this.replaceAll(text, matchesMap);
    console.log("translation", translation);

    const translateWithHighlight = this.replaceAllWithHighlight(
      text,
      matchesMap
    );
    console.log("translateWithHighlight", translateWithHighlight);
    return [translation, translateWithHighlight];
  }

  replaceAll(text, matchesMap) {
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    return text.replace(re, (matched) => {
      matchesMap[matched.toLowerCase()];
    });
  }

  replaceAllWithHighlight(text, matchesMap) {
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    return text.replace(re, (matched) => {
      return `<span class="highlight">${
        matchesMap[matched.toLowerCase()]
      }</span>`;
    });
  }

  toBritishEnglish(text) {
    const dict = { ...americanOnly, ...americanToBritishSpelling };
    const titles = americanToBritishTitles;
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    const translated = this.translate(
      text,
      dict,
      titles,
      timeRegex,
      "toBritish"
    );
    if (!translated) {
      return text;
    }
    return translated;
  }

  toAmericanEnglish(text) {
    const dict = {
      ...britishOnly,
      ...this.reverseDict(americanToBritishSpelling),
    };
    const titles = this.reverseDict(americanToBritishTitles);
    const timeRegex = /([1-9]|1[012]).[0-5][0-9]/g;
    const translated = this.translate(
      text,
      dict,
      titles,
      timeRegex,
      "toAmerican"
    );
    if (!translated) {
      return text;
    }
    return translated;
  }
}

module.exports = Translator;
