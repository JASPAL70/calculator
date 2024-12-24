let lastAns = 0; // Store the last answer

// Appends value to the expression field
function appendValue(value) {
  const expressionField = document.getElementById('expression');
  expressionField.value += value;
}

// Clears the entire expression and result
function clearAll() {
  document.getElementById('expression').value = '';
  document.getElementById('result').innerText = '0';
}

// Deletes the last entered character
function deleteLast() {
  const expressionField = document.getElementById('expression');
  expressionField.value = expressionField.value.slice(0, -1);
}

// Calculates the final result of the expression
function calculateResult() {
  const expressionField = document.getElementById('expression');
  const resultField = document.getElementById('result');
  let expression = expressionField.value;

  // Handle square root
  if (expression.includes('√')) {
    expression = expression.replace(/√/g, 'Math.sqrt');
  }

  try {
    const result = eval(expression);
    resultField.innerText = result;
    lastAns = result; // Store the result as the last answer
  } catch (error) {
    resultField.innerText = 'Error';
  }
}

// Uses the last calculated answer
function useLastAns() {
  const expressionField = document.getElementById('expression');
  expressionField.value += lastAns;
}

// Changes the sign of the current value
function changeSign() {
  const expressionField = document.getElementById('expression');
  const currentValue = expressionField.value;

  if (currentValue) {
    if (currentValue.startsWith('-')) {
      expressionField.value = currentValue.slice(1);
    } else {
      expressionField.value = '-' + currentValue;
    }
  }
}