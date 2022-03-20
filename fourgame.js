console.log('connected');
var name_one=prompt('Player One: Enter Your Name , you will be Blue');
var one_color='rgb(28, 217, 207)'
var name_two=prompt('Player Two: Enter Your Name, you will be Red');
var two_color='rgb(250, 100, 80)';

var gameon=true;
var table=$('table tr');

function reportWin(rownum,colnum) {
  console.log("You won the game at this row and column ");
  console.log(rownum);
  console.log(colnum);
}

function changecolor(rowindex,columnindex,color) {
  return table.eq(rowindex).find('td').eq(columnindex).find('button').css('background-color',color);
}

function returncolor(rowindex,columnindex) {
  return table.eq(rowindex).find('td').eq(columnindex).find('button').css('background-color');
}

function checkbottom(columnindex) {
  var colorreport=returncolor(6,columnindex);
  for (var row = 6; row >-1; row--) {
    colorreport=returncolor(row,columnindex);
  }
  if(colorreport==='rgb(192,192,192)')
  {
    return row;
  }
}

function colormatchcheck(one,two,three,four) {
  return(one===two && one===three && one===four && one!=='rgb(192,192,192)' && one!==undefined)
}

//vertical win checkbox
function verticalWinCheck() {
  for (var col = 0; col <8; col++) {
    for (var row = 0; row<4; row++) {
  if (colormatchcheck(returncolor(row,col),returncolor(row+1,col),returncolor(row+2,col),returncolor(row+3,col))) {
console.log('vertical');
reportWin(row,col);
  }
  else{
    continue;
  }
    }
  }
}

function horizontalWinCheck() {
  for (var row = 0; row <6; col++) {
    for (var col= 0; col<4; col++) {
  if (colormatchcheck(returncolor(row,col),returncolor(row,col+1),returncolor(row,col+2),returncolor(row,col+3))) {
console.log('Horizontal');
reportWin(row,col);
  }
  else{
    continue;
  }
    }
  }
}

function DiagonalWinCheck() {
  for (var col = 0; col <5; col++) {
    for (var row = 0; row<7; row++) {
  if (colormatchcheck(returncolor(row,col),returncolor(row+1,col+1),returncolor(row+2,col+2),returncolor(row+3,col+3))) {
console.log('diag');
reportWin(row,col);
  }
  else if (colormatchcheck(returncolor(row,col),returncolor(row-1,col+1),returncolor(row-2,col+2),returncolor(row-3,col+3))) {
    console.log('diag');
    reportWin(row,col);
  }
  else{
    continue;
  }
    }
  }
}

var currentplayer=1;
var currentname=name_one;
var currentcolor=one_color;


$('h1').text(name_one + 'Its your turn to choose a column to drop box')

$('.board button').on('click',function() {
  var col=$(this).closest('td').index();
  var row=checkbottom(col);
  changecolor(row,col,currentcolor);
  if(horizontalWinCheck || verticalWinCheck|| diagonalWinCheck)
  {
    $('h1').text(currentname+'You have won');
    $('h2').fadeOut('fast');
  }
})

currentplayer=currentplayer*-1;

if(currentplayer===1)
{
  currentname=name_one;
  $('h2').text(name_one + 'Its your turn');
  currentcolor=one_color;
}
else {
  currentname=name_two;
    $('h2').text(name_two + 'Its your turn');
  currentcolor=two_color;
}
