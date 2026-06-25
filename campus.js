/* ==========================
   FADE IN
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
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   FAQ OPEN ANIMATION
========================== */

document
.querySelectorAll(".faq details")
.forEach(item=>{

    item.addEventListener("toggle",()=>{

        if(item.open){

            item.style.boxShadow =
            "0 0 25px rgba(46,168,230,.3)";

        }else{

            item.style.boxShadow =
            "none";

        }

    });

});

/* ==========================
   PAGE LOADED
========================== */

console.log("Open Campus Loaded 🎮");
