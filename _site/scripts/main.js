


$(window).load(function()
{
   // executes when complete page is fully loaded, including all frames, objects and images


     console.log("add me on snapchat: screwglue");
     console.log("instagram: @heyjeffshaw");
     //alert("fadeddd");
    $("#header-row").css("opacity", "1.0");
    $('.loading').css("opacity", "0.0");
    $('.loading-caption-container').css("opacity", "0.0")

    $("#project-row").css("opacity", "0.9");
     // $('.loading').hide(50);
     // $('.loading-caption-container').hide(50);
    $('.loading').delay(800).css("visibility", "hidden");
    $('.loading-caption-container').delay(800).css("visibility", "hidden")

 // $(".description").css("opacity", "0.9");
    // reveal description
    $('.header-text').click(function(){
        $(this).css('display', 'none');
        $('#blurb').css("display", "block");
    });
    $('.project-title').click(function(){
        $(this).css('display', 'none');
        $('.header-text').css("display", "block");
    });

    //project menu hovering stuff
    $(".project-shader").mouseenter(function() {
       $(".project-shader").css("opacity", "0.0");
       $(".project-caption").css("opacity", "0.0");
       $(this).css("opacity", "0.5");
       $(this).prev().css("opacity", "1.0");
     });
    $(".project-caption").mouseenter(function() {
       $(".project-shader").css("opacity", "0.0");
       $(".project-caption").css("opacity", "0.0");
       $(this).css("opacity", "1.0");
       $(this).next().css("opacity", "0.5");
    });

    $(".project-shader").mouseleave(function() {
       $(this).css("opacity", "0.0");
       $(this).prev().css("opacity", "0.0");
     });
     $(".project-shader").mouseleave(function() {
        $(this).css("opacity", "0.0");
        $(this).next().css("opacity", "0.0");
      });

      //if css opacity 0.5 and css opacity 1.0 then


     //footer hovering stuff
     $(".name-footer").mouseenter(function() {
        var imageCaption = $(this).find('img').attr("alt");
        console.log('hovering');
        $("#footer-caption").text(imageCaption);
        $(".project-gif-footer").css("opacity", "0.3");
        $(this).find('img').css("opacity", "1.0");
      });

      $(".iconbox").mouseleave(function() {
        console.log('hovering');
        $("#footer-caption").text("More Stuff");
        $(".project-gif-footer").css("opacity", "1.0");
      });

      //expand image on click
      // $(function() {
		  //   $('.content-image').on('click', function() {
			//     $('.imagepreview').attr('src', $(this).find('img').attr('src'));
			//     $('#imagemodal').modal('show');
      // 		});
      // });

      $('.your-class').slick({
          dots: true,
          arrows: true,
          // nextArrow: '<i class="fa fa-arrow-right" style="block"></i>',
          // prevArrow: '<i class="fa fa-arrow-left"></i>',
          nextArrow:"<img class='a-right control-c next slick-next' src='../../css/icons/chevron-right.svg'>",
          prevArrow:"<img class='a-left control-c prev slick-prev' src='../../css/icons/chevron-left.svg'>",
      });

      $('.multiple-items').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow:"<img class='a-right control-c next slick-next' src='../../css/icons/chevron-right.svg'>",
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../../css/icons/chevron-left.svg'>"
      });

      // inject video for food
      $('.project-gif').eq(0).replaceWith('<video class="project-gif" src="https://res.cloudinary.com/mmmm/video/upload/v1509563698/Jeff%20Drop/test11_1.mp4" playsinline loop muted autoplay></video>');

});





// $("#project-gif-footer").(function() {
//   console.log("hovering works");
//   var imageCaption = $(this).attr("alt");
//   console.log(imageCaption + "1");
//   $( "#footer-caption" ).text( imageCaption );
//   console.log(imageCaption + "2");


// });




// $('.project-gif').hover(
//     function() {
//         $(".project-gif:not(:hover)").css({"opacity":"0.7"});
//     },
//     function() {
//         $(".project-gif").css({"opacity":"1.0"});
//     }
// );
