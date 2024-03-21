let myarray = ["apple","ball","cat","dog","egg","fish",1,2,3,4,5,6];
console.log(myarray);
//alert("hello, how are you?");
//prompt("Enter your Name"); 
const a=[
    {question:'what is the capital of india?',
     options:["Delhi","Mumbai","Kolkata"],
     answer:"Delhi"},
    
    {question:'Who painted the Mona Lisa?',
     options:['Vincent van Gogh','Pablo Picasso','Leonardo da Vinci'],
     answer:"Leonardo da Vinci"},
    
    {question:'What is the largest ocean in the world?',
     options:['Indian Ocean','Arctic Ocean','Pacific Ocean'],
     answer:'Pacific Ocean'},

    {question:'Which planet is known as the "Red Planet"?',
     options:['jupyter','Mars','venus'],
     answer:'Mars'},

    {question:'What is the currency of Japan?',
     options:['euro','Yen','Dollar'],
     answer:'Yen'},

];


let currentQuestion=0;
const questionElement=document.getElementById('questions');
const optionsElement=document.getElementById('options');

function loadQuestion(){
    const currentQuizData=a[currentQuestion];
    questionElement.innerText=currentQuizData.question;
    optionsElement.innerHTML="";

    currentQuizData.options.forEach(option=>
    {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type ='radio';
        radio.name = 'answer';
        radio.value=option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    }
        );
}
function nextQuestion(){
    //const selectedOption=document.querySelector("input[name:'answer']:checked");
    const selectedOption = document.querySelector("input[name='answer']:checked");

    if(!selectedOption){alert('Please select an option');
    return;}
    const answer=selectedOption.value;
    if(answer===a[currentQuestion].answer){
        alert('correct!')

    }
    else{
        alert('wrong! The correct answer is:'+a[currentQuestion].answer)
    }
    currentQuestion++;
    if(currentQuestion<a.length){
        loadQuestion();
    }
    else{
        alert('Quiz completed');
    }
}
loadQuestion();
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', nextQuestion);