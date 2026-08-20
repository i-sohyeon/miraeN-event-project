$(document).ready(function () {

  // px -> rem으로 변환
  const rem = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const headerOffset = rem(4.375); // 70px -> 4.375rem (70/16)

  $(window).on('scroll', function () {
    const scrollPos = $(this).scrollTop();

    $('section[id]').each(function () {
      const $this = $(this);
      const top = $this.offset().top - headerOffset - 5;
      const bottom = top + $this.outerHeight();

      if (scrollPos >= top && scrollPos < bottom) {
        $('.navi a').removeClass('active')
          .filter(`[href="#${$this.attr('id')}"]`).addClass('active');
      }
    });
  });

  $('.navi ul li a').on('click', function (e) {
    var target = $(this).attr('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      var targetTop = $(target).offset().top;

      $('html, body').animate({
        scrollTop: targetTop - rem(3.75)
      }, 400);
    }
  });

  // 비디오 영역
  var videoWrapper = $('.video_wrapper');
  var video = $('#videoBox')[0]; 

  videoWrapper.on('click', function () {
    if (video.paused) {
      video.play();
      videoWrapper.addClass('is-playing');
    } else {
      video.pause();
      videoWrapper.removeClass('is-playing');
    }
  });

  $('#videoBox').on('ended', function () {
    videoWrapper.removeClass('is-playing');
  });

  // top button
  $('.top_btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
    return false;
  });

  //textarea count
  const textarea = $('#opinion');
  const count = $('#count');
  
  textarea.on('input', function () {
    const currentLength = $(this).val().length;
    count.text(currentLength);
  });
});