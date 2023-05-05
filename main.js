nariz_x = 0;
nariz_y = 0;
mano_izquierda = 0;
mano_derecha = 0;
distancia = 0;

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(700, 100)
    background("red");
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(100, 100);
    poses = ml5.poseNet(video, listo)
    poses.on("pose", mostrar);
}

function listo(){
    console.log("Estoy listo");
}

function draw(){
    background("red");
    fill("blue");
    stroke("green");
    mitad = distancia/2;
    square(nariz_x - mitad, nariz_y - mitad, distancia);
}

function mostrar(respuesta){
    if (respuesta.length > 0) {
        console.log(respuesta);
        nariz_x = respuesta[0].pose.nose.x;
        nariz_y = respuesta[0].pose.nose.y;
        mano_derecha = respuesta[0].pose.rightWrist.x;
        mano_izquierda = respuesta[0].pose.leftWrist.x;
        distancia = mano_izquierda - mano_derecha;
    }
}