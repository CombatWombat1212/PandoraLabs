var preload = document.getElementById("preload");
var scene = document.getElementById("scene");



function begin(){
    
    scene.classList.remove("hide");
    scene.classList.add("show");
    
    preload.classList.add("hide");
    preload.classList.remove("show");
    
}

function end(){
    
    scene.classList.add("hide");
    scene.classList.remove("show");
    
    preload.classList.remove("hide");
    preload.classList.add("show");
    
}