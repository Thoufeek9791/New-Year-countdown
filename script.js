const currentYear = new Date().getFullYear();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function setTimer() {
  const currentDate = new Date();
  const diff = newYear - currentDate;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  days.innerText = d < 10 ? "0" + d : d;
  hours.innerText = h < 10 ? "0" + h : h;
  minutes.innerText = m < 10 ? "0" + m : m;
  seconds.innerText = s < 10 ? "0" + s : s;
  console.log(s);
}

setInterval(setTimer, 1000);
