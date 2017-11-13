//app.controller("securityController",[$scope],function($scope))
'use strict';

app.controller('homeController', function($scope, $state,imageData) {

    var homeVm = this;

    imageData.fetch().then(function(data) {
        homeVm.imageDetails = data;
          homeVm.mainImg=homeVm.imageDetails.mainImgUrl;
        console.log(data);
    })

    //image slider
    $('#myCarousel').carousel({
  interval: 4000
});

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});
$('.carousel-control').click(function (e) {
  e.preventDefault();
});



});
