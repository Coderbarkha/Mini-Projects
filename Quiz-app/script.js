const startScreen = document.querySelector(".start-screen");
const quizContainer = document.querySelector(".quiz-container");
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hide");
    quizContainer.classList.remove("hide");
    showQuestion();
  });
  
const questions = [
    {
      question: "Which language is used for web apps?",
      options: ["Python", "PHP", "JavaScript", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Hyper Tool Multi Language",
        "HighText Markdown Language",
        "None of these"
      ],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      answer: "1995"
    },
    {
      question: "CSS stands for?",
      options: ["Cascade Style Sheet", "Colorful Style Sheet", "Cascading Style Sheets", "Creative Style Sheet"],
      answer: "Cascading Style Sheets"
    },
     {
          question: "Which property is used to change the background color in CSS?",
          options: ["color", "bgcolor", "background-color", "background"],
          answer: "background-color",
    },
        {
          question: "Which company developed JavaScript?",
          options: ["Netscape", "Google", "Microsoft", "Apple"],
          answer: "Netscape",
        },
        {
          question: "What does DOM stand for?",
          options: [
            "Document Object Model",
            "Data Object Management",
            "Digital Ordinance Model",
            "Document Orientation Mode",
          ],
          answer: "Document Object Model",
        },
        {
          question: "Inside which HTML element do we put the JavaScript?",
          options: ["<js>", "<script>", "<javascript>", "<code>"],
          answer:"<script>",
        },
        {
          question: "Which symbol is used for comments in JavaScript?",
          options: ["//", "/* */", "#", "<!-- -->"],
          answer: "//",
        },
        {
          question: "How do you write 'Hello World' in an alert box?",
          options: [
            "msg('Hello World');",
            "msgBox('Hello World');",
            "alertBox('Hello World');",
            "alert('Hello World');",
          ],
          answer: "alert('Hello World');",
        },
        {
          question: "Which keyword is used to declare a variable in JavaScript?",
          options: ["var", "int", "let", "Both var and let"],
          answer: "Both var and let",
        },
        {
          question: "How do you call a function in JavaScript?",
          options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "Call.myFunction()",
          ],
          answer:"myFunction()",
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          options: ["-", "*", "=", "+"],
          answer:"=", 
        }
  ];
  
  let currentIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timer;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const timeEl = document.getElementById("time");
  const resultBox = document.getElementById("result-box");
  const finalScore = document.getElementById("final-score");
  const resultMsg = document.getElementById("result-message");
  const restartBtn = document.getElementById("restart-btn");
  
  const correctSound = document.getElementById("correct-sound");
  const wrongSound = document.getElementById("wrong-sound");
  
  function showQuestion() {
    resetState();
    const q = questions[currentIndex];
    questionEl.textContent = q.question;
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => selectAnswer(option, q.answer));
      optionsEl.appendChild(btn);
    });
  
    startTimer();
  }
  
  function resetState() {
    optionsEl.innerHTML = "";
    clearInterval(timer);
    timeLeft = 30;
    timeEl.textContent = timeLeft;
  }
  
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(null, questions[currentIndex].answer); // auto move on timeout
      }
    }, 1000);
  }
  
  function selectAnswer(selected, correct) {
    clearInterval(timer);
  
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => {
      if (btn.textContent === correct) {
        btn.style.backgroundColor = "#28a745"; // green
      } else {
        btn.style.backgroundColor = "#dc3545"; // red
      }
      btn.disabled = true;
    });
  
    if (selected === correct) {
      score++;
      correctSound.play();
    } else {
      wrongSound.play();
    }
  
    nextBtn.style.display = "block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      nextBtn.style.display = "none";
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById("quiz-box").classList.add("hide");
    resultBox.classList.remove("hide");
    finalScore.textContent = `${score} / ${questions.length}`;
  
    if (score === questions.length) {
      resultMsg.textContent = "🎉 Excellent! You're a Quiz Master!";
    } else if (score >= questions.length / 2) {
      resultMsg.textContent = "👍 Good job! Keep Practicing!";
    } else {
      resultMsg.textContent = "😅 You can do better! Try Again!";
    }
  }
  
  restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove("hide");
    resultBox.classList.add("hide");
    nextBtn.style.display = "none";
    showQuestion();
  });
  