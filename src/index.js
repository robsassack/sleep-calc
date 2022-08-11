import './style.css';
import { add, sub, format } from 'date-fns';

const sleepNowButton = document.querySelector('.sleep-now');
const wakeAtButton = document.querySelector('.wake-at');
const sleepAtButton = document.querySelector('.sleep-at');

function wakeTimes(sleepTime) {
  const wakeTime6Cycles = add(sleepTime, { hours: 9 });
  const wakeTime5Cycles = add(sleepTime, { hours: 7, minutes: 30 });
  const wakeTime4Cycles = add(sleepTime, { hours: 6 });
  const wakeTime3Cycles = add(sleepTime, { hours: 4, minutes: 30 });

  return {
    '6 Cycles': wakeTime6Cycles,
    '5 Cycles': wakeTime5Cycles,
    '4 Cycles': wakeTime4Cycles,
    '3 Cycles': wakeTime3Cycles,
  };
}

function sleepTimes(wakeTime) {
  const sleepTime6Cycles = sub(wakeTime, { hours: 9 });
  const sleepTime5Cycles = sub(wakeTime, { hours: 7, minutes: 30 });
  const sleepTime4Cycles = sub(wakeTime, { hours: 6 });
  const sleepTime3Cycles = sub(wakeTime, { hours: 4, minutes: 30 });

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

function wakeContent(wakeTime) {
  const wakeTimeContent = document.createElement('div');
  const cycles = [6, 5, 4, 3];
  cycles.forEach((cycle) => {
    const cycleContent = document.createElement('div');
    cycleContent.classList.add('cycle');
    cycleContent.classList.add(`cycle-${cycle}`);

    const cycleTime = document.createElement('div');
    cycleTime.classList.add('cycle-time');
    cycleTime.innerText = `${format(wakeTime[`${cycle} Cycles`], 'h:mm a')}`;
    const cycleNum = document.createElement('div');
    cycleNum.classList.add('cycle-num');
    cycleNum.innerText = `${cycle} Cycles`;

    cycleContent.appendChild(cycleTime);
    cycleContent.appendChild(cycleNum);
    wakeTimeContent.appendChild(cycleContent);
  });

  setContent(wakeTimeContent);
}
// temporary call to test wake times
// wakeContent(wakeTimes(new Date()));

sleepNowButton.addEventListener('click', () => {
  const sleepTime = new Date();
  wakeContent(wakeTimes(sleepTime));
});

wakeAtButton.addEventListener('click', () => {
  const wakeAtTime = document.querySelector('#wake-at-input').value;
  if (wakeAtTime) {
    const wakeTime = new Date();
    wakeTime.setHours(wakeAtTime.split(':')[0]);
    wakeTime.setMinutes(wakeAtTime.split(':')[1]);
    console.log(sleepTimes(wakeTime));
  }
});

sleepAtButton.addEventListener('click', () => {
  const sleepAtTime = document.querySelector('#sleep-at-input').value;
  if (sleepAtTime) {
    const sleepTime = new Date();
    sleepTime.setHours(sleepAtTime.split(':')[0]);
    sleepTime.setMinutes(sleepAtTime.split(':')[1]);
    wakeContent(wakeTimes(sleepTime));
  }
});
