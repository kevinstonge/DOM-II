//dom setup for some elements
const tailDiv = document.createElement("div");
tailDiv.id = "tailDiv";
tailDiv.innerHTML = "😃";
tailDiv.style="position: fixed; top: 0; left: 0; font-size: 2rem;";
document.querySelector("body").appendChild(tailDiv);
const body = document.querySelector("body");
let images = document.querySelectorAll("img");
images.forEach(image=>{image.style="-webkit-filter: blur(3px);transition:-webkit-filter 1s;"})

//1. logo slideIn on load
window.addEventListener('load',()=>{
    document.querySelector("header>div>h1").classList.add("slideIn");
})
//2. rainbow bg on scroll
let timer = null;
window.addEventListener('scroll',(e)=>{
    if (timer !== null) {
        body.classList.add("rainbowBG")
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          body.classList.remove("rainbowBG");
    }, 500);
});
//3. cursor tail
function scrollEvent (pos) {
    if (pos.y !== undefined && pos.x !== undefined) {
        tailDiv.style = `position: fixed; top: ${pos.y+7}px; left: ${pos.x+7}px; font-size: 2rem; z-index:100;`;
    }
}
window.addEventListener('wheel',(e)=>{scrollEvent({x: e.clientX,y: e.clientY})})

window.addEventListener('mousemove',(e)=>{scrollEvent({x: e.clientX,y: e.clientY})})
//4. parrot gif on mousedown button
document.querySelectorAll(".btn").forEach(button=>{
    button.addEventListener('mousedown',(e)=>{
        tailDiv.innerHTML = `<img src="img/parrot.gif">`;
    })
})
//5. parrot gif removed on mouseup 
window.addEventListener('mouseup',(e)=>{
    tailDiv.innerHTML = "😃";
})

//6. unblur images on mouseover
images.forEach(image=>image.addEventListener('mouseover',()=>image.style="-webkit-filter: blur(0px);transition:-webkit-filter 0.2s;"))

//7. reblur images on mouseout
images.forEach(image=>image.addEventListener('mouseout',()=>image.style="-webkit-filter: blur(3px);transition:-webkit-filter 1s;"))

//8. sad face on blur
window.addEventListener('blur',()=>{
    tailDiv.innerHTML = "😭"
})

//9. replace happy face on focus
window.addEventListener('focus',()=>{tailDiv.innerHTML="😃"})

//10. console log div that was clicked (stopPropagation so div inside of .container doesn't trigger .container's event)
document.querySelectorAll('.container').forEach(e=>e.addEventListener('click',(e)=>{
    console.log('container clicked!');
}));
document.querySelectorAll('.container div').forEach(e=>e.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log(`div inside of container clicked`);
}));

document.querySelectorAll('.nav-link').forEach(e=>e.addEventListener('click',(e)=>e.preventDefault()));