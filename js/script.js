const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qrcode img");
let preValue;
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8b4a867 (Optimisation on code)
/*
var red = document.getElementById('Red');
var blue = document.getElementById('Blue');
var green = document.getElementById('Green');
var yellow = document.getElementById('Yellow');
var black = document.getElementById('Black');

green.onclick = function() {
    document.body.classList.toggle("greentheme");
    if (document.body.classList.contains("greentheme")) {
        green.style.pointerEvents = 'none'
    }
}
yellow.onclick = function() {
    document.body.classList.toggle("yellowtheme");
    if (document.body.classList.contains("yellowtheme")) {
        yellow.style.pointerEvents = 'none'
    }
}
black.onclick = function() {
    document.body.classList.toggle("blacktheme");
    if (document.body.classList.contains("blacktheme")) {
        black.style.pointerEvents = 'none'
    }
}
red.onclick = function() {
    document.body.classList.toggle("redtheme");
    if (document.body.classList.contains("redtheme")) {
        red.style.pointerEvents = 'none'
    }
}

blue.onclick = function() {
    document.body.classList.toggle("bluetheme");
    if (document.body.classList.contains("bluetheme")) {
        blue.style.pointerEvents = 'none'
    }
}*/

document.getElementById("Red").onclick = red;
document.getElementById("Blue").onclick = blue;
document.getElementById("Green").onclick = green;
document.getElementById("Yellow").onclick = yellow;
document.getElementById("Black").onclick = black;


function red() {
    document.body.classList.toggle("redtheme");


}

function blue() {
    document.body.classList.toggle("bluetheme");
}

function green() {
    document.body.classList.toggle("greentheme");
}

function yellow() {
    document.body.classList.toggle("yellowtheme");
}

function black() {
    document.body.classList.toggle("blacktheme");
<<<<<<< HEAD
=======
=======


const root = document.querySelector(":root"),
    inputs = document.querySelectorAll("input[name='theme']")

for (const input of inputs) {
    input.onchange = e => {
        root.style.setProperty("--theme-color", `var(--${e.target.value})`)
    }
}


for (const input of inputs) {
    input.style.backgroundColor = `rgba(var(--${e.target.value}),1)`
>>>>>>> 9aecdb8 (Optimisation on code)
>>>>>>> 8b4a867 (Optimisation on code)
}