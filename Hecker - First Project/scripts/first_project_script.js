const questions = [
    { question: "JavaScript is a scripting or programming language that allows you to implement complex features on:", answer: "web pages" },
    { question: "The markup language that we use to structure and give meaning to our web content.", answer: "HTML" },
    { question: "A language of style rules that we use to apply styling to our HTML content.", answer: "CSS" },
    { question: "A scripting language that enables you to create dynamically updating content.", answer: "JavaScript" },
    { question: "What is a ready-made set of code building blocks that allows a developer to implement programs which would otherwise be hard or impossible to implement?", answer: "API" },
    { question: "Which API allows you to manipulate HTML and CSS?", answer: "DOM" },
    { question: "JavaScript interpreters actually use a technique called:", answer: "just-in-time compiling" },
    { question: "All the HTML on a page is loaded in the order in which it:", answer: "appears" },
    { question: "The name for values (such as numbers, or strings of text).", answer: "variable" },
    { question: "Named values you can't change are called?", answer: "constants" },
    { question: "You can assign a value to your variable or constant with:", answer: "=" },
    { question: "Reusable blocks of code you can write once and run again are called?", answer: "functions" },
    { question: "Text is represented by?", answer: "strings" },
    { question: "A code blcok that allows you to run code selectively?", answer: "conditional block" },
    { question: "Code that puts the text cursor into a specific field.", answer: "focus()" },
    { question: "Spelling error in your code that cause the program not to run at all.", answer: "syntax error" },
    { question: "Error where the syntax is correct but the code is not what's intended.", answer: "logic error" },
    { question: "Method to round numbers to a fixed number of decimal places?", answer: "toFixed()" },
    { question: "Function to prompt the user to answer a question via a popup dialogue box?", answer: "window.prompt()" },
    { question: "What are single objects that contain multiple values stored in a list?", answer: "arrays" }
];

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");

totalElement.textContent = totalQuestions;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerInput.value = "";
    feedbackElement.textContent = "";
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is: ${questions[currentQuestionIndex].answer}`;
        feedbackElement.style.color = "red";
    }

    scoreElement.textContent = score;
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        setTimeout(loadQuestion, 2000);
    } else {
        setTimeout(() => {
            questionElement.textContent = "Game Over!";
            feedbackElement.textContent = `Your final score is ${score}/${totalQuestions}`;
            answerInput.style.display = "none";
            document.getElementById("submit").style.display = "none";
        }, 2000);
    }
}

document.getElementById("submit").addEventListener("click", checkAnswer);

loadQuestion();