//galaxy related variables
let totalPts = 300;
let steps = totalPts + 1;

let pointSpacing = 10;

let _frameCount = 10;

let galaxyColorState;
let galaxyShapeState;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(10);
}

function draw() {
    background(0);
    whiteParticle = stroke(249, 246, 238);
    let rand = 0
    let _rand = 0;
    let pointX = random(-10, 10);
    let evenNumRandom = 0;


    //shape 1 : ring
    if (galaxyShapeState == 0) { //q

        for (let i = 1; i < steps; i++) {
            changeColor();
            point(-10, height / 5 + random(-rand, rand), height / 2 + (random(-rand, rand)));

            whiteParticle;
            point(-10, height / 5 + random(-rand, rand), height / 2 + (random(-rand, rand)));

            rotateScene();
            rand += random(-5, 5);
            _rand += random(-10, 10);
        }
    }

    // shape 2 : jupiter
    if (galaxyShapeState == 1) { //w
        for (let i = 1; i < steps * 1.5; i++) { //w
            changeColor();
            point(-10, height / 5 + random(-rand, rand), height / 2 + (random(-rand, rand)));

            point(10, random(-rand, rand) * 2, (random(-rand, rand)));

            whiteParticle;
            point(-10, height / 5 + random(-rand, rand), height / 2 + (random(-rand, rand)));

            point(10, random(-rand, rand) * 2, (random(-rand, rand)));

            rotateScene();
            rand += random(-5, 5);
            _rand += random(-10, 10);
        }
    }

    //shape 3 : blackhole
    if (galaxyShapeState == 2) { //e
        for (let i = 1; i < steps * 1.5; i++) {
            changeColor();
            point(30, random(-_rand, _rand) * 4, random(-rand, rand));

            whiteParticle;
            point(30, random(-_rand, _rand) * 4, random(-rand, rand));

            rotateScene();
            rand += random(-5, 5);
            _rand += random(-10, 10);
        }
    }

    //shape 4 : flower
    if (galaxyShapeState == 3) { //r
        for (let i = 1; i < steps / 4; i++) {
            for (j = 1; j < pointSpacing; j++) {
                changeColor();
                point(pointX, j * 4, j * 20 + (random(-rand, rand)));

                whiteParticle;
                point(pointX, j * 4, j * 20 + (random(-rand, rand)));
            }
            rotateScene();
            rand += random(-5, 5);
            _rand += random(-10, 10);
        }
    }

    //shape 5 : butterfly 
    if (galaxyShapeState == 4) { //t
        evenNumRandom += (random(-5, 5) * 2);

        for (let i = 1; i < steps; i++) {
            changeColor();
            point(pointX, evenNumRandom, randomGaussian(0, 50) * 2);

            whiteParticle;
            point(pointX, evenNumRandom, randomGaussian(0, 50) * 2);
            rotateScene();
        }
    }

    // shape 6 : explosion
    if (galaxyShapeState == 5) { //y

        for (let i = 1; i < steps * 10; i++) {

            let matrixStep = frameCount % 20;
            changeColor();

            point(-10, height / 5 + random(-rand, rand), height + (random(-rand, rand)));
    
            applyMatrix(2 / matrixStep, 0.12, 0.12, 1.25 / matrixStep, 1, 1);
    
            rotateScene();
            rand += random(-5, 5);
            _rand += random(-10, 10);
        }
        for (let i = 1; i < steps; i++) {
            whiteParticle;
        }

        // let message = "place mouse cursor around the center";
        // let textColor = color(129, 129, 129);
        // let textX = windowWidth / 2 - 180;
        // let textY = 10;
        // let paragraph = createP(message);

        // paragraph.style('color', textColor);
        // paragraph.style('font-size', '16px');

        // paragraph.position(textX, textY);

    }



}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyTyped() {
    //particle color key code
    if (keyIsDown(83)) { //s
        saveCanvas('Particle Galaxy', 'png');
    }

    if (keyIsDown(49)) { //1
        galaxyColorState = 0;
    }

    if (keyIsDown(50)) { //2
        galaxyColorState = 1;
    }

    if (keyIsDown(51)) { //3
        galaxyColorState = 2
    }

    if (keyIsDown(52)) { //4
        galaxyColorState = 3;
    }

    if(keyIsDown(53)) {
        galaxyColorState = 4;
    }

    if (keyIsDown(67)) { //c
        galaxyShapeState = floor(random(5));
        galaxyColorState = floor(random(5));
    }

    if (keyIsDown(81)) { //q
        galaxyShapeState = 0;
    }

    if (keyIsDown(87)) { //w
        galaxyShapeState = 1;
    }

    if (keyIsDown(69)) { //e
        galaxyShapeState = 2;
    }

    if (keyIsDown(82)) { //r
        galaxyShapeState = 3;
    }

    if (keyIsDown(84)) { //t
        galaxyShapeState = 4;
    }

    if (keyIsDown(89)) { //y
        galaxyShapeState = 5;
    }
}

function changeColor() {
    if (galaxyColorState == 0) { //1
        //red particles
        let redColor = color(random(200, 255), random(0, 100), random(0, 100));
        stroke(redColor);
    }

    if (galaxyColorState == 1) { //2
        //orange
        let orangeColor = color(random(180, 255), random(80, 150), random(0, 120));
        stroke(orangeColor);
    }

    if (galaxyColorState == 2) { //3
        //yellow
        let yellowColor = color(random(200, 255), random(210, 255), random(0, 50));
        stroke(yellowColor);
    }

    if (galaxyColorState == 3) { //4
        //green
        let greenColor = color(random(0, 100), random(80, 255), random(0, 100));
        stroke(greenColor);
    }

    if(galaxyColorState == 4) { //5
        //blue particles
        let blueColor = color(random(0, 50), random(100, 200), random(150, 255));
        stroke(blueColor);
    }
}

function rotateScene() {
    rotateZ(frameCount * 0.01);
    rotateX(mouseX * 0.01);
    rotateY(mouseY * 0.01);
}