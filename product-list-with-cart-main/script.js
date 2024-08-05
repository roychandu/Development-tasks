const add_btn = document.querySelectorAll(".btn_box");
const decrese_imgs = document.querySelectorAll(".decrese_img");
const increse_imgs = document.querySelectorAll(".increse_img");
const quantities = document.querySelectorAll(".quantity");
const img_empty = document.querySelector(".empty_img");
const cart_p = document.querySelector(".cart_p");
const total_span = document.querySelector(".total_items");
const confirm_btn = document.querySelector(".confirm_button");

const desserts = document.querySelectorAll(".dessert_name");
const desserts_prices = document.querySelectorAll(".price");
const selected_item = document.querySelector(".cart_item");
const total_price = document.querySelector(".total_price");

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
            confirm_btn.style.height = "max-Content";
            confirm_btn.style.opacity = "1";

            addedItems[index] = true;
            updateTotalItems();
            updateSelectedItem();
        }
    });

    increse_imgs[index].addEventListener("click", () => {
        if (addedItems[index]) {
            quantity += 1;
            quantities[index].innerHTML = quantity;
            updateTotalItems();
            updateSelectedItem();
        }
    });

    decrese_imgs[index].addEventListener("click", () => {
        if (addedItems[index] && quantity > 1) {
            quantity -= 1;
            quantities[index].innerHTML = quantity;
            updateTotalItems();
            updateSelectedItem();
        }
    });
});

function updateSelectedItem() {
    selected_item.innerHTML = "";
    let total_calu = 0;
    add_btn.forEach((btn, index) => {
        if (addedItems[index]) {
            const item = document.createElement("div");
            item.setAttribute("class", "selected_item");
            
            const itemName = desserts[index].innerHTML.trim();
            const itemPrice = parseFloat(desserts_prices[index].innerHTML.replace(/[^0-9.-]+/g, ""));
            const itemQuantity = parseInt(quantities[index].innerHTML.trim());

            const itemNameDiv = document.createElement("div");
            itemNameDiv.setAttribute("class", "item_name");
            itemNameDiv.innerHTML = itemName;
            
            const itemDetailsDiv = document.createElement("div");
            itemDetailsDiv.setAttribute("class", "item_details");

            const itemCancelDiv = document.createElement("div");
            itemCancelDiv.setAttribute("class", "Cancel_item");

            const itemQuantityDiv = document.createElement("div");
            itemQuantityDiv.setAttribute("class", "item_quantity");
            itemQuantityDiv.innerHTML = `${itemQuantity}x`;

            const itemPriceDiv = document.createElement("div");
            itemPriceDiv.setAttribute("class", "item_price");
            itemPriceDiv.innerHTML = `@$${itemPrice.toFixed(2)}`;

            const totalPrice = itemPrice * itemQuantity;
            const totalItemPriceDiv = document.createElement("div");
            totalItemPriceDiv.setAttribute("class", "total_item_price");
            totalItemPriceDiv.innerHTML = `$${totalPrice.toFixed(2)}`;
            
            
            total_calu += totalPrice;

            itemDetailsDiv.appendChild(itemQuantityDiv);
            itemDetailsDiv.appendChild(itemPriceDiv);
            itemDetailsDiv.appendChild(totalItemPriceDiv);

            
            item.appendChild(itemNameDiv);
            item.appendChild(itemDetailsDiv);
            item.appendChild(itemCancelDiv);
            selected_item.appendChild(item);
        }
    });
    total_price.innerHTML = total_calu;

}




function updateTotalItems() {
    total_item = 0;
    add_btn.forEach((btn, index) => {
        if (addedItems[index]) {
            total_item += parseInt(quantities[index].innerHTML);
        }
    });
    total_span.innerHTML = total_item;
}
