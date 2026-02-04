const textarea=document.getElementById('myTextarea');
const countDisplay=document.getElementById('count');
textarea.addEventListener('input',function(){
let currentLength=textarea.value.length;
countDisplay.textContent=currentLength;
if(currentLength>=90){
countDisplay.classList.add('warning');
}else{
countDisplay.classList.remove('warning');
}
});
