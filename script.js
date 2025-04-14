const questions = [
    // Easy 
    {
      question: "What does CPU stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Utility"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript"
    },
    {
      question: "What does RAM stand for?",
      options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Random Allocate Memory"],
      answer: "Random Access Memory"
    },
    {
      question: "Which of these is NOT an operating system?",
      options: ["Windows", "Linux", "Oracle", "macOS"],
      answer: "Oracle"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/* */", "#", "<!-- -->"],
      answer: "//"
    },
    {
      question: "What is the value of binary 1010?",
      options: ["10", "12", "8", "14"],
      answer: "10"
    },
    {
      question: "Which one is a frontend framework?",
      options: ["Django", "React", "Node.js", "Flask"],
      answer: "React"
    },
    {
      question: "Which one is a version control system?",
      options: ["MySQL", "Git", "Docker", "Linux"],
      answer: "Git"
    },
    {
      question: "HTML is used to:",
      options: ["Add style", "Store data", "Structure web pages", "Create database"],
      answer: "Structure web pages"
    },
    {
      question: "Which is a database management system?",
      options: ["Photoshop", "Figma", "MySQL", "Node.js"],
      answer: "MySQL"
    },
    {
      question: "Which keyword is used to define a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which of these is not a data type in JavaScript?",
      options: ["String", "Boolean", "Float", "Number"],
      answer: "Float"
    },
    {
      question: "What does the 'if' statement do?",
      options: ["Loops over code", "Executes code conditionally", "Declares a variable", "Ends a loop"],
      answer: "Executes code conditionally"
    },
    {
      question: "What is the correct way to write an array in JavaScript?",
      options: ["var arr = {}", "var arr = []", "var arr = ()", "var arr = <>"],
      answer: "var arr = []"
    },
    {
      question: "CSS is used to:",
      options: ["Add logic", "Create structure", "Style web pages", "Connect databases"],
      answer: "Style web pages"
    },
    {
      question: "Which of the following is a loop in JavaScript?",
      options: ["repeat", "iterate", "for", "loop"],
      answer: "for"
    },
    {
      question: "Which protocol is used to browse websites?",
      options: ["FTP", "HTTP", "TCP", "SSH"],
      answer: "HTTP"
    },
    {
      question: "Which device is used to store data permanently?",
      options: ["RAM", "ROM", "Hard Drive", "Cache"],
      answer: "Hard Drive"
    },
    {
      question: "Which of these is a markup language?",
      options: ["CSS", "HTML", "Python", "Java"],
      answer: "HTML"
    },
    {
      question: "Who is known as the father of the computer?",
      options: ["Bill Gates", "Alan Turing", "Charles Babbage", "Steve Jobs"],
      answer: "Charles Babbage"
    },

    //Medium Difficulty
    
    {
      question: "What is the output of 2 + '2' in JavaScript?",
      options: ["4", "22", "NaN", "Error"],
      answer: "22"
    },
    {
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Applied Protocol Interface", "Advanced Program Interaction", "Application Port Integration"],
      answer: "Application Programming Interface"
    },
    {
      question: "Which HTML tag is used to include JavaScript code?",
      options: ["<script>", "<js>", "<code>", "<javascript>"],
      answer: "<script>"
    },
    {
      question: "Which method is used to fetch data from an API in JavaScript?",
      options: ["getData()", "fetch()", "receive()", "httpRequest()"],
      answer: "fetch()"
    },
    {
      question: "In CSS, what does 'em' unit measure?",
      options: ["Pixels", "Percentage", "Relative to parent font-size", "Relative to viewport"],
      answer: "Relative to parent font-size"
    },
    {
      question: "What is the output of `typeof null` in JavaScript?",
      options: ["'null'", "'object'", "'undefined'", "'boolean'"],
      answer: "'object'"
    },
    {
      question: "Which of the following is a NoSQL database?",
      options: ["PostgreSQL", "MongoDB", "MySQL", "Oracle"],
      answer: "MongoDB"
    },
    {
      question: "Which HTTP method is used to update data?",
      options: ["GET", "PUT", "POST", "DELETE"],
      answer: "PUT"
    },
    {
      question: "What does DNS stand for?",
      options: ["Data Network System", "Domain Name System", "Digital Node Server", "Domain Network Source"],
      answer: "Domain Name System"
    },
    {
      question: "What does the '===' operator check in JavaScript?",
      options: ["Value only", "Type only", "Both value and type", "None of the above"],
      answer: "Both value and type"
    },
  
    // Difficult Difficulty
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function having access to the parent scope",
        "A function that executes immediately",
        "A function that runs on page load",
        "A loop that never ends"
      ],
      answer: "A function having access to the parent scope"
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
      answer: "Merge Sort"
    },
    {
      question: "What is Big O notation used for?",
      options: ["Styling elements", "Measuring space", "Describing performance or complexity", "Describing syntax"],
      answer: "Describing performance or complexity"
    },
    {
      question: "Which of these is a strongly typed language?",
      options: ["Python", "Java", "JavaScript", "PHP"],
      answer: "Java"
    },
    {
      question: "What is the space complexity of a binary search algorithm?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(1)"
    },
    {
      question: "Which protocol secures data over the internet?",
      options: ["FTP", "HTTP", "SSL/TLS", "IP"],
      answer: "SSL/TLS"
    },
    {
      question: "Which data structure uses LIFO?",
      options: ["Queue", "Linked List", "Stack", "Tree"],
      answer: "Stack"
    },
    {
      question: "What is a race condition in programming?",
      options: [
        "A bug that causes an infinite loop",
        "An error from slow code",
        "An unexpected outcome due to timing in concurrent operations",
        "A problem with version control"
      ],
      answer: "An unexpected outcome due to timing in concurrent operations"
    },
    {
      question: "Which layer of the OSI model handles encryption?",
      options: ["Application", "Presentation", "Transport", "Session"],
      answer: "Presentation"
    },
    {
      question: "What is the function of a virtual machine (VM)?",
      options: [
        "To host websites",
        "To monitor network traffic",
        "To emulate a computer system",
        "To store user passwords"
      ],
      answer: "To emulate a computer system"
    }
  ];
  
