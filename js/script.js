$(document).ready(function () {
  // 스크롤 이벤트 발생 시
  $(window).on('scroll', function () {
    var scrollPos = $(window).scrollTop(); // 현재 스크롤 Y위치
    var headerOffset = 70; // 상단 고정 헤더가 있다면 해당 높이만큼 보정값 설정

    // 모든 section을 순회하며 위치 확인
    $('section').each(function () {
      var targetTop = $(this).offset().top - headerOffset;
      var targetBottom = targetTop + $(this).outerHeight();
      var targetId = $(this).attr('id');

      if (scrollPos >= targetTop && scrollPos < targetBottom) {
        $('.navi ul li a').removeClass('active'); 
        $('.navi ul li a[href="#' + targetId + '"]').addClass('active');
      }
    });
  });

  $('.navi ul li a').on('click', function (e) {
    var target = $(this).attr('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      var targetTop = $(target).offset().top;

      $('html, body').animate({
        scrollTop: targetTop - 60
      }, 400);
    }
  });
});


$(document).ready(function () {
  var $videoWrapper = $('.video_wrapper');
  var video = $('#videoBox')[0]; 

  $videoWrapper.on('click', function () {
    if (video.paused) {
      video.play();
      $videoWrapper.addClass('is-playing');
    } else {
      video.pause();
      $videoWrapper.removeClass('is-playing');
    }
  });

  // 영상이 끝까지 재생되었을 때 처리
  $('#videoBox').on('ended', function () {
    $videoWrapper.removeClass('is-playing');
  });
});


// top button
$(document).ready(function () {
  $('.top_btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
    return false;
  });

});