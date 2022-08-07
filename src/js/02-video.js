import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

function setLocalstorage ({seconds}) {
    console.log(seconds)
    localStorage.getItem('videoplayer-current-time', seconds);
};
const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(setLocalstorage));



