const box = document.querySelector(".box")
const btn = document.querySelector(".btn")

flag = 0;

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