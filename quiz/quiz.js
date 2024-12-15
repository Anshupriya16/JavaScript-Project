const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "What is the capital of the UK?",
        answers: [
            { text: "London", correct: true },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "Who is the Prime Minister of India?",
        answers: [
            { text: "Shrimati Indira Gandhi", correct: false },
            { text: "Rajendra Prasad", correct: false },
            { text: "Narendra Damodar Das Modi", correct: true },
            { text: "Rahul Gandhi", correct: false },
        ],
    },
    {
        question: "Who is the Father of the Nation?",
        answers: [
            { text: "Subhash Chandra Bose", correct: false },
            { text: "Dayanand Saraswati", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Sardar Vallabhbhai Patel", correct: false },
        ],
    },
    {
        question: "What is the capital of Bhutan?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Thimpu", correct: true },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz completed! Your score is ${score}/${questions.length}`;
        nextButton.innerHTML = "Restart";
        nextButton.addEventListener("click", startQuiz);
    }
});

startQuiz();
