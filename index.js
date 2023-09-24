console.log("The app is live");
let songIndex = 0;
let audioElement = new Audio('Audio/AfterHours.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let nowPlaying = document.getElementById('nowPlaying');
let songs = [
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"},
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"},
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"},
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"},
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"},
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"},
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"},
    {songName: "After Hours", filePath: "Audio/AfterHours.mp3", coverPath: "pictures/cover2.jpg", artist: "The Weeknd"}
]

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerHTML = "&#xf04c;";
        gif.style.opacity = 1; 
        nowPlaying.style.opacity = 1
    } else {
        audioElement.pause();
        masterPlay.innerHTML = "&#xf04b;"; 
        gif.style.opacity = 0; 
        nowPlaying.style.opacity = 0
    }
});

// audioElement.play();
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

});


