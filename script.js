let input = "";
let result = "";

function appendInput(value) {
  input += value;
  document.getElementById("output").value = input;
}

function operate(operator) {
  if (input !== "") {
    input += operator;
    document.getElementById("output").value = input;
  }
}

function calculate() {
  try {
    result = eval(input);
    document.getElementById("output").value = result;
    input = "";
  } catch (error) {
    document.getElementById("output").value = "Error";
  }
}

function clearOutput() {
  input = "";
  document.getElementById("output").value = "";
}