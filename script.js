// Elements
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const startScreen = document.getElementById('start-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const finalScreen = document.getElementById('final-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const successScreen = document.getElementById('success-screen');

let currentQuestion = 0;

// 🧠 Quiz Questions
const questions = [
  {
    question: "What’s my favorite color?",
    options: ["Blue", "Black", "Purple", "Red"]
  },
  {
    question: "Where did we first meet?",
    options: ["School", "Instagram", "Church", "WhatsApp"]
  },
  {
    question: "How much do I like you?",
    options: ["A little", "A lot", "More than words", "Infinity ♾️"]
  },
  {
    question: "What food reminds me of you?",
    options: ["Fried Yam", "Chocolate", "Jollof", "Banku"]
  },
  {
    question: "What do I want us to do together someday?",
    options: ["Travel the world 🌍", "Watch anime all nigt", "Build a house 🏠", "Cook together"]
  }
];

// Start Quiz
startBtn.addEventListener('click', () => {
  startScreen.classList.add('hide');
  quizContainer.classList.remove('hide');
  showQuestion();
});

// Show each question
function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-btn');
    btn.addEventListener('click', () => selectOption(btn));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(btn) {
  // Remove active state from others
  const buttons = optionsContainer.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// Next Question
nextBtn.addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    quizContainer.classList.add('hide');
    finalScreen.classList.remove('hide');
  }
});

// YES! 🥹
yesBtn.addEventListener('click', () => {
  finalScreen.classList.add('hide');
  successScreen.classList.remove('hide');

  // Play the song
  const audio = document.getElementById('love-song');
  audio.currentTime = 0;
  audio.play();

  // Stop after 60 seconds
  setTimeout(() => {
    audio.pause();
  }, 60000); // 60,000 milliseconds = 1 minute
});

// NO 😢 – Make it run away!
noBtn.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * 300) - 150;
  const randomY = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
