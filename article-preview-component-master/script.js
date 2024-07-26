const shear_btn = document.querySelector(".share");
const msg_box = document.querySelector(".massage-box");

shear_btn.addEventListener('click', () => {
    if(msg_box.classList.toggle("active")){
        msg_box.style.display = 'flex';
        shear_btn.style.boxShadow = 'none';
    }
    else{
        msg_box.style.display = 'none';
        shear_btn.style.boxShadow = '0 0 10px 1px var(--Desaturated_Dark_Blue)';
    }
})