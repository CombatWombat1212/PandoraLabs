var preload = document.getElementById("preload");
var scene = document.getElementById("scene");
var goodEndingPage = document.querySelector("#goodEndingPage");
var badEndingPage = document.querySelector("#badEndingPage");
//var goodEndingPage = document.getElementById("#goodEnding");


function begin(){
    
    scene.classList.remove("hide");
    scene.classList.add("show");
    
    preload.classList.add("hide");
    preload.classList.remove("show");
    
}

function goodEnd(){
    
    scene.classList.remove("show");
    scene.classList.add("hide");
    
    setTimeout(function(){
    goodEndingPage.classList.remove("hide");
    goodEndingPage.classList.add("slowReveal");

    }, 3500);
    
    
//    scene.classList.remove("show");
    
    
}


function badEnd(){
    
    scene.classList.add("hide");
    scene.classList.remove("show");
    
    
    setTimeout(function(){
        badEndingPage.classList.remove("hide");
        badEndingPage.classList.add("slowReveal");

    }, 3500);

    
}





function end(){
    
    scene.classList.add("hide");
    scene.classList.remove("show");
    
    preload.classList.remove("hide");
    preload.classList.add("show");
    
}






