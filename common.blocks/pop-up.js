const dialog = document.getElementById('popUp')
const dialogOpener = document.querySelector('.openDialogBtn')
const dialogCloser = document.querySelector('.closeDialogBtn')

function openModalAndLockScroll() {
    dialog.showModal()
    document.body.classList.add('scroll-lock')
  }
  
  function returnScroll() {
    document.body.classList.remove('scroll-lock')
  }
  
  function close() {
    dialog.close()
    returnScroll()
  }

dialogOpener.addEventListener('click', openModalAndLockScroll)
dialogCloser.addEventListener('click', (event) => {
  event.stopPropagation()
  close()
})

function closeOnBackDropClick({ currentTarget, target }) {
    const dialog = currentTarget
    const isClickedOnBackDrop = target === dialog
    if (isClickedOnBackDrop) {
      dialog.close()
      returnScroll()
    }
  }
  
  dialog.addEventListener('click', closeOnBackDropClick)