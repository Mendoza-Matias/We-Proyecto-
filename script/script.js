
let slider = document.querySelector(".slider");

let imagenes  =["image/cursos/pescar.png","image/cursos/argentina-programa.jpg","image/cursos/coder.jpg","image/cursos/educaciónIT.jpg","image/cursos/eggProgramacion.jpg","image/cursos/freeCodeCamp.png"]; 
let indices = 0;

slider.src = imagenes[indices]

 cambio = ()=>{
    if(indices <= 5){
        slider.src = imagenes[indices]
        indices++ 
    }else{
        indices = 0;
    }
}
setInterval(cambio, 2000);
//CARTA

//------------CONVERIR DATOS DE FORMULARIO

