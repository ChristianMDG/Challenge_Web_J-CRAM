const footerInputEl = document.querySelector('#footer-input')
const btnSend = document.querySelector('.send')
const confirmationEl = document.querySelector('.confirmation')
btnSend.addEventListener('click', function showConfirmations(e) {

    if (footerInputEl.value == "") {

    } else {
        function showConfirmation(params) {
            confirmationEl.style.background = "green"
            confirmationEl.innerHTML = `<h5>sent!</h5>`

        }
        setTimeout(showConfirmation, 300)
    }
    function deleteConfirmation() {
        confirmationEl.style.background = "transparent"
        confirmationEl.innerHTML = `<h5></h5>`
    }
    setTimeout(deleteConfirmation, 1500)
})