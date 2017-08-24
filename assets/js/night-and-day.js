$(document).ready(function() {
  $('#orb').click( function() {
    if ($(this).hasClass('sun')) {
      $(this).removeClass('sun').addClass('moon');
      $('h1').removeClass('black').addClass('white');
    } else {
      $(this).removeClass('moon').addClass('sun');
      $('h1').removeClass('white').addClass('black');
    }

    if ($('body').hasClass('day')) {
      $('body').removeClass('day').addClass('night');
    } else {
      $('body').removeClass('night').addClass('day');
    }

    if ($('#moonspot1').hasClass('visible')) {
        $('#moonspot1').removeClass('visible');
    } else {
        $('#moonspot1').addClass('visible');
    }

    if ($('#moonspot2').hasClass('visible')) {
        $('#moonspot2').removeClass('visible');
    } else {
        $('#moonspot2').addClass('visible');
    }

    if ($('#moonspot3').hasClass('visible')) {
        $('#moonspot3').removeClass('visible');
    } else {
        $('#moonspot3').addClass('visible');
    }
  });
});
