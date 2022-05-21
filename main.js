gsap.registerPlugin(ScrollTrigger);


/* ==============================================
                home
==============================================*/

gsap.to(".home", {
    scrollTrigger: {
        trigger: ".home",
        toggleActions: "play none play none",
        start: "top 10%",
        id: "fade-away",
        scrub: true,
       /*  markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250} */
    },
    opacity: 0,
});
gsap.from(".home", {
    scrollTrigger: {
        trigger: ".home",
        /* toggleActions: "play none reverse none", */
        toggleClass: {targets: ".nav-link-home", className: "active"},
        start: "top 60%",
        end: "center 10%",
        id: "home",
        opacity: 0,
        duration: 1
    },
});

/* ==============================================
                logline
==============================================*/

const llTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".logline",
        toggleActions: "play none none none",
        start: "center center",
        end: "+=30%",
        scrub: 1,
        pin: true,
        id: "ll",
       /*  markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250} */
    }
});

llTL.from(".logline", {scaleX:1.5, scaleY:.25, opacity: 0})
    .from(".ll-one", {scaleY:.1, opacity: 0, stagger: 0.2})
    .from(".ll-two", {opacity: 0, stagger: 0.2})
    .to(".logline", {scaleX: 7, scaleY: 7, Y: -100, opacity: .05});


/* ==============================================
                projects
==============================================*/

const projectsTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        toggleActions: "play none play none",
        start: "top 75%",
        end: "bottom 75%",
        id: "projects",
       /*  markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250} */
    },
    opacity: 0,
    duration: .5,
    stagger: .6
});


gsap.from(".projects", {
    scrollTrigger: {
        trigger: ".projects",
        /* toggleActions: "play none reverse none", */
        toggleClass: {targets: ".nav-link-projects", className: "active"},
        start: "top 60%",
        end: "bottom 75%",
        /* id: "projects",
        markers: true */
    },
    opacity: 0,
    duration: 1
});



/* ==============================================
                about
==============================================*/


/* gsap.fromTo(".about", {opacity:0}, {
    scrollTrigger: {
        trigger: ".space-between-projects-about",
        start: "bottom center",
        pin: true,
        id: "about",
        markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250}
    },
    opacity: 1,
    duration: 1
}); */

gsap.from(".about", {
    scrollTrigger: {
        trigger: ".about",
        /* toggleActions: "play none reverse none", */
        toggleClass: {targets: ".nav-link-about", className: "active"},
        start: "center 100%",
        end: "center center",
       /* markers: true */
    },
    y: 100,
    opacity: 0,
    duration: 1
});



/* ==============================================
                skills
==============================================*/




gsap.from(".skills", {
    scrollTrigger: {
        trigger: ".skills",
        /* toggleActions: "play none reverse none", */
        toggleClass: {targets: ".nav-link-skills", className: "active"},
        start: "center 90%",
        end: "center top",
        /* markers: true */
    },
    y: 100,
    opacity: 0,
    duration: 1
});


