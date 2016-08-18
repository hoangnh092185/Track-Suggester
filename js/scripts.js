$(document).ready(function(){
  $("form.trackSuggester").submit(function(event){

    var representInput = $("input:radio[name=representYou]:checked").val();
    var personalityInput = $("input:radio[name=imageButton]:checked").val();
    var environmentInput = $("input:radio[name=environment]:checked").val();
    var workingInput = $("select.form-control").val();
    var industryInput = $("input:radio[name=industry]:checked").val();
    var wageInput = $("input:radio[name=wages]:checked").val();

    if (representInput === "coding"){
      $("#trackResult").text("PHP/Drupal");

    }else if (representInput === "design"){
      $("#trackResult").text("CSS/Design");
    }else {
      $("#trackResult").text("Ruby/Rail");
    }

    $("#representOutput").text(representInput);
    $("#personalityOutput").text(personalityInput);
    $("#environmentOutput").text(environmentInput);
    $("#projectOutput").text(workingInput);
    $("#industryOutput").text(industryInput);
    $("#wageOutput").text(wageInput);

    $(".resultText").show();
    $("#showTrImg2").show();
    event.preventDefault();

  });
});
