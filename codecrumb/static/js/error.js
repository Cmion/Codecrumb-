const markThree = document.querySelectorAll(".mark-three line");
const markThreeInnerOne = document.querySelectorAll(
  ".mark-three-inner-one line"
);
const svgThree = document.querySelector("#svg-three");
const markThreeOne = document.querySelector("#svg-three-one .marks");
const markThreeTwo = document.querySelector("#svg-three-two .marks");
const markThreeInnerTwo = document.querySelectorAll(
  ".mark-three-inner-two line"
);
for (let i = 0; i < 60; i++) {
  markThree[i].style.transform = `rotate(${i * (360 / 60)}deg)`;

  if (i % 5 === 0) {
    markThree[i].style.strokeWidth = "0.6";
    markThree[i].setAttribute("x2", 17);
    markThree[i].style.transform = `rotate(${i *
      (360 / 60)}deg) translate(-1px, 0)`;
  }
}
for (let i = 0; i < 60; i++) {
  markThreeInnerOne[i].style.transform = `rotate(${i * (360 / 60)}deg)`;

  if (i % 5 === 0) {
    markThreeInnerOne[i].style.strokeWidth = "0.6";
    markThreeInnerOne[i].setAttribute("x2", 17);
    markThreeInnerOne[i].style.transform = `rotate(${i *
      (360 / 60)}deg) translate(-1px, 0)`;
  }
}

function getSecondsClock() {
  const date = new Date();
  if (date.getSeconds() === 0) {
    for (let i = 0; i < 60; i++) {
      markThreeInnerTwo[i].style.stroke = "#fff";
      markThreeOne.style.transform = `translate(20px, 20px)  rotate(${6}deg)`;
      //       markThreeTwo.style.transition = "0";
    }
  } else {
    //     markThreeTwo.style.transition = "1s cubic-bezier(0, 3, 0.58, 1)";
  }
  for (let i = 0; i < date.getSeconds() + 1; i++) {
    markThreeInnerTwo[i].style.fill = "var(--accent-color)";

    markThreeInnerTwo[i].style.stroke = "var(--accent-color)";
    markThreeTwo.style.transform = `translate(20px, 20px) rotate(${6 * i}deg)`;
  }
  setTimeout(() => getSecondsClock(), 1000);
}
getSecondsClock();

for (let i = 0; i < 60; i++) {
  markThreeInnerTwo[i].style.transform = `rotate(${i * (360 / 60)}deg)`;

  if (i % 5 === 0) {
    markThreeInnerTwo[i].style.strokeWidth = "0.9";
    markThreeInnerTwo[i].setAttribute("x2", 18);
    markThreeInnerTwo[i].style.transform = `rotate(${i * (360 / 60)}deg)`;
  }
}
