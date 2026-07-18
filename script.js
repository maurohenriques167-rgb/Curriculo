/* =====================================
   PORTFÓLIO - MAURO HENRIQUE
===================================== */

/* ==========================
   REVELAR ELEMENTOS
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

document.querySelectorAll("section,.card,.skill").forEach(el=>{

    observer.observe(el);

});


/* ==========================
   NAVBAR
========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("header-scroll");

    }else{

        header.classList.remove("header-scroll");

    }

});


/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */

const botao=document.createElement("button");

botao.innerHTML="↑";

botao.id="topo";

document.body.appendChild(botao);

botao.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        botao.classList.add("mostrar");

    }else{

        botao.classList.remove("mostrar");

    }

});


/* ==========================
   ANIMAÇÃO DO TÍTULO
========================== */

const titulo=document.querySelector(".texto h1");

if(titulo){

const textoOriginal=titulo.innerHTML;

titulo.innerHTML="";

let i=0;

function escrever(){

    if(i<textoOriginal.length){

        titulo.innerHTML+=textoOriginal.charAt(i);

        i++;

        setTimeout(escrever,40);

    }

}

escrever();

}


/* ==========================
   HOVER DOS CARDS
========================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.setProperty("--x",x+"px");

        card.style.setProperty("--y",y+"px");

    });

});


console.log("Portfólio carregado!");