// var button = document.getElementById("getNumber");
//
//
// function getNumber() {
//
//     console.log(button.value);
// }

var numberContainer = document.getElementById("number-container"),
counter = 0;
countertest = 0;

function getNumber(button) {
    counter++;
    numberContainer.innerHTML += button.value;

    console.log(counter);

    if (counter == 1) {
      numberOne = button.value;
    }
    else if (counter == 2) {
      numberTwo = button.value;
    }
    else {
      numberThree = button.value;
      counter = 0;

      if (numberOne == 3 & numberTwo == 1 & numberThree == 1) {
        console.log('goodjob');
        myVar = setInterval(function(my){
          countertest++;
          console.log(countertest);}, 1000);
        if (countertest == 10) {
          clearInterval(myVar);
        }
      }
      else {
        console.log('fail');
      }
    }
}
