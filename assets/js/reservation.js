const locationEl = document.getElementById('location')
const checkInEl = document.getElementById('check-in')
const checkOutEl = document.getElementById('check-out')
const emailEl = document.getElementById('email')
const inputEl = document.getElementsByClassName('input')
const messageEl = document.getElementById('message')
const boutonEl = document.getElementById('bouton')

boutonEl.addEventListener("click", function submit(e) {

    if (locationEl.value == "" || checkInEl.value == "" || checkOutEl.value == "" || emailEl.value == "") { }
    else {
        e.preventDefault()
        function showMessage() {
            messageEl.innerHTML = ` <p><i class='bx bxs-calendar-check'></i> Make reservation</p>`
            messageEl.style.background = "greenyellow"
        }
        setTimeout(showMessage, 500)
        function deleteMessage() {
            messageEl.innerHTML = ``
            messageEl.style.background = "transparent"
        }
        setTimeout(deleteMessage, 2000)
    }
})