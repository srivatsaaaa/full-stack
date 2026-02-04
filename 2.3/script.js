const canvas=document.getElementById('svgCanvas');
const undoBtn=document.getElementById('undoBtn');
const counter=document.getElementById('counter');
let circleCount=0;
canvas.addEventListener('mousedown',(event)=>{
const rect=canvas.getBoundingClientRect();
const x=event.clientX-rect.left;
const y=event.clientY-rect.top;
const circle=document.createElementNS("http://www.w3.org/2000/svg","circle");
circle.setAttribute("cx",x);
circle.setAttribute("cy",y);
circle.setAttribute("r","8");
circle.setAttribute("fill","#3b82f6");
canvas.appendChild(circle);
circleCount++;
updateCounter();
});
undoBtn.addEventListener('click',()=>{
const circles=canvas.querySelectorAll('circle');
if(circles.length>0){
canvas.removeChild(circles[circles.length-1]);
circleCount--;
updateCounter();
}
});
function updateCounter(){
counter.innerText=`Circles drawn:${circleCount}`;
}
