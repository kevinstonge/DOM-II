class Block {
    constructor(props) {
        this.el = props.el;
        this.pos = props.pos;
        this.el.style.top = `calc(${this.pos}*5rem + ${this.pos}*0.5rem)`
        this.el.style.transition = `top 1s`;
        this.el.style.fontSize = `2rem`;
        this.el.innerText = characters[this.pos];
        this.interval = null;
        this.x = 0;
        this.mouseDownTicks = 0;
    }
    setNewTopBlock = function (clickedBlockPos) { 
        if (this.mouseDownTicks < 10) {
            this.mouseDownTicks = 0;
            for (let i = 0; i<blocks.length; i++) {
                if (blocks[i].pos < clickedBlockPos) { blocks[i].pos++; }
                else if (blocks[i].pos == clickedBlockPos) { blocks[i].pos = 0; }
            }
            this.updateStyle();
        }
    }
    updateStyle = function () { 
        for (let i = 0; i<blocks.length; i++) {
            let zIndex = (blocks[i].pos==0) ? 1 : 0;
            blocks[i].el.style.top = `calc(${blocks[i].pos}*5rem + ${blocks[i].pos}*0.5rem)`;
        }
    }
    moveRight = function () {
        activeBlock = this;
        clearInterval(this.interval);
        this.interval = setInterval(()=>{
            let boxWidth = 6*parseFloat(getComputedStyle(document.body).fontSize); //includes 0.5rem margin on each side
            if (this.x < (window.innerWidth - boxWidth)) {
                this.x+=2;
            }
            this.mouseDownTicks++;
            this.el.style.left = `${this.x}px`;
        }, 10);
    }
    moveLeft = function () {
        clearInterval(this.interval);
        this.interval = setInterval(()=>{
            this.mouseDownTicks = 0;
            this.x--;
            if (this.x <= 0) {
                this.x = 0;
                this.stopMovingLeft();
            }
            this.el.style.left = `${this.x}px`;
        }, 10)
    }
    stopMovingRight = function () {
        clearInterval(this.interval);
        this.moveLeft();
    }
    stopMovingLeft = function () {
        clearInterval(this.interval);
    }
}

// let characters = "🤠😈👿👹👺🤡💩👻💀☠️".split("");
let characters = 
["🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","👨‍🚀",
 "👩‍🚀","🤴","👸","🎅","🤶","🦸","🦸‍♂️","🦹","🦹‍♂️","🧙‍♂️","🧙‍♀️","🧚","🧚‍♂️","🧛","🧛‍♀️","🧜","🧜‍♂️",
 "🧝‍♂️","🧝‍♀️","🧞","🧞‍♀️"," ","🧟","🧟‍♀️","🐶","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷",
 "🐸","🐔","🦉","🦇","🐴"," ","🦄","🐛","🐌","🐞","🐵","🕷","🦂","🐢","🐍","🦎","🦖",
 "🦕","🐙","🦑","🦓","🦍","🐲","⛄️"];
for (let i = (characters.length-1); i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = characters[i]
    characters[i] = characters[j]
    characters[j] = temp
}

let blocks = Array.from(document.querySelectorAll('.block')).map((e,i)=>{
    return (new Block({
        "el": e,
        "pos": i
    }))
});
let activeBlock;

blocks.forEach(clickedBlock=>clickedBlock.el.addEventListener('click',()=>clickedBlock.setNewTopBlock(clickedBlock.pos)));
blocks.forEach(clickedBlock=>clickedBlock.el.addEventListener('mousedown',()=>clickedBlock.moveRight()));
window.addEventListener('mouseup',()=>activeBlock.stopMovingRight());