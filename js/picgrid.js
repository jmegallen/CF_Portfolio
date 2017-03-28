

var PicGridSwitch = [
  {
    title: "Berlin Snowscape",
    pic: "img/snow4.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow1.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow7.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow3.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow6.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow2.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow4.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow1.jpg"
  },
  {
    title: "Berlin Snowscape",
    pic: "img/snow7.jpg"
  }
];

for (var i = 0; i < PicGridSwitch.length; ++i) {
  $("#work").append("\
  <div class='col-xs-12 col-sm-6 col-md-4'>\
  	<a href='" + PicGridSwitch[i].pic + "' class='work-img'>\
      <img class='img-responsive' src='" + PicGridSwitch[i].pic + "' alt='Berlin Snowscape'>\
      <span class='info'><h3 class='proj-title'>Title:</h3> [Berlin Snowscapes] </span>\
    </a>\
  </div>\
");
  var images = $("#work img");
  if (i % 2 === 0) {
    $(images[i]).css("border", "2px solid #b38600");
  } else {
    $(images[i]).css("border", "2px solid #282C66");
  };
};
$(".work-img").mouseenter(function() {
  $(".info", this).show();
}).mouseleave(function() {
  $(".info", this).hide();
});

