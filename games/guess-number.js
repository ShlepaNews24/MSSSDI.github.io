const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7;
const maxAttempts = 7;

const input = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const restartBtn = document.getElementById('restart-btn');
const message = document.getElementById('message');
const attemptsLeft = document.getElementById('attempts');

guessBtn.addEventListener('click', () => {
  const guess = parseInt(input.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Введите число от 1 до 100!';
    return;
  }

  attempts--;

  if (guess === secretNumber) {
    message.textContent = `🎉 Поздравляю! Ты угадал число ${secretNumber}!`;
    guessBtn.disabled = true;
    input.disabled = true;
  } else if (attempts === 0) {
    message.textContent = `😢 Игра окончена! Загаданное число было: ${secretNumber}`;
    guessBtn.disabled = true;
    input.disabled = true;
  } else if (guess > secretNumber) {
    message.textContent = 'Слишком много!';
  } else {
    message.textContent = 'Слишком мало!';
  }

  attemptsLeft.textContent = attempts;
});

restartBtn.addEventListener('click', () => {
  location.reload();
});