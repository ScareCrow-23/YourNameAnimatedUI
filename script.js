const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-50
    })
})
}
videoconAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1", {
        y:30,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.2
    })
    gsap.from("#page1 #video-container", {
        scale:0.8,
        opacity:0,
        delay:0.5,
        duration:1.5
    })
}
loadingAnimation()

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left:dets.x,
        top:dets.y
    })
})

// document.querySelectorAll("#child1").addEventListener("mouseenter",function(){
//     gsap.to("#cursor", {
//         transform: "translate(-50%, -50%) scale(1)"
//     })
// })
// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to("#cursor", {
//         transform: "translate(-50%, -50%) scale(0)"
//     })
// })
document.querySelectorAll(".child").forEach(function(elem)  {
    elem.addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%) scale(1)"
        })
    })
document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%) scale(0)"
        })
    })
})
})
