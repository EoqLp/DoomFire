//https://youtu.be/fxm8cadCqbs?t=571

const firePixels = [];
const fireWidth = 10;
const fireHeight = 10;

function init(){
    createED();
    renderFire();
}

function createED(){
    const numberPixels = fireWidth * fireHeight

    for(let i = 0; i < numberPixels; i++){
        firePixels[i] = 0;
    }
}

function createPropagation(){

}

function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>'

    for(let row = 0; row < fireHeight; row++){
        html += '<tr>'

        for (let column = 0; column < fireWidth; column++){
            const pixelIndex = column + (fireWidth * row)
            html += '<td>'
            html += `<div class="pixel-index">${pixelIndex}</div>`
            html += '</td>'
        }

        html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#fireCanvas').innerHTML = html
}

init()
