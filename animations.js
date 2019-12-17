

gsap.from("#header-test", 
{
    opacity: 0, 
    duration: 2, 
    y: -50, 
    ease: Power4.easeInOut 
});
gsap.from("#footer-message",
{
    opacity:0,
    duration:2,
    y: -50,
    ease: Power3.easeInOut
})

//panel switching scrollMagic and GSAP

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

tl.fromTo(
    "section.panel.projects",
    1,
    { xPercent: 100 },
    { xPercent: 0, ease: 
    Linear.easeNone },
    "+=1"
);
tl.fromTo(
    "section.panel.services",
    1,
    { yPercent: 100 },
    { yPercent: 0, ease: Linear.easeNone},
    "+=1"
);

var scene = new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "350%"
})
    .setPin("#pinMaster")
    .setTween(tl)
    
    .addTo(controller);

scene.removeIndicators();