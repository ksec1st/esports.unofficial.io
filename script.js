/* ==========================
   HAMBURGER MENU
========================== */

const menuBtn =
document.getElementById("menuBtn");

const nav =
document.getElementById("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

/* ==========================
   LOGO GLOW ON SCROLL
========================== */

const logo =
document.querySelector(".glow-logo");

window.addEventListener("scroll",()=>{

if(window.scrollY > 100){

logo.classList.add("active");

}else{

logo.classList.remove("active");

}

});

/* ==========================
   FADE IN SECTIONS
========================== */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document
.querySelectorAll(".fade")
.forEach(el=>observer.observe(el));

/* ==========================
   STAR GENERATOR
========================== */

const stars =
document.getElementById("stars");

for(let i=0;i<200;i++){

const star =
document.createElement("div");

star.classList.add("star");

const size =
Math.random()*3+1;

star.style.width =
size + "px";

star.style.height =
size + "px";

star.style.left =
Math.random()*100 + "vw";

star.style.top =
Math.random()*100 + "vh";

star.style.animationDelay =
Math.random()*5 + "s";

stars.appendChild(star);

}

/* ==========================
   HEX PARTICLES
========================== */

const particles =
document.getElementById("particles");

for(let i=0;i<25;i++){

const hex =
document.createElement("div");

hex.classList.add("hex");

hex.style.left =
Math.random()*100 + "vw";

hex.style.top =
Math.random()*100 + "vh";

hex.style.animationDuration =
(15 + Math.random()*15) + "s";

hex.style.transform =
`scale(${0.5 + Math.random()})`;

particles.appendChild(hex);

}

/* ==========================
   SHOOTING STAR
========================== */

function createShootingStar(){

const star =
document.createElement("div");

star.classList.add("shooting-star");

star.style.left =
(window.innerWidth + 200) + "px";

star.style.top =
Math.random()*300 + "px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(
createShootingStar,
6000
);

/* ==========================
   CURSOR GLOW
========================== */

const glow =
document.getElementById("cursor-glow");

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.dataset.target;

let current = 0;

const increment =
target / 80;

const updateCounter = ()=>{

if(current < target){

current += increment;

counter.innerText =
Math.ceil(current);

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText =
target;

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},{
threshold:0.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ==========================
   AUTO CLOSE MOBILE NAV
========================== */

document
.querySelectorAll("nav a")
.forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});

/* ==========================
   PARALLAX HERO
========================== */

window.addEventListener("scroll",()=>{

const scrolled =
window.scrollY;

const heroLogo =
document.querySelector(".hero-logo");

if(heroLogo){

heroLogo.style.transform =
`translateY(${scrolled * 0.1}px)`;

}

});

/* ==========================
   OPTIONAL PRELOADER
========================== */

// 将来ローディング画面を入れる場合はここに追加
console.log("KSEC 1st Loaded 🚀");

/* ======================================
   OPEN CAMPUS (TOP PAGE)
====================================== */

async function loadTopSchedule(){

    try{

        const response =
        await fetch("schedule.json");

        const events =
        await response.json();

        const today =
        new Date();

        today.setHours(0,0,0,0);

        const next =
        events.find(event=>{

            return new Date(event.date)>=today;

        });

        if(!next)return;

        const d =
        new Date(next.date);

        const option={

            month:"long",

            day:"numeric",

            weekday:"short"

        };

        document.getElementById(
        "index-next-date").textContent=

        d.toLocaleDateString(
        "ja-JP",option);

        document.getElementById(
        "index-next-title").textContent=

        next.title;

        document.getElementById(
        "index-next-time").textContent=

        next.time;

        const diff=

        Math.ceil(

        (new Date(next.date)-today)

        /(1000*60*60*24)

        );

        document.getElementById(
        "index-countdown").textContent=

        "開催まで あと "+diff+"日";

    }

    catch(error){

        console.log(error);

    }

}

loadTopSchedule();
