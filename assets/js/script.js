
gsap.to(".mobile-scale", {
    scrollTrigger: {
        trigger: ".main-div",
        // markers: true,
        scrub: 0.5,
        start: "top center",
        end: "+=" + window.innerHeight * 2,
        pin: true
    },
    scale: 4
});
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-div",
        // markers: true,
        scrub: true,
        start: "bottom bottom",
        end: "+=" + window.innerHeight * .3,
        pin: true
    },
});

tl
    .to('.business-grow-section', {
        backgroundColor: 'black',
    })
    .to('.mainfont-drive', {
        opacity: 0,
    })
    .to('.secondaryfont-drive', {
        opacity: 0,
    })
    .to('mobile-scale', {
        opacity: 0,
    })
    .to('.contact-form', {
        opacity: 1,
        yPercent: -100,
        ease: "Power1.easeIn",
    })