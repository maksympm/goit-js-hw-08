import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(time.seconds)
    );
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
