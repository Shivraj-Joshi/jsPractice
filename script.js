const box = document.querySelector(".box")
const btn = document.querySelector(".btn")
const addFrnd = document.querySelector('.addFrnd')


flag = 0;
flag2 = 0;

btn.addEventListener("click", () => {

    if (flag == 0) {
        box.style.backgroundColor = "green"
        console.log("clicked")
        flag = 1;
    } else {
        box.style.backgroundColor = "yellow"
        console.log("clicked again")
        flag = 0;
    }


})


addFrnd.addEventListener("click", () => {
    if (flag2 == 0) {

        addFrnd.style.backgroundColor = "#C0C0C0"
        addFrnd.style.col
        addFrnd.innerHTML = "Cancel request"
        flag2 = 1;
    }
    else {
        addFrnd.style.backgroundColor = " #1F48C3"
        addFrnd.style.color = "#fffff"
        addFrnd.innerHTML = "Add Friend"
        flag2 = 0;
    }
})