noOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        movingSite(buttonInnerHTML);

    });

}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    movingSite(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var snd = new Audio("sounds/crash.mp3");
            snd.play();
            break;
        case "a":
            var snd = new Audio("sounds/kick-bass.mp3");
            snd.play();
            break;
        case "s":
            var snd = new Audio("sounds/snare.mp3");
            snd.play();
            break;
        case "d":
            var snd = new Audio("sounds/tom-1.mp3");
            snd.play();
            break;
        case "j":
            var snd = new Audio("sounds/tom-2.mp3");
            snd.play();
            break;
        case "k":
            var snd = new Audio("sounds/tom-3.mp3");
            snd.play();
            break;
        case "l":
            var snd = new Audio("sounds/tom-4.mp3");
            snd.play();
            break;
        default:
            break;
    }

}

function movingSite(movingkey) {

    var movingButton = document.querySelector("." + movingkey);
    movingButton.classList.add("pressed");
    setTimeout(() => {
        movingButton.classList.remove("pressed");

    }, 100);
}


