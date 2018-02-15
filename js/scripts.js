var cup = function(number1){
  return number1 * 16;
};

//user Logic
$(document).ready(function(){
  $("form#cup").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var result = (number1, 16);
    $("#output").text(result);
  });
