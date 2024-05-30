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