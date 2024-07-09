

var enter = document.getElementById('enter');
var text = document.getElementById('text');
var show = document.getElementById('show');
var bodypart = document.getElementById('bodypart');
var angry_b = document.getElementById('angry');
var normal_b = document.getElementById('normal');
var shy_b = document.getElementById('shy');
var belly = document.getElementById('belly');
var belly_count = 0;
var logo = document.getElementById('logo');
var ask = document.getElementById('ask');
var stop = document.getElementById('stop');
var banana_b = document.getElementById( 'banana');
var ht = document.querySelector('html');
var mouth = document.getElementById('mouth');


bodypart.setAttribute("draggable", false);
mouth.setAttribute("draggable", false);
belly.setAttribute("draggable", false);


//condition value
var condition_value = 0;
var name = '';
var age = '';
var food = '';
var banana_status = false;
var banana_count = 0;
var calculator_status = false;
var play_status = 0;

//condition feature
async function condition() {
  //condition value section
if(text.value.length > 0 && condition_value == 1 && play_status == 1) {
  name = text.value;
  text.value = '';
  show.innerHTML = get_random([`Hello! ${name}`,`Nice to meet you ${name}!`,`Glad to meet you ${name}`,`${name} is a great name! wonderful`]);
  condition_value = 2;
  await sleep(1500);
  show.innerHTML = 'So let\'s drive into the game';
  await sleep(2000);
  show.innerHTML = 'You can type each answer of the question in the box below';
  await sleep(3000);
  show.innerHTML = 'Let\'s start The first question';
  await sleep(2000);
  show.innerHTML = 'I start out tall, but the longer I stand, the shorter I grow. What am I?';
  
}
else if(text.value.length>0 && condition_value == 2 && play_status == 1) {
  if (text.value == 'Candle'
      || text.value == 'candle'
      || text.value == 'a candle'
      || text.value == 'A candle') {
        text.value = '';
        show.innerHTML = get_random(['You\'re smart!','You\'re right!','That\'s correct!', 'correct! I can\'t expect that!']);
        await sleep(2300);
        show.innerHTML = 'Before continue to the next question';
        await sleep(2000);
        show.innerHTML = 'You can pause this game whanever your want'
        await sleep(2000);
        show.innerHTML = 'By type pause in the box below';
        await sleep(3000);
        show.innerHTML = 'if you want to continue let\'s go to the next question'
      }
  else if(text.value == 'พ่อมึงมั้ง') {
    text.value = '';
    angry()
    show.innerHTML = 'พ่อมึงอะไอครวยยยยยย!'
    await sleep(1500);
    show.innerHTML = 'เยดแม่กูก็คุยดีตั้งนาน';
    await sleep(1800);
    show.innerHTML = 'เด็กเหี้ยไอสัส';
    await sleep(1000);
    show.innerHTML = 'อย่าให้กูเจอมึงนะไอสัส!';
    await sleep(2500);
    normal();
    show.innerHTML = 'Sorry! It was our bugging program'
    await sleep(2700);
    show.innerHTML = 'I start out tall, but the longer I stand, the shorter I grow. What am I?';

  }
}
  
 
  //normal feature
  else if(text.value == 'Hi'
    || text.value == 'Hello'  
    || text.value == 'hi'
    || text.value == 'hello'
    || text.value == 'hye') {
    show.innerHTML = 'Hello '+name;
    await sleep(1000);
    show.innerHTML = 'My name is Ryan'
    await sleep(1200);
    show.innerHTML = 'I\'m the character from kakao talk!'
    text.value = '';
  }
else if(text.value == 'What is your name?'
        || text.value == 'name'
        || text.value == 'Name'
        || text.value == 'what is your name?'
        || text.value == 'your name'
        || text.value == 'what is your name'
        || text.value == 'What is your name') {
  show.innerHTML = 'Ryan!';
  text.value = '';
}
else if(text.value == '?') {
  show.innerHTML = 'What are you going to ask me???';
  text.value = '';
}
else if(text.value == 'food') {
  show.innerHTML = 'banana';
  text.value = '';
}
else if(text.value == 'owner') {
  show.innerHTML = 'Not YOU!';
  text.value = '';
}
else if(text.value == 'angry') {
  show.innerHTML = `I'm angry`;
  text.value = '';
  angry();
}
else if(text.value == 'calm down') {
  show.innerHTML = `Ok!`;
  text.value = '';
  bodypart.src = 'kindpng_4127892-removebg-preview.png';
}
else if(text.value == 'I love you') {
  show.innerHTML = `I'm shy`;
  text.value = '';
  bodypart.src = 'ryan_shy.png';
}

//search
else if(text.value == 'google') {
  window.open("http://www.google.com","_blank");
  text.value = '';
}
else if(text.value == 'youtube') {
  window.open("http://www.youtube.com","_blank");
  text.value = '';
}
else if(text.value == 'video'
        || text.value == 'What video that you recommended?') {
  show.innerHTML = 'I recommend this one'
  window.open("https://www.youtube.com/watch?v=hxPov_2xOm0","_blank");
  text.value = '';
}
//calculator 
else if (text.value == 'calculator') {
    calculator_status = true;
    text.value = '';
    show.innerHTML = `I'm a calculator`;
}
else if(calculator_status && text.value == 'exit') {
  calculator_status = false;
  show.innerHTML = `I come back to normal now!`;
  text.value = '';
}
else if (calculator_status && text.value.length > 0) {
  var ans_cal = eval(text.value);
  show.innerHTML = ans_cal;
  text.value = ''
}
else if(text.value == 'How to make a pancake' || text.value == 'how to make a pancake') {
  show.innerHTML = 'This website show you how to make a pancake';
  window.open("https://www.inspiredtaste.net/24593/essential-pancake-recipe/","_blank");
  text.value = '';
}

//apeach tranfrom**
else if(text.value == 'apeach' || text.value == 'Apeach'){
  bodypart.src = 'apeach-removebg-preview.png';
  belly.src = '';
  mouth.src = '';
  bodypart.style.height = '20rem';
}
else if(text.value == 'How old are you?' 
       || text.value == 'how old are you?'  
       || text.value == 'How old are you'
       || text.value == 'how old are you'
       || text.value == 'how old are u'
       || text.value == 'how old r u') {
        if(age.length > 0 && age > 11) {
          show.innerHTML = 'Let you guess. You are older than me'
        }
       }
}

