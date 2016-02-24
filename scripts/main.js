


$(window).load(function() 
{
   // executes when complete page is fully loaded, including all frames, objects and images
   console.log("fadeddd");
   //alert("fadeddd");
   //$("#header-row").css("opacity", "1.0");
   $('.loading').css("opacity", "0.0");
   $('.loading').hide(50);
   $("#project-row").css("opacity", "0.9");
});

$(".description").load(function() 
{
   // executes when complete page is fully loaded, including all frames, objects and images
   console.log("body loaded");
   // //alert("fadeddd");
   // //$("#header-row").css("opacity", "1.0");
   // $('.loading').css("opacity", "0.0");
   // $('.loading').hide(50);
   // $("#project-row").css("opacity", "0.9");
});






// $('.project-gif').hover(
//     function() {
//         $(".project-gif:not(:hover)").css({"opacity":"0.7"});
//     },
//     function() {
//         $(".project-gif").css({"opacity":"1.0"});
//     }
// );

