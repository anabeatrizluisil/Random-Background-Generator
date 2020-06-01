
btnElement = document.querySelector('.botao');
bodyElement = document.querySelector('body');

var textElement = document.createElement("div");
bodyElement.appendChild(textElement);

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


btnElement.onclick = function () {

    textElement.innerHTML = " ";

    let color = bodyElement.style.backgroundColor = getRandomColor();

    console.log(color);

    textElement.innerHTML = color;



}

