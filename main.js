function preload() {

}
function setup() {
    canvas = createCanvas(450,450);
    canvas.center();
    webcam = createCapture(VIDEO);
   webcam.size(0,0,450,450);
    webcam.hide();

    posenet = ml5.poseNet(webcam ,modelloaded);
    posenet.on('gotposes', gotposes);
}
function draw() {
image(webcam,0,0,450,450);
}
function take() {
    save("Image.png");
}
function modelloaded() {
console.log('model is loaded');
}
function gotposes(results) {
    if (results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);  
    }
}