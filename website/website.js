const counts = document.querySelectorAll(".count");
const speed = 397;
counts.forEach((count) => {
  function upDate() {
    const target = Number(count.getAttribute("data-target"));
    const counter = Number(count.innerText);
    const inc = target / speed;
    if (counter < target) {
      count.innerText = Math.floor(inc + counter);
      setTimeout(upDate, 15);
    } else {
      count.innerText = target;
    }
  }
  upDate();
});


const counterElement = document.getElementById('counter');

let value = 0;
const target = 200;
const speed_1 = 10; // Adjust speed for smoother animation

function updateCounter() {
  value++;
  counterElement.textContent = value;

  if (value < target) {
    setTimeout(updateCounter, speed_1);
  }
}


  updateCounter(); 
