"use strict";



function randn_bm() {
    // Thanks to https://stackoverflow.com/a/49434653
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
    return num
}

// Takes in thee colors given as arrays of [r, g, b]
// and returns a color that's inbetween a and c, where b is a midpoint color
function random_color_in_range(a, b, c){
    // TODO
}

// Act on press
const links = document.querySelectorAll("a");
for (const link of links) {
    link.addEventListener("mousedown", (event) => {
        if (event.button == 0) { // Only for left clicks
            window.location = link.href;
        }
    });
}


// Stars
const NUMBER_OF_STARS = 400;
const MAX_DIAMETER = 10;


for (let i = 0; i < NUMBER_OF_STARS; i++) {
    // ideas: tiny points, a lot more of them, and a normal
    // distribution for the colors (more white than blue and red)
    // also slowly moving. random directions or all in the same direction?
    // randomized sizes? not smaller than 1px
    // blow up after 22 minutes?
    const star = document.createElement("span");
    star.style.position = "absolute";
    star.style.left = (Math.random() * 100) + "%";
    star.style.top = (Math.random() * 100) + "%";
    const blueness = randn_bm(); // Bigger is bluer
    const red = Math.round(255 - (blueness * 100));
    const blue = Math.round(155 + (blueness * 100));
    star.style.background = `rgb(${red}, 205, ${blue}`;
    const diameter = randn_bm() * MAX_DIAMETER + "px";
    star.style.height = diameter
    star.style.width = diameter;
    star.classList.add("star");
    star.style.zIndex = -1;
    document.body.appendChild(star);
}
