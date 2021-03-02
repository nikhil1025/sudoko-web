
const tableOrder = parseInt(localStorage.getItem("tableOrder"));

let startingMinutes, time, confirmInitiate = true;


//Setting time as per difficulty level
if (tableOrder == 3) {
    startingMinutes = 5;
}
if (tableOrder == 4) {
    startingMinutes = 10;
}
if (tableOrder == 9) {
    startingMinutes = 15;
}

time = startingMinutes * 60;
const timerElement = document.getElementById("clock");

let interval = setInterval(countDown, 1000);

// Timer Mechanics
function countDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if (time == 0 && confirmInitiate == true) {
        timerElement.innerHTML = `${minutes} : ${seconds}`;
        clearInterval(interval);
        $("#timeUp").modal("show");
        confirmInitiate = false;
    } else {
        timerElement.innerHTML = `${minutes} : ${seconds}`;
        time--;
    }
}

countDown();
