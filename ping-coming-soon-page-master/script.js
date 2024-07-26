const btn = document.querySelector('button');
const error_msg = document.querySelector(".error_msg");

btn.addEventListener("click", () =>{
    const email_field = document.querySelector('input').value;
    const gmail_regex = /^[^\s@]+@gmail\.com$/;
    error_msg.style.opacity = '1';
    if(email_field == ""){
        error_msg.innerHTML = 'Whoops! It looks like you forgot to add your email';
    }
    else if(gmail_regex.test(email_field)){
        error_msg.innerHTML = "valid email";
        error_msg.style.color = "green";

    }
    else{
        error_msg.style.opacity = '1';
        error_msg.innerHTML = "please provide a valid email";
    }
});