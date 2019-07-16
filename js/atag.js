$('.ach').on('click', function() {
  $('li').removeClass('active');
  $(this).closest('li').addClass('active');
});