jQuery(function () {

  // Input Box Border Animation
  $("#answers").focus(function() {
    $(this).animate({borderWidth: '5px'}, 100, 'linear');
  });

  $("#answers").focusout(function() {
    $(this).animate({borderWidth: '2px'}, 100, 'swing');
  });

  // Global Variables
  let questionNumber = 0;

  // Question Numerator Function
  const questionNumerator = () => {
    questionNumber = questionNumber + 1;
    return questionNumber;
  }

  // Birth Month Function
  const birthMonth = () => {
    month = document.getElementById('answers').value.toLowerCase();
    return month;
  }

  // Birth Day Function
  const birthDay = () => {
    day = document.getElementById('answers').value.toLowerCase();
    return day;
  }

  // Display Question Function
  const displayQuestion = () => {
    if (questionNumber === 0) {
      document.getElementById('question').innerHTML = "What month were you born in?";
    } else if (questionNumber === 1) {
      document.getElementById('question').innerHTML = "What day were you born in?";
    } else if (questionNumber === 2) {
      document.getElementById('question').innerHTML = `You were born ${month} ${day}, right?`;
    } else {
      document.getElementById('question').innerHTML = "null";
    }
  }

  $('#answers').keydown(function (e) {
      if (e.which == 13) {
        console.log(birthMonth());
        console.log(questionNumerator());
        displayQuestion();
      }
  });

  displayQuestion();
});
