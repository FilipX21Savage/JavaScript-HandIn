// Different Event listeners Hand In 


const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('mouseover', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});


let inputField = document.querySelector('#changeColor'); 

inputField.addEventListener('input', function(){
    if(
        inputField.value.length <= 3){
            document.body.classList.add('bg-blue');
            document.body.classList.remove('bg-red');
        }
    else {
            document.body.classList.add('bg-red');
            document.body.classList.remove('bg-blue');
    }
}); 

let doubleButtonClick = document.querySelector('#buttonDouble'); 

doubleButtonClick.addEventListener('dblclick', () => {
    document.body.classList.add('bg-white'); 
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    box.textContent = `Her can you see the x pos - ${e.offsetX}   and here the y pos - ${e.offsetY}`;
});

box.addEventListener('mouseout', e => {
    alert("If you have noticed you can scroll down and see the next task");
});

window.addEventListener('keydown', checkKeyPress, false); 

function checkKeyPress(key){
    if (key.keyCode == '65'){
        alert("Ops the letter 'A' have been press down, this is a Event Listener");
    }
};

// To do list for the Hand In so the teacher can check if I have done it well 

const items = document.querySelectorAll('li');

items.forEach(items => {
     items.addEventListener('click', e => {
         e.target.style.textDecoration = 'line-through';
     console.log('event in LI');
     });
 });



const content = document.querySelector('.content'); 

console.log(content.innerHTML);
content.innerHTML = '<h2>This is what I have learned through this Hand In, I have printed it through an Array</h2>'

const learning = ['EventListener', 'Better understanding of JavaScript', 'And a lot of other things about JavaScript' ]; 

 learning.forEach(learning => {
    content.innerHTML += `<p>${learning}</p>`;
 });



const targetDiv = document.querySelector(".content");
const btn = document.getElementById("toggle");


btn.onclick = function () {

  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } 
  else {
    targetDiv.style.display = "block";
  }
};

let messi = document.getElementById('messiFirst');

messi.addEventListener("dblclick", function(messi){
    messi.target.classList.toggle("messiSecondOn");
});


const select = document.querySelector('select');
const para = document.querySelector('.HandInFeeling');

select.addEventListener('change', FeelingAboutHandIn);

function FeelingAboutHandIn() {
  const choice = select.value;

  if (choice === 'Bad') {
    para.textContent = 'This hand in was also hard not because it was difficult to make 7 Event Listeners but because it had to be 250 lines';
  } 

  else if (choice === 'Okay') {
    para.textContent = 'I tried to make a nice little game if can call it that, it was fun but of course it could have been better';
  } 

  else if (choice === 'Good') {
    para.textContent = 'This hand in was good and you covered the most. You did different types of Event Listeners and tried to combine them with other element you have learned so far.';
  } 

  else if (choice === 'Excellent') {
    para.textContent = 'This was the perfect hand in I have ever seen. It was perfect and you could not have done anything better. But of course it was not Excellent and there is always room for improvements';
  } 

  else {
    para.textContent = '';
  }
}


const openButton = document.querySelector(".open-button");
const hideSection = document.querySelector(".hide-section");

/* Callback function */
function revealSection() {
    if (hideSection.classList.contains("open")) {
        hideSection.classList.remove("open");
    }
    else {
        hideSection.classList.add("open");
    }
}

openButton.addEventListener("click", revealSection, false);
