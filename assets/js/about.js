const chiffreUn = document.getElementById('chiffre-1')
const chiffreDeux = document.getElementById('chiffre-2')
const chiffreTrois = document.getElementById('chiffre-3')
const aboutEl = document.getElementById('about')

function showNumber(chiffre, chiffrMmax) {
    let count = 0;
    let interval = setInterval(() => {
        chiffre.innerHTML = ++count;
        if (count >= chiffrMmax) {
            clearInterval(interval);
        }
    }, 15);
}

mainEl.addEventListener('scroll', function scrollAnimation(e) {
    e.preventDefault()
    let position = aboutEl.getBoundingClientRect().top;
    if (position > window.innerHeight * .6 && position < window.innerHeight * .7) {
        showNumber(chiffreUn, 99);
        showNumber(chiffreDeux, 220);
        showNumber(chiffreTrois, 50);
    }
})


