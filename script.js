

/* Flowers */
function startFlowers() {
    setInterval(() => {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.innerHTML = "🌸"; // flower emoji

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (12 + Math.random() * 8) + "s";
        flower.style.opacity = Math.random() * 0.3 + 0.3; // 🔹 random transparency

        document.querySelector(".flowers").appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 22000);
    }, 900);
}

startFlowers();

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("fluteMusic");
let isPlaying = false;


musicBtn.addEventListener("click", () => {
    if(!isPlaying){
        music.volume = 0.5;        // volume control
        music.play();              // play music
        musicBtn.textContent = "Pause Music ⏸️";
        isPlaying = true;
    } else {
        music.pause();             // pause music
        musicBtn.textContent = "Play Music 🎵";
        isPlaying = false;
    }
});

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");
    const textElement = document.getElementById("text");
    const message = "May Krishna Ji fill your life with love, peace and music 🎶✨";

    let i = 0;

    function startTyping() {
        if (i < message.length) {
            textElement.innerHTML += message.charAt(i);
            i++;
            setTimeout(startTyping, 80);
        }
    }

    setTimeout(() => {
        loading.style.display = "none";
        content.classList.remove("hidden");
        startTyping();
    }, 2000);
});
setTimeout(() => {
    loading.style.display = "none";
    content.style.display = "block";

    document.getElementById("secretTrigger").style.display = "block";
}, 2000);

const secretTrigger = document.getElementById("secretTrigger");
const passwordBox = document.getElementById("passwordBox");
const unlockBtn = document.getElementById("unlockBtn");
const secretPassword = document.getElementById("secretPassword");

const correctPassword = "04082008"; // 🔑 password

// STEP 1: click pe sirf password box dikhao
secretTrigger.addEventListener("click", () => {
    passwordBox.style.display = "block";
});

// STEP 2: password check
unlockBtn.addEventListener("click", () => {
    if (secretPassword.value.toLowerCase() === correctPassword) {
        window.location.href = "secret.html";
    } else {
        alert("Wrong password ❌");
    }
});
// PASSWORD SAHI HONE PAR
if (secretPassword.value.toLowerCase() === correctPassword) {

    unlockSound.play(); // 🎶 music start

    localStorage.setItem("playMusic", "yes"); // yaad rakhe

    setTimeout(() => {
        window.location.href = "secret.html";
    }, 1200);
}

