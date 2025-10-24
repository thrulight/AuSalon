// Scroll to the top of the page
function topFunction() {
  var topPage = document.getElementById("topPage");
  topPage.scrollIntoView({behavior: "smooth"});
  console.log("goToTop");
}

// slide in animation
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});