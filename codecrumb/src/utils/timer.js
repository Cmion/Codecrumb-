class Timer {
  constructor(restTime, beBackTime, stopwatch, rest) {
    this.restTime = restTime;
    this.beBackTime = beBackTime;
    this.stopwatch = stopwatch;
    this.rest = rest;
    this.paused = false;
    this.running = false;
    this.isActive = false;
    this.__onBreak = false;
    this.time = 0;
    this.timerActive;
    this.timeInt;
  }
  startTimer() {
    clearTimeout(this.timerActive);
    if (!this.running) {
      this.paused = false;
    }

    if (!this.paused) {
      const seconds = Math.floor(this.time % 60);

      const mins = Math.floor((this.time / 60) % 60);

      const hr = Math.floor(this.time / 3600);

      this.time++;

      const c_seconds = seconds < 10 ? `0${seconds}` : seconds;
      const c_minutes = mins < 10 ? `0${mins}` : mins;
      const c_hours = hr < 10 ? `0${hr}` : hr;

      this.stopwatch.textContent = `${c_hours}:${c_minutes}:${c_seconds}`;
      this.stopwatch.style.color = "#fff";

      this.running = true;
      this.isActive = true;
      this.timerActive = setTimeout(() => this.startTimer(), 1000);
    }
  }
  pauseTimer() {
    if (this.running) {
      this.paused = true;
      clearTimeout(this.timerActive);
      this.running = false;
      this.stopwatch.style.color = "rgba(108,103,131,0.61)";
    }
  }
  restartTimer() {
    if (this.running) {
      this.time = 0;
      this.running = false;
      clearTimeout(this.timerActive);
      this.startTimer();
      this.stopwatch.style.color = "#fff";
    }
  }
  stopTimer() {
    if (this.__onBreak) return;
    this.time = 0;
    clearTimeout(this.timerActive);
    this.running = false;
    this.isActive = false;
    this.stopwatch.textContent = "00:00:00";
    this.stopwatch.style.color = "rgba(108,103,131,0.61)";
  }
  getBreakTime(seconds) {
    if (this.isActive) {
      clearInterval(this.timeInt);
      this.__onBreak = true;
      const now = Date.now();
      const then = now + seconds * 1000;
      this.displayBreakTime(seconds);
      this.getBreakEnd(then);
      timer.pauseTimer();
      this.timeInt = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
          clearInterval(this.timeInt);
          this.__onBreak = false;
          if (this.paused && this.isActive) {
            this.startTimer();
          }
          this.beBackTime.textContent = "00:00";
          this.beBackTime.style.color = "rgba(108,103,131,0.61)";
          this.restTime.style.color = "rgba(108,103,131,0.61)";
          Array.from(rest).forEach(r => {
            r.classList.remove("rest-clicked");
          });
          return;
        }
        this.displayBreakTime(secondsLeft);
      }, 1000);
    }
  }
  displayBreakTime(seconds) {
    const remainingHours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds / 60) % 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const newHour = remainingHours < 10 ? `0${remainingHours}` : remainingHours;
    const newMin =
      remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
    const newSec =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    this.restTime.textContent = `${newHour}:${newMin}:${newSec}`;
    this.restTime.style.color = "#fff";
  }
  getBreakEnd(timestamp) {
    const future = new Date(timestamp);
    const futureHours = future.getHours();
    const futureMinutes = future.getMinutes();
    const newHour = futureHours > 12 ? futureHours - 12 : futureHours;

    this.beBackTime.textContent = `${newHour < 10 ? "0" + newHour : newHour}:${
      futureMinutes < 10 ? "0" + futureMinutes : futureMinutes
    }`;
    this.beBackTime.style.color = "#fff";
  }
}

// create a instance of timer
const restTime = document.querySelector(".rest-time");
const beBackTime = document.querySelector(".be-back-time");
const rest = document.querySelectorAll(".rest");
const stopwatch = document.querySelector(".elapsed");
const timer = new Timer(restTime, beBackTime, stopwatch, rest);

// both utils function are called here.
Array.from(rest).forEach(rt => {
  rt.addEventListener("click", setBreak);
  // rt.style.backgroundColor
});

Array.from(rest).forEach(rt => {
  rt.addEventListener("click", function(e) {
    if (!timer.isActive) return;

    if (!this.classList.contains("rest-clicked")) {
      Array.from(rest).forEach(r => {
        r.classList.remove("rest-clicked");
      });
      this.classList.add("rest-clicked");
    }
  });
});

const start = document.querySelector(".start-timer");
const pause = document.querySelector(".pause-timer");
const restart = document.querySelector(".restart-timer");
const stop = document.querySelector(".stop-timer");
let __startTimer = true;

function setBreak() {
  const time = parseInt(this.dataset.minute * 60);

  // stopwatch.style.color = "#ffffff";
  timer.getBreakTime(time);
}
document.balanceForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const time = parseInt(this.minutes.value * 60);
  this.reset();
  timer.getBreakTime(time);
});

start.addEventListener("click", function() {
  if (__startTimer) {
    timer.startTimer();
    // start.textContent = "Stop timer";
    __startTimer = false;
  }
});

pause.addEventListener("click", function() {
  timer.pauseTimer();

  __startTimer = true;
});
restart.addEventListener("click", function() {
  timer.restartTimer();
});

stop.addEventListener("click", function() {
  timer.stopTimer();
  __startTimer = true;
});