const questionText = document.querySelector(".question");
const optionsList = document.querySelector(".multichoice ul");
const nextBtn = document.querySelector(".ques-btn");
const questionCounter = document.querySelector("h2");
const timerBar = document.querySelector(".timer-bar");
const timeLeft = document.getElementById("time-left");
const timerContainer = document.querySelector(".timer-container");

let currentQuestion = 0;
let score = 0;
let countdownInterval;
let remainingTime = 10;

const randomQuestions = shuffleArray([...questions]).slice(0, 10)

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
    const q = randomQuestions[currentQuestion];
    questionText.textContent = q.question;
    questionCounter.textContent = `Question ${currentQuestion + 1}/10`;
 
    optionsList.innerHTML = "";
  
    q.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => selectOption(li, q.answer);
      optionsList.appendChild(li);
    });

    startTimer();
  }

function startTimer() {
  remainingTime = 10;
  timeLeft.textContent = `${remainingTime}s`;
  timerBar.style.width = "100%";

  countdownInterval = setInterval(() => {
    remainingTime--;
    timeLeft.textContent = `${remainingTime}s`;
    timerBar.style.width = `${(remainingTime / 10) * 100}%`;

    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      handleTimeout();
    }
  }, 1000)
}
  

function selectOption(selectedLi, correctAnswer) {
    const allOptions = optionsList.querySelectorAll("li");
    allOptions.forEach(opt => {
      opt.style.pointerEvents = "none";    
    });

    if (selectedLi.textContent === correctAnswer) {
    selectedLi.style.backgroundColor = "var(--correct)";
    score++;
    } else {
    selectedLi.style.backgroundColor = "var(--wrong)";
    }

    allOptions.forEach(opt => {
      if (opt.textContent === correctAnswer) {
        opt.style.backgroundColor = "var(--correct)"
      }
    });
  }

function handleTimeout() {
  currentQuestion++;
  if (currentQuestion < 10) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  const app = document.querySelector(".app");
  app.innerHTML = `<h2>Quiz Completed!</h2>
                  <p>Your Score: ${score}/10</p>`;
  
  if (score === 10) {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: {y: 0.6}
    });
  }

  const restartBtn = document.createElement("button");
  restartBtn.classList.add("btn");
  restartBtn.textContent = "Try Again";

  restartBtn.addEventListener("click", () => {
    location.reload();
  });

  const exitBtn = document.createElement("button");
  exitBtn.classList.add("btn");
  exitBtn.textContent = "Exit";

  exitBtn.addEventListener("click", () =>{
    window.location.href = "startpage.html";
  });

  app.appendChild(restartBtn);
  app.appendChild(exitBtn);
}

nextBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    currentQuestion++;
    if (currentQuestion < 10) {
      loadQuestion();
    } else {
      showFinalScore()
    }
  });
  
loadQuestion();

