
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","Name");
input.style.marginLeft="600px";
document.body.append(input);

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

document.body.append(input,button);


async function foo(){
let Name=document.getElementById.apply("Name").nationality;
console.log(Name);

let str= `https://api.nationalize.io/Name/ ${Name}`;
let res=await fetch(str);
let res1=await res.json();

console.log(res1);



}


