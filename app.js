const translate = document.querySelectorAll(".translate");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
});

//SLIDERS - roundSlider Library for jQuery
$(document).ready(function () {
  $("#kick-slider").roundSlider({
    svgMode: true,
    radius: 90,
    width: 9,
    value: 1,
    min: 1,
    max: 26,
    handleSize: 25,
    handleShape: "dot",
    sliderType: "default",
    showTooltip: false,
    pathColor: "rgba(0, 255, 255, 1)",
    borderWidth: "0",
    mouseScrollAction: true,
  });
  $("#snare-slider").roundSlider({
    svgMode: true,
    radius: 90,
    width: 9,
    value: 1,
    min: 1,
    max: 21,
    handleSize: 25,
    handleShape: "dot",
    sliderType: "default",
    showTooltip: false,
    pathColor: "rgba(255, 156, 0, 1)",
    borderWidth: "0",
    mouseScrollAction: true,
  });
  $("#perc-slider").roundSlider({
    svgMode: true,
    radius: 90,
    width: 9,
    value: 1,
    min: 1,
    max: 10,
    handleSize: 25,
    handleShape: "dot",
    sliderType: "default",
    showTooltip: false,
    pathColor: "rgba(20, 255, 0, 1)",
    borderWidth: "0",
    mouseScrollAction: true,
  });
  $("#tom-slider").roundSlider({
    svgMode: true,
    radius: 90,
    width: 9,
    value: 1,
    min: 1,
    max: 10,
    handleSize: 25,
    handleShape: "dot",
    sliderType: "default",
    showTooltip: false,
    pathColor: "rgba(255, 241, 0, 1)",
    borderWidth: "0",
    mouseScrollAction: true,
  });
  $("#hihat-slider").roundSlider({
    svgMode: true,
    radius: 90,
    width: 9,
    value: 1,
    min: 1,
    max: 10,
    handleSize: 25,
    handleShape: "dot",
    sliderType: "default",
    showTooltip: false,
    pathColor: "rgba(255, 0, 196, 1)",
    borderWidth: "0",
    mouseScrollAction: true,
  });
});
