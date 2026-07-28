document.getElementById("welcome").innerHTML =
"Welcome, " + localStorage.getItem("username");

const questions = [

{
q:"1. HTML stands for?",
o:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyperlink Text Language"
],
a:0
},

{
q:"2. CSS is used for?",
o:[
"Styling Web Pages",
"Programming",
"Database",
"Networking"
],
a:0
},

{
q:"3. JavaScript is a?",
o:[
"Programming Language",
"Markup Language",
"Operating System",
"Database"
],
a:0
},

{
q:"4. Which HTML tag displays an image?",
o:[
"&lt;img&gt;",
"&lt;picture&gt;",
"&lt;photo&gt;",
"&lt;image&gt;"
],
a:0
},

{
q:"5. Which symbol is used for an ID selector in CSS?",
o:[
"#",
".",
"*",
"@"
],
a:0
},

{
q:"6. Which JavaScript function displays a popup message?",
o:[
"alert()",
"display()",
"popup()",
"show()"
],
a:0
},

{
q:"7. JavaScript was developed by?",
o:[
"Google",
"Microsoft",
"Netscape",
"Apple"
],
a:2
},

{
q:"8. Which keyword declares a variable?",
o:[
"var",
"int",
"float",
"char"
],
a:0
},

{
q:"9. Which HTML tag creates a hyperlink?",
o:[
"&lt;a&gt;",
"&lt;link&gt;",
"&lt;url&gt;",
"&lt;href&gt;"
],
a:0
},

{
q:"10. JavaScript runs in a?",
o:[
"Browser",
"Scanner",
"Printer",
"Compiler"
],
a:0
}

];

let current = 0;
let answers = [];
let time = 30;
let timer;

loadQuestion();

function loadQuestion(){

clearInterval(timer);

time = 30;

document.getElementById("timer").innerHTML =
"Time Left : " + time;

timer = setInterval(function(){

time--;

document.getElementById("timer").innerHTML =
"Time Left : " + time;

if(time <= 0){
nextQuestion();
}

},1000);

document.getElementById("question").innerHTML =
questions[current].q;

let html = "";

for(let i=0;i<questions[current].o.length;i++){

html += `
<label class="option">
<input type="radio" name="ans" value="${i}" ${answers[current]==i?"checked":""}>
<span>${questions[current].o[i]}</span>
</label>
`;

}

document.getElementById("options").innerHTML = html;

document.getElementById("progress").innerHTML =
"Question " + (current+1) + " of " + questions.length;

}

function saveAnswer(){

let radios = document.getElementsByName("ans");

for(let radio of radios){

if(radio.checked){

answers[current] = Number(radio.value);

}

}

}

function nextQuestion(){

saveAnswer();

if(current < questions.length-1){

current++;

loadQuestion();

}

}

function previousQuestion(){

saveAnswer();

if(current > 0){

current--;

loadQuestion();

}

}

function submitQuiz(){

saveAnswer();

clearInterval(timer);

let score = 0;

for(let i=0;i<questions.length;i++){

if(answers[i] == questions[i].a){

score++;

}

}

let msg = "";
let color = "";

if(score==10){
msg="Excellent!";
color="green";
}
else if(score>=8){
msg="Very Good!";
color="blue";
}
else if(score>=5){
msg="Good Job!";
color="orange";
}
else{
msg="Keep Practicing!";
color="red";
}

document.getElementById("result").innerHTML =
"<h2>Your Score : "+score+" / 10</h2>" +
"<h2 style='color:"+color+";'>"+msg+"</h2>";

}