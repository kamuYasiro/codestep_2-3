$(function(){
  
  $('#button').click(function(){
    if($('.naviul').hasClass('block')){

      $('#navi').fadeOut();
      $('.naviul').removeClass('block');
      $('#navi').removeClass('open');
      $('.mask').css('display','none');
      $('.span').css('background-color','black');
      $('.humberger').removeClass('open');
    }else{

      $('#navi').fadeIn();
      $('.naviul').addClass('block');
      $('#navi').addClass('open');
      $('.mask').css('display','block');
      $('.span').css('background-color','white');
      $('.humberger').addClass('open');
    }
  });



});
