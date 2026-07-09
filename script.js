// 💖 Cute messages for the start page

const messages = [
    "🦆 The duck believes in you!",
    "🐄 Moo-ving closer to your surprise!",
    "🦫 The capybara says keep going!",
    "🎶 A little adventure is waiting!",
    "💕 You are one quest away!"
];


let messageBox = document.getElementById("randomMessage");


if (messageBox) {

    let randomNumber = Math.floor(Math.random() * messages.length);

    messageBox.innerHTML = messages[randomNumber];

}


// 💕 Optional: create floating hearts

function createHeart(){

    let heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "25px";

    document.body.appendChild(heart);


    let animation = heart.animate(
        [
            { transform: "translateY(0)", opacity: 1 },
            { transform: "translateY(-100vh)", opacity: 0 }
        ],
        {
            duration: 4000
        }
    );


    animation.onfinish = () => {
        heart.remove();
    };

}


setInterval(createHeart, 800);
