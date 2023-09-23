import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(addKeyToLocalStorage, 1000));

function addKeyToLocalStorage(evt) {
  const currentTime = evt.seconds;
  localStorage.setItem(LS_KEY, JSON.stringify(currentTime));
}

const savedTime = JSON.parse(localStorage.getItem(LS_KEY));
console.log(savedTime);

player.setCurrentTime(savedTime);