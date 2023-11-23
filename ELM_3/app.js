const questions = [
    {
        question: "Какие тушки относят к сельскохозяйственной птице?" ,
        answers:[
            {text: 'Кур, гусей, индеек, уток, цесарок, цыплят, утят', correct: true},
            {text: 'Кур, гусей, индеек, уток, перепелов, цыплят, утят', correct: false},
            {text: 'Кур, гусей, индеек, уток, тетеревов, цыплят, утят', correct: false}
        ]
    },
    {
        question: "На какие виды подразделяют пернатую дичь?" ,
        answers:[
            {text: 'Степная, боровая, болотная', correct: false},
            {text: 'Степная, боровая, водоплавующая', correct: false},
            {text: 'Степная, болотная, водоплавующая', correct: false},
            {text: 'Степная, боровая, болотная, водоплавующая', correct: true}
        ]
    },
    {
        question: "Из каких технологических операций состоит механическая кулинарная обработка сельскохозяйственной птицы?" ,
        answers:[
            {text: 'Опаливание; удаление головы, шейки,ножек; потрошение; промывание; приготовление полуфабрикатов', correct: false},
            {text: 'Оттаивание( дефростация); удаление головы, шейки,ножек; потрошение; промывание; приготовление полуфабрикатов', correct: false},
            {text: 'Оттаивание( дефростация); опаливание;удаление головы, шейки,ножек; потрошение; приготовление полуфабрикатов', correct: false},
            {text: 'Оттаивание( дефростация); опаливание; удаление головы, шейки,ножек; потрошение; промывание; приготовление полуфабрикатов', correct: true}
        ]
    },
    {
        question: "Какие полуфабрикаты приготовливают из птицы и дичи?" ,
        answers:[
            {text: 'Целые тушки птицы, порционные, рубленые', correct: false},
            {text: 'Порционные, мелкокусковые, рубленые', correct: false},
            {text: 'Целые тушки птицы, мелкокусковые, рубленые', correct: false},
            {text: 'Целые тушки птицы, порционные, мелкокусковые, рубленые', correct: true}
        ]
    },
    {
        question: "Какой составляет % потери при варке птицы?" ,
        answers:[
            {text: '25%', correct: true},
            {text: '40%', correct: false},
            {text: '15%', correct: false},
            {text: '35%', correct: false}
        ]
    },
    {
        question: "Какую важную роль играет жир при жарке?" ,
        answers:[
            {text: 'Он обеспечивает равномерный прогрев. Улучшает вкус блюда и понижает его калорийность', correct: false},
            {text: 'Он предохраняет продукт от пригорания и понижает его калорийность', correct: false},
            {text: 'Он предохраняет продукт от пригорания, обеспечивает равномерный прогрев. Улучшает вкус блюда и повышает его калорийность', correct: true}
        ]
    },
    {
        question: "До какой температуры, при жарке во фритюре, предварительно нагревают жир?" ,
        answers:[
            {text: '120-140 ℃', correct: false},
            {text: '140-160 ℃', correct: false},
            {text: '160-180 ℃', correct: true},
            {text: '180-200 ℃', correct: false}
        ]
    },
    {
        question: "На какие основные группы подразделяют соусы?" ,
        answers:[
            {text: 'Красные и яично-масляные', correct: false},
            {text: 'Молочные и белые', correct: false},
            {text: 'Красные и белые', correct: true}
        ]
    },
    {
        question: "В чём главное отличие технологии Су-Вид от традиционных способов?" ,
        answers:[
            {text: 'Жестко контролируемое время приготовления', correct: false},
            {text: 'Жестко контролируемая температура приготовления', correct: true},
            {text: 'Позволяет получить  максимально однородную консистенцию с минимальными усилиями', correct: false}   
        ]
    },
    {
        question: "Какие наиболее актуальные вариации декорирования блюд из птицы  бывают?" ,
        answers:[
            {text: 'Элементы из заварного теста и элементы из фруктов', correct: false},
            {text: 'Элементы из тулипного теста и овощей', correct: false},
            {text: 'Элементы из заварного или тулипного теста', correct: false},
            {text: 'Элементы из заварного или тулипного теста, элементы из овощей и фруктов', correct: false}
        ]
    }
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