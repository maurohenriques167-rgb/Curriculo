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
   ANIMAÇÃO DO TÍTULO
========================== */

const span = document.querySelector(".texto h1 span");

if(span){

    const texto = span.textContent;

    span.textContent = "";

    let index = 0;


    function escrever(){

        if(index < texto.length){

            span.textContent += texto[index];

            index++;

            setTimeout(escrever,80);

        }

    }


    escrever();

}


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



console.log("Portfólio carregado!");