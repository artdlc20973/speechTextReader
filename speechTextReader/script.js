const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    image: 'https://images.unsplash.com/photo-1496568934502-9e86936646be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    text: "I'm Thirsty"
  },
  {
    image: 'https://images.unsplash.com/photo-1498674202614-ac0172c6c61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    text: "I'm Happy"
  },
  {
    image: 'https://images.unsplash.com/photo-1514486926376-b0ce3e56c145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    text: "I'm Sad"
  },
  {
    image: 'https://images.unsplash.com/photo-1477413114673-6708cad13418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    text: "I'm Hungry"
  },
  {
    image: 'https://images.unsplash.com/photo-1602368987717-c41505af4151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: "I'm Angry"
  },
  {
    image: 'https://images.unsplash.com/photo-1457104312140-ada7fcd34df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: "I want to go outside"
  },
  {
    image: 'https://images.unsplash.com/photo-1539327381140-bc020facf1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: "I'm Hurt"
  },
  {
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    text: "I want to go to school"
  },
  {
    image: 'https://images.unsplash.com/photo-1470777639313-60af88918203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: "I'm Tired"
  },
  {
    image: 'https://images.unsplash.com/photo-1591511743783-9b91e8b23900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: "I'm Scared"
  },
  {
    image: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    text: "I'm want to go to grandmas"
  },
  {
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    text: "I want to go home"
  }
  
];

data.forEach(createBox);

// create speech boxes
function createBox(item) {
  console.log(item);
}

// create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}

// init speech synth
const message = new SpeechSynthesisUtterance();

// store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// set text
function setTextMessage(text) {
  message.text = text;
}

// speak text
function speakText() {
  speechSynthesis.speak(message);
}

// set voice
function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value);
}

// voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// toggle text box 
toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));

// close text box 
closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));

// change voice
voicesSelect.addEventListener('change', setVoice);

// read text button
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();




