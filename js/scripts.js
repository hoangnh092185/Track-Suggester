var wordsHolder1;
var wordsHolder2;
var wordsHolder3;
var wordsHolder5;
var wordsHolder6;
var resultHolder;
var resultHolder1 = [];

function wordsHolder1(input) {
  if (input == "coding"){
    wordsHolder1 = "c";
    resultHolder1.push("C")
  }else if (input == "design"){
    wordsHolder1 = "d";
    resultHolder1.push("D")
  }else {
    wordsHolder1 = "t";
    resultHolder1.push("T")
  }
}
function wordsHolder2(input) {
  if (input == "bold"){
    wordsHolder2 = "c";
    resultHolder1.push("C")
  }else if (input == "creative"){
    wordsHolder2 = "d";
    resultHolder1.push("D")
  }else {
    wordsHolder2 = "t";
    resultHolder1.push("T")
  }
}
function wordsHolder3(input) {
  if (input == "in a business environments"){
    wordsHolder3 = "c";
    resultHolder1.push("C")
  }else if (input == "at home"){
    wordsHolder3 = "d";
    resultHolder1.push("D")
  }else {
    wordsHolder3 = "t";
    resultHolder1.push("T")
  }
}

function wordsHolder5(input) {
  if (input == "big company"){
    wordsHolder5 = "c";
    resultHolder1.push("C")
  }else if (input == "yourself"){
    wordsHolder5 = "d";
    resultHolder1.push("D")
  }else {
    wordsHolder5 = "t";
    resultHolder1.push("T")
  }
}

function wordsHolder6(input) {
  if (input == "low risk and low wages"){
    wordsHolder6 = "c";
    resultHolder1.push("C")
  }else if (input == "Average risk and medium wages"){
    wordsHolder6 = "d";
    resultHolder1.push("D")
  }else {
    wordsHolder6 = "t";
    resultHolder1.push("T")
  }
}
$(document).ready(function(){
  $("form.trackSuggester").submit(function(event){

    var representInput = $("input:radio[name=representYou]:checked").val();
    var personalityInput = $("input:radio[name=imageButton]:checked").val();
    var environmentInput = $("input:radio[name=environment]:checked").val();
    var workingInput = $("select.form-control").val();
    var industryInput = $("input:radio[name=industry]:checked").val();
    var wageInput = $("input:radio[name=wages]:checked").val();

    wordsHolder1(representInput);
    wordsHolder2(personalityInput);
    wordsHolder3(environmentInput);
    wordsHolder5(industryInput);
    wordsHolder6(wageInput);

    resultOutput = (wordsHolder1 + wordsHolder2 + wordsHolder3 + wordsHolder6 + wordsHolder6 + "c" + "d" + "t");

      var patt1 = /[c]/g;
      var count1 = resultOutput.match(patt1);
      var patt2 = /[d]/g;
      var count2 = resultOutput.match(patt2);
      var patt3 = /[t]/g;
      var count3 = resultOutput.match(patt3);

      rCHolder = count1.length;
      rDHolder = count2.length;
      rTHolder = count3.length;

    if (rCHolder > rDHolder && rCHolder > rTHolder){
      $("#trackResult").text("PHP/Drupal");
    }else if (rDHolder > rCHolder && rDHolder > rTHolder){
      $("#trackResult").text("CSS/Design");
    }else  {
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
