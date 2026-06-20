const screen=document.querySelector('.sketch-screen');
for(let i=0;i<256;i++){
    const pad=document.createElement('div');
    pad.classList.add("pad");
    screen.appendChild(pad);
}