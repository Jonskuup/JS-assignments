'use strict';

const paragraphOutput = document.querySelector("#output");

const x1 = Number(prompt("Anna koordinaatti x1"));
const y1 = Number(prompt("Anna koordinaatti y1"));
const x2 = Number(prompt("Anna koordinaatti x2"));
const y2 = Number(prompt("Anna koordinaatti y2"));

const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

paragraphOutput.textContent = "Pisteiden (" + x1 + ", " + y1 + ") ja (" + x2 + ", " + y2 + ") välinen etäisyys on " + distance;