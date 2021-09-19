var r = 255;
var g = 255;
var b = 255;

function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
}

function draw(){
    fill(r, g, b);
    rect(100, 100, 100, 100);

}

function mouseClicked(){
    r = Math.random()*255;
    g = Math.random()*255;
    b = Math.random()*255;

    draw();
}