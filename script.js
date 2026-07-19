/* =====================================
   PORTFÓLIO - MAURO HENRIQUE
===================================== */


/* ==========================
   MENU MOBILE
========================== */

const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


if(menuButton && navMenu){

    menuButton.addEventListener("click", ()=>{

        navMenu.classList.toggle("active");

    });


    document.querySelectorAll("#nav-menu a").forEach(link=>{

        link.addEventListener("click", ()=>{

            navMenu.classList.remove("active");

        });

    });

}



/* ==========================
   REVELAR ELEMENTOS
========================== */


const elementos = document.querySelectorAll(
    "section, .card, .skill"
);


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{threshold:0.2});



elementos.forEach(elemento=>{

    observer.observe(elemento);

});



/* ==========================
   HEADER AO ROLAR
========================== */


const header = document.querySelector("header");


if(header){

    window.addEventListener("scroll",()=>{


        if(window.scrollY > 80){

            header.classList.add("header-scroll");

        }else{

            header.classList.remove("header-scroll");

        }


    });

}



/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */


const botaoTopo = document.createElement("button");


botaoTopo.id = "topo";

botaoTopo.innerHTML="↑";


document.body.appendChild(botaoTopo);



botaoTopo.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        botaoTopo.classList.add("mostrar");

    }else{

        botaoTopo.classList.remove("mostrar");

    }


});



/* ==========================
   LOG
========================== */

console.log("Portfólio carregado!");