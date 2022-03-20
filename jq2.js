$('h1').click(function(){
  console.log('There was a click !');
})
console.log('connected');
$('input').eq(1).click(function () {
  console.log('Submit button is Clicked !');
});
$('h2').click(function() {
  $(this).text('Changed')
})
$('input').eq(0).keypress(function() {
  $('h3').toggleClass('turnBlue')
})
$('input').eq(1).keypress(function() {
  console.log(event);
})
$('input').eq(2).keypress(function() {
  if (event.which===13) {
    $('h1').toggleClass('turnRed');
  }
})
$('h1').on('dblclick',function() {
  $('h1').toggleClass('turnRed');
})

$('h1').on('mouseenter',function() {
  $('h1').toggleClass('turnBlue');
})

$('input').eq(1).on('click',function(){
  $('.container').fadeOut(3000);
})
$('input').eq(2).on('click',function(){
  $('.container').slideUp(3000);
})
