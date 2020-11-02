const button = document.getElementById('button2');
const ball = document.getElementById('ball');
function shake(){
  ball.classList.add("shaking");
  button.innerHTML= "fuck me";
} 
button.addEventListener("click", shake, true); 


