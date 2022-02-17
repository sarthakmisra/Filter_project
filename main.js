variable_A = 0;
variable_B = 0;

function preload() {
 filtar = loadImage("https://i.postimg.cc/76DHVwx0/lipstick-removebg-preview.png");//this variable is the lipstick now!
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    canvas.position(530,200);
    webcam = createCapture(VIDEO);
   webcam.size(450,450);
    webcam.hide();
    

    posenet = ml5.poseNet(webcam ,modelloaded);
    posenet.on('pose', gotposes);
}
function draw() {
image(webcam,0,0,300,300);
image(filtar , variable_A , variable_B , 40 , 40);//this piece of code brings the lipstick on the canvas.
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
        variable_A = results[0].pose.nose.x -80;
        variable_B = results[0].pose.nose.y -70;
        console.log("nose x =" + variable_A);
        console.log("nose y =" + variable_B);  
    }
}