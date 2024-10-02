let mobile__nav ,mobile__nav__line , mobile__nav__flag;
mobile__nav = document.querySelector(".mobile__nav")
mobile__nav__line = document.querySelector(".mobile__nav__line")
mobile__nav__flag = false

mobile__nav.addEventListener('click' , ()=>{
    if (!mobile__nav__flag){
        mobile__nav.classList.add("mobile__nav-active");
        mobile__nav__line.style.opacity = "0";
        mobile__nav__flag = true
    } else {
        mobile__nav.classList.remove("mobile__nav-active");
        mobile__nav__line.style.opacity = "1";
        mobile__nav__flag = false
    }
})
