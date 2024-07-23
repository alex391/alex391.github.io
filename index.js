"use strict";
// Act on press
const links = document.querySelectorAll("a");
for (const link of links) {
    link.addEventListener("mousedown", (event) => {
        if (event.button == 0) { // Only for left clicks
            window.location = link.href;
        }
    });
}


for (let i = 0; i < 100; i++) {
    // ideas: tiny points, a lot more of them, and a normal
    // distribution for the colors (more white than blue and red)
    // also slowly moving. random directions or all in the same direction?
    // randomized sizes? not smaller than 1px
    const star = document.createElement("span");
    star.style.position = "absolute";
    star.style.left = (Math.random() * 100) + "%";
    star.style.top = (Math.random() * 100) + "%";
    const blueness = Math.random(); // Bigger is bluer
    const red = Math.round(255 - (blueness * 100));
    const blue = Math.round(155 + (blueness * 100));
    star.style.background = `rgb(${red}, 205, ${blue}`;
    star.classList.add("star");
    star.style.zIndex = -1;
    document.body.appendChild(star);
}
