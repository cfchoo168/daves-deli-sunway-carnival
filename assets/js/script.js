/* =====================================================
   Dave's Deli Sunway Carnival
   Version 1.0
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Smooth Scroll for Navigation
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        });

    });


    /* ==========================================
       Reveal Animation
    ========================================== */

    const revealItems = document.querySelectorAll(
        ".food-card, .why-card, .occasion-card, .featured-main, .about-wrapper, .location-wrapper"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:.15
    });

    revealItems.forEach(item=>{

        item.classList.add("fade-up");

        observer.observe(item);

    });


    /* ==========================================
       Header Scroll Effect
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.background="rgba(10,10,10,.95)";
            header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

        }else{

            header.style.background="rgba(15,17,21,.78)";
            header.style.boxShadow="none";

        }

    });


    /* ==========================================
       Active Navigation Highlight
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top = section.offsetTop-120;

            if(pageYOffset>=top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });


    /* ==========================================
       Lazy Loading Images
    ========================================== */

    document.querySelectorAll("img").forEach(img=>{

        img.loading="lazy";

    });

});


/* ==========================================
   Back To Top Button
========================================== */

const backToTop = document.createElement("button");

backToTop.innerHTML="↑";

backToTop.id="backToTop";

document.body.appendChild(backToTop);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
