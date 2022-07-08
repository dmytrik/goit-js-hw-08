import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (time) {
  player.setCurrentTime(time);
}

player.on('timeupdate', throttle(saveSecondsInStorage, 1000));

function saveSecondsInStorage(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
}
