// add solution here
var musicians = ['John Lennon','Paul McCartney','George Harrison', 'Ringo Starr'];
var instruments = ['Guitar','Bass Guitar','Lead Guitar','Drums'];

function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < musicians.length - 1; i++){
    newArray.push(musicians[i]) + 'plays' + instruments[i];
  }
  return newArray;
}