$(window).load(function() 
{
   // executes when complete page is fully loaded, including all frames, objects and images
   console.log("fadeddd");
   //alert("fadeddd");
   //$("#header-row").css("opacity", "1.0");
   $("#project-row").css("opacity", "0.9");
});


// $('.project-gif').hover(
//     function() {
//         $(".project-gif:not(:hover)").css({"opacity":"0.7"});
//     },
//     function() {
//         $(".project-gif").css({"opacity":"1.0"});
//     }
// );

$(".project-gif").on("tap",function(){
  $(this).hide();
});