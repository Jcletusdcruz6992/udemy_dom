var headOne=document.querySelector("#one");
var headTwo=document.querySelector("#two");
var headThree=document.querySelector("#three");

headOne.addEventListener('mouseover',function(){
  headOne.textContent="Mouse currently over";
  headOne.style.color='red';
})
headOne.addEventListener('mouseout',function () {
  headOne.textContent="HOVER OVER ME";
  headOne.style.color='black';
})

headTwo.addEventListener('click',function(){
  headTwo.textContent="You clicked";
  headTwo.style.color='blue';
})
headTwo.addEventListener('clickout',function(){
  headTwo.textContent="Click";
  headTwo.style.color='black';
})

headThree.addEventListener('dblclick',function(){
  headThree.textContent="Double Clicked";
  headThree.style.color="yellow";
})
console.log("connected");
