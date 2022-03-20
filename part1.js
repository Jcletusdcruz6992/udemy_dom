console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.links);
console.log(document.getElementById('one'));
console.log(document.getElementsByClassName("two"));
console.log(document.getElementsByTagName("li"));
console.log(document.querySelector("#one"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll(".two"));
var myheader=document.querySelector("h1");
var bg=document.querySelector("body");
var b=document.querySelector(".three");
console.log(myheader);
myheader.style.color='red';
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changecolor() {
  myheader.style.color=getRandomColor();
  bg.style.color=getRandomColor();

}

setInterval("changecolor()",200);
