$(document).ready(function(){
  $("form#input").submit(function(event) {
    
    const one = parseInt($("input#1").val());
    const two = parseInt($("input#2").val());
    const three = parseInt($("input#3").val());

    if(one === two && two === three){
      $("#output").text("Equilateral");
    } else if (one === two || one === three || two === three){
      $("#output").text("Isosceles");
    } else if (one + two <= three || one + three <= two || two + three <= one){
      $("#output").text("NOT a triangle");
    } else {
      $("#output").text("scalene");
    }

    event.preventDefault();
  });
});