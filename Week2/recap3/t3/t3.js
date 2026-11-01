'use strict';

const target = document.querySelector('#target');
const browser = navigator.userAgent;

let browserName = 'Unknown browser';
let browserVersion = '';

if (browser.includes('Edg/')) {
  browserName = 'Microsoft Edge';
  browserVersion = browser.split('Edg/')[1].split(' ')[0];
} else if (browser.includes('Chrome/')) {
  browserName = 'Google Chrome';
  browserVersion = browser.split('Chrome/')[1].split(' ')[0];
} else if (browser.includes('Firefox/')) {
  browserName = 'Mozilla Firefox';
  browserVersion = browser.split('Firefox/')[1].split(' ')[0];
}

const browserInfo = document.createElement('p');
browserInfo.textContent = `Browser ${browserName}, ${browserVersion}`;
target.appendChild(browserInfo);

const operatingSystem = navigator.platform;
const osInfo = document.createElement('p');
osInfo.textContent = `Operating System: ${operatingSystem}`;
target.appendChild(osInfo);

const screenInfo = document.createElement('p');
screenInfo.textContent = `Screen size: ${screen.width} x ${screen.height}`;
target.appendChild(screenInfo);

const availableScreen = document.createElement('p');
availableScreen.textContent = `Available screen space: ${screen.availWidth} x ${screen.availHeight}`;
target.appendChild(availableScreen);

const currentDate = new Date();
const dateInfo = document.createElement('p');
dateInfo.textContent = `Date: ${currentDate.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})}`;
target.appendChild(dateInfo);

const timeInfo = document.createElement('p');
timeInfo.textContent = `Time: ${currentDate.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
})}`;
target.appendChild(timeInfo);
