const questions = [
    {
        question: "Какие основные виды теста используются для приготовления порционных десертов?" ,
        answers:[
            {text: 'Дрожжевое, бисквитное, песочное, заварное, вафельное', correct: false},
            {text: 'Дрожжевое, бисквитное, песочное, заварное, слоеное, блинное', correct: false},
            {text: 'Дрожжевое, бисквитное, песочное, заварное, слоеное', correct: false},
            {text: 'Дрожжевое, бисквитное, песочное, заварное, вафельное слоеное, блинное', correct: true}
        ]
    },
    {
        question: "Какие виды дрожжевого теста существуют?" ,
        answers:[
            {text: 'Сдобное', correct: false},
            {text: 'Хлебное', correct: false},
            {text: 'Сдобное и хлебное', correct: true}
        ]
    },
    {
        question: "Сколько способов существует для приготовления дрожжевого теста?" ,
        answers:[
            {text: 'Один', correct: false},
            {text: 'Два', correct: true},
            {text: 'Три', correct: false}
        ]
    },
    {
        question: "Какой ингредиент добавляют в бисквитное тесто для снижения количества клейковины, увеличения пластичности теста, получения выпеченного полуфабриката более сухой и рассыпчатой консистенции?" ,
        answers:[
            {text: 'Сахарную пудру ', correct: false},
            {text: 'Крахмал', correct: true},
            {text: 'Соль', correct: false},
            {text: 'Разрыхлитель', correct: false}
        ]
    },
    {
        question: "Какие три ингредиента составляют основу песочного теста?" ,
        answers:[
            {text: 'Масло, сахар и мука', correct: true},
            {text: 'Масло, яйца и мука', correct: false},
            {text: 'Молоко, сахар и мука', correct: false},
            {text: 'Молоко, яйца и мука', correct: false}
        ]
    },
    {
        question: "С каким средним содержанием клейковины используют муку для заварного теста?" ,
        answers:[
            {text: '28-36%', correct: true},
            {text: '20-25%', correct: false},
            {text: '20-30%', correct: false}
        ]
    },
    {
        question: "Что такое конфи?" ,
        answers:[
            {text: 'Вид фруктовой или ягодной желейной начинки с наличием в нем кусочков  фруктов или ягод', correct: false},
            {text: 'Это соус на основе ягодного или фруктового пюре с небольшим количеством сахара и желирующих агентов', correct: false},
            {text: 'Это желейная желейная прослойка на основе ягод или фруктов, сахара (специй, алкоголя) и желирующего компонента', correct: true},
            {text: 'Это традиционный английский заварной крем. Для его приготовления используются как правило кислые фрукты, ягоды, масло, яйца, сахар', correct: false}
        ]
    },
    {
        question: "Что такое Пралине?" ,
        answers:[
            {text: 'Это эмульсия из шоколада и сливок', correct: false},
            {text: 'Кремовая начинка, похожая на плотный мусс', correct: false},
            {text: 'Это карамелизированный сахар с добавлением жирных сливок, сливочного масла и соли', correct: false},
            {text: 'Это орехово-карамельная начинка', correct: true}
        ]
    },
    {
        question: "Что такое Ганаш?" ,
        answers:[
            {text: 'Это орехово-карамельная начинка', correct: false},
            {text: 'Это эмульсия из шоколада и сливок', correct: true},
            {text: 'Это карамелизированный сахар с добавлением жирных сливок, сливочного масла и соли', correct: false},
            {text: 'Кремовая начинка, похожая на плотный мусс', correct: false}
        ]
    },
    {
        question: "Как могут изготавливаться декоративные элементы из изомальта?" ,
        answers:[
            {text: 'Только вручную', correct: false},
            {text: 'Только при помощи силиконовых молдов', correct: false},
            {text: 'Произвольно вручную или при помощи молдов', correct: true}
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
    if(score===0){
        questionElement.innerHTML = `Ваш результат ${score}/${questions.length} <br>
        Вы совершенно не справились с тестом. Попробуйте еще раз прочитать материал на сайте и повторить попытку.
        `;
    } else if (score>0 && score<3){
        questionElement.innerHTML = `Ваш результат ${score}/${questions.length} <br>
        Вы почти не справились с тестом. Попробуйте внимательнее изучить материал на сайте и повторить попытку.
        `;
    } else if (score>2 && score<5){
        questionElement.innerHTML = `Ваш результат ${score}/${questions.length} <br>
        Вы частично справились с тестом, но большинство ответов были неверными. Попробуйте улучшить свои знания, путем изучения материала на сайте, и пройти тест еще раз.
        `;
    } else if (score>4 && score<10){
        questionElement.innerHTML = `Ваш результат ${score}/${questions.length} <br>
        Вы ответили правильно на большинство вопросов. Но чтобы действительно понять тему, попробуйте ответить правильно на все вопросы.
        `;
    } else if (score===10){
        questionElement.innerHTML = `Ваш результат ${score}/${questions.length} <br>
        Вы прекрасно усвоили материал и ответили правильно на все вопросы!
        `;
    }
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