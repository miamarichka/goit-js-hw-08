import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

//фунція що кладе дані в сховище
function setLocalstorage ({seconds}) {
    console.log(seconds)
    localStorage.setItem('videoplayer-current-time', seconds);
};

//розпарсити дані зі сховища
const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

//відновити програвання з місця зупинки
player.setCurrentTime(currentTime);

//оновлює час програвання 
player.on('timeupdate', throttle(setLocalstorage));



