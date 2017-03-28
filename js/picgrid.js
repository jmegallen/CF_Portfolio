var PicGridSwitch = [
  "img/snow4.jpg",
  "img/snow1.jpg",
  "img/snow7.jpg",
  "img/snow3.jpg",
  "img/snow6.jpg",
  "img/snow2.jpg",
  "img/snow2.jpg",
  "img/snow2.jpg",
  "img/snow4.jpg"
]
for(var i = 0; i < PicGridSwitch.length; ++i ) {
$("#work").append("\
  <div class='col-xs-12 col-sm-6 col-md-4'>\
    <img class='img-responsive' src='" + PicGridSwitch[i] + "' alt='Berlin Snowscape'>\
  </div>\
");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid #b38600");
  } else {
    $(images[i]).css("border", "2px solid #282C66");
  };
};

