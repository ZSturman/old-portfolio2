gsap.registerPlugin(ScrollTrigger);

/* ==============================================
   fuzzys
==============================================*/


var width = window.innerWidth;
var height = window.innerHeight;

gsap.set(".svg-fuzzy", {x: 250, y:250, scale: 10});

const fuzzyTL = gsap.timeline({
    yoyo: true,
    repeat: -1,
    repeatDelay: 5,

});

/* fuzzyTL.from(".svg-fuzzy", 5, {opacity: 0, x:10, y:10})
        .to(".svg-fuzzy", 5, {opacity: 1, x:width, y:height, scale: 10})
        .to(".svg-fuzzy", 5, {opacity: 0}); */
fuzzyTL.from(".svg-fuzzy", 5,{opacity: 0})
        .to(".svg-fuzzy", 5, {opacity: 1})
        .to(".svg-fuzzy", 5, {opacity: 0})
        .to(".svg-fuzzy", 10, {scale: 30}, "-=15")
        .to(".fuzzys", 25, {x: "+=600", y: "+=400"}, "-=20");



/* ==============================================
    testing on mouse move
==============================================*/


/* gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
}); */


/* gsap.set(".hole", {xPercent: -50, yPercent: -50});

const hole = document.querySelector(".hole");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(hole, "x", "px");
const ySet = gsap.quickSetter(hole, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
}); */


/* ==============================================
                nav
==============================================*/


const navTL = gsap.timeline({
    once: true,

});

navTL.from(".nav-button", { 
        y: -100,
        scaleY: .1,
        scaleX: .5,
        duration: 1,
        ease: "bounce.out(4)",
        stagger: .15})
        .from(".scroll-icon", {opacity: 0, scaleY: .2, scaleX: 1.3, duration: .3},"+=3");
/*     .from(".first-name", {
        opacity: 0,
        scaleX: .8,
        scaleY: 1.1,
        duration: .3,
        x: -50,
    }, "-=.1")
    .from(".last-name", {
        opacity: 0,
        scaleX: .8,
        scaleY: 1.1,
        duration: .3,
        x: -50,
    }, "-=.1")
    .from(".quote", {
        opacity: 0,
        duration: 1,
        x: -50, 
    }, "+=.25"); */


const scrollTL = gsap.timeline({
    yoyo: true,
    repeat: -1,

});

scrollTL.to(".scroll-icon", {y: -5, duration: 2.5, ease: "power1.inOut"})
        .to(".scroll-icon", {y: 10, duration: 2.5, ease: "power1.inOut"})
        .to(".scroll-icon", {y: -5, duration: 2.5, ease: "power1.inOut"})
        .to(".scroll-icon", {y: 10, duration: 2.5, ease: "power1.inOut"})
        .to(".scroll-icon-word", {y:-5, scaleX: .9, scaleY: 1.1, x:1, duration:.15})
        .to(".scroll-icon-word", {y: 10, scaleY: .8, scaleX: 1.2, x: -4, duration: .2, ease: "power4.in" })
        .to(".scroll-icon-word", {y:0, scaleY: 1, scaleX: 1, x: 0, duration: .3, ease: "power1.out"}, "+=.05")
        .to(".scroll-icon-arrow", {y:8, scaleY: .9, scaleX: 1.2, x: -4, duration: .2, ease: "power4.in", stagger:.05}, "-=.45")
        .to(".scroll-icon-arrow", {y:0, scaleY: 1, scaleX: 1, x: 0, duration: .4, ease: "power4.in", stagger:.05}, "-=.05")
        .to(".scroll-icon", {y: -5, duration: 2.5, ease: "power1.inOut"})
        .to(".scroll-icon", {y: 10, duration: 2.5, ease: "power1.inOut"})
        .to(".scroll-icon", {y: -5, duration: 2.5, ease: "power1.inOut"})
        .to(".scroll-icon", {y: 10, duration: 2.5, ease: "power1.inOut"});
        




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

gsap.from(".projects", {
    scrollTrigger: {
        trigger: ".projects",
        toggleClass: {targets: ".nav-link-projects", className: "active"},
        start: "top 60%",
        end: "bottom 75%",
        /* id: "projects",
        markers: true */
    },
    duration: 1
});

gsap.from(".about", {
    scrollTrigger: {
        trigger: ".about",
        toggleClass: {targets: ".nav-link-about", className: "active"},
        start: "center 100%",
        end: "center center",
    },
    y: 100,
    opacity: 0,
    duration: 1
});

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



/* ==============================================
                home
==============================================*/

