const Beat = () => {
    const audio = new Audio('heart-beat.wav')
    audio.play();
}
setInterval(Beat, 1000)