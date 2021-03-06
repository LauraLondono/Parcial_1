const audio = document.querySelector("#song");
const playPause = document.querySelector("#icon");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector("#play").classList.add("hide");
    playPause.querySelector("#pause").classList.remove("hide");    
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector("#play").classList.remove("hide");
    playPause.querySelector("#pause").classList.add("hide");    
  }
});

/*
playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    pause();
  } else {
    play();
  }
});

const pause = () => {
  playPause.querySelector("#pause").classList.remove("hide");
  playPause.querySelector("#play").classList.add("hide");
  audio.play();
}

const play = () => {
  audio.pause();
  playPause.querySelector("#pause").classList.add("hide");
  playPause.querySelector("#play").classList.remove("hide");
}
*/
