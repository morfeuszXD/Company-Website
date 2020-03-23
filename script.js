/*styling padding nav*/

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').css('padding-top', "10px");
    $('.navbar').css('padding-bottom', "10px");
    $('.nav-background').css('height', '80px');
    $('.navbar button').css('top', '20px');  
  } else {
    $('.navbar').css('padding-top', "40px");
    $('.navbar').css('padding-bottom', "50px");
    $('.nav-background').css('height', '150px');
    $('.navbar button').css('top', '50px'); 
  }
});


$(document).ready(function() {
  $(document).on("scroll", onScroll);
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.navbar li a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 200 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.navbar li a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}