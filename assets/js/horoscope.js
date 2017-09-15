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

  // Horoscope and Options Function
  const horoscopeOptions = () => {
    if (month === "January") {
      if (day >= 1 && day <= 19) {
        horoscope = "Capricorn";
        return horoscope;
      }
      if (day >= 20 && day <= 31) {
        horoscope = "Aquarius";
        return horoscope;
      }
    } else if (month === "February") {
      if (day >= 1 && day <= 18) {
        horoscope = "Aquarius";
        return horoscope;
      }
      if (day >= 19 && day <= 28) {
        horoscope = "Pisces";
        return horoscope;
      }
    } else if (month === "March") {
      if (day >= 1 && day <= 20) {
        horoscope = "Pisces";
        return horoscope;
      }
      if (day >= 21 && day <= 31) {
        horoscope = "Aries";
        return horoscope;
      }
    } else if (month === "April") {
      if (day >= 1 && day <= 19) {
        horoscope = "Aries";
        return horoscope;
      }
      if (day >= 20 && day <= 30) {
        horoscope = "Taurus";
        return horoscope;
      }
    } else if (month === "May") {
      if (day >= 1 && day <= 20) {
        horoscope = "Taurus";
        return horoscope;
      }
      if (day >= 21 && day <= 31) {
        horoscope = "Gemini";
        return horoscope;
      }
    } else if (month === "June") {
      if (day >= 1 && day <= 21) {
        horoscope = "Gemini";
        return horoscope;
      }
      if (day >= 22 && day <= 30) {
        horoscope = "Cancer";
        return horoscope;
      }
    } else if (month === "July") {
      if (day >= 1 && day <= 22) {
        horoscope = "Cancer";
        return horoscope;
      }
      if (day >= 23 && day <= 31) {
        horoscope = "Leo";
        return horoscope;
      }
    } else if (month === "August") {
      if (day >= 1 && day <= 22) {
        horoscope = "Leo";
        return horoscope;
      }
      if (day >= 23 && day <= 31) {
        horoscope = "Virgo";
        return horoscope;
      }
    } else if (month === "September") {
      if (day >= 1 && day <= 22) {
        horoscope = "Virgo";
        return horoscope;
      }
      if (day >= 23 && day <= 30) {
        horoscope = "Libra";
        return horoscope;
      }
    } else if (month === "October") {
      if (day >= 1 && day <= 22) {
        horoscope = "Libra";
        return horoscope;
      }
      if (day >= 23 && day <= 31) {
        horoscope = "Scorpio";
        return horoscope;
      }
    } else if (month === "November") {
      if (day >= 1 && day <= 21) {
        horoscope = "Scorpio";
        return horoscope;
      }
      if (day >= 22 && day <= 30) {
        horoscope = "Sagittarius";
        return horoscope;
      }
    } else if (month === "December") {
      if (day >= 1 && day <= 21) {
        horoscope = "Sagittarius";
        return horoscope;
      }
      if (day >= 22 && day <= 31) {
        horoscope = "Aquarius";
        return horoscope;
      }
    } else {
      questionNumber = 0;
      displayQuestion();
    }
  }

  // A or An Function
  const useAorAn = () => {
    if (horoscope === "Aries" || horoscope === "Aquarius") {
      aoran = "an";
      return aoran;
    } else {
      aoran = "a";
      return aoran;
    }
  }

  // Display Horoscope Information
  const horoscopeInformation = () => {
    if (horoscope === "Aries") {
      document.getElementById('element').innerHTML = "Fire";
      document.getElementById('lucky-numbers').innerHTML = "1, 8, 17";
      document.getElementById('strengths').innerHTML = "Courage, Confidence, Determination, Enthusiasm, Optimism, Honesty, Passion";
      document.getElementById('weaknesses').innerHTML = "Impatience, Moodiness, Short-Tempered, Impulsiveness, and Agressiveness";
      document.getElementById('likes').innerHTML = "Comfy Clothes, Being in Charge, Pysical Challenges, and Individual Sports";
      document.getElementById('dislikes').innerHTML = "Inactivity, Delays, and Work That Doesn't Use Your Talents";
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
      horoscopeOptions();
      useAorAn();
      horoscopeInformation();
      $("#answers").fadeOut(400);
      $(".horoscope-information").delay(400).fadeIn(400);
    }
  }

  // Display Question Function
  const displayQuestion = () => {
    if (questionNumber === 0) {
      document.getElementById('question').innerHTML = "What month were you born in?";
    } else if (questionNumber === 1) {
      document.getElementById('question').innerHTML = "What day were you born in?";
    } else if (questionNumber === 2) {
      document.getElementById('question').innerHTML = `You were born <span class="bold">${month}  ${day}</span>, right?`;
    } else if (questionNumber === 3) {
      document.getElementById('question').innerHTML = `You are ${aoran} <span class="bold" id="horoscope-name">${horoscope}</span>. Check below for more information!`;
    } else {
      document.getElementById('question').innerHTML = "null";
    }
  }

  // Runs Functions on Enter
  $('#answers').keydown(function (e) {
      if (e.which == 13) {
        console.log(questionNumerator());
        console.log(variableStorer());

        document.getElementById('answers').value = null;

        displayQuestion();
      }
  });

  // Display First Question
  displayQuestion();
});
