const main_content = document.querySelector(".main");
const thankyou_content = document.querySelector(".thank_you");

const submit_btn = document.querySelector(".btn-submit");
const ratings = document.querySelectorAll(".btn");
const show = document.querySelector("#rate");

submit_btn.addEventListener('click', function(){
    thankyou_content.classList.remove("hidden");
    main_content.style.display = "none"
    setTimeout(() => {
        thankyou_content.classList.add("hidden");
        main_content.style.display = "block";
    }, 1500);
})

ratings.forEach(x => {
    x.addEventListener('click', function(){
        show.innerHTML = x.innerHTML;
    })
})
