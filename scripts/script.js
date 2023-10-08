const container = document.querySelector(".container"),
  item = document.querySelectorAll(".item"),
  music = [...document.querySelectorAll(".music")];

item.forEach((item, index) => {
  item.onclick = () => {
    if (music[index].paused) music[index].play();
    else music[index].pause();
    item.classList.toggle("active");
  };
});
