/*
  1)과 2)는 같은 원리로 동작한다.
*/

// 1) 바닐라 JS에서 타이틀 색 변경
window.onload = function () {
  // 1초 후 글자 색 변경
  setTimeout(function () {
    const vanilaTitle = document.querySelector('#vanila');
    vanilaTitle.style.color = 'red';
  }, 1000);
};

// 2) JQuery로는 어떻게 나타낼까?
$(document).ready(function () {
  // 2초 후 글자 색 변경
  setTimeout(function () {
    const jqueryTitle = $('#jquery');
    jqueryTitle.css('color', 'blue');
  }, 2000);
});
