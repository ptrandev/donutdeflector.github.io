jQuery(function () {
  console.log("Welcome the to the Javascript Horoscope Generator!");

  $("#answers").focus(function() {
    $(this).animate({borderWidth: '5px'}, '500', 'swing');
  });

  $("#answers").focusout(function() {
    $(this).animate({borderWidth: '2px'}, '500', 'swing');
  });



  /* Month Function */
  const birthDay = () => {
    let month = document.getElementById('answers').value.toLowerCase();
    return month;
  }

  $('#answers').keydown(function (e) {
      console.log('key', e.which)
      if (e.which == 13) {
      }
  });
});
