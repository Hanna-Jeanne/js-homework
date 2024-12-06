import { data } from "./data.js";
import { AudioPlayer } from "./audio.js";

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

(() => {
  const body = document.querySelector("body");

  const nickName = document.querySelector(".nickName");

  const visualImg = document.querySelector(".visual > div > img");

  const nav = document.querySelector(".nav");

  // console.log(data[0].name.toLowerCase());

  /* ------------ setBgColor ------------ */
  function setBgColor(data) {
    const [colorA, colorB = "#000"] = data.color;

    body.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
  }

  /* ------------ setImage ------------ */
  function setImage(data) {
    visualImg.src = `./assets/${data.name.toLowerCase()}.jpeg`;
    visualImg.alt = data.alt;
  }

  /* ------------ setNameText ------------ */
  function setNameText(data) {
    nickName.textContent = data.name;
  }

  /* ------------ handler ------------ */
  function handler(e) {
    e.preventDefault();

    const target = e.target.closest("li");
    const thumbNails = this.querySelectorAll("ul > li");

    if (!target) return;

    const index = target.dataset.index;

    const audioPlayer = new AudioPlayer(`assets/audio/${data[index - 1].name.toLowerCase()}.m4a`);

    thumbNails.forEach((li) => {
      li.classList.remove("is-active");
    });

    // gsap
    gsap.from(".nickName", {
      duration: 2,
      y: 10,
      ease: "back(2)",
    });

    target.classList.add("is-active");

    setBgColor(data[index - 1]);

    setImage(data[index - 1]);

    setNameText(data[index - 1]);

    audioPlayer.play();
  }

  /* ------------ nav.clilkEvent ------------ */
  nav.addEventListener("click", handler);
})();
