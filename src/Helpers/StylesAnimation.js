export const DeshabilitarBotones=(respuesta)=>{
    const botones=document.querySelectorAll('.pregunta-box');
    botones.forEach(boton=>{
        boton.disabled=true;
        boton.classList.add('deshabilitado');
    })
    const boton_siguiente=document.getElementById("boton-next");
    boton_siguiente.classList.remove('btn-desaparecer');
    const p_pregunta=document.getElementById('pregunta');
    p_pregunta.style.display='none';
    if(respuesta){
        const imagenBien=document.getElementById('correcto');
        imagenBien.style.display='flex';
    }else{
        const imagenMal=document.getElementById('incorrecto');
        imagenMal.style.display='flex';
    }

};

export const HabilitarBotones=()=>{
    const botones=document.querySelectorAll('.pregunta-box');
    botones.forEach(boton=>{
        boton.disabled=false
        boton.classList.remove('deshabilitado');
    });
    const boton_siguiente=document.getElementById("boton-next");
    boton_siguiente.classList.add('btn-desaparecer');
    const p_pregunta=document.getElementById('pregunta');
    p_pregunta.style.display='block';
    const imagenBien=document.getElementById('correcto');
    imagenBien.style.display='none';
    const imagenMal=document.getElementById('incorrecto');
    imagenMal.style.display='none';
};