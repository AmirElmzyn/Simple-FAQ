const panels = document.querySelectorAll(".panel");
const accs = document.querySelectorAll(".accordian");
const plus = document.querySelectorAll(".plus-icon");
const minus = document.querySelectorAll(".minus-icon");

function toggleAcc(i){
    plus[i].classList.toggle("active");
    minus[i].classList.toggle("active");
    panels[i].classList.toggle("active");
};

accs.forEach((btn, i) => {
    btn.onclick = () => {
        toggleAcc(i);
    }
});

plus.forEach((icon, i) => {
    icon.onclick = () => {
        toggleAcc(i);
    }
});

minus.forEach((icon, i) => {
    icon.onclick = () => {
        toggleAcc(i);
    }
});

document.querySelector("#default").click();
