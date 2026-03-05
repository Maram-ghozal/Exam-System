const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");
const titleQuestion = document.querySelector(".title");
const index = document.querySelector(".index");
const progress = document.querySelector(".progress");
const markList = document.querySelector(".markList");
const markBtn = document.querySelector(".markBtn");
let questions = [], markedList = [];
markedList = new Array(questions.length).fill(0);
let cuurentIndex = 0, score = 0, time = 60;
function Question(title, answers) {
    this.title = title;
    this.answers = answers;
}

function Answer(answer, isCorrect) {
    this.answer = answer;
    this.isCorrect = isCorrect;
}

async function loadQuestion() {
    const res = await fetch("questions.json");
    const data = await res.json();
    data.forEach(question => {
        let arrAnswer = [];
        question.answers.forEach(ans => {
            arrAnswer.push(new Answer(ans.text, ans.isCorrect));
        });
        questions.push(new Question(question.title, arrAnswer));
    });
    questions.sort(() => Math.random() - 0.5);
    displayQuestion();
}
loadQuestion();

function displayQuestion() {
    titleQuestion.innerHTML = "";
    answer.innerHTML = "";
    if (cuurentIndex == 0) {
        prev.style.display = "none";
    }
    else if (cuurentIndex == questions.length - 1) {
        next.style.display = "none";
    }
    else {
        prev.style.display = "inline";
        next.style.display = "inline";
    }
    titleQuestion.innerText = questions[cuurentIndex].title;

    questions[cuurentIndex].answers.forEach(ans => {
        const div = document.createElement("div");
        div.classList.add("radioInput");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = ans.isCorrect;
        const label = document.createElement("label");
        label.innerText = ans.answer;
        div.appendChild(radio);
        div.appendChild(label);
        answer.appendChild(div);
    })
}

next.addEventListener('click', function () {
    if (cuurentIndex != questions.length - 1)
        cuurentIndex++;
    index.innerText = cuurentIndex + 1;
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
    if (selectedRadio) {
        if (selectedRadio.value === "true") score++;
    }
    progress.value = cuurentIndex + 1;
    displayQuestion();
})

prev.addEventListener('click', function () {
    if (cuurentIndex != 0)
        cuurentIndex--;
    index.innerText = cuurentIndex + 1;
    progress.value = cuurentIndex + 1;
    displayQuestion();
})

markBtn.addEventListener('click', function () {
    if (!markedList[cuurentIndex]) {
        markedList[cuurentIndex] = 1;
        const markQuestion = document.createElement('p');
        markQuestion.classList.add('mark');
        markQuestion.innerText = `mrk-Question ${cuurentIndex + 1}`;
        markList.appendChild(markQuestion);
    }
})

const timer = setInterval(() => {
    time--;
    if (time === 0) {
        clearInterval(timer);
        window.location.href = "timeout.html";
    }
}, 1000);