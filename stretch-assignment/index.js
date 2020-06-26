class Block {
    constructor(props) {
        this.el = props.el;
        this.pos = props.pos;
        this.el.style = `order: ${this.pos};`;
        this.el.innerText = this.pos;
    }
    setNewTopBlock = function (i) { //must be called on ALL blocks, i is the previous index of the new top block
        if (this.pos < i) { this.pos++; }
        else if (this.pos == i) { this.pos = 0; }
        this.updateStyle();
    }
    updateStyle = function () {
        this.el.style = `order: ${this.pos};`;
        this.el.innerText = this.pos;
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

// blocks.forEach(clickedBlock=>clickedBlock.el.addEventListener('click',()=>blocks.forEach(block=>block.setNewTopBlock(clickedBlock.pos))));
// blocks.forEach(clickedBlock=>clickedBlock.el.addEventListener('click',()=>