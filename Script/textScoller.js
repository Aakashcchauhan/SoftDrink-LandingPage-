
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let t1 = gsap.timeline({
    scrollTrigger:{
trigger:".two",
start:"10% 50%",
end:"100% 50%",
markers:true,
pin:true,
scrub:1,
    },
})
t1.to(".text-area-hover h1",{
    width:"100%",
})
t1.to(".text-area-hover h2",{
  width:"100%",
})