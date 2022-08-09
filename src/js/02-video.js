import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);


//розпарсити дані зі сховища
const itemFromStorage = localStorage.getItem('videoplayer-current-time') || '0';

let currentTime = JSON.parse(itemFromStorage);

// try {
//     currentTime = JSON.parse(itemFromStorage);
//  }
//  catch (e) {
//     console.error('time is not defined, default value is used ')
//  }

//відновити програвання з місця зупинки
player.setCurrentTime(currentTime);

//фунція що кладе дані в сховище
function setLocalstorage ({seconds}) {
    console.log(seconds)
    localStorage.setItem('videoplayer-current-time', seconds);
};
//оновлює час програвання 
player.on('timeupdate', throttle(setLocalstorage, 1000));





