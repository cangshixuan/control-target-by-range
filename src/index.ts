import { gradientTransitionColor } from "./utils";

const range = document.getElementById("range") as HTMLInputElement;
const box = document.querySelector(".box") as HTMLDivElement;

const { width: rangeWidth } = range.getBoundingClientRect();
const { width: boxWidth } = box.getBoundingClientRect();
// 0-100 需要101个颜色
const colors = gradientTransitionColor("#00800", "#ffff00", 101);

range.oninput = function (e: Event) {
  const { value } = e.target as HTMLInputElement;
  const percent = parseInt(value);
  box.style.borderRadius = `${percent}%`;
  box.style.transform = `translate(${
    (percent / 100) * (rangeWidth - boxWidth)
  }px)`;
  box.style.backgroundColor = colors[percent];
};
