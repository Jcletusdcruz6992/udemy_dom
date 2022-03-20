var name_one=prompt('Player One: Enter Your Name , you will be Blue');
var name_two=prompt('Player Two: Enter Your Name, you will be Red');
var i=0;
$('tr').click(function() {
  i=i+1;
})
if(i%2!==0)
{
  $('tr').addClass('turnRed');
}
else {
    $('tr').addClass('turnBlue');
}
