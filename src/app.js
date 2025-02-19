const audio = document.querySelector('#audioplayer');
let audio_index = 0;
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const player = document.querySelector('.player');
const names = document.querySelectorAll('.track-name_item');
const track_name = document.querySelector('.track-name');
let isPlay = false;
const next = document.querySelector('.play-next');
const prev = document.querySelector('.play-prev');
const volume = document.querySelector('.volume');
const controls = document.querySelector('.controls');


// create track list

const track_list = [
  {
    name: 'Beach Waves',
    image: './assets/img/Caribbean+Sunset+IId.jpg',
    path: './assets/audio/beach-waves(chosic.com).mp3',
  },
  {
    name: 'Blackbird',
    image: './assets/img/drozd.jpg',
    path: './assets/audio/drozd.mp3',
  },
  {
    name: 'Forest',
    image: './assets/img/forest.jpg',
    path: './assets/audio/forest.mp3',
  },
  {
    name: 'Emotional',
    image: './assets/img/relaxing.jpg',
    path: './assets/audio/Hope-Emotional-Soundtrack(chosic.com).mp3',
  },
  {
    name: 'Lark',
    image: './assets/img/javoronok.jpg',
    path: './assets/audio/javoronok.mp3',
  },
  {
    name: 'Slavka',
    image: './assets/img/slavka.jpg',
    path: './assets/audio/slavka.mp3',
  },
  {
    name: 'Nightingale',
    image: './assets/img/solovey.jpg',
    path: './assets/audio/solovey.mp3',
  },
  {
    name: 'Sonder',
    image: './assets/img/forestsun.jpg',
    path: './assets/audio/Sonder(chosic.com).mp3',
  },
  {
    name: 'Zarinka',
    image: './assets/img/zarynka.jpg',
    path: './assets/audio/zarynka.mp3',
  },
];

function changeBG(index) {
  player.style.backgroundImage = `url(${track_list[index].image})`;
  player.style.zIndex = `3`;
}

function goToTab(event) {
  audio.pause();
  playBtn.classList.remove('active');
  if (event.target && event.target.classList.contains('current')) {
    audio_index = event.target.id - 1;
  }

  changeBG(audio_index);
  audio.src = track_list[audio_index].path;
  audio.play();
  playBtn.classList.toggle('active');
}

track_name.addEventListener('click', goToTab);

let save_track_list = Array.from(track_list);


// names list

const namesArr = [];
let idCounter = 1;

for (let name of names) {
  namesArr.push(name);
  name.id = idCounter++;
}

namesArr.forEach(trackName => trackName.addEventListener('click', () => {
  namesArr.forEach(name => name.classList.remove('current'));
  trackName.classList.toggle('current');
}));



function changeStatus() {
  audio.currentTime = 0;
  playBtn.classList.toggle('active');
  if (playBtn.classList.contains('active')) {
    isPlay = true;
    audio.play();
  } else{
    isPlay = false;
    audio.pause();
    playBtn.classList.remove('active');
  }
}

playBtn.addEventListener('click', changeStatus);

function changeClassNextPrev(event) {

  if (event.target && event.target.classList.contains('play-next')) {

    audio_index === track_list.length - 1 ? audio_index = 0 : ++audio_index;
    audio.src = track_list[audio_index].path;
    audio.pause();
    playBtn.classList.remove('active');
    audio.currentTime = 0;
    audio.play();
    playBtn.classList.toggle('active');
    changeBG(audio_index);
    setCurr();

  } else if (event.target && event.target.classList.contains('play-prev')) {

    audio_index === 0 ? audio_index = track_list.length - 1 : --audio_index;
    audio.src = track_list[audio_index].path;
    audio.pause();
    playBtn.classList.remove('active');
    audio.currentTime = 0;
    audio.play();
    playBtn.classList.toggle('active');
    changeBG(audio_index);
    setCurr();
  }
 
}

controls.addEventListener('click', changeClassNextPrev)
 

function setCurr() {
  namesArr.forEach((item, index) => {
    item.classList.remove('current');
    if (audio_index === index) {
      item.classList.add('current');
    }
  })
}

