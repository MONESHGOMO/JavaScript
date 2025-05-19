const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", function () {
    alert("Button was clicked!");
});


const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "lightgreen";
    hoverBox.textContent = "Mouse is over!";
});


const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
});

const selectMenu = document.getElementById("selectMenu");
selectMenu.addEventListener("change", function () {
    alert("You selected: " + selectMenu.value);
});


const sampleForm = document.getElementById("sampleForm");
sampleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
});
