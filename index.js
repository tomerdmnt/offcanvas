var classes = require('classes');

module.exports = OffCanvas

function OffCanvas() {
  window.addEventListener('load', function () {
    classes(document.body).add('offcanvas');

    setTimeout(function () {
      classes(document.body).add('offcanvas-transition');
    }, 0);
  });

  return OffCanvas;
}

OffCanvas.toggle = function () {
  if (classes(document.body).has('active-main')) this.nav();
  else this.main();
}

OffCanvas.nav = function () {
  classes(document.body)
    .remove('active-main')
    .add('active-nav');
}

OffCanvas.main = function () {
  classes(document.body)
    .remove('active-nav')
    .add('active-main');
}

