const container=document.querySelector('#container');
const screen=document.querySelector('.sketch-screen');

for(let i=0;i<256;i++){
    const pad=document.createElement('div');
    pad.classList.add("pad");
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