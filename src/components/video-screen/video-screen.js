const video = document.querySelector(".js-video-screen__video");
const toggleButton = document.querySelector(".js-video-screen__controls");

function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
}

function updateToggleButton() {
    video.paused ? toggleButton.style.display = '' : toggleButton.style.display = 'none';
}

toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") togglePlay();
});