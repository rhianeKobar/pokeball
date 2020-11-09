//variables
const button = document.getElementById('button');
const ball = document.getElementById('ball');
const pokeballGif = document.getElementById('openBall');

//functions
const loading = () =>{
  ball.classList.add("shaking");
  button.classList.add("flashing");
} 
const levelOut = () =>{
  ball.classList.add("levelOut");
}
const unLevel = () => {
  ball.classList.add("unLevel");
}
const clicked = () => {
  pokeballGif.style.visibility = visible;
  pokeballGif.style.display= relative;
}
const 2clicked = () => {
  pokeballGif.style.visibility = hidden;
  pokeballGif.style.display= none;
}
//event handlers
window.onload = loading;
button.addEventListener("click",clicked);
button.removeEventListener("click",2clicked);
//ball.addEventListener("mouseenter", levelOut);
//ball.addEventListener("mouseleave", unLevel);


