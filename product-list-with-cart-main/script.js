const add_btn = document.querySelectorAll(".btn_box");
const decrese_imgs = document.querySelectorAll(".decrese_img");

add_btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "hsl(14, 86%, 42%)";
        
        if (decrese_imgs[index]) {
            decrese_imgs[index].src = "./assets/images/icon-decrement-quantity.svg";
        }
    });
});