//main button
enter.addEventListener('click', condition)

text.addEventListener("keypress" , function(e) {
    if(text.value.length > 0 && e.keyCode == 13) {
        condition();
    }
})



//function 

function angry() {
  bodypart.src = 'ryan_angry.png';  
}
function normal() {
  bodypart.src = 'kindpng_4127892-removebg-preview.png';  
}
function shy() {
  bodypart.src = 'ryan_shy.png';  
}


//button section
angry_b.addEventListener('click', angry);
normal_b.addEventListener('click', normal);
shy_b.addEventListener('click', shy);
belly.addEventListener('click', function() {
  if(belly_count == 4) {
    angry();
    show.innerHTML = 'Do not play my belly!'
    belly_count = 0;
  }
  else {
    belly_count+=1;
  }
})

ask.addEventListener('click', async function() {
  if(condition_value == 0)  {
    play_status = 1;
    show.innerHTML = get_random(['Welcome you to my game','Thanks you for playing my game','OH! Thanks for joining my game','Thank you for interesting my game!']);
    await sleep(1900);
    show.innerHTML = 'First of all I will teach you how to interact with me';
    await sleep(2500);
    show.innerHTML = 'You can grab the banana from the right side';
    await sleep(2300);
    show.innerHTML = 'and put it on my mounth'
    await sleep(1500);
    show.innerHTML = 'So I can eat and enjoy it';
  }
})

stop.addEventListener('click', function() {
  if(condition_value > 0) {
    condition_value = 0
    play_status = 0;
    show.innerHTML = 'Ok! Let reset the game'
  }
})

