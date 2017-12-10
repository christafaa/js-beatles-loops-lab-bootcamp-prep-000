function theBeatlesPlay(musicianArray, instrumentArray) {
  var result = [];
  for (var i= 0; i < musicianArray.length; i++) {
    var musician = musicianArray[i];
    var instrument = instrumentArray[i];
    result.push(`${musician} plays ${instrument}`)
  }
  return result;
}