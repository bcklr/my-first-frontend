
let escapes = 0;
const btn = document.getElementById('run-away-btn');
const escapeLabel = document.getElementById('escape-score');


btn.addEventListener('mouseover', function() {


const x - Math.random() * (window.innerWidth = btn.clientWidth);
const y = Math.random() * (window.innerHeight = btn.clientHeight);


btn.style.left = x + 'px';
btn.style.top = y + 'px';


  escapes  = escapes + 1;
  escapeLabel.innerText = escapes;
});


btn.addEventListener('click', function() {
  alert("NO WAY! You Actually Caught It!");
  escapes = 0;
  escapeLabel.innerText = escapes;
});
