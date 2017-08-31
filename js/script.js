
 
$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated bounceInLeft');
}, {
   offset: '50%'
});

$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated bounceInDown');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated bounceInRight');
}, {
 offset: '50%'
});
$('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-5').waypoint(function(direction) {
    $('.js-wp-5').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-6').waypoint(function(direction) {
    $('.js-wp-6').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-7').waypoint(function(direction) {
    $('.js-wp-7').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-8').waypoint(function(direction) {
    $('.js-wp-8').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-9').waypoint(function(direction) {
    $('.js-wp-9').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-10').waypoint(function(direction) {
    $('.js-wp-10').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-11').waypoint(function(direction) {
    $('.js-wp-11').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-12').waypoint(function(direction) {
    $('.js-wp-12').addClass('animated zoomIn');
}, {
 offset: '70%'
});
$('.js-wp-13').waypoint(function(direction) {
    $('.js-wp-13').addClass('animated bounceInDown');
}, {
 offset: '10%'
});
$('.js-wp-14').waypoint(function(direction) {
    $('.js-wp-14').addClass('animated bounce');
}, {
 offset: '50%'
});
$('.js-wp-15').waypoint(function(direction) {
    $('.js-wp-15').addClass('animated bouncInDown');
}, {
 offset: '10%'
});
$('.js-wp-16').waypoint(function(direction) {
    $('.js-wp-16').addClass('animated bounce');
}, {
 offset: '50%'
});
$('.js-wp-17').waypoint(function(direction) {
    $('.js-wp-17').addClass('animated bounceInDown');
}, {
 offset: '10%'
});
$('.js-wp-18').waypoint(function(direction) {
    $('.js-wp-18').addClass('animated bounce');
}, {
 offset: '50%'
});

$(".navbar-dark ul li a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       window.location.hash = hash;
     });

});

/*Number Counter*/

            jQuery('.statistic-counter').counterUp({
                delay: 10,
                time: 200,
                
            });


/*Products Gallery*/
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*Navigation*/
$(document).ready(function(){
   
 
 if ($(window).width() < 960) {
   $('.js-wp-1').removeClass('animated bounceInLeft');
       $('.js-wp-2').removeClass('animated bounceInDown');
      $('.js-wp-3').removeClass('animated bounceInRight');
}
else {
   alert('More than 960');
}
    


    
    var video = document.getElementById('video');
video.addEventListener('onload',function(){
  video.play();
},false);

 });



