---
layout: post
categories: project-item
img-path: images/bb2.gif
project-title: Wifi Beerbong
---



<div class="container">
  <div class="description"> 
    <div class="row text-left ">

      <div class="col-sm-10 col-sm-offset-1">

        <h1 class="title-main-about">Wifi Beerbong</h1>

        <p class="lead">Purely for fun project. Built with particle.io, firebase, node, react. I mostly worked on the hardware. Basically the beer bong contains a flow sensor and a battery powered wifi arduino. When beer is chugged, we send a a post request with a timestamp over to our webapp. Webapp consists of leaderboard, user Id's done by facebook sdk.  <p>

 <p class="lead"><a href="https://github.com/drankadank"> https://github.com/drankadank </a><p>


         <p class="lead"> Clearly this wasn't going to be a 1-device-1-user sort of thing, more likely 1-device-1-friend group. A single device had to support multiple users, so it made sense to have a log in feature that integrated well with social media.   </p>

           <img class="content-image"  src="../../images/projects/beerbong/ss2.jpg" alt="Jeff" >



         <p class="lead"> The annoying thing with Particle (link) photons is that they run off 3.3v and a lot of sensors run off 5v. Since we were powering the photon with a usb battery pack, the original plan was to use that power with a voltage divider. I'm not an electrical engineer, but i just decided to just tap into the VIN of the photon. People were telling me not to do that, but it's been working as long as I make sure the ground is not floating around.  </p>


       <img class="content-image"  src="../../images/projects/beerbong/ss1.jpg" alt="Jeff" >

       <p class="lead"> The only resistors I ended up needing were for the led indicators.   </p>






        </div>
      </div>
    </div>
  </div>

<!--   <div class="container">
  <div class="row text-center">
   <div class="description"> 
    <div class="tagline"> 
      
         
          <p class="lead"> 
         We short circuited everything on our first test. Luckily I had a seconded particle photon with me. Made sure our enclosure was waterproof.
        </p>

           <img class="content-image-vertical" src="../../images/projects/beerbong/a1.gif" alt="Jeff" >

    </div>
  </div>
</div>
</div> -->