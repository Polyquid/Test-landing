document.querySelectorAll('.header-bottom__link').forEach(function (trigger) {
  trigger.onclick = function (e) {
    e.preventDefault();
    var hash = this.getAttribute('href');
    var target = document.querySelector(hash);
    var headerOffset = 100;
    var elementPosition = target.offsetTop;
    var offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };
});