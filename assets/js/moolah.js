// Load exchange rates data via AJAX:
$.getJSON(
  'https://api.fixer.io/latest',
  function(data) {
    // Check money.js has finished loading:
    if ( typeof fx !== "undefined" && fx.rates ) {
      fx.rates = data.rates;
      fx.base = data.base;
    } else {
    // If not, apply to fxSetup global:
      var fxSetup = {
        rates : data.rates,
        base : data.base
      }
    }
  }
);

// Obtain Values of Base, Rate, and their amounts
function obtainValues() {
  baseAmount = document.getElementById("base-amount").value;
  rateAmount = document.getElementById("rate-amount").value;
  base = document.getElementById("base").value;
  rate = document.getElementById("rate").value;
  
  return baseAmount;
  return rateAmount;
  return base;
  return rate;
}

// Convert Base to Rate
function convertBase() {
  document.getElementById('rate-amount').value = fx.convert(baseAmount, {from: base, to: rate}).toFixed(2);
}

// Convert Rate to Base
function convertRate() {
  document.getElementById('base-amount').value = fx.convert(rateAmount, {from: rate, to: base}).toFixed(2);
}

// Run functions on enter for Base
$('#base-amount').keydown(function(e) {
  if (e.which == 13) {
    obtainValues();
    convertBase();
  }
});

// Run functions on enter for Rate
$('#rate-amount').keydown(function(e) {
  if (e.which == 13) {
    obtainValues();
    convertRate();
  }
});
