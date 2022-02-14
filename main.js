variable_A = 0;
variable_B = 0;

function preload() {
 filtar = loadimage("https://i.postimg.cc/76DHVwx0/lipstick-removebg-preview.png");//this variable is the lipstick now!
}
function setup() {
    canvas = createCanvas(30,30,450,450);
    canvas.center();
    webcam = createCapture(VIDEO);
   webcam.size(0,0,450,450);
    webcam.hide();

    posenet = ml5.poseNet(webcam ,modelloaded);
    posenet.on('gotposes', gotposes);
}
function draw() {
image(webcam,0,0,450,450);
image(filtar,variable_A,variable_B,0,20);//this piece of code brings the lipstick on the canvas.
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
        variable_A = results[0].pose.nose.x;
        variable_B = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x =" + variable_A);
        console.log("nose y =" + variable_B);  
    }
}