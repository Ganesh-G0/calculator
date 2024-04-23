function switchTheme(value) {
  if (value == 1) {
    $("#custom-toggle").removeClass("toggle-light", 'toggle-dark').addClass("toggle-default");
    $("#html").attr("data-theme", 'default');
  } else if (value == 2) { 
    $("#custom-toggle").removeClass("toggle-default", 'toggle-dark').addClass("toggle-light"); 
    $("#html").attr("data-theme", 'light');
  } else {
    $("#custom-toggle").removeClass("toggle-default", 'toggle-dark').addClass("toggle-light"); 
    $("#html").attr("data-theme", 'dark');
  }
};
console.log($('#html').attr('data-theme'));

// let result = '24-4+3*2/6';
let result = '';
let symbolsArr = [];
let numbersArr = [];
let input = $('#input');
let output = $('#output');

$("#reset").click(() => { output.text('0'); });
$("#delete").click(() => { numbersArr.pop(); });

$('button').click((event) => {
  let currentKey = event.target.id;
  let currentValue = event.target.innerText;
  
  if (currentKey != 'reset' || currentKey != 'delete' || currentKey != 'equal') {
    if (/\d/.test(currentValue)) {
      result += currentValue;
      numbersArr.push(currentValue);
      input.text(result);
    } else {
      result += currentValue;
      input.text(result);
      symbolsArr.push(currentValue);
    }
    if (symbolsArr.length - 1 == '+') {
      let addition = add(numbersArr[numbersArr.length -2], numbersArr[numbersArr.length - 1]);
      output.text(addition);
      console.log(numbersArr[numbersArr.length -2], numbersArr[numbersArr.length -1])
    }
  }
});

$("#equal").click(() => {
  if (symbolsArr[symbolsArr.length - 1] == '+') {  
    result = add(parseInt(numbersArr[numbersArr.length - 2], parseInt(numbersArr[numbersArr.length - 1])))
    output.text(result);
  }
});

function add(num1, num2) { return (num1 + num2); }
