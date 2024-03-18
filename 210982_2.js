var animationInterval;

function startAnimation(event) {
  if (event.button === 0) { 
    animationInterval = setInterval(moveDiv, 10);
  } else if (event.button === 2) { 
    document.querySelector('#box').style.animation = 'spin 2s infinite';
  }
}

function stopAnimation() {
  clearInterval(animationInterval);
  document.querySelector('#box').style.animation = 'none';
}

function moveDiv() {
  console.log('moved');
  var div = document.querySelector('#box');
  var currentRight = parseInt(div.style.marginLeft) || 0; 
  var currentBottom = parseInt(div.style.bottom) || 0;
  
  div.style.marginLeft = (currentRight + 2) + 'px';
  div.style.bottom = (currentBottom - 2) + 'px';
}
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mousedown', startAnimation);
  document.addEventListener('mouseup', stopAnimation);
});