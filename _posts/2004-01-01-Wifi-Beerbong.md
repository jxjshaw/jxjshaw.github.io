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


             <h1 class="title-main-about"> </h1>
            <p class="lead"> <i> People who are really serious about software should make their own hardware. </i></p>

        <h1 class="title-main-about">Wifi Beerbong</h1>

        <p class="lead"> I showed up to Mhacks 6 with a giant briefcase of hardware. It's really important for me to make things other people haven't, so whenever I find a novel gadget or sensor, I toss it in my hardware collection. <p>

          <img class="content-image"  src="../../images/projects/beerbong/kit.jpg" alt="Jeff" >

          <p class="lead"> 
            I figured it would be fun to fly in a couple days early. It was the first week of classes and I had a couple of friends at the University of Michigan that I wanted to visit. Long story short, there was a block party, a bunch of people were standing on top of my friend's table and it snapped. <p>

             <img class="content-image"  src="../../images/projects/beerbong/classic.jpg" alt="Jeff" >

            <p class="lead"> 
            While looking for screws the next day at the hardware store, I come across something you would only see in Ann Arbor.....In the gardening section there was an entire aisle dedicated to beer bong funnels, hoses, and accesories. At that point, it became very clear to me that for Mhacks 6 I was going to make the world's first wifi enabled beer bong. <p>


         

          <p class="lead"><a href="https://github.com/drankadank"> https://github.com/drankadank </a><p>

              <h1 class="title-main-about">The world's first wifi enabled beerbong</h1>


         <p class="lead"> Clearly this wasn't going to be a 1-device-1-user sort of thing, more likely 1-device-1-friend group. A single device had to support multiple users, so it made sense to have a log in feature that integrated well with social media.   </p>

           <img class="content-image"  src="../../images/projects/beerbong/f1.jpg" alt="Jeff" >



         <p class="lead"> The annoying thing with Particle (link) photons is that they run off 3.3v and a lot of sensors run off 5v. Since we were powering the photon with a usb battery pack, the original plan was to use that power with a voltage divider. I'm not an electrical engineer, but i just decided to just tap into the VIN of the photon. People were telling me not to do that, but it's been working as long as I make sure the ground is not floating around.  </p>


       <img class="content-image"  src="../../images/projects/beerbong/circuit2.jpg" alt="Jeff" >

       <p class="lead"> The only resistors I ended up needing were for the led indicators.   </p>

       <img class="content-image"  src="../../images/projects/beerbong/userfloww.jpg" alt="Jeff" >






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