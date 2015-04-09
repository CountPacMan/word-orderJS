function getWordOrder(input) {
  var word_order = {};
  var split_input = input.toLowerCase().split(' ');

  // add words from split_input to the word_order object with the word as the key and the count as the value
  for (var word in split_input) { // if word isn't in 'array' (object)...
    if (!word_order.hasOwnProperty(split_input[word])) {
      word_order[split_input[word]] = 1; // ...add it: ["word" => 1] kinda
    } else {
      word_order[split_input[word]]++;
    }
  }
["bob", 3], ["is", 2], ["when"]
  var sorted_words = [];
  for (var word in word_order) {
    sorted_words.push([word, word_order[word]]); //push(['bob', 1]) etc.
  }
  sorted_words.sort(function(word1, word2) {
    return word2[1] - word1[1];
    //sort by feeding function a & b and return result of b-a (descending, a-b ascending).
  });
  var final = [];
  for (var i in sorted_words) {
    final.push(sorted_words[i][0]);
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
