const menuButton=document.getElementById('menuButton');
const navigation=document.getElementById('navigation');
menuButton.addEventListener('click',()=>navigation.classList.toggle('open'));
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>navigation.classList.remove('open')));

const questions=[
 {q:"What's Penquin's favourite food? 🍛",a:["Pizza 🍕","Biryani 🍛","Burger 🍔","Pasta 🍝"],correct:1,good:"Biryani! You know your Penquin's tummy 😋❤️",bad:"Hehe, close! His favourite is biryani. 🍛"},
 {q:"What's Penquin's favourite colour? 🖤",a:["Blue 💙","Red ❤️","Black 🖤","White 🤍"],correct:2,good:"Black! You know him so well 🖤",bad:"His favourite colour is black! 🖤"},
 {q:"What does Penquin love most? 😋",a:["Sleeping 😴","Eating 😋","Shopping 🛍️","Running 🏃"],correct:1,good:"Correct! Food makes this penguin happy 😂🍴",bad:"You know what—he really loves eating! 😋"},
 {q:"When Penquin feels sad, what cheers him up? 🎵",a:["Listening to music 🎵","Watching TV 📺","Reading 📚","Sleeping 😴"],correct:0,good:"Music is his comfort. You remembered! 🎵❤️",bad:"It's listening to music. A little melody helps him feel better. 🎶"},
 {q:"What makes a moment with Harenee special? 💗",a:["Her smile 😊","Her laugh 😂","Her kindness 🫶","All of these 💗"],correct:3,good:"All of these—and so many more little things. 💗",bad:"His answer is all of these! Every little thing about you. 💕"},
 {q:"What would Penquin pick for a cute date? 🌙",a:["Beach walk 🌊","Movie night 🎬","Long talks ☕","Any time with you 🥰"],correct:3,good:"The place matters less when the person is you. 🥰",bad:"His favourite date is simply time with you. ❤️"},
 {q:"What's one dream Penquin hopes to share? ✨",a:["Travel together 🌍","Make memories 📸","Laugh a lot 😂","All of these ✨"],correct:3,good:"A lifetime of little adventures and memories. ✨",bad:"He hopes for all these things with you. 🌍❤️"},
 {q:"What kind of message would make Penquin smile? 💌",a:["Good morning ☀️","I miss you 🥺","I love you ❤️","Any message from you 💌"],correct:3,good:"Any message from you can brighten his day. 💌",bad:"Honestly, any message from you makes him smile. ❤️"},
 {q:"What does Penquin wish for on a difficult day? 🫂",a:["A hug 🫂","A little patience 🌷","A reassuring message 💬","All of these 💗"],correct:3,good:"A little care and a hug can mean so much. 🫂",bad:"All of these would make a tough day softer. 💗"},
 {q:"The most important question… ready for a little surprise? 💍",a:["I'm ready! 🥹","Show me! 💗","My heart is curious 💓","YES, Penquin! 🐧"],correct:3,good:"Then follow your heart to the final chapter… 💍",bad:"Whatever you chose, the surprise is waiting below. 💌"}
];
let current=0;
const questionText=document.getElementById('questionText'),answerOptions=document.getElementById('answerOptions'),quizFeedback=document.getElementById('quizFeedback'),quizProgress=document.getElementById('quizProgress'),progressBar=document.getElementById('progressBar'),nextQuestion=document.getElementById('nextQuestion'),quizComplete=document.getElementById('quizComplete');
function renderQuestion(){let q=questions[current];quizProgress.textContent=`QUESTION ${current+1} / ${questions.length}`;progressBar.style.width=`${(current+1)*10}%`;questionText.textContent=q.q;quizFeedback.textContent='';nextQuestion.hidden=true;answerOptions.innerHTML='';q.a.forEach((answer,index)=>{let button=document.createElement('button');button.className='option';button.textContent=answer;button.addEventListener('click',()=>chooseAnswer(index));answerOptions.appendChild(button)});}
function chooseAnswer(index){let q=questions[current];[...answerOptions.children].forEach((button,i)=>{button.disabled=true;if(i===q.correct)button.classList.add('correct');else if(i===index)button.classList.add('wrong')});quizFeedback.textContent=index===q.correct?q.good:q.bad;nextQuestion.hidden=false;nextQuestion.textContent=current===questions.length-1?'Finish quiz 💗':'Next question →';}
nextQuestion.addEventListener('click',()=>{if(current<questions.length-1){current++;renderQuestion()}else{questionText.hidden=true;answerOptions.hidden=true;quizFeedback.hidden=true;nextQuestion.hidden=true;quizComplete.hidden=false}});
renderQuestion();
const yesButton=document.getElementById('yesButton'),shyButton=document.getElementById('shyButton'),yesMessage=document.getElementById('yesMessage');
yesButton.addEventListener('click',()=>{yesMessage.hidden=false;yesMessage.scrollIntoView({behavior:'smooth',block:'center'});hearts(32)});
shyButton.addEventListener('click',()=>{shyButton.textContent='Sending the biggest virtual hug 🫂';hearts(14);setTimeout(()=>shyButton.textContent='I need a hug first 🥹',2200)});
function hearts(count){for(let i=0;i<count;i++){let heart=document.createElement('span');heart.className='floating-heart';heart.textContent=['♥','♡','💗','💕'][Math.floor(Math.random()*4)];heart.style.left=Math.random()*100+'vw';heart.style.fontSize=(16+Math.random()*25)+'px';heart.style.animationDuration=(3+Math.random()*2)+'s';document.body.appendChild(heart);setTimeout(()=>heart.remove(),5200)}}
