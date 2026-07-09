/* ===================================
   Pink Minecraft Inspired Date Website
   script.js
=================================== */


// Create floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);


// Create cherry blossom petals
function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 700);


// Runaway No button

const noButton = document.getElementById("noBtn");

const noMessages = [
    "Nice try 😭",
    "Wrong choice!",
    "Are you sure? 👀",
    "Think again 💗",
    "You can't escape!"
];

let messageIndex = 0;


if(noButton){

    noButton.addEventListener("mouseover", function(){

        noButton.innerHTML = noMessages[messageIndex];

        messageIndex++;

        if(messageIndex >= noMessages.length){
            messageIndex = 0;
        }


        const x = Math.random() * 250 - 125;
        const y = Math.random() * 150 - 75;


        noButton.style.transform =
            `translate(${x}px, ${y}px)`;
    });

}


// Yes button celebration

const yesButton = document.getElementById("yesBtn");
const message = document.getElementById("message");


if(yesButton){

    yesButton.addEventListener("click", function(){

        message.style.display = "block";


        yesButton.innerHTML = "YAY!! 💖";


        document.body.style.background =
        "linear-gradient(#ffc1e3,#fff5fb)";


        // Create celebration hearts
        for(let i = 0; i < 50; i++){

            setTimeout(() => {

                const heart = document.createElement("div");

                heart.innerHTML = "💗";
                heart.style.position = "fixed";
                heart.style.left =
                    Math.random()*100+"vw";
                heart.style.top =
                    Math.random()*100+"vh";
                heart.style.fontSize =
                    "30px";

                heart.style.animation =
                    "pop 1s";

                document.body.appendChild(heart);


                setTimeout(()=>{
                    heart.remove();
                },2000);


            }, i*50);

        }

    });

}


// Music button

const musicButton = document.getElementById("musicBtn");
const music = document.getElementById("music");


if(musicButton && music){

    musicButton.addEventListener("click",()=>{

        if(music.paused){

            music.play();
            musicButton.innerHTML="🔇 Pause Music";

        } else {

            music.pause();
            musicButton.innerHTML="🎵 Music";

        }

    });

}
