const rectangle = document.querySelector('.center');
window.addEventListener('mousemove', (details) =>{
    console.log(window.innerWidth)
    let rectangleLocation = rectangle.getBoundingClientRect()
    let Xvalue = gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth -100, details.clientX)
gsap.to( rectangle,{
left:Xvalue,
ease: Power4
    })
})