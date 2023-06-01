function lowVolume() {
    var audio = document.getElementById("audio");
    audio.volume = 0.05;
} 


document.addEventListener("DOMContentLoaded", lowVolume);