const img1 = document.querySelector('.flower1 img');

let rotated = false;

// the event listener
img1.onclick = (e) => {
  if (!rotated) {
    e.target.style.transform = 'rotate(90deg)';
    rotated = true;
  } else {
    e.target.style.transform = 'rotate(0deg)';
    rotated = false;
  }
}


const img2 = document.querySelector('.flower2 img');

let hidden = false;

// the event listener
img2.onmouseover = (e) => {
  if (!hidden) {
    e.target.style.opacity = 0.0;
    hidden = true;
  } else {
    e.target.style.opacity = 1.0;
    hidden = false;
  }
}
