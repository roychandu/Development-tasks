const add_btn = document.querySelectorAll(".btn_box");
const decrese_imgs = document.querySelectorAll(".decrese_img");
const increse_imgs = document.querySelectorAll(".increse_img");
const quantities = document.querySelectorAll(".quantity");

add_btn.forEach((btn, index) => {
    let quantity = 1;

    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "hsl(14, 86%, 42%)";
        btn.style.border = "hsl(14, 86%, 42%)";
        btn.style.gap = "2.5vw";
        
        decrese_imgs[index].src = "./assets/images/icon-decrement-quantity.svg";
        quantities[index].innerHTML = quantity;
        quantities[index].style.color = "hsl(20, 50%, 98%)";
    });

    increse_imgs[index].addEventListener("click", () => {
        quantity += 1;
        quantities[index].innerHTML = quantity;
    });

    decrese_imgs[index].addEventListener("click", () => {
        if (quantity > 1) {
            quantity -= 1;
            quantities[index].innerHTML = quantity;
        }
    });
});
