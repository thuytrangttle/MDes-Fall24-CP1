let cols, rows;
let tileSize;
let baseHue = 0;

function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();


    cols = 10; //define size of grid
    rows = 10;
    tileSize = width / cols;
}

function draw() {
    background(255);


    for (let i = 0; i < cols; i++) { //create grid
        for (let j = 0; j < rows; j++) {


            let x = i * tileSize; //x & y coordinates, ensures each circle is centered within its each  tile

            let y = j * tileSize;


            let hueOffset = (baseHue + i * 10 + j * 10) % 360;
            let color1 = color(hueOffset, 60, 100, 60); // 
            let color2 = color((hueOffset + 60) % 360, 60, 100, 30);


            for (let r = tileSize / 2; r > 0; r -= 4) { // ensures circles reduce by 4 in each iteration
                let blend = map(r, 0, tileSize / 2, 0, 1); //map amt parameter so it can be used in lerpcolor 
                fill(lerpColor(color1, color2, blend));
                ellipse(x + tileSize / 2, y + tileSize / 2, r * 2); //draws circles
            }
        }
    }


    baseHue = (baseHue + 1) % 360;
}


