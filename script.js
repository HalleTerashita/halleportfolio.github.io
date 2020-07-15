jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {  //100pxスクロールしたら
        if (appear == false) {
            appear = true;
            pagetop.stop().animate({
            'bottom': '60px' //下から50pxの位置に
          }, 300); //0.3秒かけて現れる
        }
    } else {
        if (appear) {
            appear = false;
            pagetop.stop().animate({
            'bottom': '-80px' //下から-50pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
    }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
        return false;
    });
});  


$(window).scroll(function(){
    $('.worksgrid_base').each(function(){
        var elemTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemTop - windowHeight){
        $(this).addClass('worksgrid');
        } 
      // else if (scroll < windowHeight){
      //   $(this).removeClass('fadeintitle');
      // }
    });
});

$(function () {
    $('.openModal').on('click',function(){
      var thisopenbtn=$(this);
      var thisSection=thisopenbtn.parent(".worksitem").find(".modalArea")
          thisSection.fadeIn();
    });
    $('.closeModal , .button, .modalBg').click(function(){
        $('.modalArea').fadeOut();
    });
});

$(function() {
  $('#nav-content li a').on('click', function(event) {
    $('#nav-input').prop('checked', false);
  });
});
