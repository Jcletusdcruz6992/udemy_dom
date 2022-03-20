var squares=document.querySelectorAll('td');
function box() {
  if (this.textContent==="") {
this.textContent="X";
  }
  else if (this.textContent==="X") {
    this.textContent="O";
  }
  else {
    this.textContent="";
  }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',box)
}
