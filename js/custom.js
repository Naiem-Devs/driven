// search bar Active
var srcBtn = document.querySelector('.search_btn')
var srcCloseBtn = document.querySelector('.close_src')
var searSec = document.querySelector('.search_bar')

srcBtn.addEventListener('click', function() {
    searSec.classList.add("active")
})
srcCloseBtn.addEventListener('click', function (){
    searSec.classList.remove("active")
})

// search bar Tab Button Active
var srcFilterBtn = document.querySelectorAll('.search_top button');
srcFilterBtn.forEach(srcFilterBtns => {
    srcFilterBtns.addEventListener('click', () => {
        removeBtns()
        srcFilterBtns.classList.add('active')
    })
});
function removeBtns() {
    srcFilterBtn.forEach(srcFilterBtns => {
        srcFilterBtns.classList.remove('active')
    })
}