$(function() {

  $('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
  });

  $('.userInput').focus(function () {
    $(this).parent().addClass('focus');
  }).blur(function () {
    if($(this).val()===''){
      $(this).parent().removeClass('focus');
    }
  })
$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
});

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.close-popup1').click(function() {
    $('.popup-bg').fadeOut(800);
});

});
