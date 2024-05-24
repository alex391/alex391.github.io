"use strict";
// Act on press
const links = document.querySelectorAll("a");
for (const link of links) {
    link.addEventListener("mousedown", () => {  
        window.location = link.href;
    });
}