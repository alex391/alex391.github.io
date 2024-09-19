"use strict";

function randnBm() {
    // Thanks to https://stackoverflow.com/a/49434653
    // generate number between 0 and 1, where .5 is most likely
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randBm() // resample between 0 and 1
    return num
}

// Takes in thee colors given as arrays of [r, g, b]
// and returns a color that's between a and c, where b is a midpoint color
// normal controls weather to use a normal distribution, where b is most likely
// return an object containing { color: [r, g, b], cursor: number [0, 1) }
function randomColorInRange(a, b, c, normal = true) {

    let cursor = normal ? randnBm() : Math.random();
    const ret = {
        color: null,
        cursor: cursor
    };

    // a - b = d
    // o = d * (cursor * 2)
    // return a - o


    const intensity = (cursor > .5 ? cursor - .5 : cursor) * 2;
    const difference = [];
    if (cursor < .5) {
        for (let i = 0; i < 3; i++) {
            difference.push(a[i] - b[i]);
        }
    } else {
        for (let i = 0; i < 3; i++) {
            difference.push(b[i] - c[i]);
        }
    }

    const offset = [];
    for (let i = 0; i < 3; i++) {
        offset.push(difference[i] * intensity);
    }
    const sum = [];
    if (cursor < .5) {
        for (let i = 0; i < 3; i++) {
            sum.push(Math.round(a[i] - offset[i]));
        }
    } else {
        for (let i = 0; i < 3; i++) {
            sum.push(Math.round(b[i] - offset[i]));
        }
    }
    ret.color = sum;
    return ret;
}


function calcNumberOfStars() {
    const idealStars = Math.round(($(window).height() * $(window).width()) * .001)
    const MAX = 2200;
    return Math.min(idealStars, MAX)
}

const MAX_DIAMETER = 5;

function createStar() {
    const star = document.createElement("span");
    const hitbox = document.createElement("span");
    star.style.left = (Math.random() * 100) + "%";
    star.style.top = (Math.random() * 100) + "%";
    hitbox.style.top = star.style.top;
    hitbox.style.left = star.style.left;

    const brightness = Math.random();
    const starColor = randomColorInRange([74, 118, 216], [255, 255, 255], [225, 230, 12])
    star.style.background = `rgba(${starColor.color[0]}, ${starColor.color[1]}, ${starColor.color[2]}, ${brightness})`;
    star.style.boxShadow = `0 0 5px rgba(${starColor.color[0]}, ${starColor.color[1]}, ${starColor.color[2]}, ${brightness})`;

    const diameter = randnBm() * MAX_DIAMETER + "px";
    star.style.height = diameter
    star.style.width = diameter;

    star.classList.add("star");
    hitbox.classList.add("hitbox")

    $(hitbox).on("mousedown", { star: star, hitbox: hitbox }, explode);
    setTimeout(() => {
        explode({ data: { star: star, hitbox: hitbox } });
    }, randnBm() * 2 * 22 * 60 * 1000); // https://store.steampowered.com/app/753640/Outer_Wilds/
    return { star: star, hitbox: hitbox };
}

let numberOfStars = calcNumberOfStars();

function drawStars() {
    const wrapper = $("#wrapper");
    for (let i = 0; i < numberOfStars; i++) {
        const { star, hitbox } = createStar();
        wrapper.append(star);
        wrapper.append(hitbox);
    }

}

function getRandomArbitrary(min, max) {
    // Thanks MDN
    return Math.random() * (max - min) + min;
}

let particles = 0;

function explode(event) {
    // "Mission: Science compels us to explode the sun!"
    //                                            -- Pye
    const star = $(event.data.star);
    if (document.hasFocus() || event.buttons) {
        const wrapper = $("#wrapper");
        const numberOfExplosionParticles = 20;
        const maxParticles = numberOfExplosionParticles * 5; // For lag
        const explosionDistance = 20;
        for (let i = 0; i < numberOfExplosionParticles && particles <= maxParticles; i++, particles++) {
            const particle = star.clone().css("height", "1px").css("width", "1px");
            wrapper.append(particle);
            const top = parseInt(particle.css("top")) + getRandomArbitrary(-explosionDistance, explosionDistance)
            const left = parseInt(particle.css("left")) + getRandomArbitrary(-explosionDistance, explosionDistance)
            particle.animate({
                top: top,
                left: left
            }, 1000, "linear", function () {
                setTimeout(() => {
                    $(this).remove();
                    particles--;
                }, getRandomArbitrary(0, 200))
            });
        }

    }
    star.remove();
    $(event.data.hitbox).remove();
}

// Act on press
const links = $("a");
for (const link of links) {
    link.addEventListener("mousedown", (event) => {
        if (event.button == 0) { // Only for left clicks
            window.location = link.href;
        }
    });
}

// Stars
drawStars();

$(window).on("resize", () => {
    const correctNumberOfStars = calcNumberOfStars();
    if (numberOfStars < (correctNumberOfStars / 1.5) || numberOfStars > (correctNumberOfStars * 1.5)) {
        $(".star").remove();
        drawStars();
        numberOfStars = correctNumberOfStars;
    }
});

