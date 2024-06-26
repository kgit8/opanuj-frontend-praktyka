function validateInput(value) {
  if (!value) return 'Invalid';
  if (!Number.isInteger(value)) return 'Invalid';
  if (value > 0 && value < 100 && value % 2 === 0) return 'Valid';
  return 'Invalid';
}

function validator() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    result.innerHTML = validateInput(Number(input.value));
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
