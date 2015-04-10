function getWordOrder(input) {
  var splitInput = input.toLowerCase().split(' ');
  var wordsPushed = [];
  var sortedWords = [];
  
  for (var i in splitInput) {
    if (wordsPushed.indexOf(splitInput[i]) === -1) {
      wordsPushed.push(splitInput[i]);
      sortedWords.push([splitInput[i], 1]);
    } else {
      sortedWords[wordsPushed.indexOf(splitInput[i])][1]++;
    }
  }

  sortedWords.sort(function(word1, word2) {
    return word2[1] - word1[1];
  });

  var final = [];
  for (var i in sortedWords) {
    final.push(sortedWords[i][0]);
  }

  return final;
}


jQuery(document).ready(function() {
  $("#words").focus();
  $("#word-order").submit(function(event) {
    var words = $("#words").val();
    var order = getWordOrder(words);

    $("#order").text(order[0]);
    for (var i = 1; i < order.length; i++) {
      $("#order").append(", " + order[i]);
    }

    $("#result").show();
    event.preventDefault();
  });
});
