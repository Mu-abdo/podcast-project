/*include header*/
$(function(){
    $('#includeheader').load('header.html');
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('.channel-podcast').addClass('fixed-web');
    } else {
        $('.channel-podcast').removeClass('fixed-web');
    }
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('.navbar').addClass('fix-header');
    } else {
        $('.navbar').removeClass('fix-header');
    }
})




var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1, // عرض شريحة واحدة افتراضيًا
    spaceBetween: 20, // مسافة بين الشرائح
    loop: true, // تكرار السلايدر
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {  // لأجهزة الهواتف
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {  // لأجهزة التابلت
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {  // لأجهزة الكمبيوتر المحمولة والشاشات الكبيرة
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


  