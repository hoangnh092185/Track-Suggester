$(document).ready(function(){
  $("form.trackSuggester").submit(function(event){

    var representInput = $("input:radio[name=representYou]:checked").val();
    var personalityInput = $("input:image[name=imageButton]:checked").val();
    var environmentInput = $("input:radio[name=environment]:checked").val();
    var workingInput = $("select.form-control").val();
    var industryInput = $("input:radio[name=industry]:checked").val();
    var wageInput = $("input:radio[name=wages]:checked").val();


    $("#representOutput").text(representInput);
    $("#personalityOutput").text(personalityInput);
    $("#environmentOutput").text(environmentInput);
    $("#projectOutput").text(workingInput);
    $("#industryOutput").text(industryInput);
    $("#wageOutput").text(wageInput);


    event.preventDefault();
// closing trackSuggester function.
  });
  $("#trackOuput").show();
  $(".form-group").hidden();
// closing readyfunction.
});
