export function Entry(title, body) {
  this.title = title;
  this.body = body;
  var bodyArray = body.split(" ");
  this.wordNumber = bodyArray.length;
  return this.wordNumber;
}

Entry.prototype.getTeaser = function() {
  var bodyArray = this.body.split(" ");
  var resultArray = [];
  for (var i = 0; i < 8; i++) {
    resultArray.push(bodyArray[i]);
  }
  var result = resultArray.join(" ");
  return result;
}

var vowels = ["aeiouy".split("")];

Entry.prototype.vowels = function() {
  var bodyArray = this.body.split("");
  var vowelArray = [];
  for (var i = 0; i < bodyArray.length; i++) {
    if (vowels.includes(bodyArray[i])) {
      vowelArray.push(bodyArray[i]);
    }
  }
  var inputVowels = vowelArray.join(", ");
  return inputVowels;
}

Entry.prototype.consonants = function() {
  var bodyArray = this.body.split("");
  var consonantArray = [];
  for (var i = 0; i < bodyArray.length; i++) {
    if (!vowels.includes(bodyArray[i])) {
      consonantArray.push(bodyArray[i]);
    }
  }
  var inputConsonants = consonantArray.join(", ");
  return inputConsonants;
}
