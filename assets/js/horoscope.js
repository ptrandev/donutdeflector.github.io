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
  let month = null;
  let day = null;
  let horoscope = null;
  let validHoroscope = true;

  // Question Numerator Function
  const questionNumerator = () => {
    questionNumber = questionNumber + 1;
    return questionNumber;
  };

  // Birth Month Function
  const birthMonth = () => {
    // Yes, this line exists.
    month = document.getElementById('answers').value.charAt(0).toUpperCase() +
    document.getElementById('answers').value.slice(1).toLowerCase();
    return month;
  };

  // Birth Day Function
  const birthDay = () => {
    day = document.getElementById('answers').value;
    return day;
  };

  // Confirmation Function
  const userconfirmation = () => {
    confirmation = document.getElementById('answers').value.toLowerCase();

    if (confirmation === "no" || confirmation === "no." || confirmation === "n") {
      questionNumber = 0;
      return questionNumber;
    } else {
      horoscopeOptions();
      useAorAn();

      if (validHoroscope === true) {
      horoscopeInformation();
      $("#answers").fadeOut(400);
      $(".horoscope-information").delay(400).fadeIn(400);
      } else {
        questionNumber = 0;
        return questionNumber;

        displayQuestion();
      }
    }
  };

  // Horoscope and Options Function
  const horoscopeOptions = () => {
    validHoroscope = true;

    if (month === "January") {
      if (day >= 1 && day <= 19) {
        horoscope = "Capricorn";
        return horoscope;
      } else if (day >= 20 && day <= 31) {
        horoscope = "Aquarius";
        return horoscope;
      }
    } else if (month === "February") {
      if (day >= 1 && day <= 18) {
        horoscope = "Aquarius";
        return horoscope;
      } else if (day >= 19 && day <= 28) {
        horoscope = "Pisces";
        return horoscope;
      }
    } else if (month === "March") {
      if (day >= 1 && day <= 20) {
        horoscope = "Pisces";
        return horoscope;
      } else if (day >= 21 && day <= 31) {
        horoscope = "Aries";
        return horoscope;
      }
    } else if (month === "April") {
      if (day >= 1 && day <= 19) {
        horoscope = "Aries";
        return horoscope;
      } else if (day >= 20 && day <= 30) {
        horoscope = "Taurus";
        return horoscope;
      }
    } else if (month === "May") {
      if (day >= 1 && day <= 20) {
        horoscope = "Taurus";
        return horoscope;
      } else if (day >= 21 && day <= 31) {
        horoscope = "Gemini";
        return horoscope;
      }
    } else if (month === "June") {
      if (day >= 1 && day <= 21) {
        horoscope = "Gemini";
        return horoscope;
      } else if (day >= 22 && day <= 30) {
        horoscope = "Cancer";
        return horoscope;
      }
    } else if (month === "July") {
      if (day >= 1 && day <= 22) {
        horoscope = "Cancer";
        return horoscope;
      } else if (day >= 23 && day <= 31) {
        horoscope = "Leo";
        return horoscope;
      }
    } else if (month === "August") {
      if (day >= 1 && day <= 22) {
        horoscope = "Leo";
        return horoscope;
      } else if(day >= 23 && day <= 31) {
        horoscope = "Virgo";
        return horoscope;
      }
    } else if (month === "September") {
      if (day >= 1 && day <= 22) {
        horoscope = "Virgo";
        return horoscope;
      } else if (day >= 23 && day <= 30) {
        horoscope = "Libra";
        return horoscope;
      }
    } else if (month === "October") {
      if (day >= 1 && day <= 22) {
        horoscope = "Libra";
        return horoscope;
      } else if (day >= 23 && day <= 31) {
        horoscope = "Scorpio";
        return horoscope;
      }
    } else if (month === "November") {
      if (day >= 1 && day <= 21) {
        horoscope = "Scorpio";
        return horoscope;
      } else if (day >= 22 && day <= 30) {
        horoscope = "Sagittarius";
        return horoscope;
      }
    } else if (month === "December") {
      if (day >= 1 && day <= 21) {
        horoscope = "Sagittarius";
        return horoscope;
      } else if (day >= 22 && day <= 31) {
        horoscope = "Aquarius";
        return horoscope;
      }
    } else {
      validHoroscope = false;
      return validHoroscope;
    }
  };

  // A or An Function
  const useAorAn = () => {
    if (horoscope === "Aries" || horoscope === "Aquarius") {
      aoran = "an";
      return aoran;
    } else {
      aoran = "a";
      return aoran;
    }
  };

  // Display Horoscope Information
  const horoscopeInformation = () => {
    if (horoscope === "Aries") {
      document.getElementById('element').innerHTML = "Fire";
      document.getElementById('lucky-numbers').innerHTML = "1, 8, 17";
      document.getElementById('strengths').innerHTML = "Courage, Confidence, Determination, Enthusiasm, Optimism, Honesty, and Passion";
      document.getElementById('weaknesses').innerHTML = "Impatience, Moodiness, Short-Tempered, Impulsiveness, and Agressiveness";
      document.getElementById('likes').innerHTML = "Comfy Clothes, Being in Charge, Pysical Challenges, and Individual Sports";
      document.getElementById('dislikes').innerHTML = "Inactivity, Delays, and Work That Doesn't Use Your Talents";
    } else if (horoscope === "Taurus") {
      document.getElementById('element').innerHTML = "Earth";
      document.getElementById('lucky-numbers').innerHTML = "2, 6, 9, 12, 24";
      document.getElementById('strengths').innerHTML = "Reliability, Patience, Practicality, Devotion, Responsibility, and Stability";
      document.getElementById('weaknesses').innerHTML = "Stubbornness, Possesiveness, and Being Uncompromising";
      document.getElementById('likes').innerHTML = " Gardening, Cooking, Music, Romance, High Quality Clothing, and Working With Your Hands";
      document.getElementById('dislikes').innerHTML = "Sudden Change, Complications, Insecurity, and Synthetic Fabric";
    } else if (horoscope === "Gemini") {
      document.getElementById('element').innerHTML = "Air";
      document.getElementById('lucky-numbers').innerHTML = "5, 7, 13, 23";
      document.getElementById('strengths').innerHTML = "Gentleness, Affection, Curiosity, Adaptability, and Ability to Learn Quickly and Exchange Ideas";
      document.getElementById('weaknesses').innerHTML = "Nervousness, Inconsistency, and Indecisiveness";
      document.getElementById('likes').innerHTML = "Music, Books, Magazines, and Chatting";
      document.getElementById('dislikes').innerHTML = "Being Alone, Confinement, Repetition and and Routine";
    } else if (horoscope === "Cancer") {
      document.getElementById('element').innerHTML = "Water";
      document.getElementById('lucky-numbers').innerHTML = "2, 3, 15, 20";
      document.getElementById('strengths').innerHTML = "Tenacity, Imagination, Loyalty, Emotions, Sympathy, and Persuasion";
      document.getElementById('weaknesses').innerHTML = "Moodiness, Pessimism, Suspiciousness, Manipulativeness, and Insecurity";
      document.getElementById('likes').innerHTML = "Art, Home-Based Hobbies, Relaxing Near Water, Helping Loved Ones, and A Good Meal With Friends";
      document.getElementById('dislikes').innerHTML = "Strangers, Revealing Personal Life, and Criticism of Loved Ones";
    } else if (horoscope === "Leo") {
      document.getElementById('element').innerHTML = "Fire";
      document.getElementById('lucky-numbers').innerHTML = "1, 3, 10, 19";
      document.getElementById('strengths').innerHTML = "Creativity, Passion, Generosity, Warm-Heartedness, Cheerfulness, and Humour";
      document.getElementById('weaknesses').innerHTML = "Arrogance, Stubbornness, Being Self-Centered, Laziness, and Inflexibility";
      document.getElementById('likes').innerHTML = "Theatre, Holidays, Being Admired, Expensive Things, Bright Colors, and Having Fun With Friends";
      document.getElementById('dislikes').innerHTML = "Being Ignored, Facing Reality, and Not Being Pampered";
    } else if (horoscope === "Virgo") {
      document.getElementById('element').innerHTML = "Earth";
      document.getElementById('lucky-numbers').innerHTML = "5, 14, 15, 23, 32";
      document.getElementById('strengths').innerHTML = "Loyalty, Analysing, Kindness, Hardworking, and Practicality";
      document.getElementById('weaknesses').innerHTML = "Shyness, Worrying, and Being Overly Crtical";
      document.getElementById('likes').innerHTML = "Animals, Healthy Food, Books, Nature, and Cleanliness";
      document.getElementById('dislikes').innerHTML = "udeness, Asking for Help, and Being The Center of Attention";
    } else if (horoscope === "Libra") {
      document.getElementById('element').innerHTML = "Air";
      document.getElementById('lucky-numbers').innerHTML = "4, 6, 13, 15, 24";
      document.getElementById('strengths').innerHTML = "Cooperation, Diplomacy, Graciousness, Fair-Mindedness, and Sociability";
      document.getElementById('weaknesses').innerHTML = "Indecisiveness, Holding Grudges, and Being Self-Pitying";
      document.getElementById('likes').innerHTML = "Harmony, Gentleness, Sharing, and the Outdoors";
      document.getElementById('dislikes').innerHTML = "Violence, Injustice, Loudmouths, and Conformity";
    } else if (horoscope === "Scorpio") {
      document.getElementById('element').innerHTML = "Water";
      document.getElementById('lucky-numbers').innerHTML = "8, 11, 18, 22";
      document.getElementById('strengths').innerHTML = "Resourcefulness, Braveness, Passion, Stubbornness, and Friendship";
      document.getElementById('weaknesses').innerHTML = "Being Distrusting, Jealousy, Secretiveness, and Violence";
      document.getElementById('likes').innerHTML = "Truth, Facts, Being Right, Longtime Friends, Teasing, and Grand Passions";
      document.getElementById('dislikes').innerHTML = "Dishonesty, Revealing Secrets, and Passivity";
    } else if (horoscope === "Sagittarius") {
      document.getElementById('element').innerHTML = "Fire";
      document.getElementById('lucky-numbers').innerHTML = "3, 7, 9, 12, 21";
      document.getElementById('strengths').innerHTML = "Generosity, Idealism, and Humour";
      document.getElementById('weaknesses').innerHTML = "Impatience, Being Outspoken, and Promising More Than They Can Deliver";
      document.getElementById('likes').innerHTML = "Freedom, Trave, Philosophy, and Being Outdoors";
      document.getElementById('dislikes').innerHTML = "Clinginess, Being Constrained, Conspiracy Theories, and Details";
    } else if (horoscope === "Capricorn") {
      document.getElementById('element').innerHTML = "Earth";
      document.getElementById('lucky-numbers').innerHTML = "4, 8, 13, 22";
      document.getElementById('strengths').innerHTML = "Responsibility, Discipline, Self-Control, and Managing Others";
      document.getElementById('weaknesses').innerHTML = "Being Know-It-Alls, Being Unforgiving, Condescension, and Pessimism";
      document.getElementById('likes').innerHTML = "Family, Tradition, Music, Understatement, and Quality Craftsmanship";
      document.getElementById('dislikes').innerHTML = "Just About Anything Eventually";
    } else if (horoscope === "Aquarius") {
      document.getElementById('element').innerHTML = "Air";
      document.getElementById('lucky-numbers').innerHTML = "4, 7, 11, 22, 29";
      document.getElementById('strengths').innerHTML = "Progressiveness, Originality, Independence, and Humanitarianism";
      document.getElementById('weaknesses').innerHTML = "Being Tempermental, Being Uncompromising, Aloofness, and Avoiding Emotional Expression";
      document.getElementById('likes').innerHTML = "Having Fun With Friends, Helping Others, Fighting For a Cause, Intellectual Conversation, and Listeners";
      document.getElementById('dislikes').innerHTML = "Limitations, Broken Promises, Being Lonely, Dullness, and Boredom";
    } else if (horoscope === "Pisces") {
      document.getElementById('element').innerHTML = "Water";
      document.getElementById('lucky-numbers').innerHTML = "3, 9, 12, 15, 18, 24";
      document.getElementById('strengths').innerHTML = "Compassion, Art, Intuition, Gentleness, Wisdom, and Music";
      document.getElementById('weaknesses').innerHTML = "Fearfulness, Being Overly Trusting, Sadness, and Escapism";
      document.getElementById('likes').innerHTML = "Being Alone, Sleeping, Music, Romance, Visual Media, Swimming, and Spirituality";
      document.getElementById('dislikes').innerHTML = "Know-It-Alls, Criticism, Living in the Past, and Cruelty";
    }
  };

  // Store Le Variables Function
  const variableStorer = () => {
    if (questionNumber === 1) {
      birthMonth();
    } else if (questionNumber === 2) {
      birthDay();
    } else if (questionNumber === 3) {
      userconfirmation();
    }
  };

  // Display Question Function
  const displayQuestion = () => {
    if (questionNumber === 0) {
      document.getElementById('question').innerHTML = "What month were you born in?";
    } else if (questionNumber === 1) {
      document.getElementById('question').innerHTML = "What day were you born in?";
    } else if (questionNumber === 2) {
      document.getElementById('question').innerHTML = "You were born <span class='word-block bold'>" + month + " " + day + "</span>, right?";
    } else if (questionNumber === 3) {
      document.getElementById('question').innerHTML = "You are " + aoran + " <span class='word-block bold' id='horoscope-name'>" + horoscope + "</span>. Check below for more information!";
    } else {
      document.getElementById('question').innerHTML = "ERROR: Reload the page.";
    }
  };

  // Runs Functions on Enter
  $('#answers').keydown(function(e) {
      if (e.which == 13) {
        console.log(questionNumerator());
        console.log(variableStorer());

        document.getElementById('answers').value = null;

        displayQuestion();
      }
  });

  // Restart Horoscope Generator
  $('#restart').click(function() {
    $(".horoscope-information").fadeOut(400);
    $("#answers").delay(400).fadeIn(400);

    questionNumber = 0;
    horoscope = null;
    month = null;
    day = null;

    displayQuestion();
  });

  // Display First Question
  displayQuestion();
});
