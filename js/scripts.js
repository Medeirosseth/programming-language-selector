$(document).ready(function() {
  const aprospectivecoder = confirm("InTeReSTeD In kNOwInG wHaT CoDiNG LanGUagE MatCHeZ YoUr PErsOnAliTy? CliICk oK fOR yEs or CaNcEl FoR No.")
    if (aprospectivecoder) {
      $("#interested").show();
    } else {
        $("#notinterested").show();
    };
  
    $("#formOne").submit(function(event){
      event.preventDefault();
      const entertainment = parseInt($("#entertainment").val());
      const beverage = parseInt($("#beverage").val());
      const app = parseInt($("#app").val());
      const animal = parseInt($("#animal").val());
      const computer = parseInt($("#computer").val());

      const score = entertainment + beverage + app + animal + computer;
      const results = ["Java", "C#", "Ruby on Rails"];
      
      if (score > 8) {
        $("#results").indexOf(results[0]);
      } else if (score > 6) {
        $("#results").indexOf(results[1])
      } else {
        $("#results").indexOf(results[2])
        }
        
      $(".hide").show(results);
    })

   
    
    $("#java").click(function() {
      $(".java-hidden").toggle();
      $(".java-showing").toggle();
    })

    $("#c").click(function() {
      $(".c-hidden").toggle();
      $(".c-showing").toggle();
    })

    $("#ror").click(function() {
      $(".ruby-hidden").toggle();
      $(".ruby-showing").toggle();
    })
})