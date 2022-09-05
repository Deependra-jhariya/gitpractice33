console.log("welcome to spotify");
//initialize the variable
let songIndex = 0;

let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');


let songs = [
    { songname:"dil janiye",filepath:"song/1.mp3",coverpath:"dodil.jpg"},
    { songname:"lo safer suru ho gya",filepath:"song/2.mp3",coverpath:"2.jpg"},
    { songname:" Dua Karo - Street Dancer 3D (2020)",filepath:"song/3.mp3",coverpath:"3.jpg"},
    { songname:"04 - Phir Mulaaqat - WCI (2019) ",filepath:"song/4.mp3",coverpath:"4.jpg"},
    { songname:"04 - Rahogi Meri - Love Aaj Kal (2020)",filepath:"song/5.mp3",coverpath:"5.jpg"},
    { songname:"09 - Tujhe Kitna Chahein Aur - Kabir Singh (2019)",filepath:"song/6.mp3",coverpath:"6.jpg"},
    { songname:"Aatishbaazi - Jubin Nautiyal",filepath:"song/7.mp3",coverpath:"7.jpg"},
    { songname:"Baadshaho 2017  - Socha Hai (2nd Version)",filepath:"song/8.mp3",coverpath:"8.jpg"},
]
songitem.forEach((element,i)=> {
    console.log (element,i);
element.getElementsByTagName("img")[0].src = song[i].coverpath;
element.getElementsByClassName("songname")[0].innerText = song[i].songname;
})
    
//audioElement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity= 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    
    myprogressbar.value = progress;
    
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})