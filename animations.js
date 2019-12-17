
//header animation
gsap.from("#header-test", 
{
    opacity: 0, 
    duration: 2, 
    y: -50, 
    ease: Power4.easeInOut 
});

//panel switching gsap

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
    duration: "400%"
})
    .setPin("#pinMaster")
    .setTween(tl)
    .addIndicators({
        colorTrigger:"white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
    })
    .addTo(controller);

scene.removeIndicators();