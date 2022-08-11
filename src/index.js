import './style.css';
import add from 'date-fns/add';

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

sleepNowButton.addEventListener('click', () => {
  const sleepTime = new Date();
  console.log(wakeTimes(sleepTime));
});
