/* =====================================
   PORTFÓLIO - MAURO HENRIQUE
===================================== */


/* ==========================
   REVELAR ELEMENTOS
========================== */

const elementos = document.querySelectorAll("section, .card, .skill");

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
   NAVBAR
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

const botao = document.createElement("button");

botao.id = "topo";
botao.innerHTML = "↑";

document.body.appendChild(botao);



botao.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        botao.classList.add("mostrar");

    }else{

        botao.classList.remove("mostrar");

    }

});




/* ==========================
   HOVER DOS CARDS
========================== */

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("mousemove",(evento)=>{


        const area = card.getBoundingClientRect();


        const x = evento.clientX - area.left;

        const y = evento.clientY - area.top;


        card.style.setProperty("--x",`${x}px`);

        card.style.setProperty("--y",`${y}px`);


    });


});
const menuButton = document.getElementById("menu-toggle");

const menu = document.getElementById("nav-menu");


menuButton.addEventListener("click", ()=>{


    menu.classList.toggle("active");


});



// fechar menu ao clicar em algum link

document.querySelectorAll("#nav-menu a").forEach(link=>{


    link.addEventListener("click", ()=>{

        menu.classList.remove("active");

    });


});



console.log("Portfólio carregado!");