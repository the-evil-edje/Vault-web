var numberContainer = document.getElementById("number-container");
var greenLight = document.getElementById("green-light");
var redLight = document.getElementById("red-light");
counter = 0;
countertest = 0;
intervalTimer = 0;

var numberButtons = document.getElementsByClassName('buttonNumber');

function disableButtons() {
  for(i=0; i < numberButtons.length; i++) {
    numberButtons[i].setAttribute('disabled', 'disabled');
  }
}

function enableButtons() {
  for(i=0; i < numberButtons.length; i++) {
    numberButtons[i].removeAttribute('disabled');
  }
}

function getNumber(button) {
    counter++;

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
        disableButtons();
        truefalse.innerHTML += "the code is correct";

        var blink = setInterval(function() {
            intervalTimer++;
            if (greenLight.style.visibility == 'hidden') {
          		greenLight.style.visibility = 'visible';
          	}else {
          		greenLight.style.visibility = 'hidden';
          	}
            if(intervalTimer == 10) {
              clearInterval(blink);
              intervalTimer = 0;
              enableButtons()
            }
          }, 500)

        }else {
          disableButtons();
          truefalse.innerHTML += "the code is correct";
          var blink = setInterval(function() {
              intervalTimer++;
              if (redLight.style.visibility == 'hidden') {
                redLight.style.visibility = 'visible';
              }else {
                redLight.style.visibility = 'hidden';
              }
              if(intervalTimer == 10) {
                clearInterval(blink);
                intervalTimer = 0;
                enableButtons()
              }
            }, 500)
      }
    }
}
