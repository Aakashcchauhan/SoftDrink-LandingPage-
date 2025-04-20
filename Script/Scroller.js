const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({scrollTrigger:{
    trigger:".content-part-1",
    start:" 0% 50%",
    end:"200% 50%",
    scrub:true,
    pin:true,
}
}) 
tl.to(".rotate-div",{
    rotate:-15,
    scale:0.6,
},'a')
tl.to("#row-div-1",{
    marginTop:"-30%",
 },'a')
tl.to("#row-div-2",{
   marginTop:"-20%",
},'a')
tl.to("#row-div-3",{
    marginTop:"-5%",

 },'a')
 tl.to("#row-div-4",{
    marginTop:"3%",
 },'a')
 tl.to("#row-div-5",{
    marginTop:"-1%",
 },'a')
 tl.to(".overlay-div h1",{
    color:"#fff",
    opacity: 1,
    delay:0.1,
 },'a')
 tl.to(".overlay-div ",{
    backgroundColor:"#000000b4",
 },'a')

 .to(".scolling", {
   width: "8vw",
   height: "2px",
   backgroundColor: "#fff",
   borderRadius: "50px",
}, 'a');




