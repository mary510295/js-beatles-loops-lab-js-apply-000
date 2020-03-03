// add solution here
var musicians = ['John Lennon', 'Paul McCartney','George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
function theBeatlesPlay() {
  var MandI = []
  for(var i=0; i<musicians.length; i++) {
    MandI.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return MandI;
}

function johnLennonFacts(facts) {
  var i  = 0;
  var jlFacts = []
  while(i < facts.length) {
    jlFacts.push(`${facts[i]}!!!`)
    i++
  }
  return jlFacts
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n++
  }
    while (n < 15)
    return love
}