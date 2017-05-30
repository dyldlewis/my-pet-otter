$(document).ready(function() {
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("h1, p, h2, h3").removeClass();
    $("h1, p, h2, h3").addClass("light-text");

  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
    $("h1, p, h2, h3").removeClass();
    $("h1, p, h2, h3").addClass("dark-text");
  });
  $("button#original").click(function(){
    $("body").removeClass();
    $("body").addClass("main");
    $("p, h2, h3").removeClass();
    $("p, h2, h3").addClass("dark-text");
    $("h1").removeClass();
    $("h1").addClass("tootle");
  });

});
