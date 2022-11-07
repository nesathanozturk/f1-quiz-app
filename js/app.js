// Quiz questions and answers:
const data = [
    {
        id: "Question 1",
        question: "Who was the 2021 world champion?",
        a: "Charles Leclerc",
        b: "Lewis Hamilton",
        c: "Sebastian Vettel",
        d: "Fernando Alonso",
        e: "Max Verstappen",
        correct: "e",
    },
    {
        id: "Question 2",
        question: "Who won the race of 2020 Sakhir?",
        a: "George Russell",
        b: "Max Verstappen",
        c: "Sergio Perez",
        d: "Valteri Bottas",
        e: "Lando Norris",
        correct: "c",
    },
    {
        id: "Question 3",
        question: "When was Formula 1 founded?",
        a: "1980",
        b: "1943",
        c: "1960",
        d: "1930",
        e: "1950",
        correct: "e",
    },
    {
        id: "Question 4",
        question: "Who is the team principal of Mercedes-AMG F1?",
        a: "Toto Wolf",
        b: "Claire Williams",
        c: "Rob Denis",
        d: "Zak Brown",
        e: "Christian Horner",
        correct: "a",
    },
    {
        id: "Question 5",
        question: "Who will replace Sebastian Vettel in 2021?",
        a: "Sergio Perez",
        b: "Lando Norris",
        c: "Lance Stroll",
        d: "Carlos Sainz",
        e: "Alex Albon",
        correct: "d",
    },
    {
        id: "Question 6",
        question: "In 2013, with which car Sebastian Vettel became Formula 1 champion?",
        a: "RB6",
        b: "RB12",
        c: "RB8",
        d: "RB9",
        e: "RB7",
        correct: "d",
    },
    {
        id: "Question 7",
        question: "What will the Racing Point team called in 2021?",
        a: "McLaren",
        b: "Aston Martin",
        c: "Mercedes-AMG",
        d: "Alpine",
        e: "Williams",
        correct: "b",
    },
    {
        id: "Question 8",
        question: "How many championships does Michael Schumacher",
        a: "7",
        b: "6",
        c: "8",
        d: "4",
        e: "5",
        correct: "a",
    },
    {
        id: "Question 9",
        question: "Who has the most wins ever?",
        a: "Michael Schumacher",
        b: "Alain Prost",
        c: "Lewis Hamilton",
        d: "Mika Hakkinen",
        e: "Ayrton Senna",
        correct: "c",
    },
    {
        id: "Question 10",
        question: "What group of people have the most wins put together?",
        a: "Michael Schumacher and Kimi Raikkonen",
        b: "Lewis Hamilton and Max Verstappen",
        c: "Alain Prost and Ayrton Senna",
        d: "Sebastian Vettel and Fernando Alonso",
        e: "Niki Lauda and Nelson Piquet",
        correct: "b",
    },  
]

// Elements:
const clickBtn = document.getElementById("click");
const main = document.querySelector("main")
const container = document.getElementById("container");
const header = document.querySelector(".header");
const idEl = document.getElementById("question_id");
const questionEl = document.getElementById("question");
const answerEl = document.querySelectorAll(".answer");
const ans_a = document.getElementById("answer_a");
const ans_b = document.getElementById("answer_b");
const ans_c = document.getElementById("answer_c");
const ans_d = document.getElementById("answer_d");
const ans_e = document.getElementById("answer_e");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");

// To hide the "main" and make the container visible:
clickBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    container.classList.add("block");
});

// Quiz question and score:
let questionQuiz = 0;
let score = 0;

// Functions:
loadQuiz();
function loadQuiz() {
    deleteAnswers();

    const questionQuizData = data[questionQuiz];
    idEl.innerText = questionQuizData.id;
    questionEl.innerText = questionQuizData.question;
    ans_a.innerText = questionQuizData.a;
    ans_b.innerText = questionQuizData.b;
    ans_c.innerText = questionQuizData.c;
    ans_d.innerText = questionQuizData.d;
    ans_e.innerText = questionQuizData.e;
};

function deleteAnswers() {
    answerEl.forEach(answerEls => answerEls.checked = false);
};

function selected() {
    let answer;

    answerEl.forEach(answerEls => {
        if (answerEls.checked) {
            answer = answerEls.id;
        };
    });
    return answer;
};

nextBtn.addEventListener('click', () => {
    const answer = selected();

    if (answer) {
        if (answer === data[questionQuiz].correct) {
            score++;
        }
        questionQuiz++;

        if (questionQuiz < data.length) {
            loadQuiz();
        } else {
            header.innerHTML = `
            <h1 class="js-h1 mb-2 text-4xl text-center">Congratulations!</h1>
            <h2 class="js-h2 mb-2 text-3xl text-center">You answered ${score}/${data.length} questions correctly!</h2>
            <button class="js-btn bg-red-700 w-36 p-2 ml-48 rounded-md text-lg text-white text-center tracking-widest" onclick="location.reload()">Try again</button>
            `;
        };
    };
});