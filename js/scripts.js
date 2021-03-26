$(document).ready(function() {
  const aprospectivecoder = confirm("Interested what coding language matches your personality? Click ok for yes or cancel for no.")
    if (aprospectivecoder) {
      $("#interested").show();
    } else {
         $("#notinterested").show();
    }

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