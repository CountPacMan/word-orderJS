function getWordOrder(input) {

}


jQuery(document).ready(function() {
  $("#text").focus();
  $("#word-order").submit(function(event) {
    var word = $("#word").val();

    $("#result").show();
    event.preventDefault();
  });
});
