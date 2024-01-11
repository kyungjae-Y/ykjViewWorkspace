$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('header, .btn-top').addClass('active');
  } else {
    $('header, .btn-top').removeClass('active');
  }
});