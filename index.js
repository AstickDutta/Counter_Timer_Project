const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const seconds = 1000,
  minutes = 60 * seconds,
  hours = 60 * minutes,
  day = 24 * hours;

const timerFunction = () => {
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
    now = `${mm}/${dd}/${yyyy}`;

  const entereDay = prompt("Enter Day").padStart(2, "0");
  const entereMonth = prompt("Enter Month").padStart(2, "0");

  let targetDate = `${entereMonth}/${entereDay}/${yyyy}`;

  if (now > targetDate) targetDate = `${entereMonth}/${entereDay}/${yyyy + 1}`;

  const intervalId = setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const diffiernce = timer - today;
    const leftDay = Math.floor(diffiernce / day);
    const leftHours = Math.floor((diffiernce % day) / hours);
    const leftMinutes = Math.floor((diffiernce % hours) / minutes);
    const leftSeconds = Math.floor((diffiernce % minutes) / seconds);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHours;
    minutesElement.innerText = leftMinutes;
    secondsElement.innerText = leftSeconds;

    if (diffiernce < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time's Up";
      clearInterval(intervalId);
    }
  }, 0);
};

timerFunction();