function init() { 
  
  // const wrapper = document.querySelector('.wrapper')
  const pageTwo = document.querySelector('.page_two')
  const pageTwoBack = document.querySelector('.page_two_back')
  const pageTwoImg = document.querySelector('.page_two_img')
  const indicator = document.querySelector('.indicator')
  const cover = document.querySelector('.cover')
  const book = document.querySelector('.book')
  
  let onPage = false

  const handleRightPageTurn = e =>{
    if (!onPage) return
    const x = e.pageX - book.offsetLeft
    const y = e.pageY - book.offsetTop
    const xPercent = ((x / pageTwo.offsetWidth) * 100) - 100 //offsetting width of pageOne
    const yPercent = (y / pageTwo.offsetHeight) * 100
    indicator.innerHTML = `x:${x} / y:${y}`


    if (y < (pageTwo.offsetHeight * 0.33)) {
      pageTwo.style.clipPath =  `polygon(0 0, ${xPercent}% 0, 100% ${yPercent}%, 100% 100%, 100% 100%, 0 100%)`
    } else if (y > (pageTwo.offsetHeight * 0.66)) {
      pageTwo.style.clipPath =  `polygon(0 0, 100% 0, 100% 0%, 100% ${yPercent}%, ${xPercent}% 100%, 0 100%)`
    } else {
      // pageTwo.style.clipPath =  `polygon(0 0, ${xPercent}% 0, ${xPercent}% 0%, ${xPercent}% 100%, ${xPercent}% 100%, 0 100%)`
      
      console.log((x / cover.offsetWidth) * 100)
      pageTwoBack.style.left = `${(x / cover.offsetWidth) * 100}%`
      pageTwoImg.style.transform= `scaleX(${(x / cover.offsetWidth) * 50}%)`
      // pageTwoBack.style.right = `0px`
    }

  }

  const letGo = ()=>{
    onPage = false
    pageTwo.style.clipPath =  'polygon(0 0, 100% 0, 100% 0%, 100% 100%, 100% 100%, 0 100%)'
    pageTwoBack.style.left = `${(1000 / 3) + (1000 / 3)}px`
    pageTwoImg.style.transform= 'scaleX(100%)'
  }

  book.addEventListener('mousedown', ()=> onPage = true)
  book.addEventListener('mouseup', letGo)
  cover.addEventListener('mousemove', handleRightPageTurn)
  book.addEventListener('mouseleave', ()=> {
    letGo()
  })
}

window.addEventListener('DOMContentLoaded', init)



