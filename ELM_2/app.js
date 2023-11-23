const questions = [
    {
        question: "Какое масло используется в видео для приготовления заварного теста?" ,
        answers:[
            {text: 'Сливочное', correct: false},
            {text: 'Оливковое', correct: false},
            {text: 'Растительное', correct: true},
            {text: 'Кукурузное', correct: false}
        ]
    },
    {
        question: "Какая должна быть температура разогретого Су-вида для приготовления утки?" ,
        answers:[
            {text: '63,5°', correct: true},
            {text: '70°', correct: false},
            {text: '90°', correct: false},
            {text: '50°', correct: false}
        ]
    },
    {
        question: "Какие виды лука используются при приготовление лукового соуса?" ,
        answers:[
            {text: 'Белый лук и Красный лук', correct: false},
            {text: 'Белый лук и Лук-парей', correct: false},
            {text: 'Красный лук и Лук-парей', correct: false},
            {text: 'Белый лук, Красный лук и Лук-парей', correct: true}
        ]
    },
    {
        question: "Назовите температуру и время выпекания декора из заварного теста?" ,
        answers:[
            {text: '180°, 7 мин', correct: true},
            {text: '160°, 15 мин', correct: false},
            {text: '165°, 10 мин', correct: false},
            {text: '190°, 5 мин', correct: false}
        ]
    },
    {
        question: "Какой ингредиент добавляется при пассерованние лука для его карамелизации?" ,
        answers:[
            {text: 'Белое вино', correct: false},
            {text: 'Сливки', correct: false},
            {text: 'Сахар', correct: true},
            {text: 'Соль', correct: false}
        ]
    },
]

const questionElement =  document.querySelector("#question_name");
const answerBtns =  document.querySelector("#answer_buttons");
const nextBtn =  document.querySelector("#next_button");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextBtn.innerHTML="Следующий вопрос";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans_btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Ваш результат ${score}/${questions.length}!`;
    nextBtn.innerHTML = "Пройти заново";
    nextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})

startQuiz();