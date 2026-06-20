const container=document.querySelector('#container');
const screen=document.querySelector('.sketch-screen');

let n=prompt("Enter number of squares per side: ", "16");

for(let i=0;i<(n*n);i++){
    const pad=document.createElement('div');
    pad.classList.add("pad");
    pad.style.width=`${512/n}px`;
    pad.style.height=`${512/n}px`;
    screen.appendChild(pad);
    
    pad.addEventListener('mouseover', ()=>{
        pad.style.backgroundColor='black';
    })
}

const clear=document.querySelector('#clear');
    clear.addEventListener('click', ()=>{
        const pads=document.querySelectorAll('.pad');
        pads.forEach((pad)=>{
            pad.style.backgroundColor='white';
        });
    })