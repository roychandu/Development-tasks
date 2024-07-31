const add_btn = document.querySelectorAll(".btn_box");
const decrese_imgs = document.querySelectorAll(".decrese_img");
const increse_imgs = document.querySelectorAll(".increse_img");
const quantities = document.querySelectorAll(".quantity");
const img_empty = document.querySelector(".empty_img");
const cart_p = document.querySelector(".cart_p");
const selected_item = document.querySelector(".cart_item");
const desserts = document.querySelectorAll(".dessert_name");
const total_span = document.querySelector(".total_items");

let total_item = 0;
const addedItems = new Array(add_btn.length).fill(false);

add_btn.forEach((btn, index) => {
    let quantity = 1;

    btn.addEventListener("click", () => {
        if (!addedItems[index]) {
            btn.style.backgroundColor = "hsl(14, 86%, 42%)";
            btn.style.border = "hsl(14, 86%, 42%)";
            btn.style.gap = "2.5vw";
            
            decrese_imgs[index].src = "./assets/images/icon-decrement-quantity.svg";
            quantities[index].innerHTML = quantity;
            quantities[index].style.color = "hsl(20, 50%, 98%)";
            img_empty.style.height = "0";
            cart_p.style.opacity = "0";

            const items = desserts[index];
            selected_item.appendChild(items);
            selected_item.innerHTML;

            addedItems[index] = true;
            updateTotalItems();
        }
    });

    increse_imgs[index].addEventListener("click", () => {
        if (addedItems[index]) {
            quantity += 1;
            quantities[index].innerHTML = quantity;
            updateTotalItems();
        }
    });

    decrese_imgs[index].addEventListener("click", () => {
        if (addedItems[index] && quantity > 1) {
            quantity -= 1;
            quantities[index].innerHTML = quantity;
            updateTotalItems();
        }
    });
});

function updateTotalItems() {
    total_item = 0;
    add_btn.forEach((btn, index) => {
        if (addedItems[index]) {
            total_item += parseInt(quantities[index].innerHTML);
        }
    });
    total_span.innerHTML = total_item;
}
