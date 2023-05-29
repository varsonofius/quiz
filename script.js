const questions =[
    {
        question: "Древнее название японской столицы Токио",
        answers:[
            {text: "Идо", correct: false},
            {text: "Эдо", correct: true},
            {text: "Киото", correct: false},
            {text: "Ино", correct: false},
        ]
    },
    {
       question: "Сколько классов в японских школах",
        answers:[
            {text: "12", correct: true},
            {text: "10", correct: false},
            {text: "14", correct: false},
            {text: "11", correct: false},
        ]
    },
    {
        question: "Что принято говорить перед началом трапезы?",
         answers:[
             {text: "Аригато", correct: false},
             {text: "Охаё годзаимас", correct: false},
             {text: "Сицурэй симасу", correct: false},
             {text: "Итадакимас", correct: true},
         ]
     },
     {
        question: "Какие цветы не принято дарить  японии?",
         answers:[
             {text: "Белые", correct: true},
             {text: "Желтые", correct: false},
             {text: "Красные", correct: false},
             {text: "Фиолетовые", correct: false},
         ]
     },
     {
        question: "Синтоистская богиня изобилия и успеха, покровительница кузнецов и влинов?",
         answers:[
             {text: "Аметерасу", correct: false},
             {text: "Ниниги", correct: false},
             {text: "Инари", correct: true},
             {text: "Цукиёми", correct: false},
         ]
     },
     {
        question: "Иногда знаменитую чайную церемонию назыввают 'садо'. Как переводится термин?",
         answers:[
             {text: "Чайное искусство", correct: false},
             {text: "Путь чая", correct: true},
             {text: "Блаженство", correct: false},
             {text: "Великолепие", correct: false},
         ]
     },
     {
        question: "Кто стал основоположником стиля аниме?",
         answers:[
             {text: "Осама Тэдзука", correct: true},
             {text: "Хайяо Миядзаки", correct: false},
             {text: "Юй Кога", correct: false},
             {text: "Хироя Оку", correct: false},
         ]
     },
     {
        question: "Как называют сладкое рисовое вино?",
         answers:[
             {text: "Мирин", correct: false},
             {text: "Сакэ", correct: true},
             {text: "Мисо", correct: false},
             {text: "Амадзу", correct: false},
         ]
     },
     {
        question: "Какая сейчас в Японии эпоха?",
         answers:[
             {text: "Мэйдзи", correct: false},
             {text: "Хэйсэй", correct: false},
             {text: "Тайсё", correct: false},
             {text: "Рэйва", correct: true},
         ]
     },
     {
        question: "Как на японском будет 'здравствуйте'?",
         answers:[
             {text: "Хай", correct: false},
             {text: "Аригато", correct: false},
             {text: "Конничива", correct: true},
             {text: "Сайонара", correct: false},
         ]
     },
     {
        question: "Возраст согласия в Японии?",
         answers:[
             {text: "13", correct: true},
             {text: "14", correct: false},
             {text: "16", correct: false},
             {text: "18", correct: false},
         ]
     },
     {
        question: "Как в древности называлась Япония?",
         answers:[
             {text: "Ямато", correct: true},
             {text: "Ямамото", correct: false},
             {text: "Эдо", correct: false},
             {text: "Ниппон", correct: false},
         ]
     },
     {
        question: "Какого звука нет в японском языке?",
         answers:[
             {text: "П", correct: false},
             {text: "Д", correct: false},
             {text: "Л", correct: true},
             {text: "Р", correct: false},
         ]
     }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
let currentQuestionIndex = 0;
let score = 0;
let que_numb = 1;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    que_numb = 1;
    queCounter( que_numb);
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'Ваш результат  '+ score+' из  '+questions.length+'!';
    nextButton.innerHTML= "Попробовать снова";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    que_numb++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        queCounter( que_numb);
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        
    }else{
        startQuiz();
    }
});
function queCounter(index){
   
    
    let totalQueCounTag = '<span><p>'+ index +'</p> из <p>'+ questions.length +'</p> вопросов</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
   
}
startQuiz();