const questions = [
    {
        question: "Какие ингредиенты нужны для приготовления клубнично-лимонного сорбета?" ,
        answers:[
            {text: 'Лимонный сок, замороженная клубника, сахар, яичный белок', correct: true},
            {text: 'Лимонный сок, замороженная клубника, сахарная пудра, яичный белок', correct: false},
            {text: 'Лимонный сок, свежая клубника, сахарная пудра, яичный белок', correct: false},
            {text: 'Лимонный сок, свежая клубника, сахар, яичный белок', correct: false}
        ]
    },
    {
        question: "Какой ингредиент нужно добавить в остывшие клубничное пюре?" ,
        answers:[
            {text: 'Сахар', correct: false},
            {text: 'Яичный белок', correct: true},
            {text: 'Лимонный сок', correct: false},
            {text: 'Сахарную пудру', correct: false}
        ]
    },
    {
        question: "Для приготовления  песочных тарталеток, какой жирностью используется сливочное масло?" ,
        answers:[
            {text: '80%', correct: false},
            {text: '61%', correct: false},
            {text: '82,5%', correct: true},
            {text: '72,5%', correct: false}
        ]
    },
    {
        question: "Какая Мука используется для приготовления песочных тарталеток?" ,
        answers:[
            {text: 'Пшеничная, Миндальная', correct: true},
            {text: 'Пшеничная, Кукурузная', correct: false},
            {text: 'Ржаная, Миндальная', correct: false},
            {text: 'Соевая, Миндальная', correct: false}
        ]
    },
    {
        question: "Какой жирностью используются сливки для приготовление клубничного мусса?" ,
        answers:[
            {text: '20%', correct: false},
            {text: '33%', correct: true},
            {text: '22%', correct: false},
            {text: '15%', correct: false}
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