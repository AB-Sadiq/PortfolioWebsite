
const description1 = document.getElementById('description1');

const title1 = document.getElementById('title1');

function show1() {
    if (description1.style.display === 'none') {
        description1.style.display = 'inline';
    } else {
        description1.style.display = 'none';
    }
}

const description2 = document.getElementById('description2');

const title2 = document.getElementById('title2');

function show2() {
    if (description2.style.display === 'none') {
        description2.style.display = 'inline';
    } else {
        description2.style.display = 'none';
    }
}

title1.onclick = show1;
title2.onclick = show2;