gsap.to(".first-name", {
    scrollTrigger: {
        trigger: ".first-name",
        toggleActions: "play none play none",
        start: "top 10%",
        id: "fade-away",
        scrub: true,
       /*  markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250} */
    },
    x: 300,
    y: 100,
    opacity: 0,
    scaleY: .1,
    scaleX: 2,
});
gsap.to(".last-name", {
    scrollTrigger: {
        trigger: ".last-name",
        toggleActions: "play none play none",
        start: "top 15%",
        id: "fade-away",
        scrub: true,
       /*  markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250} */
    },
    x: 300,
    /* y: 100, */
    opacity: 0,
    scaleY: .1,
    scaleX: 2,
});
gsap.to(".quote", {
    scrollTrigger: {
        trigger: ".last-name",
        toggleActions: "play none play none",
        start: "top 10%",
        end: "bottom top",
        id: "fade-away",
        scrub: true,
       /*  markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250} */
    },
    opacity: 0,
});




/* ==============================================
                logline
==============================================*/

const llTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".logline",
        toggleActions: "play none none none",
        start: "center 55%",
        end: "bottom 25%",
        scrub: 1,
        once: true,
        pin: true,
        id: "ll",
       /* markers: {startColor: "red", endColor: "yellow", fontSize: "18px", fontWeight: "bold", indent: 250} */
    }
});

llTL.from(".logline", {scaleX:1.5, scaleY:.25, opacity: 0})
    .from(".ll-one", {scaleY:.1, opacity: 0, stagger: 0.2})
    .from(".ll-two", {opacity: 0, stagger: 0.2})
    .to(".logline", {scaleX: 7, scaleY: 7, opacity: .05})
    .to(".logline", {"--logline-border":"transparent"});


/* gsap.set(".logline", {scaleX: 7, scaleY: 7, opacity: .05}); */
/* ==============================================
                projects
==============================================*/


gsap.from(".projects-section-heading", {opacity: 0, scaleY: 4, scaleX: 6, scrollTrigger: {
    trigger: ".projects-section-heading",
    start: "top 60%",
    end: "top center",
    scrub: true,
    id: "notable-projects-fade-in",
}});


gsap.set(".project-card", {
    opacity: 0, 
    x:-100, 
    scaleY: 2, 
    scaleX: .25,
});

ScrollTrigger.create({
    trigger: ".project-card",
    start: "top 80%",
    end: "top 20%",
    onEnter: () => gsap.to(".project-card", {
        opacity: 1, 
        x: 0,
        scaleY: 1,
        scaleX: 1,
        duration: 0.1, 
        ease: 'bounce.in',
        stagger: 0.1
    }),
    onLeave: () => gsap.to(".project-card", {
        opacity: 0, 
        x:-100,
        stagger: 0.2
    }),
    onEnterBack: () => gsap.to(".project-card", {
        opacity: 1,  
        scaleY: 1, 
        scaleX: 1,
        duration: 0.1, 
        stagger: 0.1
    }),
    onLeaveBack: () => gsap.to(".project-card", {
        opacity: 0, 
        x:-100,
        stagger: 0.2
    }),
});

/* ==============================================
                about
==============================================*/

gsap.set(".about-cartoon-and-text", {
    opacity: 0, 
});

ScrollTrigger.create({
    trigger: ".about-cartoon-and-text",
    start: "center 90%",
    end: "center 10%",
    
    onEnter: () => gsap.to(".about-cartoon-and-text", {
        opacity: 1, 
    }),
    onLeave: () => gsap.to(".about-cartoon-and-text", {
        opacity: 0, 
    }),
    onEnterBack: () => gsap.to(".about-cartoon-and-text", {
        opacity: 1,  
    }),
    onLeaveBack: () => gsap.to(".about-cartoon-and-text", {
        opacity: 0, 
    }),
});



/* ==============================================
                skills
==============================================*/

gsap.set(".skills", {
    opacity: 0, 
    x:-100, 
});

ScrollTrigger.create({
    trigger: ".skills",
    start: "top 90%",
    end: "center center",
    onEnter: () => gsap.to(".skills", {
        opacity: 1, 
        x: 0,
        scaleY: 1,
        scaleX: 1,
        duration: 0.3, 
        stagger: 0.3
    }),
    onLeave: () => gsap.to(".skills", {
        opacity: 0, 
        x:-100,
        stagger: 0.2
    }),
    onEnterBack: () => gsap.to(".skills", {
        opacity: 1,  
        scaleY: 1, 
        scaleX: 1,
        duration: 0.1, 
        stagger: 0.1
    }),
    onLeaveBack: () => gsap.to(".skills", {
        opacity: 0, 
        x:-100,
        stagger: 0.2
    }),
});


/* ==============================================
                pre-contact
==============================================*/

gsap.set(".pre-contact", {
    opacity: 0, 
});

ScrollTrigger.create({
    trigger: ".pre-contact",
    start: "top 80%",
    end: "center center",
    onEnter: () => gsap.to(".pre-contact", {
        opacity: 1, 
        duration: 0.3, 
    }),
    onLeave: () => gsap.to(".pre-contact", {
        opacity: 0, 
    }),
    onEnterBack: () => gsap.to(".pre-contact", {
        opacity: 1,  
        duration: 0.1, 
    }),
    onLeaveBack: () => gsap.to(".pre-contact", {
        opacity: 0, 
    }),
});



