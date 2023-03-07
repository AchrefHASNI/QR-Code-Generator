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



const root = document.querySelector(":root"),
    inputs = document.querySelectorAll("input[name='theme']")

for (const input of inputs) {
    input.onchange = e => {
        root.style.setProperty("--theme-color", `var(--${e.target.value})`)
    }
}


for (const input of inputs) {
    input.style.backgroundColor = `rgba(var(--${e.target.value}),1)`
}