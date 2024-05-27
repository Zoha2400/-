// Скроллбар в блоке с сообщениями (?) имеет высоту меньше,
// чем высота самого блока. В CSS это сделать невозможно.
// Поэтому, пришлось задействовать JavaScript.

const blub = document.querySelector(".blub-msgs");
const track = document.querySelector(".scrolltrack");
const bar = document.querySelector(".scrollbar");
blub.addEventListener("scroll", () => {
  let scrollPosition = blub.scrollTop;
  let trackHeight = (blub.offsetHeight / blub.scrollHeight) * 100; // Высота трека в процентах от общей высоты блока скролла
  let percent =
    (scrollPosition / (blub.scrollHeight - blub.offsetHeight)) * 100;

  console.log(percent);
  track.style.height = `${trackHeight}%`;
  track.style.top = `${percent - trackHeight}%`;
});

const menu = document.querySelector(".menu");
const adpMenu = document.querySelector(".adp-nav");

menu.addEventListener("click", () => {
  if (menu.classList.contains("crossed")) {
    menu.classList.remove("crossed");
    adpMenu.style.width = "0px";
    adpMenu.style.padding = "0px";
  } else {
    menu.classList.add("crossed");
    adpMenu.style.width = "100%";
    adpMenu.style.padding = "40px";
  }
});
