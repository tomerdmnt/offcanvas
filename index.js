var classes = require('classes');

module.exports = OffCanvas

function OffCanvas() {
  window.addEventListener('load', function () {
    classes(document.body).add('js');
    setTimeout(function () {
      classes(document.body).add('offcanvas-transition');
    }, 0);
  });

  return OffCanvas;
}

OffCanvas.nav = function () {
  classes(document.body)
    .remove('active-main')
    .remove('active-sidebar')
    .add('active-nav');
}

OffCanvas.main = function () {
  classes(document.body)
    .remove('active-nav')
    .remove('active-sidebar')
    .add('active-main');
}

OffCanvas.sidebar = function () {
  classes(document.body)
    .remove('active-nav')
    .remove('active-main')
    .add('active-sidebar');
}

OffCanvas.next = function () {
  if (classes(document.body).has('active-nav')) OffCanvas.main();
  else if (!classes(document.body).has('active-sidebar')) OffCanvas.sidebar();
}

OffCanvas.prev = function () {
  if (classes(document.body).has('active-sidebar')) OffCanvas.main();
  else if (!classes(document.body).has('active-nav')) OffCanvas.nav();
}
