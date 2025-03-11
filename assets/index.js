console.log("Well well well, how did I know you were gonna see this, Dexter.");

document.addEventListener("DOMContentLoaded", function() {
    const songPlayer = document.getElementById("song");

    window.addEventListener("click", function() {
      if(songPlayer.paused) {
        songPlayer.volume = 0.1;
        songPlayer.play();
      }
    })
});

