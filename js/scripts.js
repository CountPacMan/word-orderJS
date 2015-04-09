function getWordOrder(input) {
  var word_order = {};
  var split_input = input.toLowerCase().split(' ');

  for (var i in split_input) {
    if (!word_order.hasOwnProperty(split_input[i])) {
      word_order[split_input[i]] = 1;
    } else {
      word_order[split_input[i]]++;
    }
  }
  var sorted_words = [];
  for (var word in word_order) {
    sorted_words.push([word, word_order[word]]);
    sorted_words.sort(function(word1, word2) {
      return word2[1] - word1[1];
    });
  }
  var final = [];
  for (var i in sorted_words) {
    final.push(sorted_words[i][0]);
  }

  return final;
}


jQuery(document).ready(function() {
  $("#text").focus();
  $("#word-order").submit(function(event) {
    var word = $("#word").val();

    $("#result").show();
    event.preventDefault();
  });
});
