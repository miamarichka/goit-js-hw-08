import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time'
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);


//розпарсити дані зі сховища
const itemFromStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '0');

// let currentTime = JSON.parse(itemFromStorage);

// try {
//     currentTime = JSON.parse(itemFromStorage);
//  }
//  catch (e) {
//     console.error('time is not defined, default value is used ')
//  }

//відновити програвання з місця зупинки
player.setCurrentTime(itemFromStorage);

//фунція що кладе дані в сховище
function setLocalstorage ({seconds}) {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
};
//оновлює час програвання 
player.on('timeupdate', throttle(setLocalstorage, 1000));





