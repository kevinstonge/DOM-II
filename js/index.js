// Your code goes here

//1. logo slideIn on load
window.addEventListener('load',()=>{
    document.querySelector("header>div>h1").classList.add("slideIn");
})
//2. rainbow bg on scroll
let timer = null;
window.addEventListener('scroll',()=>{
    let body = document.querySelector("body");
    if (timer !== null) {
        body.classList.add("rainbowBG")
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          body.classList.remove("rainbowBG");
    }, 500);
});