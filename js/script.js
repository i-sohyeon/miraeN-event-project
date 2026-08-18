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

      // 현재 스크롤 위치가 해당 section 범위 내에 들어왔을 때
      if (scrollPos >= targetTop && scrollPos < targetBottom) {
        $('.navi ul li a').removeClass('active'); // 전체 active 제거
        $('.navi ul li a[href="#' + targetId + '"]').addClass('active'); // 해당 메뉴만 active 추가
      }
    });
  });

  // 앵커 클릭 시 부드럽게 이동하는 효과 (선택 사항)
  $('.navi ul li a').on('click', function (e) {
    var target = $(this).attr('href');
    
    // #으로 시작하는 내부 링크일 경우에만 작동
    if (target.startsWith('#')) {
      e.preventDefault();
      var targetTop = $(target).offset().top;

      $('html, body').animate({
        scrollTop: targetTop - 70 // 헤더 높이 고려하여 이동
      }, 400);
    }
  });
});


$(document).ready(function () {
  var $videoWrapper = $('.video_wrapper');
  // jQuery 객체에서 실제 HTML5 Video DOM 요소[0]를 추출해야 .play(), .pause()가 작동합니다.
  var video = $('#myVideo')[0]; 

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
  $('#myVideo').on('ended', function () {
    $videoWrapper.removeClass('is-playing');
  });
});