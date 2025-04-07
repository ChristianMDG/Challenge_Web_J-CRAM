const containerEl = document.querySelector('.container')
const mainEl = document.querySelector('#main')
const navbarEl = document.querySelector(".navbar")
const containerMobileEl=document.querySelector('.container-mobile')
const openBtnEl = document.querySelector('.openbtn')
const closeBtn = document.querySelector('.closebtn')

mainEl.addEventListener('scroll', function scrollAnimation() {
   if (mainEl.scrollTop > 80) {
      navbarEl.style.padding = "0px 0px";
      containerEl.style.borderRadius = "0px"
      containerEl.style.background = "#90c2e6";
      containerMobileEl.style.background = "#90c2e6";
   } else {
      navbarEl.style.padding = "20px 20px";
      containerEl.style.backgroundColor = '#f2f2f2'
       containerMobileEl.style.backgroundColor = '#f2f2f2'
   }

})

// navbar sectioon mobile
openBtnEl.addEventListener('click',function openNav(){
   document.getElementById("mySidepanel").style.width = "100%"
})
closeBtn.addEventListener('click', function closeNav() {
   document.getElementById("mySidepanel").style.width = "0";
 })
