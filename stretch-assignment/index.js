class Block {
    constructor(props) {
        this.el = props.el;
        this.pos = props.pos;
        this.el.style = `top: calc(${this.pos}*5rem + ${this.pos}*0.5rem); transition: top 1s;`;
        this.el.innerText = this.pos;
    }
    setNewTopBlock = function (clickedBlockPos) { //this function operates on all instances in the blocks array
        for (let i = 0; i<blocks.length; i++) {
            if (blocks[i].pos < clickedBlockPos) { blocks[i].pos++; }
            else if (blocks[i].pos == clickedBlockPos) { blocks[i].pos = 0; }
        }
        this.updateStyle();
    }
    updateStyle = function () { //this function operates on all instances of the blocks array
        for (let i = 0; i<blocks.length; i++) {
            let zIndex = (blocks[i].pos==0) ? 1 : 0;
            blocks[i].el.style = `top: calc(${blocks[i].pos}*5rem + ${blocks[i].pos}*0.5rem); transition: top 1s; z-index: ${zIndex}`;
            blocks[i].el.innerText = blocks[i].pos;
        }
    }
}

let blocks = Array.from(document.querySelectorAll('.block')).map((e,i)=>{
    return (new Block({
        "el": e,
        "pos": i
    }))
});

function setNewTopBlock() {
    console.log('global_setNew');
}

blocks.forEach(clickedBlock=>clickedBlock.el.addEventListener('click',()=>clickedBlock.setNewTopBlock(clickedBlock.pos)));