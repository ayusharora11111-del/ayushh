/* ==========================================
   FLOATING HEARTS
========================================== */

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);



/* ==========================================
   VIDEO PLAYER
========================================== */

const video = document.getElementById("loveVideo");
const playBtn = document.getElementById("playBtn");

if(video && playBtn){

    playBtn.addEventListener("click",()=>{

        if(video.paused){

            video.play();
            playBtn.classList.add("hide");

        }else{

            video.pause();
            playBtn.classList.remove("hide");

        }

    });

    video.addEventListener("click",()=>{

        if(video.paused){

            video.play();
            playBtn.classList.add("hide");

        }else{

            video.pause();
            playBtn.classList.remove("hide");

        }

    });

    video.addEventListener("pause",()=>{

        playBtn.classList.remove("hide");

    });

    video.addEventListener("ended",()=>{

        playBtn.classList.remove("hide");

    });

}



/* ==========================================
   MUSIC BUTTON
========================================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

if(musicBtn && music){

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

music.pause();

musicPlaying=false;

musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

}

else{

music.play();

musicPlaying=true;

musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

});

}



/* ==========================================
   LOVE TIMER
========================================== */

/*
Change this date
YYYY, MM-1, DD
*/

const loveDate = new Date(2024,0,1,0,0,0);

function updateTimer(){

const now = new Date();

const diff = now-loveDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

const seconds=Math.floor((diff%(1000*60))/1000);

document.getElementById("days").textContent=days;

document.getElementById("hours").textContent=hours;

document.getElementById("minutes").textContent=minutes;

document.getElementById("seconds").textContent=seconds;

}

setInterval(updateTimer,1000);

updateTimer();



/* ==========================================
   LOVE QUOTES
========================================== */

const quotes=[

"You are the reason I smile every day ❤️",

"My favourite place is beside you 💕",

"You are my today and all of my tomorrows ❤️",

"I still fall in love with you every single day 🌹",

"Every heartbeat whispers your name ❤️",

"You make ordinary moments magical ✨",

"Forever isn't enough with you ❤️",

"You are my sunshine after every storm ☀️",

"My heart chose you and will always choose you ❤️",

"Home is wherever you are 🏡❤️"

];

let quoteIndex=0;

const quote=document.getElementById("quote");

setInterval(()=>{

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

quote.style.opacity=0;

setTimeout(()=>{

quote.innerHTML=quotes[quoteIndex];

quote.style.opacity=1;

},400);

},5000);



/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",reveal);

function reveal(){

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const elementTop=reveals[i].getBoundingClientRect().top;

const visible=120;

if(elementTop<windowHeight-visible){

reveals[i].classList.add("active");

}

}

}

reveal();



/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const cards=document.querySelectorAll(".card img");

cards.forEach((img)=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});



/* ==========================================
   HERO FLOAT
========================================== */

const cover=document.querySelector(".cover-image");

let direction=1;

setInterval(()=>{

if(cover){

cover.style.transform=`translateY(${direction*8}px)`;

direction*=-1;

}

},2000);



/* ==========================================
   PRELOADER (OPTIONAL)
========================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});



/* ==========================================
   CONSOLE MESSAGE ❤️
========================================== */

console.log("❤️ Romantic Website Loaded Successfully ❤️");