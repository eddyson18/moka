let menuVisible = false
 //funcion para ocultar o mostrar
function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible =  false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible =  true;
    }

}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}