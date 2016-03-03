


// $(window).load(function() 
// {
//    // executes when complete page is fully loaded, including all frames, objects and images

//    console.log("add me on snapchat: screwglue");
//    console.log("instagram: @heyjeffshaw");
//    //alert("fadeddd");
//   $("#header-row").css("opacity", "1.0");
//   $('.loading').css("opacity", "0.0");
//   $('.loading-caption-container').css("opacity", "0.0") 

//   $("#project-row").css("opacity", "0.9");
//    // $('.loading').hide(50);
//    // $('.loading-caption-container').hide(50);
//   $('.loading').delay(800).css("visibility", "hidden");
//   $('.loading-caption-container').delay(800).css("visibility", "hidden") 

//  // $(".description").css("opacity", "0.9");
// });




// $('.project-gif').hover(
//     function() {
//         $(".project-gif:not(:hover)").css({"opacity":"0.7"});
//     },
//     function() {
//         $(".project-gif").css({"opacity":"1.0"});
//     }
// );

$(document).ready(function() {
  $("img").unveil();
});



;(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);