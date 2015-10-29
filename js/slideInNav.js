$(document).ready(function() {
  var menuStatus = false;

  var li = $('.slideInNav li');
  $(li).has('ul').addClass('with-ul');
  $('.with-ul').append('<span class="dropdown"></span>');
  $('<div class="navbar-header"><div id="menubar"><div class="slideInNavBtn"><div class="menu-icon"><span></span><span></span><span></span></div><span class="menu-txt">Menu</span></div></div></div>').insertBefore('.slideInNav');
  var ddStatus = false;

  $('.dropdown').click(function(e) {
    $(this).prev().slideToggle();
    $(this).toggleClass('closed');
    e.preventDefault();
  });
  $(document).on('click', '.slideInNavBtn, .overlay', function() {
    if (menuStatus === false) {
      $('#slide-menu, .slideInNav').animate({
        left: 250
      });
      $('body').wrapInner('<div class="slideInWrap"></div>');	  
      $('#slide-menu').prepend('<div class="overlay"></div>');

	  $('.menu-txt').text('Close');
      $('.menu-icon').html('x');
      menuStatus = true;
    } else {

      $('#slide-menu, .slideInNav').animate({
        left: 0
      }, 'normal');
	  $('.slideInWrap > section').unwrap();
      $('.overlay').detach();
      $('.menu-icon').html('');
	  $('.menu-txt').text('Menu');

      $('<span></span><span></span><span></span>').appendTo('.menu-icon');

      menuStatus = false;
    }
  });
});