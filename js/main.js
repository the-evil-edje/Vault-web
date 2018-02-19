// var button = document.getElementById("getNumber");
//
//
// function getNumber() {
//
//     console.log(button.value);
// }

var nameContainer = document.getElementById("name-container")

function getName(button) {
    nameContainer.innerHTML += button.value;
}
