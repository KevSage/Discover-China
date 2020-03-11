$(document).ready(function() {
  // CityCardAnimation
  // var beijing = $('#beijing');
  // $('#beijing').css('opacity', 0);
  // beijing.waypoint(function(){
  //   beijing.addClass('animated fadeInLeft');
  // }, {offset: '70%'})
  //
  // var shanghai = $('#shanghai');
  // $('#shanghai').css('opacity', 0);
  // shanghai.waypoint(function(){
  //   shanghai.addClass('animated fadeInDown');
  // }, {offset: '70%'})
  //
  //
  // var xian = $('#xian');
  // $('#xian').css('opacity', 0);
  // xian.waypoint(function(){
  //   xian.addClass('animated fadeInRight');
  // }, {offset: '70%'})
  //
  //
  // var hangzhou = $('#hangzhou');
  // $('#hangzhou').css('opacity', 0);
  // hangzhou.waypoint(function(){
  //   hangzhou.addClass('animated fadeInLeft');
  // }, {offset: '70%'})
  //
  // var dalian = $('#dalian');
  // $('#dalian').css('opacity', 0);
  // dalian.waypoint(function(){
  //   dalian.addClass('animated fadeInUp');
  // }, {offset: '70%'})
  //
  //
  // var chengdu = $('#chengdu');
  // $('#chengdu').css('opacity', 0);
  // chengdu.waypoint(function(){
  //   chengdu.addClass('animated fadeInRight');
  // }, {offset: '70%'})

  // Travel

  var travel = $("#travel");
  $("#travel").css("opacity", 0);
  travel.waypoint(
    function() {
      $("#travel").css("opacity", 1);
      travel.addClass("animated fadeInLeftBig");
    },
    { offset: "70%" }
  );

  // Experience

  var experience = $("#experience");
  $("#experience").css("opacity", 0);
  experience.waypoint(
    function() {
      $("#experience").css("opacity", 1);
      experience.addClass("animated slideInUp");
    },
    { offset: "50%" }
  );
});

var statue = $("#statue");
$("#statue").css("opacity", 0);
statue.waypoint(
  function() {
    $("#statue").css("opacity", 1);
    statue.addClass("animated fadeInLeftBig");
  },
  { offset: "70%" }
);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("sticky-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stick");
    document.getElementById("main-content").style.paddingTop = "55.25px";
  } else {
    navbar.classList.remove("stick");
    document.getElementById("main-content").style.paddingTop = "0px";
  }
}
