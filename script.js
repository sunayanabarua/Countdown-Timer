const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minsCount = document.getElementById("minutes");
const secsCount = document.getElementById("seconds");

function countdown(){
const newYears = "1 Jan 2022";

const newYear = new Date(newYears);

const currentDate = new Date();

const totalSeconds = (newYear - currentDate) / 1000;

const day = Math.floor(totalSeconds / 3600 / 24);

const hrs = Math.floor(totalSeconds / 3600) % 24;

const mins = Math.floor(totalSeconds / 60) % 60;

const secs = Math.floor(totalSeconds % 60);


daysCount.innerHTML=day;
hoursCount.innerHTML = hrs;
minsCount.innerHTML = mins;
secsCount.innerHTML = secs;
}

//countdown initial call
countdown();

setInterval(countdown, 1000);
