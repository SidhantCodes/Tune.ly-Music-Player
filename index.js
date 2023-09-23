console.log("The app is live");
let songIndex = 0;
let audioElement = new Audio('Audio/AfterHours.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
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

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
    }
});
// audioElement.play();
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

});