//banana button + banana feature + food feature
banana_b.addEventListener('click', function() {
  if(banana_status) {
    document.getElementsByTagName("html")[0].style.cursor = "default";
    mouth.style.cursor = "default";
    banana_b.style.cursor = "default";
    banana_status = false;
  }
  else {
    document.getElementsByTagName("html")[0].style.cursor = "url('baban.png'), auto";
    mouth.style.cursor = "url('baban.png'), auto";
    banana_b.style.cursor = "url('baban.png'), auto";
    banana_status = true;
  }
})

mouth.addEventListener('click' , async function() {
  if(banana_status && play_status == 0) {
    document.getElementsByTagName("html")[0].style.cursor = "default";
    mouth.style.cursor = "default";
    banana_b.style.cursor = "default";
    banana_count+=1;
    show.innerHTML = "It's very yummy!"
    banana_status = false;
  }
  else if(banana_status && play_status == 1) {
    document.getElementsByTagName("html")[0].style.cursor = "default";
    mouth.style.cursor = "default";
    banana_b.style.cursor = "default";
    banana_status = false;
    show.innerHTML = 'Hmmm!';
    mouth.style.height = '5.5rem';
    mouth.style.marginTop = '5.9rem';
    await sleep(330);
    mouth.style.height = '6rem';
    mouth.style.marginTop = '5.7rem';
    await sleep(330);
    mouth.style.height = '5.5rem';
    mouth.style.marginTop = '5.9rem';
    await sleep(330);
    mouth.style.height = '6rem';
    mouth.style.marginTop = '5.7rem';
    await sleep(330);
    show.innerHTML = 'That\'s yummy!';
    mouth.style.height = '5.5rem';
    mouth.style.marginTop = '5.9rem';
    await sleep(330);
    mouth.style.height = '6rem';
    mouth.style.marginTop = '5.7rem';
    await sleep(330); 
    mouth.style.height = '5.5rem';
    mouth.style.marginTop = '5.9rem';
    await sleep(330);
    mouth.style.height = '6rem';
    mouth.style.marginTop = '5.7rem';
    await sleep(330); 
    mouth.style.height = '5.5rem';
    mouth.style.marginTop = '5.9rem';
    await sleep(330);
    mouth.style.height = '6rem';
    mouth.style.marginTop = '5.7rem';
    await sleep(1000);
    document.styleSheets[0].insertRule("#mouth:hover {margin-top: 5.9rem !important}");
    document.styleSheets[0].insertRule("#mouth:hover {height: 5.5rem !important}");
    mouth.style.cursor = 'pointer';
    show.innerHTML = 'I want to know your name'
    await sleep(2000);
    show.innerHTML = 'Please type your name in the box below'
    condition_value = 1;
  }
})



//function 
const sleep = time => new Promise(resolve => {
  setTimeout(resolve,time)
})

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

console.log(get_random(['HI','Oh my god!!!','I want to be your friend']));


//month fuction 
async function eating() {
  
}
async function mouth_move() {
  mouth.style.height = '5.5rem';
  mouth.style.marginTop = '5.9rem';
  await sleep(500);
  mouth.style.height = '6rem';
  mouth.style.marginTop = '5.7rem';
  await sleep(500);
  mouth.style.height = '5.5rem';
  mouth.style.marginTop = '5.9rem';
  await sleep(500);
  mouth.style.height = '6rem';
  mouth.style.marginTop = '5.7rem';
  await sleep(500);
  mouth.style.height = '5.5rem';
  mouth.style.marginTop = '5.9rem';
  await sleep(500);
  mouth.style.height = '6rem';
  mouth.style.marginTop = '5.7rem';
  await sleep(500);
  mouth.style.height = '5.5rem';
  mouth.style.marginTop = '5.9rem';
  

  
}


// document.styleSheets[0].insertRule("header:hover {background-color:green}");
// document.styleSheets[0].insertRule("#ask:hover {height: 10rem}");
// document.styleSheets[0].insertRule("#ask:hover {background-color: green}");


