export function entry(title, body) {
  bodyArray = body.split(" ");
  resultArray = [];
  for (var i = 0; i < 8; i++) {
    resultArray.push(bodyArray[i]);
  }
  var first8 = resultArray.join(" ");
  return first8;
}
