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

        <h1 class="title-main-about">Inspiration</h1>

        <p class="lead"> I showed up to Mhacks 6 with a giant briefcase of hardware. It's really important for me to make things other people haven't, so whenever I find a novel gadget or sensor, I toss it in my hardware collection. <p>

          <img class="content-image"  src="../../images/projects/beerbong/kit.jpg" alt="Jeff" >

          <p class="lead"> 
            I figured it would be fun to fly in a couple days early. It was the first week of classes and I had a couple of friends at the University of Michigan that I wanted to visit. Long story short, there was a block party, a bunch of people were standing on top of my friend's table and it snapped. <p>

             <img class="content-image"  src="../../images/projects/beerbong/classic22.jpg" alt="Jeff" >

            <p class="lead"> 
            While looking for screws the next day at the hardware store, I come across something you would only see in Ann Arbor..... <i> In the gardening section there was an entire aisle dedicated to beer bong funnels, hoses, and accesories </i>. At that point, it became very clear to me that for Mhacks 6 I was going to make the world's first wifi enabled beer bong. <p>


         

        

              <h1 class="title-main-about">The world's first wifi enabled beerbong</h1>


          <p class="lead"> I had a lot of unanswered questions, so I started laying it all out. Where am I getting power? How am I going to display the data? How can I make drinking even more social?  </p>


         <p class="lead"> Clearly this wasn't going to be a 1-device-1-user sort of thing, more likely 1-device-1-friend group. A single device had to support multiple users, so it made sense to have a log in feature that integrated well with social media.   </p>

           <img class="content-image"  src="../../images/projects/beerbong/f1.jpg" alt="Jeff" >


          <h1 class="title-main-about">Hardware constraints</h1>
         <p class="lead"> The annoying thing with Particle (link) photons is that they run off 3.3v and a lot of sensors run off 5v. Since we were powering the photon with a usb battery pack, the original plan was to use that power with a voltage divider. I'm not an electrical engineer, but i just decided to just tap into the VIN of the photon. People were telling me not to do that, but it's been working as long as I make sure the ground is not floating around.  </p>


       <img class="content-image"  src="../../images/projects/beerbong/circuit22.jpg" alt="Jeff" >

       <p class="lead"> The only resistors I ended up needing were for the led indicators.   </p>

       <img class="content-image"  src="../../images/projects/beerbong/userfloww.jpg" alt="Jeff" >


      <h1 class="title-main-about">Making sure it's water resistant</h1>
       <p class="lead"> I wasn't going to take any chances on shorting out the last board I had. Made sure this time nothing was hanging out in the open.   </p>
       <img class="content-image"  src="../../images/projects/beerbong/p1.jpg" alt="Jeff" >

    
        <h1 class="title-main-about"><a href="https://github.com/drankadank">Check it out on github</a></h1>
       <img class="content-image"  src="../../images/projects/beerbong/p2.jpg" alt="Jeff" >

        


        
             






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