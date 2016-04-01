


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
        $("#footer-caption").text("More Projects");
        $(".project-gif-footer").css("opacity", "1.0");
      
      });
  

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

