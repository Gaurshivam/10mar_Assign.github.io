
const minutt = 5;
let time = minutt * 60;

const countdownEl = document.getElementById("countdown");

function updatecouunt() {
    const minutes =Math.floor(time / 60);
    let seconds = time % 60;


    seconds = seconds < 05 ? '0' + seconds : seconds;

    time = time < 1 ? 1 : time;

    countdownEl.innerHTML =`${minutes} : ${seconds}`;
    time--;
} 

const interval_id =setInterval(updatecouunt, 1000);

const stop = function(){
    clearInterval(interval_id);
}

const stop_btn = document.getElementById('stop');
stop_btn.addEventListener('click', stop);