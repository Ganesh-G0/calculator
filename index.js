let operationStack = "";
const display = $("#output");

const enterInput = (value) => {
  if (operationStack.toString.length <= 14) {
    console.log("pressed", value);
    if (operationStack == "Syntax Error" || operationStack == "Infinity") {
      operationStack = "";
    }
    operationStack = operationStack + value.toString();
    // $("#input").text(operationStack);
    updateDisplay();
  }
  // console.log(operationStack.toString.length);
  // console.log(operationStack);
};
const updateDisplay = () => {
  // $("#output").text("I'm Working...");
  display.text(operationStack);
};
const clearDisplay = () => { 
  operationStack = " ";
  updateDisplay();
  // console.log("Clear Display");
};
const deleteValue = () => {
  if (operationStack == "Syntax Error" || operationStack == "Infinity") {
    operationStack = "";
  }
  else if (operationStack !== "") {
    operationStack = operationStack.slice(0, operationStack.length - 1);
    updateDisplay();
  }
};
const solve = () => {
  try {
    operationStack = String(eval(operationStack));
    // console.log((operationStack).length);
    if (operationStack.length > 5) {
      operationStack = operationStack.slice(0, 4)      
    }
    updateDisplay();
  } catch (error) {
    console.log(error);
    operationStack = "Invalid Input";
    updateDisplay();
  }
};

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
