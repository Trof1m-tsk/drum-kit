document.addEventListener(`keydown`, function(evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
  if (!audio) {
    return;
  }
  key.classList.add(`playing`);
  audio.currentTime = 0;
  audio.play();
  
});

const keys = document.querySelectorAll(`.key`);

keys.forEach(function (key) {
  key.addEventListener(`transitionend`, removeTransition);
});

function removeTransition(evt) {
  if (evt.propertyName !== `transform`) {
    return;
  }
  this.classList.remove(`playing`);

};