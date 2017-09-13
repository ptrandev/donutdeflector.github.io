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
    // Yes, this line exists.
    month = document.getElementById('answers').value.charAt(0).toUpperCase() +
    document.getElementById('answers').value.slice(1).toLowerCase();
    return month;
  }

  // Birth Day Function
  const birthDay = () => {
    day = document.getElementById('answers').value;
    return day;
  }

  // Confirmation Function
  const userConfirmation = () => {
    confirmation = document.getElementById('answers').value.toLowerCase();
    if (confirmation === "no") {
      questionNumber = 0;
      return questionNumber;
    }
  }

  // Store Le Variables Function
  const variableStorer = () => {
    if (questionNumber === 1) {
      birthMonth();
    }
    if (questionNumber === 2) {
      birthDay();
    }
    if (questionNumber === 3) {
      userConfirmation();
    }
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
        console.log(questionNumerator());
        console.log(variableStorer());

        document.getElementById('answers').value = null;

        displayQuestion();
      }
  });

  displayQuestion();
});
