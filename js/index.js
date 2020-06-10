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
//3. cursor tail
let tailDiv = document.createElement("div");
tailDiv.id = "tailDiv";
tailDiv.innerText = "😃";
tailDiv.style="position: absolute; top: 0; left: 0; font-size: 2rem;";
document.querySelector("body").appendChild(tailDiv);
window.addEventListener('mousemove',(e)=>{
    tailDiv.style = `position: absolute; top: ${e.clientY+7}px; left: ${e.clientX+7}px; font-size: 2rem; z-index:100;`;
    console.log(tailDiv.style);
})