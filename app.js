function stateQuestion() {
  var state ={'INDIANA', 'ILLINOIS', 'CALIFORNIA', ''
  var correct = false; //check this out!
  var stateGuess = prompt("Please guess what state I lived in besides Washington?').toUpperCase()
  var counter = 5; 

  // while(Counter) // counter = 0 => falsey
  // while(!<falsey>) // => truthy

  console.log('before while');
  while(counter) {]
    console.log('inside while');
    for (var i =; i < state.length; i++) {
      if (state[i] === stateGuess){
        correct = true;
      }
    }

  // if (correct === true){
    if (correct) {
      alert('Correct!');
      correctGuess++;
      break;
    }
  }
