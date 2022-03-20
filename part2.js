var p=document.querySelector('p');
console.log(p);
p.textContent="new text";
p.innerHTML="<strong>I'M bold!</strong>"
var special=document.querySelector("#special");
console.log(special);
var speciala=document.querySelector("a");
console.log(speciala);
console.log(speciala.getAttribute("href"));
speciala.setAttribute("href","https:www.amazon.com")
