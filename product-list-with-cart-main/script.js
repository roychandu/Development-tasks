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
const total_order = document.querySelector(".total_order");

const orderConfirmationModal = document.getElementById('orderConfirmationModal');
const overlay = document.getElementById('overlay');
const closeModalButton = document.getElementById('closeModalButton');
const confirmOrder = document.querySelector(".order_confirmation_content_box2");
const dessert_imgs = document.querySelectorAll(".img_box"); 

let total_item = 0;
const addedItems = new Array(add_btn.length).fill(false);

add_btn.forEach((btn, index) => {
    let quantity = 1;

    btn.addEventListener("click", () => {
        if (!addedItems[index]) {
            quantity = 1;

            btn.style.backgroundColor = "hsl(14, 86%, 42%)";
            btn.style.border = "hsl(14, 86%, 42%)";
            btn.style.gap = "2.5vw";
            
            decrese_imgs[index].src = "./assets/images/icon-decrement-quantity.svg";
            quantities[index].innerHTML = quantity;
            quantities[index].style.color = "hsl(20, 50%, 98%)";
            img_empty.style.display = "none";
            cart_p.style.opacity = "0";
            confirm_btn.style.height = "max-content";
            confirm_btn.style.opacity = "1";
            total_order.style.height = "max-content";
            total_order.style.opacity = "1";

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

confirm_btn.addEventListener("click", () => {
    if (total_item > 0) {
        orderConfirmationModal.style.display = 'block';
        overlay.style.display = 'block';
        finalConfirmOrder();
    } else {
        alert("Your cart is empty!");
    }
});

closeModalButton.addEventListener("click", () => {
    orderConfirmationModal.style.display = 'none';
    overlay.style.display = 'none';
    resetCartAndButtons();
});

function finalConfirmOrder() {
    confirmOrder.innerHTML = "";
    let grand_total = 0;

    add_btn.forEach((btn, index) => {
        if (addedItems[index]) {
            const itemName = desserts[index].innerHTML.trim();
            const itemPrice = parseFloat(desserts_prices[index].innerHTML.replace(/[^0-9.-]+/g, ""));
            const itemQuantity = parseInt(quantities[index].innerHTML.trim());
            const totalPrice = itemPrice * itemQuantity;

            const confirm_container = document.createElement("div");
            confirm_container.setAttribute("class", "confirm_container");

            const img_box = document.createElement("div");
            img_box.setAttribute("class", "confirm_item_img");

            const imgElement = document.querySelector(`#img${index + 1}`);
            const backgroundImage = window.getComputedStyle(imgElement).backgroundImage;
            const imageUrl = backgroundImage.replace(/url\(["']?/, '').replace(/["']?\)$/, '');
            img_box.style.backgroundImage = `url(${imageUrl})`;

            const detail_box = document.createElement("div");
            detail_box.setAttribute("class", "confirm_item_details");
            detail_box.innerHTML = `${itemName}`;

            const quantitie_box = document.createElement("div");
            quantitie_box.setAttribute("class", "confirm_item_quantity");
            quantitie_box.innerHTML = `${itemQuantity}x`;

            const item_total_box = document.createElement("div");
            item_total_box.setAttribute("class", "confirm_item_total");
            item_total_box.innerHTML = `$${totalPrice.toFixed(2)}`;

            const item_price_box = document.createElement("div");
            item_price_box.setAttribute("class", "item_price");
            item_price_box.innerHTML = `@$${itemPrice.toFixed(2)}`;

            detail_box.appendChild(quantitie_box);
            detail_box.appendChild(item_price_box);
            confirm_container.appendChild(img_box);
            confirm_container.appendChild(detail_box);
            confirm_container.appendChild(item_total_box);

            confirmOrder.appendChild(confirm_container);
            grand_total += totalPrice;
        }
    });

    total_price.innerHTML = `$${grand_total.toFixed(2)}`;
}


function updateSelectedItem() {
    selected_item.innerHTML = "";
    let total_calu = 0;
    let itemsInCart = false;

    add_btn.forEach((btn, index) => {
        if (addedItems[index]) {
            itemsInCart = true;
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
            itemCancelDiv.addEventListener("click", () => {
                btn.style.backgroundColor = "";
                btn.style.border = "";
                btn.style.gap = "";
                decrese_imgs[index].src = "./assets/images/icon-add-to-cart.svg";
                quantities[index].innerHTML = "Add to Cart";
                quantities[index].style.color = "";
                addedItems[index] = false;
                quantity = 1;

                updateTotalItems();
                updateSelectedItem();
            });

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
    total_price.innerHTML = "$" + total_calu.toFixed(2);

    if (!itemsInCart) {
        cartReset();
    }
}

function cartReset() {
    img_empty.style.display = "block";
    cart_p.style.opacity = "1";
    total_order.style.height = "0";
    total_order.style.opacity = "0";
    confirm_btn.style.height = "0";
    confirm_btn.style.opacity = "0";
}

function resetCartAndButtons() {
    cartReset();
    addedItems.fill(false);
    add_btn.forEach((btn, index) => {
        btn.style.backgroundColor = "";
        btn.style.border = "";
        btn.style.gap = "";
        decrese_imgs[index].src = "./assets/images/icon-add-to-cart.svg";
        quantities[index].innerHTML = "Add to Cart";
        quantities[index].style.color = "";
    });
    total_item = 0;
    total_span.innerHTML = total_item;
    selected_item.innerHTML = "";
    total_price.innerHTML = "$0.00";
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
