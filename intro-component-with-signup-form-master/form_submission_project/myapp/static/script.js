const btn = document.querySelector("button");
const error_msgs = document.querySelectorAll(".input_p");
const error_imgs = document.querySelectorAll(".input_img");
const input_fields = document.querySelectorAll("input");
const gmail_regex = /^[^\s@]+@gmail\.com$/;

btn.addEventListener("click", () => {
    input_fields.forEach((input, index) => {
        if (input.value.trim() === '') {
            error_msgs[index].style.maxHeight = error_msgs[index].scrollHeight + "px";
            error_imgs[index].style.opacity = "1";
        } else {
            error_msgs[index].style.maxHeight = "0";
            error_imgs[index].style.opacity = "0";

            if (input.classList.contains("email_field")) {
                if (!gmail_regex.test(input.value.trim())) {
                    error_msgs[index].style.maxHeight = error_msgs[index].scrollHeight + "px";
                    error_imgs[index].style.opacity = "1";
                    error_msgs[index].innerHTML = "Please provide a valid Gmail ID";
                } else {
                    error_msgs[index].innerHTML = "This field is required";
                }
            }
        }
    });
});