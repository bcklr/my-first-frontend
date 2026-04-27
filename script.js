
let escapes = 0;
let currentSize = 100;
const btn = document.getElementById('run-away-btn');
const escapeLabel = document.getElementById('escape-score');


btn.addEventListener('mouseover', function() {


const x = Math.random() * (window.innerWidth - btn.clientWidth);
const y = Math.random() * (window.innerHeight - btn.clientHeight);


btn.style.left = x + 'px';
btn.style.top = y + 'px';


  escapes  = escapes + 1;
  escapeLabel.innerText = escapes;
});

if (currentSize > 20) {
  currentSize = currentSize - 2;
  btn.style.transform = `scale(${currentSize / 100})`;
   }
});

btn.addEventListener('click', function() {
  alert("NO WAY! You Actually Caught It!");
  escapes = 0;
  currentSize = 100;
  btn.style.transform = 'scale(1)';
  escapeLabel.innerText = escapes;
});
