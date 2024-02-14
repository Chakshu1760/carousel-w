$(document).ready(function(){
  var videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/example_video_1",
    "https://www.youtube.com/embed/example_video_2",
    // Add more video URLs as needed
  ];

  // Loop through the array of videos and create carousel items
  videos.forEach(function(videoURL) {
    var item = $("<div>").addClass("item");
    var iframe = $("<iframe>").attr({
      width: "100%",
      height: "315",
      src: videoURL,
      frameborder: "0",
      allowfullscreen: ""
    });
    item.append(iframe);
    $(".owl_carousel").append(item);
  });

  // Initialize Owl Carousel
  $(".owl_carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
});
