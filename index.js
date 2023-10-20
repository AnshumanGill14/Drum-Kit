

var x=document.querySelectorAll(".drum").length;
for(var i=0;i<x;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",sound);

}

function sound(){
    
    let buttonSound= this.innerHTML;
    makesound(buttonSound);
    buttonAnimation(buttonSound);
    
}


document.addEventListener("keydown",function(event){ 
    makesound(event.key)
    buttonAnimation(event.key)
});







function makesound(key){
    switch (key) {
        case "w":
            var au=new Audio("./sounds/tom-1.mp3");
            au.play();
            break;

        case "a":
            var au1=new Audio("./sounds/tom-2.mp3");
            au1.play();
            break;
    
        case "s":
            var au2=new Audio("./sounds/tom-3.mp3");
            au2.play();
            break;

        case "d":
            var au3=new Audio("./sounds/tom-4.mp3");
            au3.play();
            break;

        case "j":
            var au4=new Audio("./sounds/snare.mp3");
            au4.play();
            break;

        case "k":
            var au5=new Audio("./sounds/kick-bass.mp3");
            au5.play();
            break;

        case "l":
            var au6=new Audio("./sounds/crash.mp3");
            au6.play();
            break;


        default:
            break;
    }
}

function buttonAnimation(currentKey){
    let act=document.querySelector("."+currentKey);
    act.classList.add("pressed");

    setTimeout(function(){
        act.classList.remove("pressed")
    }, 100);
}