'use strict';

const paragraphOutput = document.querySelector("#output");

const celcius = Number(prompt("Anna lämpötila celsius-asteina"));

const fahrenheit = (celcius * 9/5) + 32;
const kelvin = celcius + 273.15;

paragraphOutput.textContent = celcius + "°C on " + fahrenheit + "°F ja " + kelvin + "K";