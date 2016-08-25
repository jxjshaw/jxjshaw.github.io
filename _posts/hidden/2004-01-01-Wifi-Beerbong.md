<!-- ---
layout: post
categories: project-item
img-path: images/beerbongcircle.jpg
project-title: Wifi Beerbong
--- -->



<div class="container">
  <div class="description">
    <div class="row text-left ">



      <div class="col-sm-10 col-sm-offset-1">


             <h1 class="title-main-about" id="projectIntro"> Wifi Beerbong</h1>
            <p class="lead"> <i> They say people who are really serious about software should make their own hardware, so one day I made an internet of things beer bong.</i></p>

        <!-- <h1 class="title-main-about">Inspiration</h1>

        <p class="lead"> I showed up to Mhacks 6 with a giant briefcase of hardware. It's really important for me to make things other people haven't, so whenever I find a novel gadget or sensor, I toss it in my hardware collection. <p>

          <img class="content-image"  src="../../images/projects/beerbong/kit.jpg" alt="Jeff" >

          <p class="lead">
            I flew in to Ann Arbor a few days early to visit a few friends at the school. Long story short, there was a block party, a bunch of people were standing on top of my friend's table and it snapped. <p>

             <img class="content-image"  src="../../images/projects/beerbong/table.jpg" alt="Jeff" >

            <p class="lead">
            While looking for screws the next day at the hardware store, I come across something you would only see in Ann Arbor..... <i> In the gardening section there was an entire aisle dedicated to beer bong funnels, hoses, and accesories. </i> At that point, it became very clear to me that for Mhacks 6 I was going to make the world's first wifi enabled beer bong. <p> -->






              <h1 class="title-main-about">The world's first wifi enabled beerbong</h1>


          <p class="lead"> I had a lot of unanswered questions, so I started to lay them out in my notebook. Where am I getting power? How am I going to display the data? How can I make drinking a hyper-social activity?  </p>


         <p class="lead"> A single device had to support multiple users, so it made sense to have a log-in feature that integrated well with social media.   </p>

           <img class="content-image"  src="../../images/projects/beerbong/f1.jpg" alt="Jeff" >


          <h1 class="title-main-about">Hardware constraints</h1>
         <p class="lead"> The annoying thing with <a href="https://www.particle.io/"> <b> Particle </b> </a> photons is that they run off 3.3v and a lot of sensors run off 5v. Since we were powering the photon with a usb battery pack, the original plan was to use that power with a voltage divider. I'm not an electrical engineer, so I just decided to just tap into the VIN of the photon. People were telling me not to do that, but it's been working as long as the ground wasn't floating around.  </p>


       <img class="content-image"  src="../../images/projects/beerbong/schem.jpg" alt="Jeff" >

       <p class="lead"> The only resistors I ended up needing were for the led indicators.   </p>




      <h1 class="title-main-about">Wiring it up and weather proofing</h1>
       <p class="lead"> We fried the circuit while testing the flow sensor with some real liquid. When making the final changes to the circuit, I wasn't going to take any chances on shorting out the last board I had. Made sure this time nothing was hanging out in the open.   </p>
       <img class="content-image"  src="../../images/projects/beerbong/p1.jpg" alt="Jeff" >



       <img class="content-image"  src="../../images/projects/beerbong/p2.jpg" alt="Jeff" >




              <h1 class="title-main-about">Software was a failure</h1>

              <p class="lead">  I did not work on our software for this project. The only code I wrote was for the arduino sending out a request. Nonetheless I still have an opinion about the software.<p>

                <img class="content-image"  src="../../images/projects/beerbong/userfloww.jpg" alt="Jeff" >

                 <p class="lead">   Some features, like the score ranking, we just didn't get around to implementing. Other features, like the facebook login, I think we could have been better off avoiding. Although it's important for social games to link to social profiles, I think there are easier ways for someone to login than to type in their facebook email and password. In the future, one option I would love to explore would be installing a camera on the beerbong and leveraging a facial recognition service to tag participants.<p>


                  <h1 class="title-main-about">Check it out</h1>

           <!--    <p class="lead"> <b> <a href="http://www.drankboard.co/"> http://www.drankboard.co/ </b></a> -->


                </p>

                 <p class="lead"> <a href="https://github.com/drankadank"><b> Github </b></a><p>


                   <!-- DESKTOP FOOTER NAV -->

              <div class="fnav">

               <div class="col-sm-10 col-sm-offset-1 text-center">

                  <h1 class="title-main-about" id="footer-caption">
                More Projects <h1> </a>


              </div>

                <div class="row text-center">



                       <div class="img-responsive center-block">

                         <div class="iconbox">

                           <div class="name-footer">
                              <a href="/project-item/Mercedes/">
                              <img class="project-gif-footer" src="../../images/benzux.gif" alt="Mercedes">
                                  <p><b><br>Mercedes</b></p> </a>

                           </div>


                             <div class="name-footer">
                              <a href="/project-item/AirQuail/">
                              <img class="project-gif-footer" src="../../images/iot.gif" alt="AirQuail">
                                  <p><b><br>Airquail</b></p> </a>

                           </div>


                              <div class="name-footer">
                              <a href="/project-item/As-One/">
                              <img class="project-gif-footer" src="../../images/kk2.gif" alt="asOne">
                                  <p><b><br>asOne</b></p> </a>

                           </div>

                                 <div class="name-footer">
                              <a href="/project-item/BenzPay/">
                              <img class="project-gif-footer" src="../../images/bpay.gif" alt="Benzpay">
                                  <p><b><br>Benzpay</b></p> </a>

                           </div>



<!--
                            <div class="name-footer">
                              <a href="/project-item/More-Projects/">
                              <img class="project-gif-footer" src="../../images/kk1.gif" alt="Other">
                                  <p><b><br>More</b></p> </a>

                           </div> -->

                             <div class="name-footer">
                              <a href="/">
                              <img class="project-gif-footer" src="../../images/homecircle2.jpg" alt="Home">
                                  <p><b><br>Home</b></p> </a>

                           </div>

                    </div>
                   </div>
                  </div>







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
