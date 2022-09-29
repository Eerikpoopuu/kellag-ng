const line = document.getElementById("line");
const g = document.getElementById("g");

for (let i = 1; i < 12 + 1; i++) {
    const star = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );
    star.setAttribute("x", pol2car(i * (360 / 12), 120).x);
    star.setAttribute("y", pol2car(i * (360 / 12), 120).y);
    star.setAttribute("text-anchor", "middle");
    star.setAttribute("dominant-baseline", "central");
    star.classList.add("star");
    star.innerHTML = i;
    g.appendChild(star);
}

function pol2car(angle, radius) {
    return {
        x: Math.cos((angle - 90) * (Math.PI / 180)) * radius,
        y: Math.sin((angle - 90) * (Math.PI / 180)) * radius,
    };
}

const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider1value = document.getElementById("slider1value");
const slider2value = document.getElementById("slider2value");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const genHour = document.getElementById("hour");
const vasta = document.getElementById("vasta");
const scoreValue = document.getElementById("scoreValue");
const msg = document.getElementById("msg");
const hidden = document.getElementById("hidden");
let hourInput = 0;


let hourValue = 0;
let score = 0;

slider1.addEventListener("input", (event) => {
    const angle = parseFloat(event.target.value);
    const point = pol2car(angle, 90);
    line1.setAttribute("x2", point.x);
    line1.setAttribute("y2", point.y);
    const min = Math.floor(angle / 6);
    if (min <= 60) {
        console.log(min)
        slider2value.innerText = min;
    }
});

slider2.addEventListener("input", (event) => {
    const angle = parseFloat(event.target.value);
    const point = pol2car(angle, 70);
    line2.setAttribute("x2", point.x);
    line2.setAttribute("y2", point.y);
    const hour = Math.floor(angle / 30);
    if (hour <= 12) {
        console.log(hour)
        slider1value.innerText = hour;
        hourInput = hour
    }
});
window.addEventListener('load', (event) => {
    const randomHour = Math.floor(Math.random() * 12) + 1;
    genHour.innerText = randomHour;
    hourValue = randomHour;
});

vasta.addEventListener("click", (e) => {
    console.log(hour.innerText);
    console.log(typeof hourValue);
    if (hourInput === hourValue) {
        const randomHour = Math.floor(Math.random() * 12) + 1;
        genHour.innerText = randomHour;
        hourValue = randomHour;
        score++;
        scoreValue.innerText = score;
        msg.innerText = 'Õige, hästi tehtud.';
        msg.style.color = '#1ec700';
    } else {
        msg.innerText = 'Vale, proovi uuesti.';
        msg.style.color = 'red';
    }
     if (score == 5) {
        slider2value.classList.remove("hidden");
        slider1.classList.remove("hidden");
        hidden.classList.remove("hidden");
    }
});
