export const DeshabilitarBotones=(target)=>{
    const botones=document.querySelectorAll('.pregunta-box');
    botones.forEach(boton=>{
        boton.disabled=true
    })
    const boton_siguiente=document.getElementById("boton-next");
    boton_siguiente.disabled=false;
};

export const HabilitarBotones=()=>{
    const botones=document.querySelectorAll('.pregunta-box');
    botones.forEach(boton=>{
        boton.disabled=false
    });
    const boton_siguiente=document.getElementById("boton-next");
    boton_siguiente.disabled=true;
};