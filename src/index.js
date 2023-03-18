import './style.css';
import { add, sub, format } from 'date-fns';

const sleepNowButton = document.querySelector('.sleep-now');
const wakeAtButton = document.querySelector('.wake-at');
const sleepAtButton = document.querySelector('.sleep-at');
const startOver = document.querySelector('.start-over');

let currentMode = '';
let time = new Date();

function getExtraTime() {
  const fallAsleepTime = document.querySelector('#enable-time-to-sleep');
  if (fallAsleepTime.checked) {
    return Number(document.querySelector('#minutes').value);
  }
  return 0;
}

function wakeTimes(sleepTime) {
  let extraTime = getExtraTime();
  const wakeTime6Cycles = add(sleepTime, { hours: 9, minutes: extraTime });
  const wakeTime4Cycles = add(sleepTime, { hours: 6, minutes: extraTime });

  extraTime += 30;
  const wakeTime5Cycles = add(sleepTime, { hours: 7, minutes: extraTime });
  const wakeTime3Cycles = add(sleepTime, { hours: 4, minutes: extraTime });

  return {
    '6 Cycles': wakeTime6Cycles,
    '5 Cycles': wakeTime5Cycles,
    '4 Cycles': wakeTime4Cycles,
    '3 Cycles': wakeTime3Cycles,
  };
}

function sleepTimes(wakeTime) {
  let extraTime = getExtraTime();
  const sleepTime6Cycles = sub(wakeTime, { hours: 9, minutes: extraTime });
  const sleepTime4Cycles = sub(wakeTime, { hours: 6, minutes: extraTime });

  extraTime += 30;
  const sleepTime5Cycles = sub(wakeTime, { hours: 7, minutes: extraTime });
  const sleepTime3Cycles = sub(wakeTime, { hours: 4, minutes: extraTime });

  return {
    '6 Cycles': sleepTime6Cycles,
    '5 Cycles': sleepTime5Cycles,
    '4 Cycles': sleepTime4Cycles,
    '3 Cycles': sleepTime3Cycles,
  };
}

function setContent(newContent) {
  const content = document.querySelector('.content');
  content.textContent = '';
  content.appendChild(newContent);
}

function makeContent() {
  const makeTimeContent = document.createElement('div');
  const makeTimeText = document.createElement('div');

  makeTimeText.classList.add('time-text');
  let times = time;
  if (currentMode === 'sleep') {
    times = wakeTimes(time);
    makeTimeText.innerText = `If you are going to sleep at ${format(time, 'h:mm a')}, you should wake up at...`;
  } else {
    times = sleepTimes(time);
    makeTimeText.innerText = `If you are waking up at ${format(time, 'h:mm a')}, you should go to sleep at...`;
  }
  makeTimeContent.appendChild(makeTimeText);

  const timeList = document.createElement('div');
  timeList.classList.add('time-list');
  const cycles = [6, 5, 4, 3];
  cycles.forEach((cycle) => {
    const cycleContent = document.createElement('div');
    cycleContent.classList.add('cycle');
    cycleContent.classList.add(`cycle-${cycle}`);

    const cycleTime = document.createElement('div');
    cycleTime.classList.add('cycle-time');
    cycleTime.innerText = `${format(times[`${cycle} Cycles`], 'h:mm a')}`;
    const cycleNum = document.createElement('div');
    cycleNum.classList.add('cycle-num');
    cycleNum.innerText = `${cycle} Cycles`;

    cycleContent.appendChild(cycleTime);
    cycleContent.appendChild(cycleNum);
    timeList.appendChild(cycleContent);
    makeTimeContent.appendChild(timeList);
  });

  setContent(makeTimeContent);

  startOver.style.display = 'block';
}

sleepNowButton.addEventListener('click', () => {
  currentMode = 'sleep';
  time = new Date();
  makeContent(time);
});

wakeAtButton.addEventListener('click', () => {
  currentMode = 'wake';
  const wakeAtTime = document.querySelector('#wake-at-input').value;
  if (wakeAtTime) {
    time = new Date();
    time.setHours(wakeAtTime.split(':')[0]);
    time.setMinutes(wakeAtTime.split(':')[1]);
    makeContent();
  }
});

sleepAtButton.addEventListener('click', () => {
  currentMode = 'sleep';
  const sleepAtTime = document.querySelector('#sleep-at-input').value;
  if (sleepAtTime) {
    time = new Date();
    time.setHours(sleepAtTime.split(':')[0]);
    time.setMinutes(sleepAtTime.split(':')[1]);
    makeContent();
  }
});

document.querySelector('#enable-time-to-sleep').addEventListener('change', () => {
  if (currentMode) {
    makeContent(time);
  }
});

document.querySelector('#minutes').addEventListener('keyup', () => {
  if (document.querySelector('#enable-time-to-sleep').checked && currentMode) {
    makeContent(time);
  }
});

document.querySelector('#minutes').addEventListener('change', () => {
  if (document.querySelector('#enable-time-to-sleep').checked && currentMode) {
    makeContent(time);
  }
});

startOver.addEventListener('click', () => {
  window.location.reload();
});
