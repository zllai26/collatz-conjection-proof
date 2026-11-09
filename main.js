"use strict";
let current = 0n;
let steps = 0;
let loopInterval = null;
const output = document.getElementById('res');
const input = document.getElementById('number');
const startBtn = document.getElementById('startbutton');
const stopBtn = document.getElementById('stopbutton');
console.log("script loaded");
function show(text) {
    if (output)
        output.textContent = text;
}
function start() {
    if (loopInterval !== null || !input)
        return;
    const raw = input.value.trim();
    if (!/^\d+$/.test(raw) || BigInt(raw) <= 1n) {
        show("Enter a whole number greater than 1");
        return;
    }
    current = BigInt(raw);
    steps = 0;
    show(`${current}`);
    loopInterval = window.setInterval(() => {
        current = current % 2n === 0n ? current / 2n : current * 3n + 1n;
        steps++;
        show(current.toString());
    }, 250);
}
function stop() {
    if (loopInterval !== null) {
        clearInterval(loopInterval);
        loopInterval = null;
    }
}
startBtn?.addEventListener('click', start);
stopBtn?.addEventListener('click', stop);
