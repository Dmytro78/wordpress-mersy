$(document).ready(function(){
  $('nav a[href^="#"]').click(function(){
    let target =$(this).attr('href');
    $('html,body').animate({
      scrollTop:$(target).offset().top
    },500);
    $('nav a[href^="#"]').perent().removeClass('active');
    $(this).perent().addClass('active');
    $('.menu__mobile .menu').toggle(500);
    $('.menu__burger').addClass('close');
    return false;
  });
  $('.menu__burger').click(function(){
    $('.menu__mobile .menu').toggle(500);
    $(this).toggleClass('close');
  });
});