import "bootstrap";
import "./style.css";




let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here
  let whoItem = Math.floor(Math.random()*who.length)
  
  let actionItem = Math.floor(Math.random()*action.length)
  
  let whatItem = Math.floor(Math.random()*what.length)
  
  let whenItem = Math.floor(Math.random()*when.length)

  let newExcuse = `${who[whoItem]} ${action[actionItem]} ${what[whatItem]} ${when[whenItem]}!`


  const p = document.getElementById("excuse")
  p.innerText = newExcuse

  console.log(newExcuse);
  console.log(`${whoItem} ${actionItem} ${whatItem} ${whenItem}!`);
};
