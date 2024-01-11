const questions100 = [
    {
        question: "В каком термическом состоянии поступают тушки птицы на предприятия?" ,
        answers:[
            {text: 'Остывшие, охлажденные, мороженые', correct: false},
            {text: 'Парные, охлажденные, мороженные', correct: false},
            {text: 'Охлажденные, мороженые', correct: true}
        ]
    },
    {
      question: "В каком виде на предприятия поступает дикая птица?" ,
      answers:[
          {text: 'Остывшая, замороженная', correct: false},
          {text: 'В пере, замороженная, непотрошеная, без кишечника', correct: true},
          {text: 'В пере, oстывшая, замороженная', correct: false}
      ]
    },
    {
      question: "Какая маркировка соответствует мороженным потрошенным кур, II категории?",
      answers:[
          {text: 'ЦБЕ 2', correct: false},
          {text: 'КЕ 2', correct: true},
          {text: 'КР 2', correct: false}
      ]
    },
    {
      question: "Как правильно размораживать птицу?" ,
      answers:[
          {text: 'В холодной воде', correct: true}, 
          {text: 'На воздухе', correct: true},
          {text: 'В горячей воде', correct: true}
      ]
    },
    {
      question: "Какова продолжительность процесса перемешивания котлетной массы в фаршемешалке?" ,
      answers:[
          {text: '40-60 с', correct: true},
          {text: '5-10 мин', correct: false},
          {text: '3 мин', correct: false}
      ]
    },
  ]
  
  const questions200 = [
    {
        question: "Укажите основные способы тепловой обработки",
        answers:[
            {text: 'Тушение', correct: false},
            {text: 'Припускание, пассерование', correct: false},
            {text: 'Варка, жарка', correct: true}
        ]
    },
    {
      question: "Укажите вспомогательные способы тепловой обработки",
      answers:[
          {text: 'Тушение, жарка', correct: false},
          {text: 'Припускание, пассерование, ошпаривание, опаливание', correct: true},
          {text: 'Варка, жарка', correct: false}
      ]
    },
    {
      question: "Укажите комбинированные способы тепловой обработки",
      answers:[
          {text: 'Пассерование, запекание', correct: false},
          {text: 'Жаренье, брезирование, тушение', correct: false},
          {text: 'Запекание, тушение', correct: true}
      ]
    },
    {
      question: "Какие тушки относят к сельскохозяйственной птице?",
      answers:[
          {text: 'Кур, гусей, индеек, уток, цесарок, цыплят, утят', correct: false}, 
          {text: 'Кур, гусей, индеек, уток, перепелов, цыплят, утят', correct: true},
          {text: 'Кур, гусей, индеек, уток, тетеревов, цыплят, утят', correct: false}
      ]
    },
    {
      question: "На какие виды подразделяют пернатую дичь?",
      answers:[
          {text: 'Степная, боровая, болотная', correct: false},
          {text: 'Степная, боровая, водоплавующая', correct: false},
          {text: 'Степная, боровая, болотная, водоплавующая', correct: true}
      ]
    },
  ]
  
  const questions300 = [
    {
        question: "Какие полуфабрикаты приготовливают из птицы и дичи?",
        answers:[
            {text: 'Целые тушки птицы, порционные, рубленые', correct: false},
            {text: 'Целые тушки птицы, мелкокусковые, рубленые', correct: false},
            {text: 'Целые тушки птицы, порционные, мелкокусковые, рубленые', correct: true}
        ]
    },
    {
      question: "Из каких технологических операций состоит механическая кулинарная обработка сельскохозяйственной птицы?",
      answers:[
          {text: 'Опаливание; удаление головы, шейки, ножек; потрошение; промывание; приготовление полуфабрикатов', correct: false},
          {text: 'Оттаивание (дефростация); опаливание; удаление головы, шейки, ножек; потрошение; промывание; приготовление полуфабрикатов', correct: true},
          {text: 'Оттаивание (дефростация); опаливание; удаление головы, шейки, ножек; потрошение; приготовление полуфабрикатов', correct: false}
      ]
    },
    {
      question: "Какой составляет % потери при варке птицы ?",
      answers:[
          {text: '25%', correct: true},
          {text: '40%', correct: false},
          {text: '15%', correct: false}
      ]
    },
    {
      question: "До какой температуры, при жарке во фритюре, предварительно нагревают жир?",
      answers:[
        {text: '120-140 ℃', correct: false},
        {text: '160-180 ℃', correct: true},
        {text: '180-200 ℃', correct: false}
      ]
    },
    {
      question: "На какие основные группы подразделяют соусы?",
      answers:[
        {text: 'Молочные и белые', correct: false},
        {text: 'Красные и яично масляные', correct: false},
        {text: 'Красные и белые', correct: true}
      ]
    },
  ]
  
  const scoreInformation = document.querySelector(".score_info")
  const questionElement100 =  document.querySelector("#question_name100");
  const questionElement300 =  document.querySelector("#question_name300");
  const answerBtns100 =  document.querySelector("#answer_buttons100");
  const answerBtns300 =  document.querySelector("#answer_buttons300");
  const nextBtn100 =  document.querySelector("#next_button100");
  const nextBtn300 =  document.querySelector("#next_button300");
  const blocked200 = document.querySelector(".block200");
  const blocked300 = document.querySelector(".block300");
  const nextBtn200 =  document.querySelector("#next_button200");
  const answerBtns200 =  document.querySelector("#answer_buttons200");
  const questionElement200 =  document.querySelector("#question_name200");
  const hiden200 = document.querySelector('.hiden_content200')
  const hiden300 = document.querySelector('.hiden_content300')
  const endQuiz = document.querySelector('.end_quiz')
  const quizWrap = document.querySelector('.quiz_cont')
  let isSecondReady = false;
  let isThirdReady = false;
  
  let questionCount = 0;
  
  
  
  let currentQuestionIndex100 = 0;
  let score=0;
  
  function startQuiz100(){
    currentQuestionIndex100 = 0;
    nextBtn100.innerHTML="Следующий вопрос";
    showQuestion100();
  }
  
  function showQuestion100(){
    resetState100();
    let currentQuestion100 = questions100[currentQuestionIndex100];
    let questionNo100 = currentQuestionIndex100 + 1;
    questionElement100.innerHTML = questionNo100 + ". " + currentQuestion100.question;
    currentQuestion100.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans_btn");
        answerBtns100.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer100)
    })
  }
  
  function resetState100(){
    nextBtn100.style.display = "none";
    while(answerBtns100.firstChild){
        answerBtns100.removeChild(answerBtns100.firstChild);
    }
      blockContent200()
      blockContent300()
  }
  
  function selectAnswer100(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score+=100;
        scoreInformation.innerHTML=`Ваш счет: ${score} баллов`
  
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns100.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn100.style.display = "block";
  }
  
  function handleNextButton100(){
    currentQuestionIndex100++;
    if(currentQuestionIndex100 < questions100.length){
        showQuestion100();
    }else{
      answerBtns100.innerHTML='';
      nextBtn100.remove()
      questionElement100.innerHTML='Вы ответили на все вопросы данного блока. Переходите к следующему. В случае, если вам не хватает очков, перезагрузите страницу и проверьте свои знания еще раз'
     }
  }
  
  nextBtn100.addEventListener("click", ()=>{
    if(currentQuestionIndex100<questions100.length){
        handleNextButton100();
    } else{
        answerBtns100.innerHTML='';
        nextBtn100.remove()
    }
    checkEnd()
  
  })
  
  startQuiz100();
  
  function blockContent200(){
    if(score<190){
      blocked200.innerHTML = `
      Чтобы разблокировать наберите еще ${200 - score} очков!
      `
    } else{
      blocked200.classList.remove("blocked_content")
      blocked200.innerHTML = ''
      hiden200.classList.remove('hiden_content200')
      if(!isSecondReady){
        isSecondReady=true;
        startQuiz200();
      }
    }
  }
  
  function blockContent300(){
    if(score<700){
      blocked300.innerHTML = `
      Чтобы разблокировать наберите еще ${750 - score} очков!
      `
    } else{
      blocked300.classList.remove("blocked_content")
      blocked300.innerHTML=``
      hiden300.classList.remove('hiden_content300')
      if(!isThirdReady){
        isThirdReady=true;
        startQuiz300();
      }
    }
  }
  
  let currentQuestionIndex200 = 0;
  
  function startQuiz200(){
    currentQuestionIndex200 = 0;
    nextBtn200.innerHTML="Следующий вопрос";
    showQuestion200();
  }
  
  function showQuestion200(){
    resetState200();
    let currentQuestion200 = questions200[currentQuestionIndex200];
    let questionNo200 = currentQuestionIndex200 + 1;
    questionElement200.innerHTML = questionNo200 + ". " + currentQuestion200.question;
    currentQuestion200.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans_btn");
        answerBtns200.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer200)
    })
  }
  
  function resetState200(){
    nextBtn200.style.display = "none";
    while(answerBtns200.firstChild){
        answerBtns200.removeChild(answerBtns200.firstChild);
    }
    blockContent300()
  }
  
  function selectAnswer200(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score+=250;
        scoreInformation.innerHTML=`Ваш счет: ${score} баллов`
  
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns200.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn200.style.display = "block";
  }
  
  function handleNextButton200(){
    currentQuestionIndex200++;
    if(currentQuestionIndex200 < questions200.length){
        showQuestion200();
    }else{
      answerBtns200.innerHTML='';
      nextBtn200.remove()
        questionElement200.innerHTML='Вы ответили на все вопросы данного блока. Переходите к следующему. В случае, если вам не хватает очков, перезагрузите страницу и проверьте свои знания еще раз'
    }
  }
  
  nextBtn200.addEventListener("click", ()=>{
    if(currentQuestionIndex200<questions200.length){
        handleNextButton200();
    } else{
  
    }
    checkEnd()
  
  })
  
  let currentQuestionIndex300 = 0;
  
  function startQuiz300(){
    currentQuestionIndex300 = 0;
    nextBtn300.innerHTML="Следующий вопрос";
    showQuestion300();
  }
  
  function showQuestion300(){
    resetState300();
    let currentQuestion300 = questions300[currentQuestionIndex300];
    let questionNo300 = currentQuestionIndex300 + 1;
    questionElement300.innerHTML = questionNo300 + ". " + currentQuestion300.question;
    currentQuestion300.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans_btn");
        answerBtns300.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer300)
    })
  }
  
  function resetState300(){
    nextBtn300.style.display = "none";
    while(answerBtns300.firstChild){
        answerBtns300.removeChild(answerBtns300.firstChild);
    }
  }
  
  function selectAnswer300(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score+=500;
        scoreInformation.innerHTML=`Ваш счет: ${score} баллов`
  
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns300.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn300.style.display = "block";
   
  }
  
  function handleNextButton300(){
    currentQuestionIndex300++;
    if(currentQuestionIndex300 < questions300.length){
        showQuestion300();
    }else{
      answerBtns300.innerHTML='';
      nextBtn300.remove()
      questionElement300.innerHTML='Вы ответили на все вопросы данного блока. Переходите к следующему. В случае, если вам не хватает очков, перезагрузите страницу и проверьте свои знания еще раз'
    }
  }
  
  nextBtn300.addEventListener("click", ()=>{
    if(currentQuestionIndex300<questions300.length){
        handleNextButton300();
    } else{
    }
    checkEnd()
  })
  
  const endScore = document.querySelector('.end_score')
  const endMsg = document.querySelector('.end_message')
  
  function checkEnd(){
    if (questionCount===14){
      quizWrap.style.display = "none";
      endQuiz.style.display = "block";
      endScore.innerHTML = `Вы ответили на все вопросы данного теста и заработали ${score} баллов из 4250 возможных.`
      if (score>4000){
        endMsg.innerHTML = `Это превосходный результат! Так держать!`
      } else if(score>3200){
        endMsg.innerHTML=`Это отличный результат! Молодец!`
      } else if(score>2500){
        endMsg.innerHTML = `Хороший результат!`
      }
      else if(score>1500){
        endMsg.innerHTML = `Попробуй пройти тест заново, чтобы повысить свой результат!`
      }
    } else{
      questionCount++;
    }
  }