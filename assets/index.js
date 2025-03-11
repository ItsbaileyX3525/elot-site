console.log("Well well well, how did I know you were gonna see this, Dexter.");

document.addEventListener("DOMContentLoaded", function() {
    const songPlayer = document.getElementById("song");
    const elotText = document.getElementById("elot-text");
    const elotButton = document.getElementById("elot-button");

    let currentElots = parseInt(window.localStorage.getItem("elots"), 10) || 0;

    elotButton.addEventListener("click", function() {
        currentElots++;
        elotText.innerText = `Elots collected: ${currentElots}`;
        window.localStorage.setItem("elots", currentElots);
    });

    window.addEventListener("click", function() {
      if(songPlayer.paused) {
        songPlayer.volume = 0.1;
        songPlayer.play();
      }
    });

    







});

