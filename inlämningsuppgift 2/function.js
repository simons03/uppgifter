//scriptet för meny i mobilen
$('.nav-toggle').click(function() {
    $('.side-nav').toggleClass('toggled');
    $('.dark-overlay').toggleClass('toggled');

});
$('.nav-close').click(function() {
    $('.side-nav').removeClass('toggled');
    $('.dark-overlay').removeClass('toggled');
});

//scriptet för de 5 telefonerna som snurrar
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});





  //knappen för att komma tillbaka till top
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 1200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// slide in phones in download section

$(function () {
  var element1 = $("#download-img-left");
  $(window).scroll(function () {
    if($(window).scrollTop() > 3000) {
      element1.addClass("slideleft");
    }
    else {
      element1.removeClass("slideleft");
    }
  });
});



$(function () {
  var element2 = $("#download-img-right");
  $(window).scroll(function () {
    if($(window).scrollTop() > 3000) {
      element2.addClass("slideright");
    }
    else {
      element2.removeClass("slideright");
    }
  });
});

