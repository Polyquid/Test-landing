var dialog = document.getElementById('popUp');
var dialogOpener = document.querySelector('.openDialogBtn');
var dialogCloser = document.querySelector('.closeDialogBtn');
function openModalAndLockScroll() {
  dialog.showModal();
  document.body.classList.add('scroll-lock');
}
function returnScroll() {
  document.body.classList.remove('scroll-lock');
}
function close() {
  dialog.close();
  returnScroll();
}
dialogOpener.addEventListener('click', openModalAndLockScroll);
dialogCloser.addEventListener('click', function (event) {
  event.stopPropagation();
  close();
});
function closeOnBackDropClick(_ref) {
  var currentTarget = _ref.currentTarget,
    target = _ref.target;
  var dialog = currentTarget;
  var isClickedOnBackDrop = target === dialog;
  if (isClickedOnBackDrop) {
    dialog.close();
    returnScroll();
  }
}
dialog.addEventListener('click', closeOnBackDropClick);