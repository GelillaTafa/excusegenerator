import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 
  document.querySelector('#excuse').innerHTML=generateExcuse();
  console.log(generateExcuse())

};

const generateExcuse=()=>{
  const who=["Mickey Mouse", "Donals Duck", "Goofy", "Moana","Elsa"];
  const what=["my project", "my home work", "my laptop", "my car key", "my flash drive"];
  const when=["last night", "this morning","during lunch break","before the exam", "before class"];
  const action =["lost","ate ", "broke ","froze","burned"]


  let random= Math.floor(Math.random()*5)
  let excuse;
  
      excuse=who[random] +' '+  action[random] +' '+ what[random] + ' ' + when[random]+'!!!!'
      
  return excuse;
}
