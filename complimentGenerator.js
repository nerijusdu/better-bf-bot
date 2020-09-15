/* https://github.com/grantcodes/complimenter */

function main() {
  var finalTemplates = [
    function() { return "you are " + getDescriptor(); },
    function() { return "you have " + getAbstractProperty(); },
  ];
  
  var templates = [
    function() { return "9 out of 10 doctors say " + getFinalTemplate(); },
    function() { return "i can tell " + getFinalTemplate(); },
    function() { return "i can't believe " + getFinalTemplate(); },
    function() { return "i must say: " + getFinalTemplate(); },
    function() { return "i reckon " + getFinalTemplate(); },
    function() { return "i think " + getFinalTemplate(); },
    function() { return "i've always thought " + getFinalTemplate(); },
    function() { return "i've heard " + getFinalTemplate(); },
    function() { return "it's true, " + getFinalTemplate(); },
    function() { return "people say " + getFinalTemplate(); },
    function() { return "they say " + getFinalTemplate(); },
  ].concat(finalTemplates);
  
  var abstractProperties = [
    function() { return [makeSingularForm(getDescriptor()), getTangibleSingularProperty()].join(" "); },
    function() { return [getDescriptor(), getTangibleMultipleProperty()].join(" "); },
  ];
  
  var tangibleSingularProperties = [
    "ass",
    "booty",
    "bottom lip",
    "brain",
    "bum",
    "butt",
    "chin",
    "face",
    "fashion sense",
    "forehead",
    "heart",
    "laugh",
    "left hand",
    "mind",
    "mouth",
    "neck",
    "outlook on life",
    "posterior",
    "radiance",
    "right hand",
    "smile",
    "soul",
    "thumb",
    "tongue",
    "tush",
    "tushie",
    "vibe",
    "voice",
    "way of thinking",
    "work ethic",
  ];
  
  
  var tangibleMultipleProperties = [
    "ankles",
    "buttocks",
    "calves",
    "clothes",
    "ears",
    "elbows",
    "eyebrows",
    "eyelashes",
    "eyes",
    "feet",
    "fingernails",
    "fingers",
    "forearms",
    "hair",
    "hands",
    "hips",
    "ideas",
    "knees",
    "legs",
    "muscles",
    "skills",
    "skin",
    "strengths",
    "teeth",
    "thighs",
    "thighs",
    "thoughts",
    "toes",
    "wrists",
  ];
  
  var adjectives = [
    "adorable",
    "alluring",
    "amazeballs",
    "amazing",
    "angelic",
    "astonishing",
    "astounding",
    "attractive",
    "awe-inspiring",
    "awesome",
    "beautiful",
    "beguiling",
    "bewildering",
    "bewitching",
    "breathtaking",
    "charming",
    "comely",
    "crazy",
    "cute",
    "dazzling",
    "delightful",
    "divine",
    "dreamy",
    "exquisite",
    "extraordinary",
    "fantastic",
    "glamorous",
    "gorgeous",
    "great",
    "handsome",
    "heavenly",
    "hot",
    "impressive",
    "incredible",
    "insane",
    "irresistible",
    "lovely",
    "magnificent",
    "majestic",
    "marvellous",
    "marvelous",
    "mind-blowing",
    "mind-boggling",
    "nice",
    "perfect",
    "phenomenal",
    "pleasing",
    "preposterous",
    "pretty",
    "radiant",
    "ravishing",
    "remarkable",
    "sensational",
    "smashing",
    "spectacular",
    "splendid",
    "stunning",
    "stupefying",
    "stupendous",
    "sublime",
    "superb",
    "supercalifragilisticexpialidocious",
    "sweet",
    "tasty",
    "terrific",
    "tremendous",
    "unbelievable",
    "useful",
    "wonderful",
    "wowzers",
  ];
  
  
  var adverbs = [
    "absolutely",
    "awfully",
    "bloody",
    "completely",
    "decidedly",
    "deeply",
    "devilishly",
    "distinctly",
    "entirely",
    "especially",
    "ever so",
    "exceedingly",
    "exceptionally",
    "extraordinarily",
    "extremely",
    "fairly",
    "frightfully",
    "highly",
    "hugely",
    "immensely",
    "incredibly",
    "inordinately",
    "insanely",
    "intensely",
    "mightily",
    "oh-so",
    "outstandingly",
    "particularly",
    "perfectly",
    "positively",
    "practically",
    "pretty",
    "purely",
    "quite",
    "radiantly",
    "rather",
    "really",
    "remarkably",
    "seriously",
    "simply",
    "so",
    "somewhat",
    "sort of",
    "supremely",
    "terribly",
    "thoroughly",
    "totally",
    "totes",
    "tremendously",
    "truly",
    "unusually",
    "utterly",
    "very",
    "virtually",
  ];
  
  function makeSingularForm(text) {
    if (text.match(/^[aeiou]/i)) {
      return "an " + text;
    } else {
      return "a " + text;
    }
  }
  
  function getTemplate() {
    return templates[Math.floor(Math.random() * templates.length)]();
  }
  
  function getFinalTemplate() {
    return finalTemplates[Math.floor(Math.random() * finalTemplates.length)]();
  };
  
  function getAbstractProperty() {
    return abstractProperties[Math.floor(Math.random() * abstractProperties.length)]();
  }
  
  function getTangibleSingularProperty() {
    return tangibleSingularProperties[Math.floor(Math.random() * tangibleSingularProperties.length)];
  }
  
  function getTangibleMultipleProperty() {
    return tangibleMultipleProperties[Math.floor(Math.random() * tangibleMultipleProperties.length)];
  }
  
  function getAdjective() {
    return adjectives[Math.floor(Math.random() * adjectives.length)];
  }
  
  function getAdverb() {
    return adverbs[Math.floor(Math.random() * adverbs.length)];
  }

  function getDescriptor() {
    return [getAdverb(), getAdjective()].join(" ");
  }

  return getTemplate()
}
