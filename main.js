 function draw() {
     image(video, 0, 0, 480, 380);
     if(status != "")
     {
         objectDetector.detect(video, gotResult);

     }

 } 

 function gotResult