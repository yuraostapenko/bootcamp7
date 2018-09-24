/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

let clockStart = document.querySelector('.js-start');
clockStart.addEventListener('click', startTimer);

let id;
let clockFace;
function startTimer() {
if (timer.startTime === null) {
timer.startTime = Date.now()
} else {
timer.startTime = Date.now() - timer.deltaTime;
}
id = setInterval(count, 100);
document.querySelector('.js-start').textContent = 'Pause';
clockStart.removeEventListener('click', startTimer);
clockStart.addEventListener('click', stop);




function count() {
  let time = Date.now();
  timer.deltaTime = time - timer.startTime;
  clockFace = document.querySelector('.js-time').textContent = getFormattedTime(timer.deltaTime);  
}
};

function stop() {
  clearInterval(id);
  document.querySelector('.js-start').textContent = 'Continue';
  clockStart.removeEventListener('click', stop);
  clockStart.addEventListener('click', startTimer);
};

function getFormattedTime(time) {
let minutes = Math.floor(time/1000/60%60);
let seconds = Math.floor(time/1000%60);
let msec = Math.floor(time/100%10);
return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${msec}`
};




const timer = {
  startTime: null,
  deltaTime: null,
  id: null
  
};

function reset() {
  stop();
  
  timer.deltaTime = null;
  document.querySelector('.time').textContent = '00:00.0';
  ul.innerHTML = '';
  document.querySelector('.js-start').textContent = 'Start';
}
let clockReset = document.querySelector('.js-reset').addEventListener('click', reset);




let ul = document.querySelector('.laps');
function createLaps(){
  let li = document.createElement('li');
  ul.append(li);
  li.textContent = clockFace;
};
let lap = document.querySelector('.js-take-lap').addEventListener('click', createLaps);

