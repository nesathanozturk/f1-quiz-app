const quizData = [
    {
        id: "1",
        question: "Who is the champion of 2021 Formula 1 season?",
        a: "Charles Leclerc",
        b: "Lewis Hamilton(be realistic)",
        c: "Sebastian Vettel",
        d: "Fernando Alonso",
        e: "Max Verstappen",
        correct: "b",
    },
    {
        id: "2",
        question: "Who won the race of 2020 Sakhir?",
        a: "George Russell",
        b: "Max Verstappen",
        c: "Sergio Perez",
        d: "Valteri Bottas",
        e: "Lando Norris",
        correct: "c",
    },
    {
        id: "3",
        question: "When was Formula 1 founded?",
        a: "1980",
        b: "1943",
        c: "1960",
        d: "1930",
        e: "1950",
        correct: "e",
    },
    {
        id: "4",
        question: "Who is the team principal of Mercedes-AMG F1?",
        a: "Toto Wolf",
        b: "Claire Williams",
        c: "Rob Denis",
        d: "Zak Brown",
        e: "Christian Horner",
        correct: "a",
    },
    {
        id: "5",
        question: "Who will replace Sebastian Vettel in 2021?",
        a: "Sergio Perez",
        b: "Lando Norris",
        c: "Lance Stroll",
        d: "Carlos Sainz",
        e: "Alex Albon",
        correct: "d",
    },
    {
        id: "6",
        question: "In 2013, with which car Sebastian Vettel became Formula 1 champion?",
        a: "RB6",
        b: "RB12",
        c: "RB8",
        d: "RB9",
        e: "RB7",
        correct: "d",
    },
    {
        id: "7",
        question: "What will the Racing Point team called in 2021?",
        a: "McLaren",
        b: "Aston Martin",
        c: "Mercedes-AMG",
        d: "Alpine",
        e: "Williams",
        correct: "b",
    },
]


const clickBtn = document.getElementById("click");
const main = document.querySelector("main")
const container = document.getElementById("container");

// Hidden Main and Visible Container:
clickBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    container.classList.add("block");
});