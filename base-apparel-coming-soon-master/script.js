const click_btn = document.querySelector(".arrow-img");
const output = document.querySelector("#valid");
const wrong_email = document.querySelector(".wrong-email");
const input_field = document.querySelector("input");

if(click_btn.addEventListener('click', () => {
    const email_field = document.querySelector('input').value;
    const gmail_regex = /^[^\s@]+@gmail\.com$/;
    if(gmail_regex.test(email_field)){
        wrong_email.style.opacity = '0';
        output.style.opacity = '1';
        output.innerHTML = "valid email";
    }
    else{
        wrong_email.style.opacity = '1';
        output.style.opacity = '1'
        output.innerHTML = "please provide a valid email";
        input_field.style.border= '2px var(--Soft_Red) solid';
    }
}));
