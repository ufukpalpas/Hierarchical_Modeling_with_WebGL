var NumVertices = 1380; //(6 faces)(2 triangles/face)(3 vertices/triangle)
var points = [];
var colors = [];
var vertIndices = [];
var vertices = [];

// RGBA colors
var vertexColors = [
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
    vec4( 0.0, 0.0, 0.0, 1.0 ),   // red
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // yellow
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // red
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // yellow
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
    vec4( 0.0, 0.0, 0.0, 1.0 )  // red
  /*   vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
    vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
    vec4( 0.0, 1.0, 1.0, 1.0 ),  // white
    vec4( 0.0, 1.0, 1.0, 1.0 )   // cyan */
];


var objStartEnd = [];
// Parameters controlling the size of the Robot's arm
//! *2 for all

var BASE_HEIGHT      = 1.62 *2;
var BASE_WIDTH       = 2.30 *2;
var BASE_LENGTH      = 1.15 *2;

var LEFT_LOWER_ARM_HEIGHT = 0.232 *2;
var LEFT_LOWER_ARM_WIDTH  = 0.215 *2;
var LEFT_LOWER_ARM_LENGTH = 0.2 *2;
var LEFT_UPPER_ARM_HEIGHT = 0.51 *2;
var LEFT_UPPER_ARM_WIDTH  = 0.56 *2;
var LEFT_UPPER_ARM_LENGTH = 0.33 *2;
var LEFT_HAND_HEIGHT = 0.254 *2;
var LEFT_HAND_WIDTH = 0.465 *2;
var LEFT_HAND_LENGTH = 0.174 *2;
var RIGHT_UPPER_ARM_HEIGHT = 0.51 *2;
var RIGHT_UPPER_ARM_WIDTH  = 0.56 *2;
var RIGHT_UPPER_ARM_LENGTH = 0.33 *2;
var RIGHT_LOWER_ARM_HEIGHT = 0.232 *2;
var RIGHT_LOWER_ARM_WIDTH  = 0.215 *2;
var RIGHT_LOWER_ARM_LENGTH = 0.2 *2;
var RIGHT_HAND_HEIGHT = 0.254 *2;
var RIGHT_HAND_WIDTH = 0.465 *2;
var RIGHT_HAND_LENGTH = 0.174 *2;

var LEFT_LOWER_LEG_HEIGHT = 0.315 *2;
var LEFT_LOWER_LEG_WIDTH  = 0.233 *2;
var LEFT_LOWER_LEG_LENGTH = 0.26 *2;
var LEFT_UPPER_LEG_HEIGHT = 0.53 *2;
var LEFT_UPPER_LEG_WIDTH  = 0.422 *2;
var LEFT_UPPER_LEG_LENGTH = 0.318 *2;
var LEFT_FOOT_HEIGHT = 0.179 *2;
var LEFT_FOOT_WIDTH = 0.481 *2;
var LEFT_FOOT_LENGTH = 0.201 *2;
var RIGHT_UPPER_LEG_HEIGHT = 0.53 *2;
var RIGHT_UPPER_LEG_WIDTH  = 0.422 *2;
var RIGHT_UPPER_LEG_LENGTH = 0.318 *2;
var RIGHT_LOWER_LEG_HEIGHT = 0.315 *2;
var RIGHT_LOWER_LEG_WIDTH  = 0.233 *2;
var RIGHT_LOWER_LEG_LENGTH = 0.26 *2;
var RIGHT_FOOT_HEIGHT = 0.179 *2;
var RIGHT_FOOT_WIDTH = 0.481 *2;
var RIGHT_FOOT_LENGTH = 0.201 *2;

var RIGHT_NECK1_HEIGHT = 0.856 *3;
var RIGHT_NECK1_WIDTH = 0.567 *2;
var RIGHT_NECK1_LENGTH = 0.357 *2;
var MIDDLE_NECK1_HEIGHT = 0.856 *3;
var MIDDLE_NECK1_WIDTH = 0.567 *2;
var MIDDLE_NECK1_LENGTH = 0.357 *2;
var LEFT_NECK1_HEIGHT = 0.856 *3;
var LEFT_NECK1_WIDTH = 0.567 *2;
var LEFT_NECK1_LENGTH = 0.357 *2;

var RIGHT_NECK2_HEIGHT = 0.464 *3;
var RIGHT_NECK2_WIDTH = 0.308 *2;
var RIGHT_NECK2_LENGTH = 0.361 *2;
var MIDDLE_NECK2_HEIGHT = 0.464 *2;
var MIDDLE_NECK2_WIDTH = 0.308 *2;
var MIDDLE_NECK2_LENGTH = 0.361 *2;
var LEFT_NECK2_HEIGHT = 0.464 *3;
var LEFT_NECK2_WIDTH = 0.308 *2;
var LEFT_NECK2_LENGTH = 0.361 *2;

var RIGHT_NECK3_HEIGHT = 0.296 *3;
var RIGHT_NECK3_WIDTH = 0.343 *2;
var RIGHT_NECK3_LENGTH = 0.286 *2;
var MIDDLE_NECK3_HEIGHT = 0.296 *3.5;
var MIDDLE_NECK3_WIDTH = 0.343 *2;
var MIDDLE_NECK3_LENGTH = 0.286 *2;
var LEFT_NECK3_HEIGHT = 0.296 *3;
var LEFT_NECK3_WIDTH = 0.343 *2;
var LEFT_NECK3_LENGTH = 0.286 *2;

var RIGHT_HEAD_HEIGHT = 0.384 *3;
var RIGHT_HEAD_WIDTH = 0.565 *3;
var RIGHT_HEAD_LENGTH = 0.371 *2;
var MIDDLE_HEAD_HEIGHT = 0.384 *3.5;
var MIDDLE_HEAD_WIDTH = 0.565 *3;
var MIDDLE_HEAD_LENGTH = 0.371 *2;
var LEFT_HEAD_HEIGHT = 0.384 *3;
var LEFT_HEAD_WIDTH = 0.565 *3;
var LEFT_HEAD_LENGTH = 0.371 *2;

var UPPER_TAIL_HEIGHT = 0.685 *2;
var UPPER_TAIL_WIDTH = 0.771 *2;
var UPPER_TAIL_LENGTH = 0.519 *2;
var LOWER_TAIL_HEIGHT = 0.739 *2;
var LOWER_TAIL_WIDTH = 0.699 *2;
var LOWER_TAIL_LENGTH = 0.297 *2;

//TODO add size

// Shader transformation matrices

var modelViewMatrix, projectionMatrix, initMatrix;
var normalMatrix, normalMatrixLoc;
var hydra = [];
var stack = [];

var normalsArray = [];
var frames = [];

var near = -20;
var far = 20;
var radius = 3.5;
var theta1  = 0.0;
var phi    = 0.0;
var dr = 1.0 * Math.PI/180.0;

var left = -11;
var right = 11;
var ytop = 13;
var bottom = -9;

//eye = vec3(radius*Math.sin(theta1)*Math.cos(phi), 
//   radius*Math.sin(theta1)*Math.sin(phi), radius*Math.cos(theta1));

var lightPosition = vec4(10.0, 0.0, 0.0, 1.0 );
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse = vec4( 0.5, 0.5, 0.5, 1.0 );
var lightSpecular = vec4( 0.5, 0.5, 0.5, 1.0 );

var materialAmbient = vec4( 0.0, 0.0, 0.0, 1.0 );
var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );
var materialShininess = 80.0;

var ambientColor, diffuseColor, specularColor;
var eye;
var at = vec3(0.0, 0.0, 0.0);
var up = vec3(0.0, 1.0, 0.0);

// Array of rotation angles (in degrees) for each rotation axis

var Base = 0;
var LeftUpperArm = 1;
var LeftLowerArm = 2;
var LeftHand = 3;
var RightUpperArm = 4;
var RightLowerArm = 5;
var RightHand = 6;
var LeftUpperLeg = 7;
var LeftLowerLeg = 8;
var LeftFoot = 9;
var RightUpperLeg = 10;
var RightLowerLeg = 11;
var RightFoot = 12;
var RightNeck1 = 13;
var RightNeck2 = 14;
var RightNeck3 = 15;
var RightHead = 16;
var MiddleNeck1 = 17;
var MiddleNeck2 = 18;
var MiddleNeck3 = 19;
var MiddleHead = 20;
var LeftNeck1 = 21;
var LeftNeck2 = 22;
var LeftNeck3 = 23;
var LeftHead = 24;
var UpperTail = 25;
var LowerTail = 26;

//TODO add number


var theta= [ 0,
             180, 0, 0, 180, 0, 0, 180, 0, 0, 180, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
             -70, 0];

var thetaX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var thetaY = [0, 0, 0, 0, 0, 0];
//TODO add angle

var angle = 0;

var modelViewMatrixLoc; 

var vBuffer, cBuffer;

var play = false;
var playInd = 0;
var click = false;
var anim1on = false;
var anim2on = false;
var animPlayed = false;

//----------------------------------------------------------------------------

function quad(  a,  b,  c,  d ) {
    colors.push(vertexColors[a%8]);
    points.push(vertices[a-1]); 
    colors.push(vertexColors[b%8]); 
    points.push(vertices[b-1]); 
    colors.push(vertexColors[c%8]); 
    points.push(vertices[c-1]);
    colors.push(vertexColors[a%8]); 
    points.push(vertices[a-1]); 
    colors.push(vertexColors[c%8]); 
    points.push(vertices[c-1]); 
    colors.push(vertexColors[d%8]); 
    points.push(vertices[d-1]); 

    var t1 = subtract(vertices[b-1], vertices[a-1]);
    var t2 = subtract(vertices[c-1], vertices[a-1]);
    var normal = normalize(cross(t2, t1));
    normal = vec4(normal);
    normalsArray.push(normal);
    normalsArray.push(normal);
    normalsArray.push(normal);
    t1 = subtract(vertices[c-1], vertices[a-1]);
    t2 = subtract(vertices[d-1], vertices[a-1]);
    normal = normalize(cross(t2, t1));
    normal = vec4(normal);
    normalsArray.push(normal);
    normalsArray.push(normal);
    normalsArray.push(normal);


    /* normalsArray.push(vec4(a[0],a[1], a[2], 0.0));
    normalsArray.push(vec4(b[0],b[1], b[2], 0.0));
    normalsArray.push(vec4(c[0],c[1], c[2], 0.0));
    normalsArray.push(vec4(a[0],a[1], a[2], 0.0));
    normalsArray.push(vec4(c[0],c[1], c[2], 0.0));
    normalsArray.push(vec4(d[0],d[1], d[2], 0.0)); */
}


function colorCube() {
    for(var i = 0; i < vertIndices.length; i = i + 4){
        quad( vertIndices[i], vertIndices[i+1], vertIndices[i+2], vertIndices[i+3] );
    }
}

//____________________________________________

// Remmove when scale in MV.js supports scale matrices

function scale4(a, b, c) {
   var result = mat4();
   result[0][0] = a;
   result[1][1] = b;
   result[2][2] = c;
   return result;
}


//--------------------------------------------------


window.onload = function init() {
    canvas = document.getElementById( "gl-canvas" );
    const upfile = document.getElementById("up-file");
    const chooseTXT = document.getElementById("txt");
    const selectBtn = document.getElementById("selectBtn");
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
    
    gl.viewport( 0, 0, canvas.width, canvas.height );
    
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    gl.enable( gl.DEPTH_TEST ); 
    
    //
    //  Load shaders and initialize attribute buffers
    //
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    
    gl.useProgram( program );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    modelViewMatrix = mat4();
    readObj("body_Plane.obj");
    colorCube();
 
    console.log(vertIndices.length + " and " + vertices.length);

    // Load shaders and use the resulting shader program
    
    program = initShaders( gl, "vertex-shader", "fragment-shader" );    
    gl.useProgram( program );
    
    // Create and initialize  buffer objects
    
    vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );
    
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    var nBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW );

    var vNormal = gl.getAttribLocation( program, "vNormal" );
    gl.vertexAttribPointer( vNormal, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vNormal);

    selectBtn.addEventListener("click", function(){
        upfile.click();
    });

    upfile.addEventListener("change", function(){
        if(upfile.value){
            chooseTXT.innerHTML = upfile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            chooseTXT.innerHTML = "No file chosen, yet.";
        }
    });

    document.getElementById("saveBtn").onclick = function () {
        var saveObj = [frames, modelViewMatrix, projectionMatrix, initMatrix, normalMatrix, stack, normalsArray];
        var data = JSON.stringify(saveObj);
        data = window.btoa(data);
        var blob = new Blob([data], {type: "text/plain"});
        var url = window.URL.createObjectURL(blob);
        var anchor = document.createElement("a");
        anchor.href = url;
        anchor.download="savedAnimation.txt";
        anchor.click();
        window.URL.revokeObjectURL(url);
    }

    document.getElementById("uplBtn").onclick = function () {
        if(animPlayed){
            frames = [];
            animPlayed = false;
        }
        var uploadedFile = document.getElementById('up-file').files[0];
        var reader = new FileReader();
        reader.onload = function() {
            var result = reader.result;
            result = window.atob(result);
            var arr = JSON.parse(result);
            frames = arr[0];
            modelViewMatrix = arr[1];
            projectionMatrix = arr[2];
            initMatrix = arr[3];
            normalMatrix = arr[4];
            stack = arr[5];
            normalArrays = arr[6];
            render();
        }
        reader.readAsText(uploadedFile);
    }

    /*document.getElementById("sliderDepth").onchange = function() {
        far = parseInt(event.srcElement.value);
        near = - parseInt(event.srcElement.value);
        console.log(far + " " + near);
    };*/
    document.getElementById("sliderTheta").onchange = function() {
        theta1 = event.srcElement.value * dr;
    };
    document.getElementById("sliderPhi").onchange = function() {
        phi = event.srcElement.value * dr;
    };
    /*document.getElementById("sliderRadius").onchange = function() {
        radius = event.srcElement.value;
    };*/
    document.getElementById("slider1").onchange = function() {
        theta[0] = event.srcElement.value;
        console.log("base: " + event.srcElement.value);
        initBase();
    };
    document.getElementById("slider47").onchange = function() {
        console.log("base Z Axis: " + event.srcElement.value);
        thetaY[5] =  event.srcElement.value;
        initBase();
    };
    document.getElementById("slider2").onchange = function() {
         theta[1] = event.srcElement.value -180;
         console.log("LEFTUPPERARM: " + event.srcElement.value);
         initLeftUpperArm();
    };
    document.getElementById("slider3").onchange = function() {
         theta[2] =  event.srcElement.value;
         console.log("LEFTLOWERARM: " + event.srcElement.value);
         initLeftLowerArm();
    };
    document.getElementById("slider4").onchange = function() {
        theta[3] =  event.srcElement.value;
        console.log("LEFTHAND: " + event.srcElement.value);
        initLeftHand();
   };
    document.getElementById("slider5").onchange = function() {
        theta[4] =  event.srcElement.value -180;
        console.log("RIGHTUPPERARM: " + event.srcElement.value);
        initRightUpperArm() ;
   };
   document.getElementById("slider6").onchange = function() {
        theta[5] =  event.srcElement.value;
        console.log("RIGHTLOWERARM: " + event.srcElement.value);
        initRightLowerArm();
    };
    document.getElementById("slider7").onchange = function() {
        theta[6] =  event.srcElement.value;
        console.log("RH: " + event.srcElement.value);
        initRightHand();
   };
    document.getElementById("slider8").onchange = function() {
        theta[7] = event.srcElement.value -180;
        console.log("LUL: " + event.srcElement.value);
        initLeftUpperLeg() ;
    };
    document.getElementById("slider9").onchange = function() {
        theta[8] =  event.srcElement.value;
        console.log("LLL: " + event.srcElement.value);
        initLeftLowerLeg();
    };
    document.getElementById("slider10").onchange = function() {
        theta[9] =  event.srcElement.value;
        console.log("LF: " + event.srcElement.value);
        initLeftFoot();
    };
    document.getElementById("slider11").onchange = function() {
        theta[10] =  event.srcElement.value -180;
        console.log("RUL: " + event.srcElement.value);
        initRightUpperLeg() ;
    };
    document.getElementById("slider12").onchange = function() {
        console.log("RLL: " + event.srcElement.value);
        theta[11] =  event.srcElement.value;
        initRightLowerLeg();
    };
    document.getElementById("slider13").onchange = function() {
        console.log("RF: " + event.srcElement.value);
        theta[12] =  event.srcElement.value;
        initRightFoot();
    };
    document.getElementById("slider14").onchange = function() {
        console.log("RN1: " + event.srcElement.value);
        theta[13] =  event.srcElement.value ;
        initRightNeck1();
    };
    document.getElementById("slider15").onchange = function() {
        console.log("RN2: " + event.srcElement.value);
        theta[14] =  event.srcElement.value ;
        initRightNeck2();
    };
    document.getElementById("slider16").onchange = function() {
        console.log("RN3: " + event.srcElement.value);
        theta[15] =  event.srcElement.value ;
        initRightNeck3();
    };
    document.getElementById("slider17").onchange = function() {
        console.log("RHEAD: " + event.srcElement.value);
        theta[16] =  event.srcElement.value;
        initRightHead();
    };
    document.getElementById("slider18").onchange = function() {
        console.log("MN1: " + event.srcElement.value);
        theta[17] = event.srcElement.value ;
        initMiddleNeck1();
    };
    document.getElementById("slider19").onchange = function() {
        console.log("MN2: " + event.srcElement.value);
        theta[18] = event.srcElement.value ;
        initMiddleNeck2();
    };
    document.getElementById("slider20").onchange = function() {
        console.log("MN3: " + event.srcElement.value);
        theta[19] = event.srcElement.value ;
        initMiddleNeck3();
    };
    document.getElementById("slider21").onchange = function() {
        console.log("MHEAD: " + event.srcElement.value);
        theta[20] =  event.srcElement.value;
        initMiddleHead();
    };
    document.getElementById("slider22").onchange = function() {
        console.log("LN1: " + event.srcElement.value);
        theta[21] =  event.srcElement.value ;
        initLeftNeck1();
    };
    document.getElementById("slider23").onchange = function() {
        console.log("LN2: " + event.srcElement.value);
        theta[22] =  event.srcElement.value ;
        initLeftNeck2();
    };
    document.getElementById("slider24").onchange = function() {
        console.log("LN3: " + event.srcElement.value);
        theta[23] =  event.srcElement.value ;
        initLeftNeck3();
    };
    document.getElementById("slider25").onchange = function() {
        console.log("LHEAD: " + event.srcElement.value);
        theta[24] =  event.srcElement.value;
        initLeftHead();
    };
    document.getElementById("slider26").onchange = function() {
        console.log("UT: " + event.srcElement.value);
        theta[25] =  event.srcElement.value ;
        initUpperTail();
    };
    document.getElementById("slider27").onchange = function() {
        console.log("LT: " + event.srcElement.value);
        theta[26] =  event.srcElement.value;
        initLowerTail();
    };
    document.getElementById("slider28").onchange = function() { //left
        console.log("X Rotation of Left Neck1:: " + event.srcElement.value);
        thetaX[2] =  event.srcElement.value;
        initLeftNeck1();
    };
    document.getElementById("slider29").onchange = function() { //middle
        console.log("X Rotation of Middle Neck1: " + event.srcElement.value);
        thetaX[1] =  event.srcElement.value;
        initMiddleNeck1();
    };
    document.getElementById("slider30").onchange = function() { //right
        console.log("X Rotation of Right Neck1: " + event.srcElement.value);
        thetaX[0] =  event.srcElement.value;
        initRightNeck1();
    };
    document.getElementById("slider31").onchange = function() { //left
        console.log("X Rotation of Left Head: " + event.srcElement.value);
        thetaX[3] =  event.srcElement.value;
        initLeftHead();
    };
    document.getElementById("slider32").onchange = function() { //middle
        console.log("X Rotation of Middle Head: " + event.srcElement.value);
        thetaX[4] =  event.srcElement.value;
        initMiddleHead();
    };
    document.getElementById("slider33").onchange = function() { //right
        console.log("X Rotation of Right Head: " + event.srcElement.value);
        thetaX[5] =  event.srcElement.value;
        initRightHead();
    };
    document.getElementById("slider34").onchange = function() { //left
        console.log("Y Rotation of Left Head: " + event.srcElement.value);
        thetaY[0] =  event.srcElement.value;
        initLeftHead();
    };
    document.getElementById("slider35").onchange = function() { //middle
        console.log("Y Rotation of Middle Head: " + event.srcElement.value);
        thetaY[1] =  event.srcElement.value;
        initMiddleHead();
    };
    document.getElementById("slider36").onchange = function() { //right
        console.log("Y Rotation of Right Head: " + event.srcElement.value);
        thetaY[2] =  event.srcElement.value;
        initRightHead();
    };
    document.getElementById("slider37").onchange = function() { //left
        console.log("X Rotation of Left Neck2: " + event.srcElement.value);
        thetaX[6] =  event.srcElement.value;
        initLeftNeck2();
    };
    document.getElementById("slider38").onchange = function() { //middle
        console.log("X Rotation of middle Neck2: " + event.srcElement.value);
        thetaX[7] =  event.srcElement.value;
        initMiddleNeck2();
    };
    document.getElementById("slider39").onchange = function() { //right
        console.log("X Rotation of right Neck2: " + event.srcElement.value);
        thetaX[8] =  event.srcElement.value;
        initRightNeck2();
    };
    document.getElementById("slider40").onchange = function() { //left
        console.log("X Rotation of Left Neck3: " + event.srcElement.value);
        thetaX[9] =  event.srcElement.value;
        initLeftNeck3();
    };
    document.getElementById("slider41").onchange = function() { //middle
        console.log("X Rotation of middle Neck3: " + event.srcElement.value);
        thetaX[10] =  event.srcElement.value;
        initMiddleNeck3();
    };
    document.getElementById("slider42").onchange = function() { //right
        console.log("X Rotation of right Neck3: " + event.srcElement.value);
        thetaX[11] =  event.srcElement.value;
        initRightNeck3();
    };
    /*document.getElementById("slider43").onchange = function() { //upper tail
        console.log("X Rotation of upper tail: " + event.srcElement.value);
        thetaX[12] =  event.srcElement.value;
        initUpperTail();
    };
    document.getElementById("slider44").onchange = function() { //lower tail
        console.log("X Rotation of lower tail: " + event.srcElement.value);
        thetaX[13] =  event.srcElement.value;
        initLowerTail();
    };*/
    document.getElementById("slider45").onchange = function() { //upper tail
        console.log("y Rotation of upper tail: " + event.srcElement.value);
        thetaY[3] =  event.srcElement.value;
        initUpperTail();
    };
    document.getElementById("slider46").onchange = function() { //lower tail
        console.log("y Rotation of lower tail: " + event.srcElement.value);
        thetaY[4] =  event.srcElement.value;
        initLowerTail();
    };
    document.getElementById("button1").onclick = function() { 
        if(animPlayed){
            frames = [];
            animPlayed = false;
        }
        frames.push([$.extend(true, [], theta), $.extend(true, [], thetaY), $.extend(true, [], thetaX)]);
        console.log("printing b: ",frames);
        if(frames.length > 1){
            divideFrames();
        }
    };
    document.getElementById("button2").onclick = function() { 
        play = true;
        playInd = 0;
    };
    document.getElementById("clearBtn").onclick = function() {
        frames = [];
    };
    document.getElementById("loopBtn").onclick = function() { 
        click = !click;
        console.log("Click state: ", click);
        if(click == false){
            document.getElementById("loopBtn").style.backgroundColor = '#7c837c';
            document.getElementById("loopBtn").style.borderColor = '#7c837c';
            if(anim1on){
                document.getElementById("animBtn1").style.backgroundColor = '#7c837c';
                document.getElementById("animBtn1").style.borderColor = '#7c837c';
                anim1on = false;
            }
            if(anim2on){
                document.getElementById("animBtn2").style.backgroundColor = '#7c837c';
                document.getElementById("animBtn2").style.borderColor = '#7c837c';
                anim2on = false;
            }
        }else{
            document.getElementById("loopBtn").style.backgroundColor = '#cccccc';
            document.getElementById("loopBtn").style.borderColor = '#00FF00';
        }
    };

    document.getElementById("animBtn1").onclick = function() { 
        if(anim2on){
            document.getElementById("animBtn2").style.backgroundColor = '#7c837c';
            document.getElementById("animBtn2").style.borderColor = '#7c837c';
            anim2on = false;
        }
        anim1on = !anim1on;
        if(anim1on == false){
            document.getElementById("animBtn1").style.backgroundColor = '#7c837c';
            document.getElementById("animBtn1").style.borderColor = '#7c837c';
            if(click == true)
                document.getElementById("loopBtn").click();
            animPlayed = true;
            return;
        }else{
            document.getElementById("animBtn1").style.backgroundColor = '#cccccc';                document.getElementById("animBtn1").style.borderColor = '#00FF00';
        }
        play = true;
        playInd = 0;
        if(click == false)
            document.getElementById("loopBtn").click();
        frames = [[["40",180,0,0,180,0,0,180,0,0,180,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-70,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[40,179.16666666666666,0.7666666666666667,0.9,179,0.7333333333333333,2.1333333333333333,180.16666666666666,0.4666666666666667,0.3333333333333333,180.23333333333332,0.6333333333333333,0.26666666666666666,0,0,0.5,0,0,0,-0.23333333333333334,0,0,0,0,0,-68.93333333333334,0.6],[0.4,-0.6,0,0,0,-0.6666666666666666],[-0.16666666666666666,-0.1,0.06666666666666667,0.5333333333333333,-0.3333333333333333,-0.7,0.16666666666666666,0,0,-0.13333333333333333,0.4,0,0,0]],[[40,177.5,2.3,2.7,177,2.2,6.4,180.5,1.4,1,180.7,1.9,0.8,0,0,1.5,0,0,0,-0.7,0,0,0,0,0,-66.8,1.8],[1.2,-1.8,0,0,0,-2],[-0.5,-0.3,0.2,1.6,-1,-2.1,0.5,0,0,-0.4,1.2,0,0,0]],[[40,175.83333333333334,3.8333333333333335,4.5,175,3.6666666666666665,10.666666666666666,180.83333333333334,2.3333333333333335,1.6666666666666667,181.16666666666666,3.1666666666666665,1.3333333333333333,0,0,2.5,0,0,0,-1.1666666666666667,0,0,0,0,0,-64.66666666666667,3],[2,-3,0,0,0,-3.3333333333333335],[-0.8333333333333334,-0.5,0.3333333333333333,2.6666666666666665,-1.6666666666666667,-3.5,0.8333333333333334,0,0,-0.6666666666666666,2,0,0,0]],[[40,174.16666666666666,5.366666666666666,6.3,173,5.133333333333334,14.933333333333334,181.16666666666666,3.2666666666666666,2.3333333333333335,181.63333333333333,4.433333333333334,1.8666666666666667,0,0,3.5,0,0,0,-1.6333333333333333,0,0,0,0,0,-62.53333333333333,4.2],[2.8,-4.2,0,0,0,-4.666666666666667],[-1.1666666666666667,-0.7,0.4666666666666667,3.7333333333333334,-2.3333333333333335,-4.9,1.1666666666666667,0,0,-0.9333333333333333,2.8,0,0,0]],[[40,172.5,6.9,8.1,171,6.6,19.2,181.5,4.2,3,182.1,5.7,2.4,0,0,4.5,0,0,0,-2.1,0,0,0,0,0,-60.4,5.4],[3.6,-5.4,0,0,0,-6],[-1.5,-0.9,0.6,4.8,-3,-6.3,1.5,0,0,-1.2,3.6,0,0,0]],[[40,170.83333333333334,8.433333333333334,9.9,169,8.066666666666666,23.466666666666665,181.83333333333334,5.133333333333334,3.6666666666666665,182.56666666666666,6.966666666666667,2.933333333333333,0,0,5.5,0,0,0,-2.566666666666667,0,0,0,0,0,-58.266666666666666,6.6],[4.4,-6.6,0,0,0,-7.333333333333333],[-1.8333333333333333,-1.1,0.7333333333333333,5.866666666666666,-3.6666666666666665,-7.7,1.8333333333333333,0,0,-1.4666666666666666,4.4,0,0,0]],[[40,169.16666666666666,9.966666666666667,11.7,167,9.533333333333333,27.733333333333334,182.16666666666666,6.066666666666666,4.333333333333333,183.03333333333333,8.233333333333333,3.466666666666667,0,0,6.5,0,0,0,-3.033333333333333,0,0,0,0,0,-56.13333333333333,7.8],[5.2,-7.8,0,0,0,-8.666666666666666],[-2.1666666666666665,-1.3,0.8666666666666667,6.933333333333334,-4.333333333333333,-9.1,2.1666666666666665,0,0,-1.7333333333333334,5.2,0,0,0]],[[40,167.5,11.5,13.5,165,11,32,182.5,7,5,183.5,9.5,4,0,0,7.5,0,0,0,-3.5,0,0,0,0,0,-54,9],[6,-9,0,0,0,-10],[-2.5,-1.5,1,8,-5,-10.5,2.5,0,0,-2,6,0,0,0]],[[40,165.83333333333334,13.033333333333333,15.3,163,12.466666666666667,36.266666666666666,182.83333333333334,7.933333333333334,5.666666666666667,183.96666666666667,10.766666666666667,4.533333333333333,0,0,8.5,0,0,0,-3.966666666666667,0,0,0,0,0,-51.86666666666667,10.2],[6.8,-10.2,0,0,0,-11.333333333333334],[-2.8333333333333335,-1.7,1.1333333333333333,9.066666666666666,-5.666666666666667,-11.9,2.8333333333333335,0,0,-2.2666666666666666,6.8,0,0,0]],[[40,164.16666666666666,14.566666666666666,17.1,161,13.933333333333334,40.53333333333333,183.16666666666666,8.866666666666667,6.333333333333333,184.43333333333334,12.033333333333333,5.066666666666666,0,0,9.5,0,0,0,-4.433333333333334,0,0,0,0,0,-49.733333333333334,11.4],[7.6,-11.4,0,0,0,-12.666666666666666],[-3.1666666666666665,-1.9,1.2666666666666666,10.133333333333333,-6.333333333333333,-13.3,3.1666666666666665,0,0,-2.533333333333333,7.6,0,0,0]],[[40,162.5,16.1,18.9,159,15.4,44.8,183.5,9.8,7,184.9,13.3,5.6,0,0,10.5,0,0,0,-4.9,0,0,0,0,0,-47.6,12.6],[8.4,-12.6,0,0,0,-14],[-3.5,-2.1,1.4,11.2,-7,-14.7,3.5,0,0,-2.8,8.4,0,0,0]],[[40,160.83333333333334,17.633333333333333,20.7,157,16.866666666666667,49.06666666666667,183.83333333333334,10.733333333333333,7.666666666666667,185.36666666666667,14.566666666666666,6.133333333333334,0,0,11.5,0,0,0,-5.366666666666666,0,0,0,0,0,-45.46666666666667,13.8],[9.2,-13.8,0,0,0,-15.333333333333334],[-3.8333333333333335,-2.3,1.5333333333333334,12.266666666666667,-7.666666666666667,-16.1,3.8333333333333335,0,0,-3.066666666666667,9.2,0,0,0]],[[40,159.16666666666666,19.166666666666668,22.5,155,18.333333333333332,53.333333333333336,184.16666666666666,11.666666666666666,8.333333333333334,185.83333333333334,15.833333333333334,6.666666666666667,0,0,12.5,0,0,0,-5.833333333333333,0,0,0,0,0,-43.33333333333333,15],[10,-15,0,0,0,-16.666666666666668],[-4.166666666666667,-2.5,1.6666666666666667,13.333333333333334,-8.333333333333334,-17.5,4.166666666666667,0,0,-3.3333333333333335,10,0,0,0]],[[40,157.5,20.7,24.3,153,19.8,57.6,184.5,12.6,9,186.3,17.1,7.2,0,0,13.5,0,0,0,-6.3,0,0,0,0,0,-41.2,16.2],[10.8,-16.2,0,0,0,-18],[-4.5,-2.7,1.8,14.4,-9,-18.9,4.5,0,0,-3.6,10.8,0,0,0]],[[40,155.83333333333334,22.233333333333334,26.1,151,21.266666666666666,61.86666666666667,184.83333333333334,13.533333333333333,9.666666666666666,186.76666666666668,18.366666666666667,7.733333333333333,0,0,14.5,0,0,0,-6.766666666666667,0,0,0,0,0,-39.06666666666666,17.4],[11.6,-17.4,0,0,0,-19.333333333333332],[-4.833333333333333,-2.9,1.9333333333333333,15.466666666666667,-9.666666666666666,-20.3,4.833333333333333,0,0,-3.8666666666666667,11.6,0,0,0]],[["40",-205,"23","27",-210,"22","64",-175,"14","10",-173,"19","8","0",0,"15",0,0,0,"-7",0,0,0,0,0,"-38","18"],["12","-18",0,0,0,"-20"],["-5","-3","2","16","-10","-21","5",0,0,"-4","12",0,0,0]],[[40,-204.83673469387756,23.244897959183675,26,-210.14285714285714,21.79591836734694,64.12244897959184,-175,14,10,-173,19,8,0,0,15.53061224489796,0,0,0,-6.020408163265306,0,0,0,0,0.02040816326530612,-37.63265306122449,18.040816326530614],[12.326530612244898,-18.142857142857142,0,-0.40816326530612246,-0.8163265306122449,-20.20408163265306],[-5,-3.142857142857143,2,16,-10.061224489795919,-21,5,-0.02040816326530612,0,-4,12,0,0,0]],[[40,-204.51020408163265,23.73469387755102,24,-210.42857142857142,21.387755102040817,64.36734693877551,-175,14,10,-173,19,8,0,0,16.591836734693878,0,0,0,-4.061224489795919,0,0,0,0,0.061224489795918366,-36.89795918367347,18.122448979591837],[12.979591836734693,-18.428571428571427,0,-1.2244897959183674,-2.4489795918367347,-20.612244897959183],[-5,-3.4285714285714284,2,16,-10.183673469387756,-21,5,-0.061224489795918366,0,-4,12,0,0,0]],[[40,-204.18367346938774,24.224489795918366,22,-210.71428571428572,20.979591836734695,64.61224489795919,-175,14,10,-173,19,8,0,0,17.653061224489797,0,0,0,-2.1020408163265305,0,0,0,0,0.10204081632653061,-36.16326530612245,18.20408163265306],[13.63265306122449,-18.714285714285715,0,-2.0408163265306123,-4.081632653061225,-21.020408163265305],[-5,-3.7142857142857144,2,16,-10.306122448979592,-21,5,-0.10204081632653061,0,-4,12,0,0,0]],[[40,-203.85714285714286,24.714285714285715,20,-211,20.571428571428573,64.85714285714286,-175,14,10,-173,19,8,0,0,18.714285714285715,0,0,0,-0.14285714285714324,0,0,0,0,0.14285714285714285,-35.42857142857143,18.285714285714285],[14.285714285714285,-19,0,-2.857142857142857,-5.714285714285714,-21.428571428571427],[-5,-4,2,16,-10.428571428571429,-21,5,-0.14285714285714285,0,-4,12,0,0,0]],[[40,-203.53061224489795,25.20408163265306,18,-211.28571428571428,20.163265306122447,65.10204081632654,-175,14,10,-173,19,8,0,0,19.775510204081634,0,0,0,1.816326530612244,0,0,0,0,0.1836734693877551,-34.69387755102041,18.367346938775512],[14.938775510204081,-19.285714285714285,0,-3.673469387755102,-7.346938775510204,-21.836734693877553],[-5,-4.285714285714286,2,16,-10.551020408163264,-21,5,-0.1836734693877551,0,-4,12,0,0,0]],[[40,-203.20408163265307,25.693877551020407,16,-211.57142857142858,19.755102040816325,65.34693877551021,-175,14,10,-173,19,8,0,0,20.836734693877553,0,0,0,3.775510204081632,0,0,0,0,0.22448979591836735,-33.95918367346939,18.448979591836736],[15.591836734693878,-19.571428571428573,0,-4.489795918367347,-8.979591836734693,-22.244897959183675],[-5,-4.571428571428571,2,16,-10.673469387755102,-21,5,-0.22448979591836735,0,-4,12,0,0,0]],[[40,-202.87755102040816,26.183673469387756,14,-211.85714285714286,19.346938775510203,65.59183673469387,-175,14,10,-173,19,8,0,0,21.89795918367347,0,0,0,5.73469387755102,0,0,0,0,0.2653061224489796,-33.224489795918366,18.53061224489796],[16.244897959183675,-19.857142857142858,0,-5.3061224489795915,-10.612244897959183,-22.653061224489797],[-5,-4.857142857142858,2,16,-10.795918367346939,-21,5,-0.2653061224489796,0,-4,12,0,0,0]],[[40,-202.55102040816325,26.6734693877551,12,-212.14285714285714,18.93877551020408,65.83673469387755,-175,14,10,-173,19,8,0,0,22.95918367346939,0,0,0,7.6938775510204085,0,0,0,0,0.30612244897959184,-32.48979591836735,18.612244897959183],[16.89795918367347,-20.142857142857142,0,-6.122448979591836,-12.244897959183673,-23.06122448979592],[-5,-5.142857142857142,2,16,-10.918367346938776,-21,5,-0.30612244897959184,0,-4,12,0,0,0]],[[40,-202.22448979591837,27.163265306122447,10,-212.42857142857142,18.53061224489796,66.08163265306122,-175,14,10,-173,19,8,0,0,24.02040816326531,0,0,0,9.653061224489797,0,0,0,0,0.3469387755102041,-31.755102040816325,18.693877551020407],[17.551020408163264,-20.428571428571427,0,-6.938775510204081,-13.877551020408163,-23.46938775510204],[-5,-5.428571428571429,2,16,-11.040816326530612,-21,5,-0.3469387755102041,0,-4,12,0,0,0]],[[40,-201.89795918367346,27.653061224489797,8,-212.71428571428572,18.122448979591837,66.3265306122449,-175,14,10,-173,19,8,0,0,25.081632653061224,0,0,0,11.612244897959183,0,0,0,0,0.3877551020408163,-31.020408163265305,18.775510204081634],[18.20408163265306,-20.714285714285715,0,-7.755102040816326,-15.510204081632653,-23.877551020408163],[-5,-5.714285714285714,2,16,-11.16326530612245,-21,5,-0.3877551020408163,0,-4,12,0,0,0]],[[40,-201.57142857142858,28.142857142857142,6,-213,17.714285714285715,66.57142857142857,-175,14,10,-173,19,8,0,0,26.142857142857142,0,0,0,13.571428571428573,0,0,0,0,0.42857142857142855,-30.285714285714285,18.857142857142858],[18.857142857142858,-21,0,-8.571428571428571,-17.142857142857142,-24.285714285714285],[-5,-6,2,16,-11.285714285714286,-21,5,-0.42857142857142855,0,-4,12,0,0,0]],[[40,-201.24489795918367,28.632653061224488,4,-213.28571428571428,17.306122448979593,66.81632653061224,-175,14,10,-173,19,8,0,0,27.20408163265306,0,0,0,15.53061224489796,0,0,0,0,0.46938775510204084,-29.551020408163268,18.93877551020408],[19.510204081632654,-21.285714285714285,0,-9.387755102040817,-18.775510204081634,-24.693877551020407],[-5,-6.285714285714286,2,16,-11.408163265306122,-21,5,-0.46938775510204084,0,-4,12,0,0,0]],[[40,-200.91836734693877,29.122448979591837,2,-213.57142857142858,16.89795918367347,67.06122448979592,-175,14,10,-173,19,8,0,0,28.26530612244898,0,0,0,17.489795918367346,0,0,0,0,0.5102040816326531,-28.816326530612244,19.020408163265305],[20.163265306122447,-21.571428571428573,0,-10.204081632653061,-20.408163265306122,-25.10204081632653],[-5,-6.571428571428571,2,16,-11.53061224489796,-21,5,-0.5102040816326531,0,-4,12,0,0,0]],[[40,-200.59183673469389,29.612244897959183,0,-213.85714285714286,16.489795918367346,67.3061224489796,-175,14,10,-173,19,8,0,0,29.3265306122449,0,0,0,19.448979591836736,0,0,0,0,0.5510204081632653,-28.081632653061224,19.10204081632653],[20.816326530612244,-21.857142857142858,0,-11.020408163265307,-22.040816326530614,-25.510204081632654],[-5,-6.857142857142858,2,16,-11.653061224489797,-21,5,-0.5510204081632653,0,-4,12,0,0,0]],[[40,-200.26530612244898,30.10204081632653,-2,-214.14285714285714,16.081632653061224,67.55102040816327,-175,14,10,-173,19,8,0,0,30.387755102040817,0,0,0,21.408163265306122,0,0,0,0,0.5918367346938775,-27.346938775510203,19.183673469387756],[21.46938775510204,-22.142857142857142,0,-11.83673469387755,-23.6734693877551,-25.918367346938776],[-5,-7.142857142857143,2,16,-11.775510204081632,-21,5,-0.5918367346938775,0,-4,12,0,0,0]],[[40,-199.9387755102041,30.591836734693878,-4,-214.42857142857142,15.673469387755102,67.79591836734694,-175,14,10,-173,19,8,0,0,31.448979591836736,0,0,0,23.367346938775512,0,0,0,0,0.6326530612244898,-26.612244897959183,19.26530612244898],[22.122448979591837,-22.42857142857143,0,-12.653061224489797,-25.306122448979593,-26.3265306122449],[-5,-7.428571428571429,2,16,-11.89795918367347,-21,5,-0.6326530612244898,0,-4,12,0,0,0]],[[40,-199.6122448979592,31.081632653061224,-6,-214.71428571428572,15.26530612244898,68.04081632653062,-175,14,10,-173,19,8,0,0,32.51020408163265,0,0,0,25.326530612244895,0,0,0,0,0.673469387755102,-25.877551020408163,19.346938775510203],[22.775510204081634,-22.714285714285715,0,-13.46938775510204,-26.93877551020408,-26.73469387755102],[-5,-7.714285714285714,2,16,-12.020408163265305,-21,5,-0.673469387755102,0,-4,12,0,0,0]],[[40,-199.28571428571428,31.57142857142857,-8,-215,14.857142857142858,68.28571428571429,-175,14,10,-173,19,8,0,0,33.57142857142857,0,0,0,27.285714285714285,0,0,0,0,0.7142857142857143,-25.142857142857142,19.428571428571427],[23.42857142857143,-23,0,-14.285714285714286,-28.571428571428573,-27.142857142857142],[-5,-8,2,16,-12.142857142857142,-21,5,-0.7142857142857143,0,-4,12,0,0,0]],[[40,-198.9591836734694,32.06122448979592,-10,-215.28571428571428,14.448979591836736,68.53061224489795,-175,14,10,-173,19,8,0,0,34.63265306122449,0,0,0,29.244897959183675,0,0,0,0,0.7551020408163265,-24.408163265306122,19.510204081632654],[24.081632653061224,-23.285714285714285,0,-15.10204081632653,-30.20408163265306,-27.551020408163264],[-5,-8.285714285714285,2,16,-12.26530612244898,-21,5,-0.7551020408163265,0,-4,12,0,0,0]],[[40,-198.6326530612245,32.55102040816327,-12,-215.57142857142858,14.040816326530612,68.77551020408163,-175,14,10,-173,19,8,0,0,35.69387755102041,0,0,0,31.204081632653065,0,0,0,0,0.7959183673469388,-23.6734693877551,19.591836734693878],[24.73469387755102,-23.57142857142857,0,-15.918367346938776,-31.836734693877553,-27.95918367346939],[-5,-8.571428571428571,2,16,-12.387755102040817,-21,5,-0.7959183673469388,0,-4,12,0,0,0]],[[40,-198.30612244897958,33.04081632653061,-14,-215.85714285714286,13.63265306122449,69.0204081632653,-175,14,10,-173,19,8,0,0,36.755102040816325,0,0,0,33.16326530612245,0,0,0,0,0.8367346938775511,-22.93877551020408,19.6734693877551],[25.387755102040817,-23.857142857142858,0,-16.73469387755102,-33.46938775510204,-28.367346938775512],[-5,-8.857142857142858,2,16,-12.510204081632653,-21,5,-0.8367346938775511,0,-4,12,0,0,0]],[[40,-197.9795918367347,33.53061224489796,-16,-216.14285714285714,13.224489795918368,69.26530612244898,-175,14,10,-173,19,8,0,0,37.816326530612244,0,0,0,35.12244897959184,0,0,0,0,0.8775510204081632,-22.20408163265306,19.755102040816325],[26.04081632653061,-24.142857142857142,0,-17.551020408163264,-35.10204081632653,-28.775510204081634],[-5,-9.142857142857142,2,16,-12.63265306122449,-21,5,-0.8775510204081632,0,-4,12,0,0,0]],[[40,-197.6530612244898,34.02040816326531,-18,-216.42857142857142,12.816326530612244,69.51020408163265,-175,14,10,-173,19,8,0,0,38.87755102040816,0,0,0,37.08163265306123,0,0,0,0,0.9183673469387755,-21.46938775510204,19.836734693877553],[26.693877551020407,-24.42857142857143,0,-18.367346938775512,-36.734693877551024,-29.183673469387756],[-5,-9.428571428571429,2,16,-12.755102040816327,-21,5,-0.9183673469387755,0,-4,12,0,0,0]],[[40,-197.3265306122449,34.51020408163265,-20,-216.71428571428572,12.408163265306122,69.75510204081633,-175,14,10,-173,19,8,0,0,39.93877551020408,0,0,0,39.04081632653061,0,0,0,0,0.9591836734693877,-20.73469387755102,19.918367346938776],[27.346938775510203,-24.714285714285715,0,-19.183673469387756,-38.36734693877551,-29.591836734693878],[-5,-9.714285714285715,2,16,-12.877551020408163,-21,5,-0.9591836734693877,0,-4,12,0,0,0]],[["40",-197,"35","-22",-217,"12","70",-175,"14","10",-173,"19","8","0",0,"41",0,0,0,"41",0,0,0,0,"1","-20","20"],["28","-25",0,"-20","-40","-30"],["-5","-10","2","16","-13","-21","5","-1",0,"-4","12",0,0,0]],[[40,-197,35,-21.118181818181817,-217,12,69,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[27.71818181818182,-24.754545454545454,-0.14545454545454545,-19.645454545454545,-39.29090909090909,-30],[-5.072727272727272,-9.936363636363636,1.990909090909091,15.718181818181819,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-19.354545454545455,-217,12,67,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[27.154545454545456,-24.263636363636365,-0.43636363636363634,-18.936363636363637,-37.872727272727275,-30],[-5.218181818181818,-9.809090909090909,1.9727272727272727,15.154545454545454,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-17.59090909090909,-217,12,65,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[26.59090909090909,-23.772727272727273,-0.7272727272727273,-18.227272727272727,-36.45454545454545,-30],[-5.363636363636363,-9.681818181818182,1.9545454545454546,14.59090909090909,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-15.827272727272728,-217,12,63,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[26.027272727272727,-23.28181818181818,-1.018181818181818,-17.51818181818182,-35.03636363636364,-30],[-5.509090909090909,-9.554545454545455,1.9363636363636363,14.027272727272727,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-14.063636363636363,-217,12,61,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[25.463636363636365,-22.79090909090909,-1.309090909090909,-16.80909090909091,-33.61818181818182,-30],[-5.654545454545454,-9.427272727272728,1.9181818181818182,13.463636363636365,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-12.3,-217,12,59,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[24.9,-22.3,-1.6,-16.1,-32.2,-30],[-5.8,-9.3,1.9,12.9,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-10.536363636363637,-217,12,57,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[24.336363636363636,-21.80909090909091,-1.8909090909090909,-15.39090909090909,-30.78181818181818,-30],[-5.945454545454545,-9.172727272727272,1.8818181818181818,12.336363636363636,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-8.772727272727273,-217,12,55,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[23.772727272727273,-21.31818181818182,-2.1818181818181817,-14.681818181818182,-29.363636363636363,-30],[-6.090909090909091,-9.045454545454545,1.8636363636363638,11.772727272727273,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-7.00909090909091,-217,12,53,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[23.20909090909091,-20.827272727272728,-2.4727272727272727,-13.972727272727273,-27.945454545454545,-30],[-6.236363636363636,-8.918181818181818,1.8454545454545455,11.209090909090909,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-5.245454545454546,-217,12,51,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[22.645454545454545,-20.336363636363636,-2.7636363636363637,-13.263636363636364,-26.527272727272727,-30],[-6.381818181818182,-8.790909090909091,1.8272727272727272,10.645454545454545,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-3.4818181818181806,-217,12,49,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[22.081818181818182,-19.845454545454544,-3.0545454545454547,-12.554545454545455,-25.10909090909091,-30],[-6.527272727272727,-8.663636363636364,1.809090909090909,10.081818181818182,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-1.7181818181818187,-217,12,47,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[21.51818181818182,-19.354545454545455,-3.3454545454545452,-11.845454545454546,-23.69090909090909,-30],[-6.672727272727273,-8.536363636363637,1.790909090909091,9.51818181818182,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,0.045454545454546746,-217,12,45,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[20.954545454545453,-18.863636363636363,-3.6363636363636362,-11.136363636363637,-22.272727272727273,-30],[-6.818181818181818,-8.40909090909091,1.7727272727272727,8.954545454545453,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,1.8090909090909086,-217,12,43,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[20.39090909090909,-18.372727272727275,-3.9272727272727272,-10.427272727272728,-20.854545454545455,-30],[-6.963636363636364,-8.281818181818181,1.7545454545454546,8.39090909090909,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,3.572727272727274,-217,12,41,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[19.827272727272728,-17.881818181818183,-4.218181818181818,-9.718181818181819,-19.436363636363637,-30],[-7.109090909090909,-8.154545454545454,1.7363636363636363,7.827272727272728,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,5.336363636363636,-217,12,39,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[19.263636363636365,-17.39090909090909,-4.509090909090909,-9.00909090909091,-18.01818181818182,-30],[-7.254545454545454,-8.027272727272727,1.7181818181818183,7.263636363636364,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,7.100000000000001,-217,12,37,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[18.7,-16.9,-4.8,-8.3,-16.6,-30],[-7.4,-7.9,1.7,6.699999999999999,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,8.863636363636363,-217,12,35,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[18.136363636363637,-16.409090909090907,-5.090909090909091,-7.590909090909092,-15.181818181818183,-30],[-7.545454545454545,-7.772727272727273,1.6818181818181819,6.136363636363637,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,10.627272727272725,-217,12,33,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[17.57272727272727,-15.918181818181818,-5.381818181818182,-6.881818181818181,-13.763636363636362,-30],[-7.690909090909091,-7.6454545454545455,1.6636363636363636,5.572727272727272,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,12.39090909090909,-217,12,31,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[17.009090909090908,-15.427272727272728,-5.672727272727273,-6.172727272727272,-12.345454545454544,-30],[-7.836363636363636,-7.518181818181818,1.6454545454545455,5.00909090909091,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,14.154545454545456,-217,12,29,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[16.445454545454545,-14.936363636363636,-5.963636363636364,-5.463636363636363,-10.927272727272726,-30],[-7.981818181818182,-7.390909090909091,1.6272727272727272,4.445454545454545,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,15.918181818181822,-217,12,27,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[15.881818181818181,-14.445454545454545,-6.254545454545455,-4.754545454545454,-9.509090909090908,-30],[-8.127272727272727,-7.263636363636364,1.6090909090909091,3.881818181818181,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,17.68181818181818,-217,12,25,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[15.318181818181818,-13.954545454545455,-6.545454545454546,-4.045454545454545,-8.09090909090909,-30],[-8.272727272727273,-7.136363636363637,1.5909090909090908,3.3181818181818183,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,19.445454545454545,-217,12,23,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[14.754545454545454,-13.463636363636363,-6.836363636363636,-3.336363636363636,-6.672727272727272,-30],[-8.418181818181818,-7.00909090909091,1.5727272727272728,2.754545454545454,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,21.20909090909091,-217,12,21,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[14.190909090909091,-12.972727272727273,-7.127272727272727,-2.6272727272727288,-5.2545454545454575,-30],[-8.563636363636363,-6.881818181818182,1.5545454545454547,2.1909090909090914,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,22.972727272727276,-217,12,19,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[13.627272727272727,-12.481818181818182,-7.418181818181818,-1.918181818181818,-3.836363636363636,-30],[-8.709090909090909,-6.754545454545454,1.5363636363636364,1.627272727272727,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,24.736363636363635,-217,12,17,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[13.063636363636364,-11.99090909090909,-7.709090909090909,-1.2090909090909108,-2.4181818181818215,-30],[-8.854545454545455,-6.627272727272727,1.518181818181818,1.0636363636363644,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,26.5,-217,12,15,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[12.5,-11.5,-8,-0.5,-1,-30],[-9,-6.5,1.5,0.5,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,28.263636363636365,-217,12,13,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[11.936363636363637,-11.00909090909091,-8.290909090909091,0.20909090909091077,0.41818181818182154,-30],[-9.145454545454545,-6.372727272727273,1.481818181818182,-0.0636363636363626,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,30.027272727272724,-217,12,11,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[11.372727272727271,-10.518181818181818,-8.581818181818182,0.918181818181818,1.836363636363636,-30],[-9.290909090909091,-6.245454545454546,1.4636363636363636,-0.6272727272727288,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,31.79090909090909,-217,12,9,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[10.809090909090909,-10.027272727272727,-8.872727272727273,1.6272727272727288,3.2545454545454575,-30],[-9.436363636363637,-6.118181818181818,1.4454545454545453,-1.1909090909090914,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,33.554545454545455,-217,12,7,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[10.245454545454546,-9.536363636363637,-9.163636363636364,2.336363636363636,4.672727272727272,-30],[-9.581818181818182,-5.990909090909091,1.4272727272727272,-1.754545454545454,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,35.31818181818182,-217,12,5,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[9.681818181818183,-9.045454545454545,-9.454545454545455,3.0454545454545467,6.0909090909090935,-30],[-9.727272727272727,-5.863636363636363,1.4090909090909092,-2.3181818181818166,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,37.08181818181818,-217,12,3,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[9.118181818181817,-8.554545454545455,-9.745454545454546,3.754545454545454,7.509090909090908,-30],[-9.872727272727273,-5.736363636363636,1.3909090909090909,-2.8818181818181827,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,38.845454545454544,-217,12,1,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[8.554545454545455,-8.063636363636363,-10.036363636363637,4.463636363636365,8.92727272727273,-30],[-10.01818181818182,-5.609090909090909,1.3727272727272726,-3.4454545454545453,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,40.60909090909091,-217,12,-1,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[7.990909090909092,-7.572727272727274,-10.327272727272728,5.172727272727272,10.345454545454544,-30],[-10.163636363636364,-5.4818181818181815,1.3545454545454545,-4.009090909090908,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,42.372727272727275,-217,12,-3,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[7.427272727272726,-7.081818181818182,-10.618181818181819,5.881818181818183,11.763636363636365,-30],[-10.309090909090909,-5.3545454545454545,1.3363636363636364,-4.572727272727274,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,44.13636363636364,-217,12,-5,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[6.863636363636363,-6.59090909090909,-10.909090909090908,6.59090909090909,13.18181818181818,-30],[-10.454545454545453,-5.2272727272727275,1.3181818181818183,-5.136363636363637,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,45.900000000000006,-217,12,-7,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[6.300000000000001,-6.100000000000001,-11.2,7.300000000000001,14.600000000000001,-30],[-10.6,-5.1,1.3,-5.699999999999999,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,47.66363636363636,-217,12,-9,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[5.736363636363638,-5.609090909090909,-11.49090909090909,8.009090909090908,16.018181818181816,-30],[-10.745454545454546,-4.972727272727273,1.2818181818181817,-6.263636363636362,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,49.42727272727272,-217,12,-11,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[5.172727272727272,-5.118181818181817,-11.781818181818181,8.718181818181819,17.436363636363637,-30],[-10.89090909090909,-4.845454545454546,1.2636363636363637,-6.827272727272728,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,51.19090909090909,-217,12,-13,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[4.609090909090909,-4.627272727272729,-12.072727272727272,9.427272727272726,18.854545454545452,-30],[-11.036363636363635,-4.718181818181818,1.2454545454545456,-7.390909090909091,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,52.95454545454545,-217,12,-15,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[4.045454545454547,-4.136363636363637,-12.363636363636363,10.136363636363637,20.272727272727273,-30],[-11.181818181818182,-4.590909090909091,1.2272727272727273,-7.954545454545453,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,54.71818181818182,-217,12,-17,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[3.4818181818181806,-3.6454545454545446,-12.654545454545454,10.845454545454544,21.690909090909088,-30],[-11.327272727272728,-4.463636363636364,1.209090909090909,-8.51818181818182,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,56.481818181818184,-217,12,-19,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[2.918181818181818,-3.154545454545456,-12.945454545454545,11.554545454545455,23.10909090909091,-30],[-11.472727272727273,-4.336363636363636,1.190909090909091,-9.081818181818182,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,58.24545454545455,-217,12,-21,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[2.3545454545454554,-2.663636363636364,-13.236363636363636,12.263636363636365,24.52727272727273,-30],[-11.618181818181817,-4.209090909090909,1.1727272727272728,-9.645454545454545,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,60.009090909090915,-217,12,-23,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[1.7909090909090892,-2.172727272727272,-13.527272727272727,12.972727272727276,25.945454545454552,-30],[-11.763636363636364,-4.081818181818182,1.1545454545454545,-10.20909090909091,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,61.772727272727266,-217,12,-25,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[1.2272727272727266,-1.6818181818181834,-13.818181818181818,13.68181818181818,27.36363636363636,-30],[-11.90909090909091,-3.954545454545454,1.1363636363636362,-10.772727272727273,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,63.53636363636363,-217,12,-27,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[0.663636363636364,-1.1909090909090914,-14.10909090909091,14.39090909090909,28.78181818181818,-30],[-12.054545454545455,-3.827272727272727,1.1181818181818182,-11.336363636363636,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,65.3,-217,12,-29,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[0.10000000000000142,-0.6999999999999993,-14.4,15.100000000000001,30.200000000000003,-30],[-12.2,-3.7,1.1,-11.899999999999999,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,67.06363636363636,-217,12,-31,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-0.46363636363636473,-0.20909090909091077,-14.690909090909091,15.809090909090912,31.618181818181824,-30],[-12.345454545454546,-3.5727272727272723,1.0818181818181818,-12.463636363636365,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,68.82727272727273,-217,12,-33,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-1.0272727272727273,0.2818181818181813,-14.981818181818182,16.518181818181816,33.03636363636363,-30],[-12.490909090909092,-3.4454545454545453,1.0636363636363635,-13.027272727272727,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,70.5909090909091,-217,12,-35,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-1.59090909090909,0.7727272727272734,-15.272727272727273,17.227272727272727,34.45454545454545,-30],[-12.636363636363637,-3.3181818181818183,1.0454545454545454,-13.59090909090909,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,72.35454545454546,-217,12,-37,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-2.154545454545456,1.263636363636362,-15.563636363636364,17.936363636363637,35.872727272727275,-30],[-12.781818181818181,-3.1909090909090905,1.0272727272727273,-14.154545454545456,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,74.11818181818182,-217,12,-39,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-2.7181818181818187,1.754545454545454,-15.854545454545455,18.645454545454548,37.290909090909096,-30],[-12.927272727272728,-3.0636363636363635,1.009090909090909,-14.718181818181819,-13,-21,5,-1,0,-4,12,0,0,0]],[["40",-197,"35","75",-217,"12","-40",-175,"14","10",-173,"19","8","0",0,"41",0,0,0,"41",0,0,0,0,"1","-20","20"],["-3","2","-16","19","38","-30"],["-13","-3","1","-15","-13","-21","5","-1",0,"-4","12",0,0,0]],[[40,-197,35,74,-217,12.252173913043478,-39,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-2.6956521739130435,1.8434782608695652,-15.826086956521738,18.660869565217393,37.321739130434786,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,72,-217,12.756521739130434,-37,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-2.0869565217391304,1.5304347826086957,-15.478260869565217,17.982608695652175,35.96521739130435,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,70,-217,13.26086956521739,-35,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-1.4782608695652173,1.2173913043478262,-15.130434782608695,17.304347826086957,34.608695652173914,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,68,-217,13.765217391304347,-33,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-0.8695652173913042,0.9043478260869566,-14.782608695652174,16.62608695652174,33.25217391304348,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,66,-217,14.269565217391305,-31,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[-0.26086956521739113,0.5913043478260869,-14.434782608695652,15.947826086956521,31.895652173913042,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,64,-217,14.773913043478261,-29,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[0.34782608695652195,0.27826086956521734,-14.08695652173913,15.269565217391305,30.53913043478261,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,62,-217,15.278260869565218,-27,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[0.9565217391304346,-0.03478260869565197,-13.73913043478261,14.591304347826087,29.182608695652174,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,60,-217,15.782608695652174,-25,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[1.5652173913043477,-0.34782608695652195,-13.391304347826086,13.91304347826087,27.82608695652174,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,58,-217,16.28695652173913,-23,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[2.1739130434782608,-0.6608695652173915,-13.043478260869566,13.234782608695653,26.469565217391306,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,56,-217,16.791304347826088,-21,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[2.782608695652174,-0.973913043478261,-12.695652173913043,12.556521739130435,25.11304347826087,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,54,-217,17.295652173913044,-19,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[3.391304347826087,-1.2869565217391306,-12.347826086956522,11.878260869565217,23.756521739130434,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,52,-217,17.8,-17,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[4,-1.6,-12,11.2,22.4,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,50,-217,18.304347826086957,-15,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[4.608695652173913,-1.9130434782608696,-11.652173913043478,10.521739130434783,21.043478260869566,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,48,-217,18.808695652173913,-13,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[5.217391304347826,-2.2260869565217387,-11.304347826086957,9.843478260869565,19.68695652173913,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,46,-217,19.31304347826087,-11,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[5.826086956521738,-2.539130434782609,-10.956521739130434,9.165217391304347,18.330434782608695,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,44,-217,19.817391304347826,-9,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[6.434782608695652,-2.8521739130434787,-10.608695652173914,8.486956521739131,16.973913043478262,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,42,-217,20.321739130434782,-7,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[7.0434782608695645,-3.165217391304348,-10.26086956521739,7.808695652173913,15.617391304347827,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,40,-217,20.82608695652174,-5,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[7.6521739130434785,-3.4782608695652177,-9.91304347826087,7.130434782608695,14.26086956521739,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,38,-217,21.330434782608698,-3,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[8.26086956521739,-3.7913043478260873,-9.565217391304348,6.452173913043477,12.904347826086955,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,36,-217,21.834782608695654,-1,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[8.869565217391305,-4.104347826086957,-9.217391304347826,5.773913043478261,11.547826086956523,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,34,-217,22.33913043478261,1,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[9.478260869565217,-4.417391304347826,-8.869565217391305,5.095652173913043,10.191304347826087,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,32,-217,22.843478260869567,3,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[10.08695652173913,-4.730434782608696,-8.521739130434781,4.4173913043478255,8.834782608695651,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,30,-217,23.347826086956523,5,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[10.695652173913043,-5.043478260869565,-8.173913043478262,3.7391304347826093,7.478260869565219,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,28,-217,23.85217391304348,7,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[11.304347826086957,-5.356521739130435,-7.826086956521738,3.0608695652173914,6.121739130434783,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,26,-217,24.356521739130436,9,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[11.91304347826087,-5.6695652173913045,-7.478260869565217,2.3826086956521735,4.765217391304347,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,24,-217,24.860869565217392,11,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[12.521739130434783,-5.982608695652174,-7.130434782608695,1.7043478260869556,3.408695652173911,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,22,-217,25.36521739130435,13,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[13.130434782608695,-6.295652173913043,-6.782608695652174,1.0260869565217376,2.0521739130434753,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,20,-217,25.869565217391305,15,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[13.73913043478261,-6.608695652173912,-6.434782608695652,0.3478260869565233,0.6956521739130466,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,18,-217,26.37391304347826,17,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[14.347826086956523,-6.921739130434782,-6.086956521739131,-0.33043478260869463,-0.6608695652173893,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,16,-217,26.878260869565217,19,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[14.956521739130434,-7.234782608695653,-5.739130434782609,-1.0086956521739125,-2.017391304347825,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,14,-217,27.382608695652173,21,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[15.565217391304348,-7.547826086956523,-5.391304347826088,-1.6869565217391305,-3.373913043478261,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,12,-217,27.88695652173913,23,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[16.17391304347826,-7.860869565217392,-5.0434782608695645,-2.3652173913043484,-4.730434782608697,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,10,-217,28.391304347826086,25,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[16.782608695652176,-8.173913043478262,-4.695652173913043,-3.0434782608695663,-6.086956521739133,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,8,-217,28.895652173913042,27,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[17.391304347826086,-8.486956521739131,-4.3478260869565215,-3.721739130434784,-7.443478260869568,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,6,-217,29.4,29,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[18,-8.8,-4,-4.399999999999999,-8.799999999999997,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,4,-217,29.904347826086955,31,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[18.608695652173914,-9.11304347826087,-3.6521739130434785,-5.0782608695652165,-10.156521739130433,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,2,-217,30.408695652173915,33,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[19.217391304347824,-9.42608695652174,-3.304347826086957,-5.756521739130434,-11.513043478260869,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,0,-217,30.91304347826087,35,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[19.82608695652174,-9.73913043478261,-2.9565217391304355,-6.434782608695652,-12.869565217391305,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-2,-217,31.417391304347827,37,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[20.434782608695652,-10.052173913043479,-2.608695652173912,-7.11304347826087,-14.22608695652174,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-4,-217,31.921739130434784,39,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[21.043478260869566,-10.365217391304348,-2.2608695652173907,-7.791304347826088,-15.582608695652176,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-6,-217,32.42608695652174,41,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[21.652173913043477,-10.678260869565218,-1.9130434782608692,-8.469565217391306,-16.939130434782612,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-8,-217,32.9304347826087,43,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[22.26086956521739,-10.991304347826087,-1.5652173913043477,-9.14782608695652,-18.29565217391304,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-10,-217,33.434782608695656,45,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[22.869565217391305,-11.304347826086957,-1.2173913043478262,-9.826086956521738,-19.652173913043477,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-12,-217,33.93913043478261,47,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[23.47826086956522,-11.617391304347827,-0.8695652173913047,-10.504347826086956,-21.008695652173913,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-14,-217,34.44347826086957,49,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[24.08695652173913,-11.930434782608696,-0.5217391304347831,-11.182608695652174,-22.36521739130435,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-16,-217,34.947826086956525,51,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[24.695652173913043,-12.243478260869566,-0.17391304347826164,-11.860869565217392,-23.721739130434784,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-18,-217,35.45217391304348,53,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[25.304347826086957,-12.556521739130435,0.17391304347826164,-12.53913043478261,-25.07826086956522,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-20,-217,35.95652173913044,55,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[25.91304347826087,-12.869565217391305,0.5217391304347814,-13.217391304347828,-26.434782608695656,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-22,-217,36.46086956521739,57,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[26.52173913043478,-13.182608695652174,0.8695652173913047,-13.895652173913042,-27.791304347826085,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-24,-217,36.96521739130435,59,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[27.130434782608695,-13.495652173913044,1.2173913043478244,-14.573913043478264,-29.147826086956528,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-26,-217,37.469565217391306,61,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[27.73913043478261,-13.808695652173913,1.5652173913043477,-15.252173913043478,-30.504347826086956,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-28,-217,37.97391304347826,63,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[28.347826086956523,-14.121739130434783,1.913043478260871,-15.930434782608693,-31.860869565217385,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-30,-217,38.47826086956522,65,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[28.956521739130434,-14.434782608695652,2.2608695652173907,-16.608695652173914,-33.21739130434783,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-32,-217,38.982608695652175,67,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[29.56521739130435,-14.747826086956522,2.608695652173914,-17.28695652173913,-34.57391304347826,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-34,-217,39.48695652173913,69,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[30.173913043478258,-15.060869565217391,2.9565217391304337,-17.96521739130435,-35.9304347826087,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-36,-217,39.99130434782609,71,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[30.782608695652172,-15.373913043478261,3.304347826086957,-18.643478260869564,-37.28695652173913,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-38,-217,40.495652173913044,73,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[31.391304347826086,-15.68695652173913,3.6521739130434767,-19.321739130434786,-38.64347826086957,-30],[-13,-3,1,-15,-13,-21,5,-1,0,-4,12,0,0,0]],[["40",-197,"35","-40",-217,"41","75",-175,"14","10",-173,"19","8","0",0,"41",0,0,0,"41",0,0,0,0,"1","-20","20"],["32","-16","4","-20","-40","-30"],["-13","-3","1","-15","-13","-21","5","-1",0,"-4","12",0,0,0]],[[40,-197,35,-39,-217,40.84033613445378,74.04201680672269,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-19.66386554621849,-39.32773109243698,-30],[-13,-3,1,-14.789915966386555,-12.873949579831933,-20.77310924369748,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-37,-217,40.52100840336134,72.12605042016807,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-18.991596638655462,-37.983193277310924,-30],[-13,-3,1,-14.369747899159664,-12.621848739495798,-20.319327731092436,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-35,-217,40.20168067226891,70.21008403361344,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-18.319327731092436,-36.63865546218487,-30],[-13,-3,1,-13.949579831932773,-12.369747899159664,-19.865546218487395,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-33,-217,39.88235294117647,68.29411764705883,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-17.647058823529413,-35.294117647058826,-30],[-13,-3,1,-13.529411764705882,-12.117647058823529,-19.41176470588235,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-31,-217,39.563025210084035,66.3781512605042,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-16.974789915966387,-33.94957983193277,-30],[-13,-3,1,-13.109243697478991,-11.865546218487395,-18.95798319327731,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-29,-217,39.2436974789916,64.46218487394958,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-16.30252100840336,-32.60504201680672,-30],[-13,-3,1,-12.689075630252102,-11.61344537815126,-18.504201680672267,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-27,-217,38.924369747899156,62.54621848739496,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-15.630252100840337,-31.260504201680675,-30],[-13,-3,1,-12.26890756302521,-11.361344537815127,-18.050420168067227,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-25,-217,38.60504201680672,60.63025210084034,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-14.957983193277311,-29.915966386554622,-30],[-13,-3,1,-11.84873949579832,-11.109243697478991,-17.596638655462186,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-23,-217,38.285714285714285,58.714285714285715,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-14.285714285714285,-28.57142857142857,-30],[-13,-3,1,-11.428571428571429,-10.857142857142858,-17.142857142857142,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-21,-217,37.96638655462185,56.79831932773109,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-13.61344537815126,-27.22689075630252,-30],[-13,-3,1,-11.008403361344538,-10.605042016806722,-16.689075630252102,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-19,-217,37.64705882352941,54.88235294117647,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-12.941176470588236,-25.88235294117647,-30],[-13,-3,1,-10.588235294117647,-10.352941176470589,-16.235294117647058,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-17,-217,37.32773109243698,52.96638655462185,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-12.26890756302521,-24.53781512605042,-30],[-13,-3,1,-10.168067226890756,-10.100840336134453,-15.781512605042018,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-15,-217,37.008403361344534,51.05042016806723,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-11.596638655462185,-23.19327731092437,-30],[-13,-3,1,-9.747899159663866,-9.84873949579832,-15.327731092436974,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-13,-217,36.6890756302521,49.134453781512605,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-10.92436974789916,-21.84873949579832,-30],[-13,-3,1,-9.327731092436974,-9.596638655462185,-14.873949579831933,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-11,-217,36.36974789915966,47.21848739495798,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-10.252100840336135,-20.50420168067227,-30],[-13,-3,1,-8.907563025210084,-9.344537815126051,-14.420168067226891,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-9,-217,36.05042016806723,45.30252100840336,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-9.579831932773109,-19.159663865546218,-30],[-13,-3,1,-8.487394957983193,-9.092436974789916,-13.966386554621849,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-7,-217,35.73109243697479,43.38655462184874,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-8.907563025210084,-17.81512605042017,-30],[-13,-3,1,-8.067226890756302,-8.840336134453782,-13.512605042016807,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-5,-217,35.411764705882355,41.470588235294116,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-8.235294117647058,-16.470588235294116,-30],[-13,-3,1,-7.647058823529412,-8.588235294117647,-13.058823529411764,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-3,-217,35.09243697478992,39.554621848739494,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-7.563025210084033,-15.126050420168067,-30],[-13,-3,1,-7.226890756302521,-8.336134453781511,-12.605042016806722,5,-1,0,-4,12,0,0,0]],[[40,-197,35,-1,-217,34.773109243697476,37.63865546218487,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-6.890756302521009,-13.781512605042018,-30],[-13,-3,1,-6.806722689075631,-8.084033613445378,-12.15126050420168,5,-1,0,-4,12,0,0,0]],[[40,-197,35,1,-217,34.45378151260504,35.72268907563025,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-6.218487394957982,-12.436974789915965,-30],[-13,-3,1,-6.38655462184874,-7.831932773109243,-11.697478991596638,5,-1,0,-4,12,0,0,0]],[[40,-197,35,3,-217,34.134453781512605,33.80672268907563,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-5.546218487394958,-11.092436974789916,-30],[-13,-3,1,-5.966386554621849,-7.579831932773109,-11.243697478991596,5,-1,0,-4,12,0,0,0]],[[40,-197,35,5,-217,33.81512605042017,31.890756302521005,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-4.873949579831933,-9.747899159663866,-30],[-13,-3,1,-5.546218487394958,-7.3277310924369745,-10.789915966386555,5,-1,0,-4,12,0,0,0]],[[40,-197,35,7,-217,33.49579831932773,29.974789915966383,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-4.201680672268907,-8.403361344537814,-30],[-13,-3,1,-5.126050420168067,-7.07563025210084,-10.336134453781513,5,-1,0,-4,12,0,0,0]],[[40,-197,35,9,-217,33.1764705882353,28.058823529411768,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-3.529411764705884,-7.058823529411768,-30],[-13,-3,1,-4.705882352941176,-6.823529411764706,-9.882352941176471,5,-1,0,-4,12,0,0,0]],[[40,-197,35,11,-217,32.85714285714286,26.142857142857146,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-2.8571428571428577,-5.714285714285715,-30],[-13,-3,1,-4.2857142857142865,-6.571428571428571,-9.428571428571429,5,-1,0,-4,12,0,0,0]],[[40,-197,35,13,-217,32.53781512605042,24.226890756302524,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-2.1848739495798313,-4.3697478991596626,-30],[-13,-3,1,-3.8655462184873954,-6.319327731092437,-8.974789915966387,5,-1,0,-4,12,0,0,0]],[[40,-197,35,15,-217,32.21848739495798,22.3109243697479,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-1.5126050420168085,-3.025210084033617,-30],[-13,-3,1,-3.4453781512605044,-6.067226890756302,-8.521008403361344,5,-1,0,-4,12,0,0,0]],[[40,-197,35,17,-217,31.899159663865547,20.39495798319328,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-0.8403361344537821,-1.6806722689075642,-30],[-13,-3,1,-3.0252100840336134,-5.815126050420168,-8.067226890756302,5,-1,0,-4,12,0,0,0]],[[40,-197,35,19,-217,31.57983193277311,18.478991596638657,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,-0.1680672268907557,-0.3361344537815114,-30],[-13,-3,1,-2.6050420168067223,-5.563025210084033,-7.61344537815126,5,-1,0,-4,12,0,0,0]],[[40,-197,35,21,-217,31.260504201680675,16.563025210084035,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,0.5042016806722707,1.0084033613445413,-30],[-13,-3,1,-2.1848739495798313,-5.310924369747899,-7.159663865546218,5,-1,0,-4,12,0,0,0]],[[40,-197,35,23,-217,30.941176470588236,14.647058823529413,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,1.1764705882352935,2.352941176470587,-30],[-13,-3,1,-1.764705882352942,-5.0588235294117645,-6.705882352941176,5,-1,0,-4,12,0,0,0]],[[40,-197,35,25,-217,30.621848739495796,12.73109243697479,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,1.8487394957983199,3.6974789915966397,-30],[-13,-3,1,-1.344537815126051,-4.806722689075631,-6.252100840336135,5,-1,0,-4,12,0,0,0]],[[40,-197,35,27,-217,30.30252100840336,10.815126050420162,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,2.5210084033613462,5.0420168067226925,-30],[-13,-3,1,-0.9243697478991599,-4.554621848739496,-5.798319327731093,5,-1,0,-4,12,0,0,0]],[[40,-197,35,29,-217,29.983193277310924,8.899159663865547,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,3.193277310924369,6.386554621848738,-30],[-13,-3,1,-0.5042016806722689,-4.302521008403362,-5.344537815126051,5,-1,0,-4,12,0,0,0]],[[40,-197,35,31,-217,29.66386554621849,6.983193277310917,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,3.8655462184873954,7.731092436974791,-30],[-13,-3,1,-0.08403361344537785,-4.050420168067227,-4.890756302521009,5,-1,0,-4,12,0,0,0]],[[40,-197,35,33,-217,29.344537815126053,5.067226890756302,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,4.537815126050422,9.075630252100844,-30],[-13,-3,1,0.3361344537815132,-3.798319327731093,-4.436974789915965,5,-1,0,-4,12,0,0,0]],[[40,-197,35,35,-217,29.025210084033613,3.1512605042016872,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,5.210084033613445,10.42016806722689,-30],[-13,-3,1,0.7563025210084042,-3.546218487394958,-3.9831932773109244,5,-1,0,-4,12,0,0,0]],[[40,-197,35,37,-217,28.705882352941174,1.235294117647058,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,5.882352941176471,11.764705882352942,-30],[-13,-3,1,1.1764705882352935,-3.2941176470588243,-3.529411764705884,5,-1,0,-4,12,0,0,0]],[[40,-197,35,39,-217,28.386554621848738,-0.680672268907557,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,6.554621848739497,13.109243697478995,-30],[-13,-3,1,1.5966386554621863,-3.042016806722689,-3.07563025210084,5,-1,0,-4,12,0,0,0]],[[40,-197,35,41,-217,28.067226890756302,-2.5966386554621863,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,7.22689075630252,14.45378151260504,-30],[-13,-3,1,2.0168067226890756,-2.7899159663865554,-2.6218487394957997,5,-1,0,-4,12,0,0,0]],[[40,-197,35,43,-217,27.747899159663866,-4.512605042016801,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,7.899159663865547,15.798319327731093,-30],[-13,-3,1,2.436974789915965,-2.53781512605042,-2.1680672268907557,5,-1,0,-4,12,0,0,0]],[[40,-197,35,45,-217,27.42857142857143,-6.428571428571431,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,8.571428571428573,17.142857142857146,-30],[-13,-3,1,2.8571428571428577,-2.2857142857142865,-1.7142857142857153,5,-1,0,-4,12,0,0,0]],[[40,-197,35,47,-217,27.10924369747899,-8.344537815126046,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,9.243697478991596,18.48739495798319,-30],[-13,-3,1,3.277310924369747,-2.033613445378151,-1.2605042016806713,5,-1,0,-4,12,0,0,0]],[[40,-197,35,49,-217,26.789915966386555,-10.260504201680675,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,9.915966386554622,19.831932773109244,-30],[-13,-3,1,3.6974789915966397,-1.7815126050420176,-0.8067226890756309,5,-1,0,-4,12,0,0,0]],[[40,-197,35,51,-217,26.470588235294116,-12.17647058823529,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,10.588235294117649,21.176470588235297,-30],[-13,-3,1,4.117647058823529,-1.5294117647058822,-0.352941176470587,5,-1,0,-4,12,0,0,0]],[[40,-197,35,53,-217,26.15126050420168,-14.09243697478992,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,11.260504201680671,22.521008403361343,-30],[-13,-3,1,4.537815126050422,-1.2773109243697487,0.10084033613445342,5,-1,0,-4,12,0,0,0]],[[40,-197,35,55,-217,25.831932773109244,-16.008403361344534,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,11.932773109243698,23.865546218487395,-30],[-13,-3,1,4.957983193277311,-1.0252100840336134,0.5546218487394974,5,-1,0,-4,12,0,0,0]],[[40,-197,35,57,-217,25.51260504201681,-17.924369747899163,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,12.60504201680672,25.21008403361344,-30],[-13,-3,1,5.3781512605042,-0.7731092436974798,1.0084033613445378,5,-1,0,-4,12,0,0,0]],[[40,-197,35,59,-217,25.19327731092437,-19.84033613445378,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,13.27731092436975,26.5546218487395,-30],[-13,-3,1,5.798319327731093,-0.5210084033613445,1.4621848739495782,5,-1,0,-4,12,0,0,0]],[[40,-197,35,61,-217,24.873949579831933,-21.756302521008408,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,13.949579831932773,27.899159663865547,-30],[-13,-3,1,6.218487394957982,-0.2689075630252109,1.9159663865546221,5,-1,0,-4,12,0,0,0]],[[40,-197,35,63,-217,24.554621848739497,-23.672268907563023,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,14.621848739495796,29.243697478991592,-30],[-13,-3,1,6.638655462184875,-0.01680672268907557,2.3697478991596626,5,-1,0,-4,12,0,0,0]],[[40,-197,35,65,-217,24.235294117647058,-25.588235294117652,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,15.294117647058826,30.588235294117652,-30],[-13,-3,1,7.0588235294117645,0.235294117647058,2.8235294117647065,5,-1,0,-4,12,0,0,0]],[[40,-197,35,67,-217,23.915966386554622,-27.504201680672267,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,15.966386554621849,31.932773109243698,-30],[-13,-3,1,7.478991596638654,0.4873949579831933,3.277310924369747,5,-1,0,-4,12,0,0,0]],[[40,-197,35,69,-217,23.596638655462186,-29.420168067226896,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,16.63865546218487,33.27731092436974,-30],[-13,-3,1,7.899159663865547,0.7394957983193269,3.731092436974791,5,-1,0,-4,12,0,0,0]],[[40,-197,35,71,-217,23.277310924369747,-31.33613445378151,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,17.3109243697479,34.6218487394958,-30],[-13,-3,1,8.319327731092436,0.9915966386554622,4.184873949579831,5,-1,0,-4,12,0,0,0]],[[40,-197,35,73,-217,22.95798319327731,-33.25210084033614,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,17.983193277310924,35.96638655462185,-30],[-13,-3,1,8.739495798319329,1.2436974789915958,4.638655462184875,5,-1,0,-4,12,0,0,0]],[[40,-197,35,75,-217,22.638655462184875,-35.168067226890756,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,18.655462184873947,37.310924369747895,-30],[-13,-3,1,9.159663865546218,1.495798319327731,5.092436974789916,5,-1,0,-4,12,0,0,0]],[[40,-197,35,77,-217,22.319327731092436,-37.084033613445385,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[32,-16,4,19.327731092436977,38.655462184873954,-30],[-13,-3,1,9.57983193277311,1.7478991596638647,5.54621848739496,5,-1,0,-4,12,0,0,0]],[["40",-197,"35","79",-217,"22","-39",-175,"14","10",-173,"19","8","0",0,"41",0,0,0,"41",0,0,0,0,"1","-20","20"],["32","-16","4","20","40","-30"],["-13","-3","1","10","2","6","5","-1",0,"-4","12",0,0,0]],[[40,-197,34.924369747899156,78,-217,22,-38,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[31.80672268907563,-16,3.7899159663865545,19.66386554621849,39.32773109243698,-30],[-13,-3,1,10.168067226890756,1.8067226890756303,5.848739495798319,5,-1,0,-4,12,0,0,0]],[[40,-197,34.773109243697476,76,-217,22,-36,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[31.42016806722689,-16,3.369747899159664,18.991596638655462,37.983193277310924,-30],[-13,-3,1,10.504201680672269,1.4201680672268906,5.546218487394958,5,-1,0,-4,12,0,0,0]],[[40,-197,34.621848739495796,74,-217,22,-34,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[31.03361344537815,-16,2.9495798319327733,18.319327731092436,36.63865546218487,-30],[-13,-3,1,10.840336134453782,1.0336134453781511,5.243697478991597,5,-1,0,-4,12,0,0,0]],[[40,-197,34.470588235294116,72,-217,22,-32,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[30.647058823529413,-16,2.5294117647058822,17.647058823529413,35.294117647058826,-30],[-13,-3,1,11.176470588235293,0.6470588235294117,4.9411764705882355,5,-1,0,-4,12,0,0,0]],[[40,-197,34.319327731092436,70,-217,22,-30,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[30.26050420168067,-16,2.1092436974789917,16.974789915966387,33.94957983193277,-30],[-13,-3,1,11.512605042016807,0.26050420168067223,4.6386554621848735,5,-1,0,-4,12,0,0,0]],[[40,-197,34.168067226890756,68,-217,22,-28,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[29.873949579831933,-16,1.689075630252101,16.30252100840336,32.60504201680672,-30],[-13,-3,1,11.84873949579832,-0.12605042016806722,4.336134453781512,5,-1,0,-4,12,0,0,0]],[[40,-197,34.016806722689076,66,-217,22,-26,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[29.48739495798319,-16,1.26890756302521,15.630252100840337,31.260504201680675,-30],[-13,-3,1,12.184873949579831,-0.5126050420168067,4.033613445378151,5,-1,0,-4,12,0,0,0]],[[40,-197,33.865546218487395,64,-217,22,-24,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[29.100840336134453,-16,0.8487394957983194,14.957983193277311,29.915966386554622,-30],[-13,-3,1,12.521008403361344,-0.8991596638655461,3.73109243697479,5,-1,0,-4,12,0,0,0]],[[40,-197,33.714285714285715,62,-217,22,-22,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[28.714285714285715,-16,0.4285714285714284,14.285714285714285,28.57142857142857,-30],[-13,-3,1,12.857142857142858,-1.2857142857142856,3.4285714285714284,5,-1,0,-4,12,0,0,0]],[[40,-197,33.563025210084035,60,-217,22,-20,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[28.327731092436974,-16,0.008403361344537785,13.61344537815126,27.22689075630252,-30],[-13,-3,1,13.193277310924369,-1.672268907563025,3.1260504201680672,5,-1,0,-4,12,0,0,0]],[[40,-197,33.411764705882355,58,-217,22,-18,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[27.941176470588236,-16,-0.41176470588235325,12.941176470588236,25.88235294117647,-30],[-13,-3,1,13.529411764705882,-2.0588235294117645,2.823529411764706,5,-1,0,-4,12,0,0,0]],[[40,-197,33.260504201680675,56,-217,22,-16,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[27.554621848739494,-16,-0.8319327731092434,12.26890756302521,24.53781512605042,-30],[-13,-3,1,13.865546218487395,-2.4453781512605044,2.5210084033613445,5,-1,0,-4,12,0,0,0]],[[40,-197,33.109243697478995,54,-217,22,-14,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[27.168067226890756,-16,-1.2521008403361344,11.596638655462185,23.19327731092437,-30],[-13,-3,1,14.201680672268907,-2.8319327731092434,2.2184873949579833,5,-1,0,-4,12,0,0,0]],[[40,-197,32.957983193277315,52,-217,22,-12,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[26.781512605042018,-16,-1.6722689075630255,10.92436974789916,21.84873949579832,-30],[-13,-3,1,14.53781512605042,-3.2184873949579833,1.9159663865546221,5,-1,0,-4,12,0,0,0]],[[40,-197,32.80672268907563,50,-217,22,-10,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[26.39495798319328,-16,-2.0924369747899156,10.252100840336135,20.50420168067227,-30],[-13,-3,1,14.873949579831933,-3.6050420168067223,1.61344537815126,5,-1,0,-4,12,0,0,0]],[[40,-197,32.65546218487395,48,-217,22,-8,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[26.008403361344538,-16,-2.5126050420168067,9.579831932773109,19.159663865546218,-30],[-13,-3,1,15.210084033613445,-3.991596638655462,1.310924369747899,5,-1,0,-4,12,0,0,0]],[[40,-197,32.50420168067227,46,-217,22,-6,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[25.621848739495796,-16,-2.9327731092436977,8.907563025210084,17.81512605042017,-30],[-13,-3,1,15.546218487394958,-4.378151260504202,1.0084033613445378,5,-1,0,-4,12,0,0,0]],[[40,-197,32.35294117647059,44,-217,22,-4,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[25.235294117647058,-16,-3.352941176470588,8.235294117647058,16.470588235294116,-30],[-13,-3,1,15.882352941176471,-4.764705882352941,0.7058823529411766,5,-1,0,-4,12,0,0,0]],[[40,-197,32.20168067226891,42,-217,22,-2,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[24.84873949579832,-16,-3.773109243697479,7.563025210084033,15.126050420168067,-30],[-13,-3,1,16.218487394957982,-5.151260504201681,0.40336134453781547,5,-1,0,-4,12,0,0,0]],[[40,-197,32.05042016806723,40,-217,22,0,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[24.46218487394958,-16,-4.193277310924369,6.890756302521009,13.781512605042018,-30],[-13,-3,1,16.554621848739494,-5.53781512605042,0.10084033613445342,5,-1,0,-4,12,0,0,0]],[[40,-197,31.899159663865547,38,-217,22,2,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[24.07563025210084,-16,-4.61344537815126,6.218487394957982,12.436974789915965,-30],[-13,-3,1,16.89075630252101,-5.92436974789916,-0.20168067226890773,5,-1,0,-4,12,0,0,0]],[[40,-197,31.747899159663866,36,-217,22,4,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[23.6890756302521,-16,-5.033613445378151,5.546218487394958,11.092436974789916,-30],[-13,-3,1,17.22689075630252,-6.3109243697479,-0.5042016806722689,5,-1,0,-4,12,0,0,0]],[[40,-197,31.596638655462186,34,-217,22,6,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[23.30252100840336,-16,-5.453781512605042,4.873949579831933,9.747899159663866,-30],[-13,-3,1,17.563025210084035,-6.697478991596638,-0.80672268907563,5,-1,0,-4,12,0,0,0]],[[40,-197,31.445378151260506,32,-217,22,8,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[22.915966386554622,-16,-5.873949579831933,4.201680672268907,8.403361344537814,-30],[-13,-3,1,17.899159663865547,-7.084033613445378,-1.1092436974789912,5,-1,0,-4,12,0,0,0]],[[40,-197,31.294117647058822,30,-217,22,10,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[22.529411764705884,-16,-6.294117647058824,3.529411764705884,7.058823529411768,-30],[-13,-3,1,18.235294117647058,-7.470588235294118,-1.4117647058823533,5,-1,0,-4,12,0,0,0]],[[40,-197,31.142857142857142,28,-217,22,12,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[22.142857142857142,-16,-6.7142857142857135,2.8571428571428577,5.714285714285715,-30],[-13,-3,1,18.57142857142857,-7.857142857142858,-1.7142857142857144,5,-1,0,-4,12,0,0,0]],[[40,-197,30.991596638655462,26,-217,22,14,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[21.756302521008404,-16,-7.134453781512605,2.1848739495798313,4.3697478991596626,-30],[-13,-3,1,18.907563025210084,-8.243697478991596,-2.0168067226890756,5,-1,0,-4,12,0,0,0]],[[40,-197,30.840336134453782,24,-217,22,16,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[21.369747899159663,-16,-7.554621848739496,1.5126050420168085,3.025210084033617,-30],[-13,-3,1,19.243697478991596,-8.630252100840336,-2.3193277310924376,5,-1,0,-4,12,0,0,0]],[[40,-197,30.689075630252102,22,-217,22,18,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[20.983193277310924,-16,-7.974789915966387,0.8403361344537821,1.6806722689075642,-30],[-13,-3,1,19.57983193277311,-9.016806722689076,-2.621848739495798,5,-1,0,-4,12,0,0,0]],[[40,-197,30.53781512605042,20,-217,22,20,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[20.596638655462186,-16,-8.394957983193278,0.1680672268907557,0.3361344537815114,-30],[-13,-3,1,19.915966386554622,-9.403361344537815,-2.92436974789916,5,-1,0,-4,12,0,0,0]],[[40,-197,30.386554621848738,18,-217,22,22,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[20.210084033613445,-16,-8.815126050420169,-0.5042016806722707,-1.0084033613445413,-30],[-13,-3,1,20.252100840336134,-9.789915966386555,-3.22689075630252,5,-1,0,-4,12,0,0,0]],[[40,-197,30.235294117647058,16,-217,22,24,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[19.823529411764707,-16,-9.235294117647058,-1.1764705882352935,-2.352941176470587,-30],[-13,-3,1,20.588235294117645,-10.176470588235293,-3.5294117647058822,5,-1,0,-4,12,0,0,0]],[[40,-197,30.084033613445378,14,-217,22,26,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[19.436974789915965,-16,-9.655462184873949,-1.8487394957983199,-3.6974789915966397,-30],[-13,-3,1,20.92436974789916,-10.563025210084033,-3.8319327731092443,5,-1,0,-4,12,0,0,0]],[[40,-197,29.932773109243698,12,-217,22,28,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[19.050420168067227,-16,-10.07563025210084,-2.5210084033613462,-5.0420168067226925,-30],[-13,-3,1,21.260504201680675,-10.949579831932773,-4.134453781512605,5,-1,0,-4,12,0,0,0]],[[40,-197,29.781512605042018,10,-217,22,30,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[18.66386554621849,-16,-10.495798319327731,-3.193277310924369,-6.386554621848738,-30],[-13,-3,1,21.596638655462186,-11.336134453781513,-4.436974789915967,5,-1,0,-4,12,0,0,0]],[[40,-197,29.630252100840337,8,-217,22,32,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[18.27731092436975,-16,-10.915966386554622,-3.8655462184873954,-7.731092436974791,-30],[-13,-3,1,21.932773109243698,-11.722689075630251,-4.739495798319327,5,-1,0,-4,12,0,0,0]],[[40,-197,29.478991596638657,6,-217,22,34,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[17.89075630252101,-16,-11.336134453781513,-4.537815126050422,-9.075630252100844,-30],[-13,-3,1,22.26890756302521,-12.109243697478991,-5.042016806722689,5,-1,0,-4,12,0,0,0]],[[40,-197,29.327731092436974,4,-217,22,36,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[17.504201680672267,-16,-11.756302521008404,-5.210084033613445,-10.42016806722689,-30],[-13,-3,1,22.60504201680672,-12.495798319327731,-5.344537815126051,5,-1,0,-4,12,0,0,0]],[[40,-197,29.176470588235293,2,-217,22,38,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[17.11764705882353,-16,-12.176470588235293,-5.882352941176471,-11.764705882352942,-30],[-13,-3,1,22.941176470588236,-12.882352941176471,-5.647058823529411,5,-1,0,-4,12,0,0,0]],[[40,-197,29.025210084033613,0,-217,22,40,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[16.73109243697479,-16,-12.596638655462186,-6.554621848739497,-13.109243697478995,-30],[-13,-3,1,23.27731092436975,-13.268907563025211,-5.949579831932773,5,-1,0,-4,12,0,0,0]],[[40,-197,28.873949579831933,-2,-217,22,42,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[16.344537815126053,-16,-13.016806722689076,-7.22689075630252,-14.45378151260504,-30],[-13,-3,1,23.613445378151262,-13.655462184873949,-6.252100840336135,5,-1,0,-4,12,0,0,0]],[[40,-197,28.722689075630253,-4,-217,22,44,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[15.957983193277311,-16,-13.436974789915965,-7.899159663865547,-15.798319327731093,-30],[-13,-3,1,23.949579831932773,-14.042016806722689,-6.554621848739496,5,-1,0,-4,12,0,0,0]],[[40,-197,28.57142857142857,-6,-217,22,46,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[15.571428571428573,-16,-13.857142857142858,-8.571428571428573,-17.142857142857146,-30],[-13,-3,1,24.285714285714285,-14.428571428571427,-6.857142857142858,5,-1,0,-4,12,0,0,0]],[[40,-197,28.42016806722689,-8,-217,22,48,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[15.184873949579831,-16,-14.277310924369747,-9.243697478991596,-18.48739495798319,-30],[-13,-3,1,24.621848739495796,-14.815126050420169,-7.159663865546218,5,-1,0,-4,12,0,0,0]],[[40,-197,28.26890756302521,-10,-217,22,50,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[14.798319327731093,-16,-14.69747899159664,-9.915966386554622,-19.831932773109244,-30],[-13,-3,1,24.95798319327731,-15.201680672268907,-7.46218487394958,5,-1,0,-4,12,0,0,0]],[[40,-197,28.11764705882353,-12,-217,22,52,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[14.411764705882351,-16,-15.117647058823529,-10.588235294117649,-21.176470588235297,-30],[-13,-3,1,25.294117647058826,-15.588235294117649,-7.764705882352942,5,-1,0,-4,12,0,0,0]],[[40,-197,27.96638655462185,-14,-217,22,54,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[14.025210084033613,-16,-15.537815126050422,-11.260504201680671,-22.521008403361343,-30],[-13,-3,1,25.630252100840337,-15.974789915966387,-8.067226890756302,5,-1,0,-4,12,0,0,0]],[[40,-197,27.81512605042017,-16,-217,22,56,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[13.638655462184875,-16,-15.957983193277311,-11.932773109243698,-23.865546218487395,-30],[-13,-3,1,25.96638655462185,-16.361344537815125,-8.369747899159664,5,-1,0,-4,12,0,0,0]],[[40,-197,27.66386554621849,-18,-217,22,58,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[13.252100840336134,-16,-16.3781512605042,-12.60504201680672,-25.21008403361344,-30],[-13,-3,1,26.30252100840336,-16.747899159663866,-8.672268907563025,5,-1,0,-4,12,0,0,0]],[[40,-197,27.51260504201681,-20,-217,22,60,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[12.865546218487395,-16,-16.798319327731093,-13.27731092436975,-26.5546218487395,-30],[-13,-3,1,26.638655462184875,-17.134453781512605,-8.974789915966387,5,-1,0,-4,12,0,0,0]],[[40,-197,27.361344537815125,-22,-217,22,62,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[12.478991596638654,-16,-17.218487394957982,-13.949579831932773,-27.899159663865547,-30],[-13,-3,1,26.974789915966387,-17.521008403361346,-9.277310924369749,5,-1,0,-4,12,0,0,0]],[[40,-197,27.210084033613445,-24,-217,22,64,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[12.092436974789916,-16,-17.638655462184875,-14.621848739495796,-29.243697478991592,-30],[-13,-3,1,27.310924369747898,-17.907563025210084,-9.579831932773109,5,-1,0,-4,12,0,0,0]],[[40,-197,27.058823529411764,-26,-217,22,66,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[11.705882352941178,-16,-18.058823529411764,-15.294117647058826,-30.588235294117652,-30],[-13,-3,1,27.647058823529413,-18.294117647058822,-9.882352941176471,5,-1,0,-4,12,0,0,0]],[[40,-197,26.907563025210084,-28,-217,22,68,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[11.319327731092436,-16,-18.478991596638654,-15.966386554621849,-31.932773109243698,-30],[-13,-3,1,27.983193277310924,-18.680672268907564,-10.184873949579831,5,-1,0,-4,12,0,0,0]],[[40,-197,26.756302521008404,-30,-217,22,70,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[10.932773109243698,-16,-18.899159663865547,-16.63865546218487,-33.27731092436974,-30],[-13,-3,1,28.319327731092436,-19.067226890756302,-10.487394957983192,5,-1,0,-4,12,0,0,0]],[[40,-197,26.60504201680672,-32,-217,22,72,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[10.54621848739496,-16,-19.319327731092436,-17.3109243697479,-34.6218487394958,-30],[-13,-3,1,28.65546218487395,-19.45378151260504,-10.789915966386555,5,-1,0,-4,12,0,0,0]],[[40,-197,26.45378151260504,-34,-217,22,74,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[10.159663865546218,-16,-19.73949579831933,-17.983193277310924,-35.96638655462185,-30],[-13,-3,1,28.991596638655462,-19.840336134453782,-11.092436974789916,5,-1,0,-4,12,0,0,0]],[[40,-197,26.30252100840336,-36,-217,22,76,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[9.77310924369748,-16,-20.159663865546218,-18.655462184873947,-37.310924369747895,-30],[-13,-3,1,29.327731092436974,-20.22689075630252,-11.394957983193276,5,-1,0,-4,12,0,0,0]],[[40,-197,26.15126050420168,-38,-217,22,78,-175,14,10,-173,19,8,0,0,41,0,0,0,41,0,0,0,0,1,-20,20],[9.386554621848738,-16,-20.57983193277311,-19.327731092436977,-38.655462184873954,-30],[-13,-3,1,29.66386554621849,-20.613445378151262,-11.69747899159664,5,-1,0,-4,12,0,0,0]],[["40",-197,"26","-40",-217,"22","80",-175,"14","10",-173,"19","8","0",0,"41",0,0,0,"41",0,0,0,0,"1","-20","20"],["9","-16","-21","-20","-40","-30"],["-13","-3","1","30","-21","-12","5","-1",0,"-4","12",0,0,0]],[[40,-197,26,-39.19298245614035,-216.73684210526315,22.087719298245613,79,-175,14,9.526315789473685,-173,19,7.807017543859649,0,0,40.719298245614034,0,0,0,40.75438596491228,0,0,0,0,1,-20.50877192982456,19.350877192982455],[8.701754385964913,-16,-21,-20,-40,-29.736842105263158],[-13,-3,1,29.43859649122807,-21,-11.596491228070175,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-37.578947368421055,-216.21052631578948,22.263157894736842,77,-175,14,8.578947368421053,-173,19,7.421052631578947,0,0,40.1578947368421,0,0,0,40.26315789473684,0,0,0,0,1,-21.526315789473685,18.05263157894737],[8.105263157894736,-16,-21,-20,-40,-29.210526315789473],[-13,-3,1,28.315789473684212,-21,-10.789473684210526,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-35.96491228070175,-215.68421052631578,22.43859649122807,75,-175,14,7.631578947368421,-173,19,7.035087719298246,0,0,39.59649122807018,0,0,0,39.771929824561404,0,0,0,0,1,-22.54385964912281,16.75438596491228],[7.508771929824562,-16,-21,-20,-40,-28.684210526315788],[-13,-3,1,27.19298245614035,-21,-9.982456140350877,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-34.35087719298246,-215.1578947368421,22.614035087719298,73,-175,14,6.684210526315789,-173,19,6.649122807017544,0,0,39.03508771929825,0,0,0,39.280701754385966,0,0,0,0,1,-23.56140350877193,15.456140350877192],[6.912280701754386,-16,-21,-20,-40,-28.157894736842106],[-13,-3,1,26.070175438596493,-21,-9.175438596491228,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-32.73684210526316,-214.6315789473684,22.789473684210527,71,-175,14,5.7368421052631575,-173,19,6.2631578947368425,0,0,38.473684210526315,0,0,0,38.78947368421053,0,0,0,0,1,-24.57894736842105,14.157894736842106],[6.315789473684211,-16,-21,-20,-40,-27.63157894736842],[-13,-3,1,24.94736842105263,-21,-8.368421052631579,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-31.12280701754386,-214.10526315789474,22.964912280701753,69,-175,14,4.7894736842105265,-173,19,5.87719298245614,0,0,37.91228070175438,0,0,0,38.29824561403509,0,0,0,0,1,-25.596491228070175,12.859649122807017],[5.719298245614035,-16,-21,-20,-40,-27.105263157894736],[-13,-3,1,23.824561403508774,-21,-7.56140350877193,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-29.50877192982456,-213.57894736842104,23.140350877192983,67,-175,14,3.8421052631578947,-173,19,5.491228070175438,0,0,37.35087719298246,0,0,0,37.80701754385965,0,0,0,0,1,-26.614035087719298,11.56140350877193],[5.12280701754386,-16,-21,-20,-40,-26.57894736842105],[-13,-3,1,22.70175438596491,-21,-6.754385964912281,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-27.894736842105264,-213.05263157894737,23.315789473684212,65,-175,14,2.894736842105263,-173,19,5.105263157894736,0,0,36.78947368421053,0,0,0,37.31578947368421,0,0,0,0,1,-27.63157894736842,10.263157894736842],[4.526315789473684,-16,-21,-20,-40,-26.05263157894737],[-13,-3,1,21.578947368421055,-21,-5.947368421052632,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-26.280701754385966,-212.52631578947367,23.49122807017544,63,-175,14,1.9473684210526319,-173,19,4.719298245614035,0,0,36.228070175438596,0,0,0,36.824561403508774,0,0,0,0,1,-28.649122807017545,8.964912280701755],[3.9298245614035086,-16,-21,-20,-40,-25.526315789473685],[-13,-3,1,20.45614035087719,-21,-5.140350877192983,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-24.666666666666664,-212,23.666666666666668,61,-175,14,1,-173,19,4.333333333333334,0,0,35.666666666666664,0,0,0,36.333333333333336,0,0,0,0,1,-29.666666666666664,7.666666666666666],[3.333333333333333,-16,-21,-20,-40,-25],[-13,-3,1,19.333333333333336,-21,-4.333333333333333,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-23.05263157894737,-211.47368421052633,23.842105263157894,59,-175,14,0.05263157894736814,-173,19,3.947368421052632,0,0,35.10526315789474,0,0,0,35.8421052631579,0,0,0,0,1,-30.684210526315788,6.368421052631579],[2.7368421052631575,-16,-21,-20,-40,-24.473684210526315],[-13,-3,1,18.210526315789473,-21,-3.526315789473685,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-21.43859649122807,-210.94736842105263,24.017543859649123,57,-175,14,-0.8947368421052637,-173,19,3.56140350877193,0,0,34.54385964912281,0,0,0,35.35087719298246,0,0,0,0,1,-31.70175438596491,5.0701754385964914],[2.140350877192983,-16,-21,-20,-40,-23.94736842105263],[-13,-3,1,17.087719298245617,-21,-2.719298245614034,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-19.82456140350877,-210.42105263157896,24.19298245614035,55,-175,14,-1.8421052631578956,-173,19,3.1754385964912277,0,0,33.98245614035088,0,0,0,34.859649122807014,0,0,0,0,1,-32.719298245614034,3.771929824561404],[1.5438596491228074,-16,-21,-20,-40,-23.42105263157895],[-13,-3,1,15.964912280701755,-21,-1.9122807017543852,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-18.210526315789473,-209.89473684210526,24.36842105263158,53,-175,14,-2.7894736842105257,-173,19,2.7894736842105265,0,0,33.421052631578945,0,0,0,34.368421052631575,0,0,0,0,1,-33.73684210526316,2.473684210526315],[0.9473684210526319,-16,-21,-20,-40,-22.894736842105264],[-13,-3,1,14.842105263157896,-21,-1.1052631578947363,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-16.596491228070175,-209.3684210526316,24.54385964912281,51,-175,14,-3.7368421052631575,-173,19,2.4035087719298245,0,0,32.859649122807014,0,0,0,33.87719298245614,0,0,0,0,1,-34.75438596491228,1.1754385964912295],[0.35087719298245545,-16,-21,-20,-40,-22.36842105263158],[-13,-3,1,13.719298245614034,-21,-0.2982456140350873,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-14.982456140350877,-208.8421052631579,24.719298245614034,49,-175,14,-4.684210526315789,-173,19,2.0175438596491224,0,0,32.29824561403509,0,0,0,33.3859649122807,0,0,0,0,1,-35.771929824561404,-0.12280701754385959],[-0.24561403508771917,-16,-21,-20,-40,-21.842105263157897],[-13,-3,1,12.596491228070175,-21,0.5087719298245617,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-13.368421052631579,-208.31578947368422,24.894736842105264,47,-175,14,-5.631578947368421,-173,19,1.6315789473684212,0,0,31.736842105263158,0,0,0,32.89473684210526,0,0,0,0,1,-36.78947368421053,-1.4210526315789487],[-0.8421052631578956,-16,-21,-20,-40,-21.315789473684212],[-13,-3,1,11.473684210526315,-21,1.3157894736842106,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-11.75438596491228,-207.78947368421052,25.070175438596493,45,-175,14,-6.578947368421051,-173,19,1.2456140350877192,0,0,31.175438596491226,0,0,0,32.40350877192982,0,0,0,0,1,-37.80701754385965,-2.719298245614034],[-1.4385964912280702,-16,-21,-20,-40,-20.789473684210527],[-13,-3,1,10.350877192982455,-21,2.1228070175438596,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-10.140350877192983,-207.26315789473685,25.24561403508772,43,-175,14,-7.526315789473685,-173,19,0.8596491228070171,0,0,30.614035087719298,0,0,0,31.912280701754383,0,0,0,0,1,-38.82456140350877,-4.017543859649123],[-2.035087719298245,-16,-21,-20,-40,-20.263157894736842],[-13,-3,1,9.228070175438596,-21,2.9298245614035086,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-8.526315789473685,-206.73684210526315,25.42105263157895,41,-175,14,-8.473684210526315,-173,19,0.47368421052631593,0,0,30.05263157894737,0,0,0,31.421052631578945,0,0,0,0,1,-39.84210526315789,-5.315789473684209],[-2.6315789473684212,-16,-21,-20,-40,-19.736842105263158],[-13,-3,1,8.105263157894736,-21,3.7368421052631575,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-6.9122807017543835,-206.21052631578948,25.596491228070175,39,-175,14,-9.421052631578949,-173,19,0.08771929824561386,0,0,29.49122807017544,0,0,0,30.929824561403507,0,0,0,0,1,-40.859649122807014,-6.614035087719298],[-3.228070175438596,-16,-21,-20,-40,-19.210526315789473],[-13,-3,1,6.982456140350877,-21,4.543859649122808,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-5.298245614035089,-205.68421052631578,25.771929824561404,37,-175,14,-10.368421052631579,-173,19,-0.2982456140350873,0,0,28.929824561403507,0,0,0,30.43859649122807,0,0,0,0,1,-41.87719298245614,-7.912280701754387],[-3.8245614035087723,-16,-21,-20,-40,-18.684210526315788],[-13,-3,1,5.859649122807017,-21,5.3508771929824555,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-3.6842105263157876,-205.1578947368421,25.94736842105263,35,-175,14,-11.315789473684209,-173,19,-0.6842105263157894,0,0,28.36842105263158,0,0,0,29.94736842105263,0,0,0,0,1,-42.89473684210526,-9.210526315789473],[-4.421052631578947,-16,-21,-20,-40,-18.157894736842103],[-13,-3,1,4.7368421052631575,-21,6.157894736842106,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-2.0701754385964932,-204.6315789473684,26.12280701754386,33,-175,14,-12.263157894736842,-173,19,-1.0701754385964914,0,0,27.80701754385965,0,0,0,29.45614035087719,0,0,0,0,1,-43.91228070175438,-10.508771929824562],[-5.017543859649123,-16,-21,-20,-40,-17.63157894736842],[-13,-3,1,3.614035087719298,-21,6.964912280701753,5,-1,0,-4,12,0,0,0]],[[40,-197,26,-0.45614035087719174,-204.10526315789474,26.29824561403509,31,-175,14,-13.210526315789473,-173,19,-1.4561403508771935,0,0,27.24561403508772,0,0,0,28.964912280701753,0,0,0,0,1,-44.92982456140351,-11.80701754385965],[-5.614035087719298,-16,-21,-20,-40,-17.105263157894736],[-13,-3,1,2.4912280701754383,-21,7.771929824561404,5,-1,0,-4,12,0,0,0]],[[40,-197,26,1.1578947368421026,-203.57894736842104,26.473684210526315,29,-175,14,-14.157894736842106,-173,19,-1.8421052631578956,0,0,26.684210526315788,0,0,0,28.473684210526315,0,0,0,0,1,-45.94736842105263,-13.10526315789474],[-6.210526315789474,-16,-21,-20,-40,-16.578947368421055],[-13,-3,1,1.3684210526315788,-21,8.578947368421051,5,-1,0,-4,12,0,0,0]],[[40,-197,26,2.771929824561404,-203.05263157894737,26.649122807017545,27,-175,14,-15.105263157894736,-173,19,-2.228070175438596,0,0,26.12280701754386,0,0,0,27.982456140350877,0,0,0,0,1,-46.96491228070175,-14.403508771929822],[-6.807017543859649,-16,-21,-20,-40,-16.05263157894737],[-13,-3,1,0.24561403508771917,-21,9.385964912280702,5,-1,0,-4,12,0,0,0]],[[40,-197,26,4.3859649122806985,-202.5263157894737,26.824561403508774,25,-175,14,-16.05263157894737,-173,19,-2.614035087719298,0,0,25.56140350877193,0,0,0,27.49122807017544,0,0,0,0,1,-47.98245614035088,-15.701754385964911],[-7.403508771929825,-16,-21,-20,-40,-15.526315789473685],[-13,-3,1,-0.8771929824561404,-21,10.19298245614035,5,-1,0,-4,12,0,0,0]],[["40",-197,"26","6",-202,"27","23",-175,"14","-17",-173,"19","-3","0",0,"25",0,0,0,"27",0,0,0,0,"1","-49","-17"],["-8","-16","-21","-20","-40","-15"],["-13","-3","1","-2","-21","11","5","-1",0,"-4","12",0,0,0]],[[40,-196.73333333333332,25.566666666666666,6.15,-201.71666666666667,26.55,22.933333333333334,-175,14,-16.7,-173,19,-3.1333333333333333,0,0,24.583333333333332,0,0,0,26.583333333333332,0,0,0,-0.16666666666666666,1,-49,-16.566666666666666],[-8.166666666666666,-16.166666666666668,-21.116666666666667,-19.683333333333334,-39,-14.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-196.2,24.7,6.45,-201.15,25.65,22.8,-175,14,-16.1,-173,19,-3.4,0,0,23.75,0,0,0,25.75,0,0,0,-0.5,1,-49,-15.7],[-8.5,-16.5,-21.35,-19.05,-37,-14.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-195.66666666666666,23.833333333333332,6.75,-200.58333333333334,24.75,22.666666666666668,-175,14,-15.5,-173,19,-3.6666666666666665,0,0,22.916666666666668,0,0,0,24.916666666666668,0,0,0,-0.8333333333333334,1,-49,-14.833333333333334],[-8.833333333333334,-16.833333333333332,-21.583333333333332,-18.416666666666668,-35,-13.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-195.13333333333333,22.96666666666667,7.05,-200.01666666666668,23.85,22.533333333333335,-175,14,-14.9,-173,19,-3.9333333333333336,0,0,22.083333333333332,0,0,0,24.083333333333332,0,0,0,-1.1666666666666667,1,-49,-13.966666666666667],[-9.166666666666666,-17.166666666666668,-21.816666666666666,-17.78333333333333,-33,-13.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-194.6,22.1,7.35,-199.45,22.95,22.4,-175,14,-14.3,-173,19,-4.2,0,0,21.25,0,0,0,23.25,0,0,0,-1.5,1,-49,-13.1],[-9.5,-17.5,-22.05,-17.15,-31,-12.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-194.06666666666666,21.233333333333334,7.65,-198.88333333333333,22.05,22.266666666666666,-175,14,-13.7,-173,19,-4.466666666666667,0,0,20.416666666666668,0,0,0,22.416666666666668,0,0,0,-1.8333333333333333,1,-49,-12.233333333333334],[-9.833333333333334,-17.833333333333332,-22.283333333333335,-16.516666666666666,-29,-12.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-193.53333333333333,20.366666666666667,7.95,-198.31666666666666,21.15,22.133333333333333,-175,14,-13.1,-173,19,-4.733333333333333,0,0,19.583333333333332,0,0,0,21.583333333333332,0,0,0,-2.1666666666666665,1,-49,-11.366666666666667],[-10.166666666666666,-18.166666666666668,-22.516666666666666,-15.883333333333333,-27,-11.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-193,19.5,8.25,-197.75,20.25,22,-175,14,-12.5,-173,19,-5,0,0,18.75,0,0,0,20.75,0,0,0,-2.5,1,-49,-10.5],[-10.5,-18.5,-22.75,-15.25,-25,-11.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-192.46666666666667,18.633333333333333,8.55,-197.18333333333334,19.35,21.866666666666667,-175,14,-11.9,-173,19,-5.266666666666667,0,0,17.916666666666668,0,0,0,19.916666666666668,0,0,0,-2.8333333333333335,1,-49,-9.633333333333333],[-10.833333333333334,-18.833333333333332,-22.983333333333334,-14.616666666666667,-23,-10.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-191.93333333333334,17.766666666666666,8.85,-196.61666666666667,18.45,21.733333333333334,-175,14,-11.3,-173,19,-5.533333333333333,0,0,17.083333333333332,0,0,0,19.083333333333332,0,0,0,-3.1666666666666665,1,-49,-8.766666666666667],[-11.166666666666666,-19.166666666666668,-23.21666666666667,-13.983333333333334,-21,-10.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-191.4,16.9,9.15,-196.05,17.55,21.6,-175,14,-10.7,-173,19,-5.8,0,0,16.25,0,0,0,18.25,0,0,0,-3.5,1,-49,-7.9],[-11.5,-19.5,-23.45,-13.35,-19,-9.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-190.86666666666667,16.03333333333333,9.45,-195.48333333333332,16.65,21.466666666666665,-175,14,-10.1,-173,19,-6.066666666666666,0,0,15.416666666666666,0,0,0,17.416666666666664,0,0,0,-3.8333333333333335,1,-49,-7.033333333333333],[-11.833333333333334,-19.833333333333332,-23.683333333333334,-12.716666666666667,-17,-9.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-190.33333333333334,15.166666666666666,9.75,-194.91666666666666,15.75,21.333333333333332,-175,14,-9.5,-173,19,-6.333333333333334,0,0,14.583333333333334,0,0,0,16.583333333333336,0,0,0,-4.166666666666667,1,-49,-6.166666666666666],[-12.166666666666668,-20.166666666666668,-23.916666666666668,-12.083333333333332,-15,-8.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-189.8,14.3,10.05,-194.35,14.85,21.2,-175,14,-8.9,-173,19,-6.6,0,0,13.75,0,0,0,15.75,0,0,0,-4.5,1,-49,-5.300000000000001],[-12.5,-20.5,-24.15,-11.45,-13,-8.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-189.26666666666668,13.433333333333334,10.35,-193.78333333333333,13.95,21.066666666666666,-175,14,-8.3,-173,19,-6.866666666666667,0,0,12.916666666666666,0,0,0,14.916666666666666,0,0,0,-4.833333333333333,1,-49,-4.433333333333334],[-12.833333333333332,-20.833333333333332,-24.383333333333333,-10.816666666666666,-11,-7.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-188.73333333333332,12.566666666666666,10.65,-193.21666666666667,13.05,20.933333333333334,-175,14,-7.699999999999999,-173,19,-7.133333333333334,0,0,12.083333333333334,0,0,0,14.083333333333334,0,0,0,-5.166666666666667,1,-49,-3.5666666666666664],[-13.166666666666668,-21.166666666666668,-24.616666666666667,-10.183333333333334,-9,-7.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-188.2,11.7,10.95,-192.65,12.15,20.8,-175,14,-7.1,-173,19,-7.4,0,0,11.25,0,0,0,13.25,0,0,0,-5.5,1,-49,-2.6999999999999993],[-13.5,-21.5,-24.85,-9.55,-7,-6.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-187.66666666666666,10.833333333333334,11.25,-192.08333333333334,11.25,20.666666666666668,-175,14,-6.5,-173,19,-7.666666666666667,0,0,10.416666666666666,0,0,0,12.416666666666666,0,0,0,-5.833333333333333,1,-49,-1.833333333333334],[-13.833333333333332,-21.833333333333332,-25.083333333333332,-8.916666666666666,-5,-6.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-187.13333333333333,9.966666666666665,11.55,-191.51666666666668,10.350000000000001,20.53333333333333,-175,14,-5.9,-173,19,-7.933333333333334,0,0,9.583333333333334,0,0,0,11.583333333333334,0,0,0,-6.166666666666667,1,-49,-0.966666666666665],[-14.166666666666668,-22.166666666666668,-25.316666666666666,-8.283333333333333,-3,-5.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-186.6,9.100000000000001,11.85,-190.95,9.45,20.4,-175,14,-5.300000000000001,-173,19,-8.2,0,0,8.75,0,0,0,10.75,0,0,0,-6.5,1,-49,-0.10000000000000142],[-14.5,-22.5,-25.55,-7.65,-1,-5.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-186.06666666666666,8.233333333333334,12.15,-190.38333333333333,8.55,20.266666666666666,-175,14,-4.699999999999999,-173,19,-8.466666666666667,0,0,7.916666666666668,0,0,0,9.916666666666668,0,0,0,-6.833333333333333,1,-49,0.7666666666666657],[-14.833333333333332,-22.833333333333332,-25.78333333333333,-7.0166666666666675,1,-4.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-185.53333333333333,7.366666666666667,12.45,-189.81666666666666,7.649999999999999,20.133333333333333,-175,14,-4.1,-173,19,-8.733333333333334,0,0,7.083333333333332,0,0,0,9.083333333333332,0,0,0,-7.166666666666667,1,-49,1.6333333333333329],[-15.166666666666668,-23.166666666666668,-26.016666666666666,-6.383333333333333,3,-4.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-185,6.5,12.75,-189.25,6.75,20,-175,14,-3.5,-173,19,-9,0,0,6.25,0,0,0,8.25,0,0,0,-7.5,1,-49,2.5],[-15.5,-23.5,-26.25,-5.75,5,-3.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-184.46666666666667,5.633333333333333,13.05,-188.68333333333334,5.850000000000001,19.866666666666667,-175,14,-2.9000000000000004,-173,19,-9.266666666666666,0,0,5.416666666666668,0,0,0,7.416666666666668,0,0,0,-7.833333333333333,1,-49,3.366666666666667],[-15.833333333333332,-23.833333333333332,-26.483333333333334,-5.116666666666667,7,-3.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-183.93333333333334,4.766666666666666,13.35,-188.11666666666667,4.949999999999999,19.733333333333334,-175,14,-2.3000000000000007,-173,19,-9.533333333333333,0,0,4.583333333333332,0,0,0,6.583333333333332,0,0,0,-8.166666666666666,1,-49,4.233333333333334],[-16.166666666666664,-24.166666666666664,-26.71666666666667,-4.4833333333333325,9,-2.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-183.4,3.8999999999999986,13.65,-187.55,4.050000000000001,19.6,-175,14,-1.6999999999999993,-173,19,-9.8,0,0,3.75,0,0,0,5.75,0,0,0,-8.5,1,-49,5.100000000000001],[-16.5,-24.5,-26.95,-3.8500000000000014,11,-2.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-182.86666666666667,3.033333333333335,13.95,-186.98333333333332,3.1499999999999986,19.46666666666667,-175,14,-1.0999999999999996,-173,19,-10.066666666666666,0,0,2.916666666666668,0,0,0,4.916666666666668,0,0,0,-8.833333333333334,1,-49,5.966666666666665],[-16.833333333333336,-24.833333333333336,-27.183333333333334,-3.216666666666665,13,-1.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-182.33333333333334,2.166666666666668,14.25,-186.41666666666666,2.25,19.333333333333332,-175,14,-0.5,-173,19,-10.333333333333332,0,0,2.083333333333332,0,0,0,4.083333333333332,0,0,0,-9.166666666666666,1,-49,6.833333333333332],[-17.166666666666664,-25.166666666666664,-27.416666666666668,-2.583333333333332,15,-1.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-181.8,1.3000000000000007,14.55,-185.85,1.3500000000000014,19.2,-175,14,0.10000000000000142,-173,19,-10.6,0,0,1.25,0,0,0,3.25,0,0,0,-9.5,1,-49,7.699999999999999],[-17.5,-25.5,-27.65,-1.9499999999999993,17,-0.75],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[[40,-181.26666666666668,0.43333333333333357,14.85,-185.28333333333333,0.4499999999999993,19.066666666666666,-175,14,0.6999999999999993,-173,19,-10.866666666666667,0,0,0.41666666666666785,0,0,0,2.416666666666668,0,0,0,-9.833333333333334,1,-49,8.566666666666666],[-17.833333333333336,-25.833333333333336,-27.883333333333333,-1.3166666666666664,19,-0.25],[-13,-3,1,-2,-21,11,5,-1,0,-4,12,0,0,0]],[["40",-181,"0","15",-185,"0","19",-175,"14","1",-173,"19","-11","0",0,"0",0,0,0,"2",0,0,0,"-10","1","-49","9"],["-18","-26","-28","-1","20","0"],["-13","-3","1","-2","-21","11","5","-1",0,"-4","12",0,0,0]]];
    }
    document.getElementById("animBtn2").onclick = function() { 
        if(anim1on){
            document.getElementById("animBtn1").style.backgroundColor = '#7c837c';
            document.getElementById("animBtn1").style.borderColor = '#7c837c';
            anim1on = false;
        }
        anim2on = !anim2on;
        if(anim2on == false){
            document.getElementById("animBtn2").style.backgroundColor = '#7c837c';
            document.getElementById("animBtn2").style.borderColor = '#7c837c';
            if(click == true)
                document.getElementById("loopBtn").click();
            animPlayed = true;
            return;
        }else{
            document.getElementById("animBtn2").style.backgroundColor = '#cccccc';                
            document.getElementById("animBtn2").style.borderColor = '#00FF00';
        }
        play = true;
        playInd = 0;
        if(click == false)
            document.getElementById("loopBtn").click();
        if(anim2on == false){
            document.getElementById("animBtn2").style.backgroundColor = '#7c837c';
            document.getElementById("animBtn2").style.borderColor = '#7c837c';
            if(click == true)
                document.getElementById("loopBtn").click();
        }else{
            document.getElementById("animBtn2").style.backgroundColor = '#cccccc';                
            document.getElementById("animBtn2").style.borderColor = '#00FF00';
        }
        frames = [[["40",180,0,0,180,0,0,180,0,0,180,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-70,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[40,180.75,1.225,0.85,179,0.225,0.4,179.5,0,-0.275,180.5,2.45,0.475,0.1,0,0,0,0.125,0,0,0,0.125,0,0,0,-70,0],[0.425,-0.65,-0.725,-0.5,-0.425,0],[0,0,0,0,-0.35,0,0,0,0,0,0,0,0,0]],[[40,182.25,3.675,2.55,177,0.675,1.2,178.5,0,-0.825,181.5,7.35,1.425,0.3,0,0,0,0.375,0,0,0,0.375,0,0,0,-70,0],[1.275,-1.95,-2.175,-1.5,-1.275,0],[0,0,0,0,-1.05,0,0,0,0,0,0,0,0,0]],[[40,183.75,6.125,4.25,175,1.125,2,177.5,0,-1.375,182.5,12.25,2.375,0.5,0,0,0,0.625,0,0,0,0.625,0,0,0,-70,0],[2.125,-3.25,-3.625,-2.5,-2.125,0],[0,0,0,0,-1.75,0,0,0,0,0,0,0,0,0]],[[40,185.25,8.575,5.95,173,1.575,2.8,176.5,0,-1.925,183.5,17.15,3.325,0.7,0,0,0,0.875,0,0,0,0.875,0,0,0,-70,0],[2.975,-4.55,-5.075,-3.5,-2.975,0],[0,0,0,0,-2.45,0,0,0,0,0,0,0,0,0]],[[40,186.75,11.025,7.65,171,2.025,3.6,175.5,0,-2.475,184.5,22.05,4.275,0.9,0,0,0,1.125,0,0,0,1.125,0,0,0,-70,0],[3.825,-5.85,-6.525,-4.5,-3.825,0],[0,0,0,0,-3.15,0,0,0,0,0,0,0,0,0]],[[40,188.25,13.475,9.35,169,2.475,4.4,174.5,0,-3.025,185.5,26.95,5.225,1.1,0,0,0,1.375,0,0,0,1.375,0,0,0,-70,0],[4.675,-7.15,-7.975,-5.5,-4.675,0],[0,0,0,0,-3.85,0,0,0,0,0,0,0,0,0]],[[40,189.75,15.925,11.05,167,2.925,5.2,173.5,0,-3.575,186.5,31.85,6.175,1.3,0,0,0,1.625,0,0,0,1.625,0,0,0,-70,0],[5.525,-8.45,-9.425,-6.5,-5.525,0],[0,0,0,0,-4.55,0,0,0,0,0,0,0,0,0]],[[40,191.25,18.375,12.75,165,3.375,6,172.5,0,-4.125,187.5,36.75,7.125,1.5,0,0,0,1.875,0,0,0,1.875,0,0,0,-70,0],[6.375,-9.75,-10.875,-7.5,-6.375,0],[0,0,0,0,-5.25,0,0,0,0,0,0,0,0,0]],[[40,192.75,20.825,14.45,163,3.825,6.8,171.5,0,-4.675,188.5,41.65,8.075,1.7,0,0,0,2.125,0,0,0,2.125,0,0,0,-70,0],[7.225,-11.05,-12.325,-8.5,-7.225,0],[0,0,0,0,-5.95,0,0,0,0,0,0,0,0,0]],[[40,194.25,23.275,16.15,161,4.275,7.6,170.5,0,-5.225,189.5,46.55,9.025,1.9,0,0,0,2.375,0,0,0,2.375,0,0,0,-70,0],[8.075,-12.35,-13.775,-9.5,-8.075,0],[0,0,0,0,-6.65,0,0,0,0,0,0,0,0,0]],[[40,195.75,25.725,17.85,159,4.725,8.4,169.5,0,-5.775,190.5,51.45,9.975,2.1,0,0,0,2.625,0,0,0,2.625,0,0,0,-70,0],[8.925,-13.65,-15.225,-10.5,-8.925,0],[0,0,0,0,-7.35,0,0,0,0,0,0,0,0,0]],[[40,197.25,28.175,19.55,157,5.175,9.2,168.5,0,-6.325,191.5,56.35,10.925,2.3,0,0,0,2.875,0,0,0,2.875,0,0,0,-70,0],[9.775,-14.95,-16.675,-11.5,-9.775,0],[0,0,0,0,-8.05,0,0,0,0,0,0,0,0,0]],[[40,198.75,30.625,21.25,155,5.625,10,167.5,0,-6.875,192.5,61.25,11.875,2.5,0,0,0,3.125,0,0,0,3.125,0,0,0,-70,0],[10.625,-16.25,-18.125,-12.5,-10.625,0],[0,0,0,0,-8.75,0,0,0,0,0,0,0,0,0]],[[40,200.25,33.075,22.95,153,6.075,10.8,166.5,0,-7.425,193.5,66.15,12.825,2.7,0,0,0,3.375,0,0,0,3.375,0,0,0,-70,0],[11.475,-17.55,-19.575,-13.5,-11.475,0],[0,0,0,0,-9.45,0,0,0,0,0,0,0,0,0]],[[40,201.75,35.525,24.65,151,6.525,11.6,165.5,0,-7.975,194.5,71.05,13.775,2.9,0,0,0,3.625,0,0,0,3.625,0,0,0,-70,0],[12.325,-18.85,-21.025,-14.5,-12.325,0],[0,0,0,0,-10.15,0,0,0,0,0,0,0,0,0]],[[40,203.25,37.975,26.35,149,6.975,12.4,164.5,0,-8.525,195.5,75.95,14.725,3.1,0,0,0,3.875,0,0,0,3.875,0,0,0,-70,0],[13.175,-20.15,-22.475,-15.5,-13.175,0],[0,0,0,0,-10.85,0,0,0,0,0,0,0,0,0]],[[40,204.75,40.425,28.05,147,7.425,13.2,163.5,0,-9.075,196.5,80.85,15.675,3.3,0,0,0,4.125,0,0,0,4.125,0,0,0,-70,0],[14.025,-21.45,-23.925,-16.5,-14.025,0],[0,0,0,0,-11.55,0,0,0,0,0,0,0,0,0]],[[40,206.25,42.875,29.75,145,7.875,14,162.5,0,-9.625,197.5,85.75,16.625,3.5,0,0,0,4.375,0,0,0,4.375,0,0,0,-70,0],[14.875,-22.75,-25.375,-17.5,-14.875,0],[0,0,0,0,-12.25,0,0,0,0,0,0,0,0,0]],[[40,207.75,45.325,31.45,143,8.325,14.8,161.5,0,-10.175,198.5,90.65,17.575,3.7,0,0,0,4.625,0,0,0,4.625,0,0,0,-70,0],[15.725,-24.05,-26.825,-18.5,-15.725,0],[0,0,0,0,-12.95,0,0,0,0,0,0,0,0,0]],[[40,209.25,47.775,33.15,141,8.775,15.6,160.5,0,-10.725,199.5,95.55,18.525,3.9,0,0,0,4.875,0,0,0,4.875,0,0,0,-70,0],[16.575,-25.35,-28.275,-19.5,-16.575,0],[0,0,0,0,-13.65,0,0,0,0,0,0,0,0,0]],[["40",-150,"49","34",-220,"9","16",-200,0,"-11",-160,"98","19","4",0,0,0,"5",0,0,0,"5",0,0,0,-70,0],["17","-26","-29","-20","-17",0],[0,0,0,0,"-14",0,0,0,0,0,0,0,0,0]],[[40,-150.84337349397592,48.57831325301205,33.53012048192771,-219.15662650602408,9.55421686746988,16.313253012048193,-199.51807228915663,1,-10.542168674698795,-160.48192771084337,97.20481927710843,18.44578313253012,3.9518072289156625,0,0,0,4.9397590361445785,0,0,0,4.9397590361445785,0,0,0,-69.6867469879518,0],[16.91566265060241,-25.843373493975903,-28.783132530120483,-19.518072289156628,-16.626506024096386,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-152.53012048192772,47.734939759036145,32.59036144578313,-217.46987951807228,10.662650602409638,16.93975903614458,-198.55421686746988,3,-9.626506024096386,-161.44578313253012,95.6144578313253,17.337349397590362,3.855421686746988,0,0,0,4.819277108433735,0,0,0,4.819277108433735,0,0,0,-69.06024096385542,0],[16.746987951807228,-25.53012048192771,-28.349397590361445,-18.55421686746988,-15.879518072289157,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-154.21686746987953,46.89156626506024,31.650602409638555,-215.78313253012047,11.771084337349397,17.566265060240966,-197.59036144578315,5,-8.710843373493976,-162.40963855421685,94.02409638554217,16.228915662650603,3.7590361445783134,0,0,0,4.698795180722891,0,0,0,4.698795180722891,0,0,0,-68.43373493975903,0],[16.57831325301205,-25.216867469879517,-27.91566265060241,-17.59036144578313,-15.132530120481928,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-155.90361445783134,46.04819277108434,30.710843373493976,-214.09638554216866,12.879518072289157,18.19277108433735,-196.6265060240964,7,-7.795180722891566,-163.3734939759036,92.43373493975903,15.120481927710843,3.662650602409639,0,0,0,4.578313253012048,0,0,0,4.578313253012048,0,0,0,-67.80722891566265,0],[16.40963855421687,-24.903614457831324,-27.481927710843372,-16.626506024096386,-14.385542168674698,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-157.59036144578315,45.204819277108435,29.771084337349397,-212.40963855421685,13.987951807228916,18.819277108433734,-195.66265060240963,9,-6.879518072289157,-164.33734939759037,90.8433734939759,14.012048192771084,3.566265060240964,0,0,0,4.457831325301205,0,0,0,4.457831325301205,0,0,0,-67.18072289156626,0],[16.240963855421686,-24.59036144578313,-27.048192771084338,-15.662650602409638,-13.638554216867469,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-159.27710843373495,44.36144578313253,28.83132530120482,-210.72289156626505,15.096385542168676,19.44578313253012,-194.6987951807229,11,-5.963855421686747,-165.3012048192771,89.25301204819277,12.903614457831324,3.4698795180722892,0,0,0,4.337349397590361,0,0,0,4.337349397590361,0,0,0,-66.55421686746988,0],[16.072289156626507,-24.277108433734938,-26.6144578313253,-14.698795180722891,-12.891566265060241,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-160.96385542168676,43.51807228915663,27.89156626506024,-209.03614457831324,16.204819277108435,20.072289156626507,-193.73493975903614,13,-5.048192771084337,-166.26506024096386,87.66265060240964,11.795180722891565,3.3734939759036147,0,0,0,4.216867469879518,0,0,0,4.216867469879518,0,0,0,-65.92771084337349,0],[15.903614457831326,-23.96385542168675,-26.180722891566266,-13.734939759036145,-12.144578313253012,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-162.65060240963857,42.674698795180724,26.951807228915662,-207.34939759036143,17.313253012048193,20.69879518072289,-192.7710843373494,15,-4.132530120481928,-167.2289156626506,86.07228915662651,10.686746987951807,3.2771084337349397,0,0,0,4.096385542168675,0,0,0,4.096385542168675,0,0,0,-65.3012048192771,0],[15.734939759036145,-23.650602409638555,-25.746987951807228,-12.771084337349397,-11.397590361445783,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-164.33734939759037,41.83132530120482,26.012048192771083,-205.66265060240963,18.42168674698795,21.325301204819276,-191.80722891566265,17,-3.216867469879518,-168.19277108433735,84.48192771084338,9.578313253012048,3.180722891566265,0,0,0,3.975903614457831,0,0,0,3.975903614457831,0,0,0,-64.67469879518072,0],[15.566265060240964,-23.337349397590362,-25.313253012048193,-11.80722891566265,-10.650602409638555,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-166.02409638554218,40.98795180722892,25.072289156626503,-203.97590361445782,19.53012048192771,21.951807228915662,-190.8433734939759,19,-2.3012048192771086,-169.1566265060241,82.89156626506025,8.46987951807229,3.0843373493975905,0,0,0,3.855421686746988,0,0,0,3.855421686746988,0,0,0,-64.04819277108433,0],[15.397590361445783,-23.02409638554217,-24.87951807228916,-10.843373493975903,-9.903614457831324,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-167.710843373494,40.144578313253014,24.132530120481928,-202.289156626506,20.63855421686747,22.57831325301205,-189.87951807228916,21,-1.3855421686746983,-170.12048192771084,81.3012048192771,7.361445783132529,2.9879518072289155,0,0,0,3.734939759036145,0,0,0,3.734939759036145,0,0,0,-63.42168674698795,0],[15.228915662650602,-22.710843373493976,-24.44578313253012,-9.879518072289157,-9.156626506024097,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-169.3975903614458,39.30120481927711,23.192771084337352,-200.6024096385542,21.746987951807228,23.204819277108435,-188.9156626506024,23,-0.46987951807228967,-171.0843373493976,79.71084337349397,6.253012048192771,2.891566265060241,0,0,0,3.6144578313253013,0,0,0,3.6144578313253013,0,0,0,-62.795180722891565,0],[15.060240963855422,-22.397590361445783,-24.012048192771083,-8.91566265060241,-8.409638554216867,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-171.0843373493976,38.45783132530121,22.253012048192772,-198.9156626506024,22.855421686746986,23.83132530120482,-187.95180722891567,25,0.4457831325301207,-172.04819277108433,78.12048192771084,5.144578313253012,2.7951807228915664,0,0,0,3.4939759036144578,0,0,0,3.4939759036144578,0,0,0,-62.16867469879518,0],[14.891566265060241,-22.08433734939759,-23.57831325301205,-7.951807228915662,-7.662650602409638,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-172.7710843373494,37.6144578313253,21.313253012048193,-197.2289156626506,23.963855421686745,24.457831325301207,-186.9879518072289,27,1.3614457831325293,-173.0120481927711,76.53012048192771,4.0361445783132535,2.6987951807228914,0,0,0,3.3734939759036147,0,0,0,3.3734939759036147,0,0,0,-61.54216867469879,0],[14.72289156626506,-21.771084337349397,-23.144578313253014,-6.9879518072289155,-6.91566265060241,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-174.4578313253012,36.7710843373494,20.373493975903614,-195.5421686746988,25.072289156626507,25.08433734939759,-186.02409638554218,29,2.2771084337349397,-173.97590361445782,74.93975903614458,2.927710843373493,2.602409638554217,0,0,0,3.253012048192771,0,0,0,3.253012048192771,0,0,0,-60.915662650602414,0],[14.55421686746988,-21.457831325301207,-22.710843373493976,-6.024096385542169,-6.168674698795181,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-176.14457831325302,35.9277108433735,19.433734939759034,-193.85542168674698,26.180722891566266,25.710843373493976,-185.06024096385542,31,3.19277108433735,-174.93975903614458,73.34939759036145,1.8192771084337345,2.5060240963855422,0,0,0,3.1325301204819276,0,0,0,3.1325301204819276,0,0,0,-60.28915662650603,0],[14.385542168674698,-21.144578313253014,-22.277108433734938,-5.060240963855422,-5.421686746987952,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-177.83132530120483,35.084337349397586,18.49397590361446,-192.16867469879517,27.289156626506024,26.337349397590362,-184.09638554216866,33,4.108433734939759,-175.90361445783134,71.75903614457832,0.7108433734939759,2.4096385542168672,0,0,0,3.0120481927710845,0,0,0,3.0120481927710845,0,0,0,-59.66265060240964,0],[14.216867469879517,-20.83132530120482,-21.843373493975903,-4.096385542168674,-4.674698795180722,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-179.51807228915663,34.24096385542168,17.55421686746988,-190.48192771084337,28.397590361445783,26.963855421686745,-183.13253012048193,35,5.024096385542169,-176.86746987951807,70.16867469879517,-0.39759036144578275,2.3132530120481927,0,0,0,2.891566265060241,0,0,0,2.891566265060241,0,0,0,-59.036144578313255,0],[14.048192771084338,-20.518072289156628,-21.40963855421687,-3.1325301204819276,-3.927710843373495,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-181.20481927710844,33.39759036144578,16.6144578313253,-188.79518072289156,29.50602409638554,27.59036144578313,-182.16867469879517,37,5.939759036144579,-177.83132530120483,68.57831325301206,-1.5060240963855414,2.216867469879518,0,0,0,2.7710843373493974,0,0,0,2.7710843373493974,0,0,0,-58.40963855421687,0],[13.879518072289157,-20.204819277108435,-20.97590361445783,-2.1686746987951793,-3.1807228915662655,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-182.89156626506025,32.554216867469876,15.674698795180724,-187.10843373493975,30.6144578313253,28.216867469879517,-181.20481927710844,39,6.85542168674699,-178.79518072289156,66.98795180722891,-2.6144578313253,2.120481927710843,0,0,0,2.6506024096385543,0,0,0,2.6506024096385543,0,0,0,-57.78313253012048,0],[13.710843373493976,-19.89156626506024,-20.542168674698793,-1.2048192771084345,-2.433734939759036,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-184.57831325301206,31.710843373493976,14.734939759036145,-185.42168674698794,31.72289156626506,28.843373493975903,-180.24096385542168,41,7.7710843373493965,-179.75903614457832,65.3975903614458,-3.7228915662650586,2.024096385542169,0,0,0,2.5301204819277108,0,0,0,2.5301204819277108,0,0,0,-57.1566265060241,0],[13.542168674698795,-19.57831325301205,-20.10843373493976,-0.2409638554216862,-1.6867469879518069,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-186.26506024096386,30.867469879518072,13.795180722891565,-183.73493975903614,32.83132530120482,29.46987951807229,-179.27710843373495,43,8.686746987951807,-180.72289156626505,63.80722891566265,-4.831325301204821,1.927710843373494,0,0,0,2.4096385542168677,0,0,0,2.4096385542168677,0,0,0,-56.53012048192771,0],[13.373493975903614,-19.265060240963855,-19.674698795180724,0.7228915662650586,-0.9397590361445793,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-187.95180722891567,30.02409638554217,12.85542168674699,-182.04819277108433,33.93975903614458,30.096385542168676,-178.3132530120482,45,9.602409638554217,-181.6867469879518,62.21686746987952,-5.939759036144579,1.8313253012048194,0,0,0,2.289156626506024,0,0,0,2.289156626506024,0,0,0,-55.903614457831324,0],[13.204819277108435,-18.951807228915662,-19.240963855421686,1.6867469879518069,-0.19277108433734824,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-189.63855421686748,29.180722891566266,11.91566265060241,-180.36144578313252,35.04819277108434,30.722891566265062,-177.34939759036143,47,10.518072289156628,-182.65060240963857,60.626506024096386,-7.048192771084338,1.7349397590361444,0,0,0,2.1686746987951806,0,0,0,2.1686746987951806,0,0,0,-55.27710843373494,0],[13.036144578313253,-18.63855421686747,-18.807228915662648,2.650602409638555,0.5542168674698793,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-191.32530120481928,28.337349397590362,10.975903614457831,-178.67469879518072,36.1566265060241,31.34939759036145,-176.3855421686747,49,11.433734939759034,-183.6144578313253,59.036144578313255,-8.156626506024097,1.6385542168674698,0,0,0,2.0481927710843375,0,0,0,2.0481927710843375,0,0,0,-54.65060240963855,0],[12.867469879518072,-18.325301204819276,-18.373493975903614,3.6144578313253,1.3012048192771068,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-193.0120481927711,27.49397590361446,10.036144578313252,-176.9879518072289,37.265060240963855,31.97590361445783,-175.42168674698794,51,12.349397590361445,-184.57831325301206,57.44578313253012,-9.265060240963855,1.5421686746987953,0,0,0,1.927710843373494,0,0,0,1.927710843373494,0,0,0,-54.024096385542165,0],[12.698795180722891,-18.012048192771083,-17.93975903614458,4.578313253012048,2.048192771084338,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-194.6987951807229,26.650602409638555,9.096385542168676,-175.3012048192771,38.373493975903614,32.60240963855422,-174.4578313253012,53,13.265060240963855,-185.5421686746988,55.855421686746986,-10.373493975903614,1.4457831325301207,0,0,0,1.8072289156626504,0,0,0,1.8072289156626504,0,0,0,-53.39759036144578,0],[12.53012048192771,-17.69879518072289,-17.50602409638554,5.542168674698797,2.7951807228915655,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-196.3855421686747,25.80722891566265,8.156626506024097,-173.6144578313253,39.48192771084337,33.22891566265061,-173.49397590361446,55,14.180722891566266,-186.50602409638554,54.265060240963855,-11.481927710843372,1.3493975903614457,0,0,0,1.6867469879518073,0,0,0,1.6867469879518073,0,0,0,-52.77108433734939,0],[12.361445783132531,-17.385542168674696,-17.072289156626503,6.506024096385541,3.5421686746987966,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-198.0722891566265,24.96385542168675,7.216867469879517,-171.9277108433735,40.59036144578313,33.85542168674699,-172.53012048192772,57,15.096385542168676,-187.46987951807228,52.674698795180724,-12.590361445783131,1.2530120481927711,0,0,0,1.5662650602409638,0,0,0,1.5662650602409638,0,0,0,-52.14457831325301,0],[12.192771084337348,-17.072289156626503,-16.63855421686747,7.46987951807229,4.289156626506024,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-199.75903614457832,24.120481927710845,6.277108433734941,-170.24096385542168,41.69879518072289,34.48192771084337,-171.56626506024097,59,16.012048192771083,-188.43373493975903,51.08433734939759,-13.69879518072289,1.1566265060240966,0,0,0,1.4457831325301207,0,0,0,1.4457831325301207,0,0,0,-51.51807228915663,0],[12.024096385542169,-16.759036144578314,-16.204819277108435,8.433734939759034,5.036144578313252,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-201.44578313253012,23.27710843373494,5.337349397590362,-168.55421686746988,42.80722891566265,35.10843373493976,-170.6024096385542,61,16.927710843373493,-189.3975903614458,49.493975903614455,-14.807228915662648,1.0602409638554215,0,0,0,1.3253012048192772,0,0,0,1.3253012048192772,0,0,0,-50.89156626506024,0],[11.855421686746988,-16.44578313253012,-15.771084337349398,9.397590361445783,5.783132530120483,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-203.13253012048193,22.433734939759034,4.397590361445783,-166.86746987951807,43.91566265060241,35.734939759036145,-169.63855421686748,63,17.843373493975903,-190.36144578313252,47.903614457831324,-15.915662650602407,0.963855421686747,0,0,0,1.2048192771084336,0,0,0,1.2048192771084336,0,0,0,-50.265060240963855,0],[11.686746987951807,-16.132530120481928,-15.337349397590362,10.361445783132531,6.53012048192771,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-204.81927710843374,21.59036144578313,3.4578313253012034,-165.18072289156626,45.024096385542165,36.36144578313253,-168.67469879518072,65,18.759036144578314,-191.32530120481928,46.31325301204819,-17.024096385542165,0.8674698795180724,0,0,0,1.0843373493975905,0,0,0,1.0843373493975905,0,0,0,-49.63855421686747,0],[11.518072289156628,-15.819277108433734,-14.903614457831326,11.325301204819276,7.277108433734941,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-206.50602409638554,20.746987951807228,2.5180722891566276,-163.49397590361446,46.13253012048193,36.98795180722892,-167.710843373494,67,19.674698795180724,-192.289156626506,44.72289156626506,-18.13253012048193,0.7710843373493974,0,0,0,0.9638554216867474,0,0,0,0.9638554216867474,0,0,0,-49.01204819277108,0],[11.349397590361445,-15.506024096385541,-14.46987951807229,12.28915662650602,8.024096385542169,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-208.19277108433735,19.903614457831324,1.5783132530120483,-161.80722891566265,47.24096385542169,37.614457831325296,-166.74698795180723,69,20.59036144578313,-193.25301204819277,43.13253012048193,-19.24096385542169,0.6746987951807228,0,0,0,0.8433734939759034,0,0,0,0.8433734939759034,0,0,0,-48.385542168674704,0],[11.180722891566266,-15.19277108433735,-14.036144578313253,13.253012048192772,8.771084337349397,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-209.87951807228916,19.06024096385542,0.6385542168674689,-160.12048192771084,48.34939759036145,38.24096385542168,-165.7831325301205,71,21.506024096385545,-194.2168674698795,41.54216867469879,-20.34939759036145,0.5783132530120483,0,0,0,0.7228915662650603,0,0,0,0.7228915662650603,0,0,0,-47.75903614457832,0],[11.012048192771084,-14.879518072289157,-13.602409638554217,14.216867469879517,9.518072289156628,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-211.56626506024097,18.216867469879517,-0.3012048192771104,-158.43373493975903,49.45783132530121,38.86746987951807,-164.81927710843374,73,22.42168674698795,-195.18072289156626,39.95180722891566,-21.457831325301207,0.4819277108433737,0,0,0,0.6024096385542173,0,0,0,0.6024096385542173,0,0,0,-47.13253012048193,0],[10.843373493975903,-14.566265060240964,-13.168674698795181,15.180722891566262,10.265060240963855,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-213.25301204819277,17.373493975903614,-1.2409638554216897,-156.74698795180723,50.566265060240966,39.493975903614455,-163.85542168674698,75,23.33734939759036,-196.14457831325302,38.36144578313253,-22.566265060240966,0.3855421686746987,0,0,0,0.48192771084337327,0,0,0,0.48192771084337327,0,0,0,-46.506024096385545,0],[10.674698795180724,-14.25301204819277,-12.734939759036145,16.144578313253014,11.012048192771083,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-214.93975903614458,16.53012048192771,-2.180722891566262,-155.06024096385542,51.674698795180724,40.12048192771084,-162.89156626506025,77,24.253012048192772,-197.10843373493975,36.7710843373494,-23.674698795180724,0.28915662650602414,0,0,0,0.3614457831325302,0,0,0,0.3614457831325302,0,0,0,-45.87951807228916,0],[10.506024096385541,-13.939759036144578,-12.301204819277107,17.10843373493976,11.759036144578314,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-216.6265060240964,15.686746987951807,-3.1204819277108413,-153.3734939759036,52.78313253012048,40.74698795180723,-161.9277108433735,79,25.16867469879518,-198.0722891566265,35.18072289156626,-24.783132530120483,0.19277108433734957,0,0,0,0.24096385542168708,0,0,0,0.24096385542168708,0,0,0,-45.25301204819277,0],[10.337349397590362,-13.626506024096386,-11.867469879518072,18.072289156626503,12.506024096385541,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-218.3132530120482,14.843373493975903,-4.060240963855421,-151.6867469879518,53.89156626506024,41.373493975903614,-160.96385542168673,81,26.084337349397593,-199.03614457831327,33.59036144578313,-25.89156626506024,0.09638554216867457,0,0,0,0.1204819277108431,0,0,0,0.1204819277108431,0,0,0,-44.626506024096386,0],[10.168674698795181,-13.313253012048193,-11.433734939759034,19.036144578313255,13.253012048192772,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[["40",-220,"14","-5",-150,"55","42",-160,"83","27",-200,"32","-27","0",0,0,0,"0",0,0,0,"0",0,0,0,"-44",0],["10","-13","-11","20","14",0],[0,0,0,0,"-14",0,0,0,0,0,0,0,0,0]],[[40,-219.10256410256412,14.333333333333334,-4.512820512820513,-150.89743589743588,54.62820512820513,41.42307692307692,-160.51282051282053,82.21794871794872,26.474358974358974,-199.48717948717947,33,-26.628205128205128,0.038461538461538464,0,0,0,0.05128205128205128,0,0,0,0.05128205128205128,0,0,0,-43.82051282051282,0],[9.884615384615385,-13,-11,19.48717948717949,13.653846153846153,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-217.30769230769232,15,-3.5384615384615383,-152.69230769230768,53.88461538461539,40.26923076923077,-161.53846153846155,80.65384615384616,25.423076923076923,-198.46153846153845,35,-25.884615384615383,0.11538461538461539,0,0,0,0.15384615384615385,0,0,0,0.15384615384615385,0,0,0,-43.46153846153846,0],[9.653846153846153,-13,-11,18.46153846153846,12.961538461538462,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-215.51282051282053,15.666666666666666,-2.5641025641025643,-154.48717948717947,53.14102564102564,39.11538461538461,-162.56410256410257,79.08974358974359,24.371794871794872,-197.43589743589743,37,-25.141025641025642,0.19230769230769232,0,0,0,0.2564102564102564,0,0,0,0.2564102564102564,0,0,0,-43.1025641025641,0],[9.423076923076923,-13,-11,17.435897435897434,12.26923076923077,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-213.71794871794873,16.333333333333332,-1.5897435897435899,-156.28205128205127,52.3974358974359,37.96153846153846,-163.5897435897436,77.52564102564102,23.32051282051282,-196.4102564102564,39,-24.397435897435898,0.2692307692307692,0,0,0,0.358974358974359,0,0,0,0.358974358974359,0,0,0,-42.743589743589745,0],[9.192307692307692,-13,-11,16.41025641025641,11.576923076923077,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-211.92307692307693,17,-0.615384615384615,-158.07692307692307,51.65384615384615,36.80769230769231,-164.6153846153846,75.96153846153847,22.26923076923077,-195.3846153846154,41,-23.653846153846153,0.34615384615384615,0,0,0,0.46153846153846156,0,0,0,0.46153846153846156,0,0,0,-42.38461538461539,0],[8.961538461538462,-13,-11,15.384615384615385,10.884615384615385,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-210.12820512820514,17.666666666666668,0.3589743589743586,-159.87179487179486,50.91025641025641,35.65384615384615,-165.64102564102564,74.3974358974359,21.21794871794872,-194.35897435897436,43,-22.91025641025641,0.4230769230769231,0,0,0,0.5641025641025641,0,0,0,0.5641025641025641,0,0,0,-42.02564102564102,0],[8.73076923076923,-13,-11,14.358974358974358,10.192307692307693,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-208.33333333333334,18.333333333333332,1.333333333333333,-161.66666666666666,50.166666666666664,34.5,-166.66666666666666,72.83333333333333,20.166666666666668,-193.33333333333334,45,-22.166666666666668,0.5,0,0,0,0.6666666666666666,0,0,0,0.6666666666666666,0,0,0,-41.666666666666664,0],[8.5,-13,-11,13.333333333333332,9.5,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-206.53846153846155,19,2.3076923076923075,-163.46153846153845,49.42307692307692,33.34615384615385,-167.69230769230768,71.26923076923077,19.115384615384613,-192.30769230769232,47,-21.423076923076923,0.5769230769230769,0,0,0,0.7692307692307693,0,0,0,0.7692307692307693,0,0,0,-41.30769230769231,0],[8.26923076923077,-13,-11,12.307692307692307,8.807692307692307,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-204.74358974358975,19.666666666666668,3.282051282051283,-165.25641025641025,48.67948717948718,32.19230769230769,-168.71794871794873,69.7051282051282,18.064102564102562,-191.28205128205127,49,-20.67948717948718,0.6538461538461539,0,0,0,0.8717948717948718,0,0,0,0.8717948717948718,0,0,0,-40.94871794871795,0],[8.038461538461538,-13,-11,11.282051282051283,8.115384615384615,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-202.94871794871796,20.333333333333332,4.256410256410257,-167.05128205128204,47.93589743589744,31.03846153846154,-169.74358974358975,68.14102564102564,17.01282051282051,-190.25641025641025,51,-19.935897435897438,0.7307692307692307,0,0,0,0.9743589743589743,0,0,0,0.9743589743589743,0,0,0,-40.58974358974359,0],[7.8076923076923075,-13,-11,10.256410256410257,7.423076923076923,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-201.15384615384616,21,5.23076923076923,-168.84615384615384,47.19230769230769,29.884615384615387,-170.76923076923077,66.57692307692308,15.961538461538462,-189.23076923076923,53,-19.192307692307693,0.8076923076923077,0,0,0,1.0769230769230769,0,0,0,1.0769230769230769,0,0,0,-40.23076923076923,0],[7.576923076923077,-13,-11,9.23076923076923,6.730769230769231,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-199.35897435897436,21.666666666666668,6.205128205128204,-170.64102564102564,46.44871794871795,28.73076923076923,-171.7948717948718,65.01282051282051,14.91025641025641,-188.2051282051282,55,-18.44871794871795,0.8846153846153846,0,0,0,1.1794871794871795,0,0,0,1.1794871794871795,0,0,0,-39.87179487179487,0],[7.346153846153847,-13,-11,8.205128205128204,6.038461538461538,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-197.56410256410257,22.333333333333336,7.179487179487179,-172.43589743589743,45.705128205128204,27.576923076923077,-172.82051282051282,63.44871794871795,13.85897435897436,-187.17948717948718,57,-17.705128205128204,0.9615384615384616,0,0,0,1.2820512820512822,0,0,0,1.2820512820512822,0,0,0,-39.51282051282051,0],[7.115384615384615,-13,-11,7.179487179487179,5.346153846153847,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-195.76923076923077,23,8.153846153846153,-174.23076923076923,44.96153846153846,26.423076923076923,-173.84615384615384,61.88461538461539,12.807692307692308,-186.15384615384616,59,-16.96153846153846,1.0384615384615385,0,0,0,1.3846153846153846,0,0,0,1.3846153846153846,0,0,0,-39.15384615384615,0],[6.884615384615385,-13,-11,6.153846153846153,4.653846153846153,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-193.97435897435898,23.666666666666664,9.128205128205128,-176.02564102564102,44.217948717948715,25.26923076923077,-174.87179487179486,60.32051282051282,11.756410256410257,-185.12820512820514,61,-16.217948717948715,1.1153846153846154,0,0,0,1.4871794871794872,0,0,0,1.4871794871794872,0,0,0,-38.794871794871796,0],[6.653846153846153,-13,-11,5.128205128205128,3.9615384615384617,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-192.17948717948718,24.333333333333336,10.102564102564102,-177.82051282051282,43.47435897435898,24.115384615384617,-175.8974358974359,58.756410256410255,10.705128205128204,-184.1025641025641,63,-15.474358974358974,1.1923076923076923,0,0,0,1.5897435897435896,0,0,0,1.5897435897435896,0,0,0,-38.43589743589744,0],[6.423076923076923,-13,-11,4.102564102564102,3.26923076923077,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-190.3846153846154,25,11.076923076923077,-179.6153846153846,42.730769230769226,22.96153846153846,-176.92307692307693,57.19230769230769,9.653846153846153,-183.07692307692307,65,-14.73076923076923,1.2692307692307692,0,0,0,1.6923076923076923,0,0,0,1.6923076923076923,0,0,0,-38.07692307692308,0],[6.1923076923076925,-13,-11,3.0769230769230766,2.5769230769230766,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-188.5897435897436,25.666666666666664,12.051282051282051,-181.4102564102564,41.98717948717949,21.807692307692307,-177.94871794871796,55.628205128205124,8.602564102564102,-182.05128205128204,67,-13.987179487179487,1.3461538461538463,0,0,0,1.794871794871795,0,0,0,1.794871794871795,0,0,0,-37.717948717948715,0],[5.961538461538462,-13,-11,2.051282051282051,1.884615384615385,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-186.7948717948718,26.333333333333336,13.025641025641026,-183.2051282051282,41.243589743589745,20.653846153846153,-178.97435897435898,54.06410256410257,7.551282051282051,-181.02564102564102,69,-13.243589743589743,1.4230769230769231,0,0,0,1.8974358974358974,0,0,0,1.8974358974358974,0,0,0,-37.35897435897436,0],[5.730769230769231,-13,-11,1.0256410256410255,1.1923076923076916,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-185,27,14,-185,40.5,19.5,-180,52.5,6.5,-180,71,-12.5,1.5,0,0,0,2,0,0,0,2,0,0,0,-37,0],[5.5,-13,-11,0,0.5,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-183.2051282051282,27.666666666666664,14.974358974358974,-186.7948717948718,39.756410256410255,18.346153846153847,-181.02564102564102,50.93589743589744,5.448717948717949,-178.97435897435898,73,-11.756410256410257,1.5769230769230769,0,0,0,2.1025641025641026,0,0,0,2.1025641025641026,0,0,0,-36.64102564102564,0],[5.269230769230769,-13,-11,-1.0256410256410255,-0.19230769230769162,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-181.4102564102564,28.333333333333336,15.948717948717949,-188.5897435897436,39.01282051282051,17.192307692307693,-182.05128205128204,49.37179487179487,4.397435897435898,-177.94871794871796,75,-11.012820512820513,1.6538461538461537,0,0,0,2.2051282051282053,0,0,0,2.2051282051282053,0,0,0,-36.282051282051285,0],[5.038461538461538,-13,-11,-2.051282051282051,-0.884615384615385,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-179.6153846153846,29,16.923076923076923,-190.3846153846154,38.269230769230774,16.03846153846154,-183.07692307692307,47.80769230769231,3.3461538461538467,-176.92307692307693,77,-10.26923076923077,1.7307692307692308,0,0,0,2.3076923076923075,0,0,0,2.3076923076923075,0,0,0,-35.92307692307692,0],[4.8076923076923075,-13,-11,-3.0769230769230766,-1.5769230769230766,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-177.82051282051282,29.666666666666664,17.897435897435898,-192.17948717948718,37.52564102564102,14.884615384615383,-184.1025641025641,46.243589743589745,2.2948717948717956,-175.8974358974359,79,-9.525641025641026,1.8076923076923077,0,0,0,2.41025641025641,0,0,0,2.41025641025641,0,0,0,-35.56410256410256,0],[4.576923076923077,-13,-11,-4.102564102564102,-2.26923076923077,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-176.02564102564102,30.333333333333332,18.871794871794872,-193.97435897435898,36.782051282051285,13.73076923076923,-185.12820512820514,44.67948717948718,1.2435897435897445,-174.87179487179486,81,-8.782051282051281,1.8846153846153846,0,0,0,2.5128205128205128,0,0,0,2.5128205128205128,0,0,0,-35.205128205128204,0],[4.346153846153846,-13,-11,-5.128205128205128,-2.96153846153846,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-174.23076923076923,31,19.846153846153847,-195.76923076923077,36.03846153846154,12.576923076923077,-186.15384615384616,43.11538461538461,0.1923076923076934,-173.84615384615384,83,-8.03846153846154,1.9615384615384615,0,0,0,2.6153846153846154,0,0,0,2.6153846153846154,0,0,0,-34.84615384615385,0],[4.115384615384615,-13,-11,-6.153846153846153,-3.6538461538461533,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-172.43589743589743,31.666666666666668,20.82051282051282,-197.56410256410257,35.294871794871796,11.423076923076923,-187.17948717948718,41.55128205128205,-0.8589743589743577,-172.82051282051282,85,-7.294871794871796,2.0384615384615383,0,0,0,2.717948717948718,0,0,0,2.717948717948718,0,0,0,-34.48717948717949,0],[3.884615384615385,-13,-11,-7.179487179487179,-4.346153846153847,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-170.64102564102564,32.33333333333333,21.794871794871796,-199.35897435897436,34.55128205128205,10.26923076923077,-188.2051282051282,39.98717948717949,-1.9102564102564088,-171.7948717948718,87,-6.551282051282051,2.1153846153846154,0,0,0,2.8205128205128207,0,0,0,2.8205128205128207,0,0,0,-34.128205128205124,0],[3.653846153846154,-13,-11,-8.205128205128204,-5.03846153846154,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-168.84615384615384,33,22.76923076923077,-201.15384615384616,33.80769230769231,9.115384615384613,-189.23076923076923,38.42307692307692,-2.96153846153846,-170.76923076923077,89,-5.807692307692307,2.1923076923076925,0,0,0,2.923076923076923,0,0,0,2.923076923076923,0,0,0,-33.769230769230774,0],[3.4230769230769234,-13,-11,-9.23076923076923,-5.73076923076923,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-167.05128205128204,33.66666666666667,23.743589743589745,-202.94871794871796,33.06410256410257,7.96153846153846,-190.25641025641025,36.85897435897436,-4.0128205128205146,-169.74358974358975,91,-5.064102564102566,2.269230769230769,0,0,0,3.0256410256410255,0,0,0,3.0256410256410255,0,0,0,-33.41025641025641,0],[3.1923076923076925,-13,-11,-10.256410256410255,-6.423076923076923,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-165.25641025641025,34.33333333333333,24.71794871794872,-204.74358974358975,32.32051282051282,6.807692307692307,-191.28205128205127,35.294871794871796,-5.064102564102562,-168.71794871794873,93,-4.320512820512821,2.3461538461538463,0,0,0,3.128205128205128,0,0,0,3.128205128205128,0,0,0,-33.05128205128205,0],[2.9615384615384617,-13,-11,-11.282051282051281,-7.115384615384617,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-163.46153846153845,35,25.692307692307693,-206.53846153846155,31.576923076923077,5.653846153846153,-192.30769230769232,33.73076923076923,-6.115384615384613,-167.69230769230768,95,-3.5769230769230766,2.423076923076923,0,0,0,3.230769230769231,0,0,0,3.230769230769231,0,0,0,-32.69230769230769,0],[2.730769230769231,-13,-11,-12.307692307692307,-7.807692307692307,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-161.66666666666666,35.66666666666667,26.666666666666668,-208.33333333333334,30.833333333333332,4.5,-193.33333333333334,32.166666666666664,-7.166666666666664,-166.66666666666666,97,-2.833333333333332,2.5,0,0,0,3.3333333333333335,0,0,0,3.3333333333333335,0,0,0,-32.333333333333336,0],[2.5,-13,-11,-13.333333333333336,-8.5,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-159.87179487179486,36.33333333333333,27.641025641025642,-210.12820512820514,30.08974358974359,3.3461538461538467,-194.35897435897436,30.602564102564102,-8.217948717948715,-165.64102564102564,99,-2.089743589743591,2.576923076923077,0,0,0,3.4358974358974357,0,0,0,3.4358974358974357,0,0,0,-31.974358974358974,0],[2.269230769230769,-13,-11,-14.358974358974358,-9.192307692307693,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-158.0769230769231,37,28.615384615384613,-211.9230769230769,29.346153846153847,2.1923076923076934,-195.3846153846154,29.03846153846154,-9.269230769230766,-164.6153846153846,101,-1.3461538461538467,2.6538461538461537,0,0,0,3.5384615384615383,0,0,0,3.5384615384615383,0,0,0,-31.615384615384613,0],[2.0384615384615383,-13,-11,-15.384615384615387,-9.884615384615383,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-156.28205128205127,37.66666666666667,29.58974358974359,-213.71794871794873,28.602564102564102,1.03846153846154,-196.4102564102564,27.47435897435897,-10.320512820512818,-163.5897435897436,103,-0.6025641025641022,2.730769230769231,0,0,0,3.641025641025641,0,0,0,3.641025641025641,0,0,0,-31.256410256410255,0],[1.8076923076923084,-13,-11,-16.41025641025641,-10.576923076923077,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-154.4871794871795,38.33333333333333,30.564102564102562,-215.5128205128205,27.858974358974358,-0.1153846153846132,-197.43589743589743,25.91025641025641,-11.371794871794869,-162.56410256410257,105,0.1410256410256423,2.8076923076923075,0,0,0,3.7435897435897436,0,0,0,3.7435897435897436,0,0,0,-30.897435897435898,0],[1.5769230769230766,-13,-11,-17.435897435897438,-11.26923076923077,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-152.69230769230768,39,31.53846153846154,-217.30769230769232,27.115384615384617,-1.2692307692307665,-198.46153846153845,24.346153846153847,-12.42307692307692,-161.53846153846155,107,0.8846153846153832,2.8846153846153846,0,0,0,3.8461538461538463,0,0,0,3.8461538461538463,0,0,0,-30.53846153846154,0],[1.3461538461538467,-13,-11,-18.46153846153846,-11.96153846153846,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-150.8974358974359,39.66666666666667,32.51282051282051,-219.1025641025641,26.371794871794872,-2.42307692307692,-199.4871794871795,22.782051282051285,-13.474358974358971,-160.5128205128205,109,1.6282051282051277,2.9615384615384617,0,0,0,3.948717948717949,0,0,0,3.948717948717949,0,0,0,-30.17948717948718,0],[1.115384615384615,-13,-11,-19.48717948717949,-12.653846153846153,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[["40",-150,"40","33",-220,"26","-3",-200,"22","-14",-160,"110","2","3",0,0,0,"4",0,0,0,"4",0,0,0,"-30",0],["1","-13","-11","-20","-13",0],[0,0,0,0,"-14",0,0,0,0,0,0,0,0,0]],[[40,-151,39.55714285714286,32.41428571428571,-219,26.428571428571427,-2.642857142857143,-199.44285714285715,22.385714285714286,-13.228571428571428,-160.57142857142858,109.15714285714286,1.2857142857142856,2.9571428571428573,0,0,0,3.942857142857143,0,0,0,3.942857142857143,0,0,0,-30.285714285714285,-0.2],[1,-12.771428571428572,-10.857142857142858,-19.428571428571427,-12.67142857142857,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-153,38.67142857142857,31.242857142857144,-217,27.285714285714285,-1.9285714285714286,-198.32857142857142,23.15714285714286,-11.685714285714285,-161.71428571428572,107.47142857142858,-0.1428571428571428,2.8714285714285714,0,0,0,3.8285714285714287,0,0,0,3.8285714285714287,0,0,0,-30.857142857142858,-0.6],[1,-12.314285714285715,-10.571428571428571,-18.285714285714285,-12.014285714285714,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-155,37.785714285714285,30.071428571428573,-215,28.142857142857142,-1.2142857142857142,-197.21428571428572,23.928571428571427,-10.142857142857142,-162.85714285714286,105.78571428571429,-1.5714285714285716,2.7857142857142856,0,0,0,3.7142857142857144,0,0,0,3.7142857142857144,0,0,0,-31.428571428571427,-1],[1,-11.857142857142858,-10.285714285714286,-17.142857142857142,-11.357142857142858,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-157,36.9,28.9,-213,29,-0.5,-196.1,24.7,-8.6,-164,104.1,-3,2.7,0,0,0,3.6,0,0,0,3.6,0,0,0,-32,-1.4],[1,-11.4,-10,-16,-10.7,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-159,36.01428571428571,27.728571428571428,-211,29.857142857142858,0.2142857142857144,-194.9857142857143,25.47142857142857,-7.057142857142857,-165.14285714285714,102.41428571428571,-4.428571428571429,2.6142857142857143,0,0,0,3.4857142857142858,0,0,0,3.4857142857142858,0,0,0,-32.57142857142857,-1.8],[1,-10.942857142857143,-9.714285714285714,-14.857142857142858,-10.042857142857143,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-161,35.128571428571426,26.557142857142857,-209,30.714285714285715,0.9285714285714284,-193.87142857142857,26.242857142857144,-5.514285714285714,-166.28571428571428,100.72857142857143,-5.857142857142857,2.5285714285714285,0,0,0,3.3714285714285714,0,0,0,3.3714285714285714,0,0,0,-33.142857142857146,-2.2],[1,-10.485714285714286,-9.428571428571429,-13.714285714285715,-9.385714285714286,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-163,34.24285714285714,25.385714285714286,-207,31.57142857142857,1.6428571428571432,-192.75714285714287,27.014285714285712,-3.9714285714285715,-167.42857142857142,99.04285714285714,-7.2857142857142865,2.442857142857143,0,0,0,3.257142857142857,0,0,0,3.257142857142857,0,0,0,-33.714285714285715,-2.6],[1,-10.028571428571428,-9.142857142857142,-12.571428571428571,-8.728571428571428,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-165,33.357142857142854,24.214285714285715,-205,32.42857142857143,2.3571428571428568,-191.64285714285714,27.785714285714285,-2.428571428571429,-168.57142857142858,97.35714285714286,-8.714285714285714,2.357142857142857,0,0,0,3.142857142857143,0,0,0,3.142857142857143,0,0,0,-34.285714285714285,-3],[1,-9.571428571428571,-8.857142857142858,-11.428571428571429,-8.071428571428571,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-167,32.471428571428575,23.042857142857144,-203,33.285714285714285,3.071428571428571,-190.52857142857144,28.557142857142857,-0.8857142857142861,-169.71428571428572,95.67142857142858,-10.142857142857142,2.2714285714285714,0,0,0,3.0285714285714285,0,0,0,3.0285714285714285,0,0,0,-34.857142857142854,-3.4],[1,-9.114285714285714,-8.571428571428571,-10.285714285714286,-7.414285714285715,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-169,31.585714285714285,21.871428571428574,-201,34.14285714285714,3.7857142857142856,-189.4142857142857,29.32857142857143,0.6571428571428566,-170.85714285714286,93.98571428571428,-11.571428571428571,2.185714285714286,0,0,0,2.9142857142857146,0,0,0,2.9142857142857146,0,0,0,-35.42857142857143,-3.8],[1,-8.657142857142858,-8.285714285714285,-9.142857142857142,-6.757142857142857,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-171,30.7,20.7,-199,35,4.5,-188.3,30.1,2.1999999999999993,-172,92.3,-13,2.1,0,0,0,2.8,0,0,0,2.8,0,0,0,-36,-4.2],[1,-8.2,-8,-8,-6.1,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-173,29.814285714285717,19.52857142857143,-197,35.85714285714286,5.2142857142857135,-187.18571428571428,30.871428571428574,3.7428571428571438,-173.14285714285714,90.61428571428571,-14.428571428571427,2.0142857142857142,0,0,0,2.685714285714286,0,0,0,2.685714285714286,0,0,0,-36.57142857142857,-4.6],[1,-7.742857142857143,-7.714285714285714,-6.857142857142858,-5.442857142857143,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-175,28.92857142857143,18.357142857142858,-195,36.714285714285715,5.928571428571429,-186.07142857142858,31.642857142857142,5.285714285714285,-174.28571428571428,88.92857142857143,-15.857142857142858,1.9285714285714286,0,0,0,2.571428571428571,0,0,0,2.571428571428571,0,0,0,-37.142857142857146,-5],[1,-7.285714285714286,-7.428571428571429,-5.7142857142857135,-4.7857142857142865,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-177,28.042857142857144,17.185714285714283,-193,37.57142857142857,6.642857142857142,-184.95714285714286,32.41428571428571,6.828571428571429,-175.42857142857142,87.24285714285715,-17.285714285714285,1.8428571428571427,0,0,0,2.4571428571428573,0,0,0,2.4571428571428573,0,0,0,-37.714285714285715,-5.4],[1,-6.828571428571428,-7.142857142857142,-4.571428571428571,-4.128571428571428,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-179,27.15714285714286,16.014285714285716,-191,38.42857142857143,7.357142857142858,-183.84285714285716,33.18571428571428,8.37142857142857,-176.57142857142858,85.55714285714285,-18.714285714285715,1.7571428571428571,0,0,0,2.3428571428571425,0,0,0,2.3428571428571425,0,0,0,-38.285714285714285,-5.8],[1,-6.371428571428571,-6.857142857142857,-3.428571428571427,-3.4714285714285715,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-181,26.271428571428572,14.842857142857142,-189,39.285714285714285,8.071428571428571,-182.72857142857143,33.957142857142856,9.914285714285715,-177.71428571428572,83.87142857142857,-20.142857142857142,1.6714285714285715,0,0,0,2.2285714285714286,0,0,0,2.2285714285714286,0,0,0,-38.85714285714286,-6.2],[1,-5.914285714285715,-6.571428571428571,-2.2857142857142847,-2.814285714285715,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-183,25.385714285714286,13.67142857142857,-187,40.14285714285714,8.785714285714286,-181.6142857142857,34.72857142857143,11.457142857142856,-178.85714285714286,82.18571428571428,-21.571428571428573,1.5857142857142856,0,0,0,2.1142857142857143,0,0,0,2.1142857142857143,0,0,0,-39.42857142857143,-6.6],[1,-5.457142857142857,-6.285714285714286,-1.1428571428571423,-2.1571428571428566,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-185,24.5,12.5,-185,41,9.5,-180.5,35.5,13,-180,80.5,-23,1.5,0,0,0,2,0,0,0,2,0,0,0,-40,-7],[1,-5,-6,0,-1.5,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-187,23.614285714285714,11.32857142857143,-183,41.85714285714286,10.214285714285714,-179.3857142857143,36.27142857142857,14.542857142857144,-181.14285714285714,78.81428571428572,-24.428571428571427,1.4142857142857144,0,0,0,1.8857142857142857,0,0,0,1.8857142857142857,0,0,0,-40.57142857142857,-7.4],[1,-4.542857142857143,-5.714285714285714,1.1428571428571423,-0.8428571428571434,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-189,22.728571428571428,10.157142857142858,-181,42.714285714285715,10.928571428571429,-178.27142857142857,37.042857142857144,16.085714285714285,-182.28571428571428,77.12857142857143,-25.857142857142858,1.3285714285714285,0,0,0,1.7714285714285714,0,0,0,1.7714285714285714,0,0,0,-41.14285714285714,-7.8],[1,-4.085714285714285,-5.428571428571429,2.2857142857142847,-0.18571428571428505,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-191,21.84285714285714,8.985714285714284,-179,43.57142857142857,11.642857142857142,-177.15714285714284,37.81428571428572,17.62857142857143,-183.42857142857142,75.44285714285715,-27.285714285714285,1.2428571428571429,0,0,0,1.657142857142857,0,0,0,1.657142857142857,0,0,0,-41.714285714285715,-8.2],[1,-3.628571428571428,-5.142857142857143,3.428571428571427,0.47142857142857153,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-193,20.957142857142856,7.814285714285713,-177,44.42857142857143,12.357142857142858,-176.04285714285714,38.58571428571429,19.17142857142857,-184.57142857142858,73.75714285714287,-28.714285714285715,1.1571428571428573,0,0,0,1.5428571428571427,0,0,0,1.5428571428571427,0,0,0,-42.285714285714285,-8.6],[1,-3.171428571428571,-4.857142857142857,4.571428571428573,1.1285714285714281,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-195,20.071428571428573,6.642857142857142,-175,45.285714285714285,13.071428571428573,-174.92857142857142,39.35714285714286,20.714285714285715,-185.71428571428572,72.07142857142857,-30.142857142857146,1.0714285714285714,0,0,0,1.4285714285714284,0,0,0,1.4285714285714284,0,0,0,-42.85714285714286,-9],[1,-2.7142857142857135,-4.571428571428571,5.714285714285715,1.7857142857142865,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-197,19.185714285714287,5.4714285714285715,-173,46.14285714285714,13.785714285714285,-173.81428571428572,40.12857142857143,22.25714285714286,-186.85714285714286,70.38571428571429,-31.57142857142857,0.9857142857142858,0,0,0,1.3142857142857145,0,0,0,1.3142857142857145,0,0,0,-43.42857142857143,-9.4],[1,-2.257142857142858,-4.285714285714286,6.857142857142858,2.442857142857143,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-199,18.3,4.300000000000001,-171,47,14.5,-172.7,40.9,23.799999999999997,-188,68.7,-33,0.8999999999999999,0,0,0,1.2000000000000002,0,0,0,1.2000000000000002,0,0,0,-44,-9.8],[1,-1.8000000000000007,-4,8,3.1000000000000014,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-201,17.414285714285715,3.12857142857143,-169,47.85714285714286,15.214285714285715,-171.5857142857143,41.67142857142857,25.34285714285714,-189.14285714285714,67.0142857142857,-34.42857142857143,0.8142857142857145,0,0,0,1.0857142857142859,0,0,0,1.0857142857142859,0,0,0,-44.57142857142857,-10.2],[1,-1.3428571428571434,-3.7142857142857144,9.142857142857142,3.7571428571428562,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-203,16.52857142857143,1.9571428571428555,-167,48.714285714285715,15.928571428571427,-170.47142857142856,42.44285714285714,26.885714285714286,-190.28571428571428,65.32857142857142,-35.857142857142854,0.7285714285714286,0,0,0,0.9714285714285715,0,0,0,0.9714285714285715,0,0,0,-45.14285714285714,-10.6],[1,-0.8857142857142861,-3.428571428571429,10.285714285714285,4.414285714285715,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-205,15.642857142857142,0.7857142857142847,-165,49.57142857142857,16.642857142857142,-169.35714285714286,43.214285714285715,28.42857142857143,-191.42857142857142,63.642857142857146,-37.285714285714285,0.6428571428571428,0,0,0,0.8571428571428572,0,0,0,0.8571428571428572,0,0,0,-45.714285714285715,-11],[1,-0.4285714285714288,-3.1428571428571432,11.428571428571427,5.071428571428573,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-207,14.757142857142856,-0.3857142857142861,-163,50.42857142857143,17.357142857142858,-168.24285714285713,43.98571428571428,29.971428571428568,-192.57142857142856,61.957142857142856,-38.714285714285715,0.5571428571428569,0,0,0,0.7428571428571429,0,0,0,0.7428571428571429,0,0,0,-46.285714285714285,-11.4],[1,0.02857142857142847,-2.8571428571428577,12.57142857142857,5.728571428571428,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-209,13.87142857142857,-1.557142857142857,-161,51.285714285714285,18.071428571428573,-167.12857142857143,44.75714285714285,31.514285714285712,-193.71428571428572,60.27142857142857,-40.142857142857146,0.47142857142857153,0,0,0,0.6285714285714286,0,0,0,0.6285714285714286,0,0,0,-46.85714285714286,-11.8],[1,0.48571428571428577,-2.571428571428571,13.714285714285715,6.385714285714286,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-211,12.985714285714284,-2.7285714285714278,-159,52.14285714285714,18.785714285714285,-166.0142857142857,45.528571428571425,33.05714285714286,-194.85714285714286,58.58571428571429,-41.57142857142857,0.3857142857142857,0,0,0,0.5142857142857142,0,0,0,0.5142857142857142,0,0,0,-47.42857142857143,-12.2],[1,0.9428571428571431,-2.2857142857142865,14.857142857142854,7.0428571428571445,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-213,12.100000000000001,-3.8999999999999986,-157,53,19.5,-164.9,46.3,34.6,-196,56.9,-43,0.2999999999999998,0,0,0,0.3999999999999999,0,0,0,0.3999999999999999,0,0,0,-48,-12.6],[1,1.4000000000000004,-2,16,7.699999999999999,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-215,11.214285714285715,-5.071428571428569,-155,53.85714285714286,20.214285714285715,-163.78571428571428,47.07142857142857,36.142857142857146,-197.14285714285714,55.214285714285715,-44.42857142857143,0.2142857142857144,0,0,0,0.2857142857142856,0,0,0,0.2857142857142856,0,0,0,-48.57142857142857,-13],[1,1.8571428571428577,-1.7142857142857135,17.142857142857146,8.357142857142858,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-217,10.32857142857143,-6.24285714285714,-153,54.714285714285715,20.928571428571427,-162.67142857142858,47.84285714285714,37.68571428571428,-198.28571428571428,53.52857142857143,-45.857142857142854,0.12857142857142856,0,0,0,0.17142857142857126,0,0,0,0.17142857142857126,0,0,0,-49.14285714285714,-13.4],[1,2.314285714285715,-1.4285714285714288,18.285714285714285,9.014285714285716,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[[40,-219,9.442857142857143,-7.414285714285711,-151,55.57142857142857,21.642857142857142,-161.55714285714285,48.614285714285714,39.22857142857143,-199.42857142857144,51.84285714285714,-47.285714285714285,0.042857142857142705,0,0,0,0.05714285714285694,0,0,0,0.05714285714285694,0,0,0,-49.714285714285715,-13.8],[1,2.7714285714285722,-1.1428571428571423,19.42857142857143,9.67142857142857,0],[0,0,0,0,-14,0,0,0,0,0,0,0,0,0]],[["40",-220,"9","-8",-150,"56","22",-161,"49","40",-200,"51","-48","0",0,0,0,"0",0,0,0,"0",0,0,0,"-50","-14"],["1","3","-1","20","10",0],[0,0,0,0,"-14",0,0,0,0,0,0,0,0,0]]];
    };

    //TODO add slider

    modelViewMatrixLoc = gl.getUniformLocation(program, "modelViewMatrix");
    projectionMatrixLoc = gl.getUniformLocation( program, "projectionMatrix" );//ortho(-10, 10, -10, 10, -10, 10);
    normalMatrixLoc = gl.getUniformLocation( program, "normalMatrix" );

    gl.uniform4fv( gl.getUniformLocation(program, 
        "ambientProduct"),flatten(ambientProduct) );
    gl.uniform4fv( gl.getUniformLocation(program, 
        "diffuseProduct"),flatten(diffuseProduct) );
    gl.uniform4fv( gl.getUniformLocation(program, 
        "specularProduct"),flatten(specularProduct) );	
    gl.uniform4fv( gl.getUniformLocation(program, 
        "lightPosition"),flatten(lightPosition) );
    gl.uniform1f( gl.getUniformLocation(program, 
        "shininess"),materialShininess );
    initNodes();
    render();
}

function divideFrames() {
    //for(var i = 0; i <1; i++){
    var lastFrame = JSON.parse(JSON.stringify(frames.pop())); 
    //}
    var firstFrame = [JSON.parse(JSON.stringify(frames[frames.length - 1][0]))   ,    JSON.parse(JSON.stringify(frames[frames.length - 1][1])) ,      JSON.parse(JSON.stringify(frames[frames.length - 1][2])) ];

    var maxDifference = 0;
    for(var i = 0; i < firstFrame.length; i++) {
        for(var j = 0; j < firstFrame[i].length; j++) {
            if( Math.abs((firstFrame[i][j]) - (lastFrame[i][j])) > Math.abs(maxDifference)){
                maxDifference = (firstFrame[i][j]) - (lastFrame[i][j]);
            }  
        }
    }
    console.log("max:" , maxDifference%360);
    console.log("first:" , firstFrame);
    console.log("last:" , lastFrame[0][1]);
    for(var i = 1; i < Math.abs(maxDifference%360); i=i+2) {
        var tempTheta = [];
        var tempYtheta = [];
        var tempXtheta = [];
      
        for(var j = 0; j < firstFrame[0].length; j++) {
            if(j == 1 || j == 4 || j == 7 || j == 10){
                tempTheta.push(i * (Math.abs(firstFrame[0][j]) - Math.abs(lastFrame[0][j]) ) / Math.abs(maxDifference%360)  + parseFloat(firstFrame[0][j]) );
            }else if(j == 13 || j == 17 || j == 21){
                tempTheta.push(i * (Math.abs(lastFrame[0][j]) - Math.abs(firstFrame[0][j]))  / Math.abs(maxDifference%360)  + parseFloat(firstFrame[0][j]) );
            }else {
                tempTheta.push(i * ((lastFrame[0][j]) - (firstFrame[0][j]) )  / Math.abs(maxDifference%360) + parseFloat(firstFrame[0][j]) );
            }
        }
        console.log("BURAYA ",-20%360);
        for(var j = 0; j < firstFrame[1].length; j++) {
            //ÇOK DOĞRU SAKIN BOZMA
            //console.log(j, " max diff: ", maxDifference);
            //console.log(j, " diff: ", ((lastFrame[1][j]) - (firstFrame[1][j])) );
            tempYtheta.push(i * ((lastFrame[1][j]) - (firstFrame[1][j]))  / Math.abs(maxDifference%360)  + parseFloat(firstFrame[1][j]) );
        }
        for(var j = 0; j < firstFrame[2].length; j++) {
            //console.log(j, " max diff: ", maxDifference);
            //console.log(j, " diff: ", ((lastFrame[2][j]) - (firstFrame[2][j])) );
            tempXtheta.push(i * ((lastFrame[2][j]) - (firstFrame[2][j]))  / Math.abs(maxDifference%360)  + parseFloat(firstFrame[2][j]) );
        }
        //for(var k = 0; k < 1; k++){
            frames.push(JSON.parse(JSON.stringify([JSON.parse(JSON.stringify(tempTheta)), JSON.parse(JSON.stringify(tempYtheta)), JSON.parse(JSON.stringify(tempXtheta))])));
        //}
    }
    frames.push(lastFrame);
}  

//----------------------------------------------------------------------------

function base() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * BASE_HEIGHT, 0.0 ), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix); 
    //var instanceMatrix = translate( 0.0, 0.5 * BASE_HEIGHT, 0.0 );
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv(modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[0][0], objStartEnd[0][1]);
}

//----------------------------------------------------------------------------

function leftUpperArm() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult(translate( 0.0, LEFT_UPPER_ARM_HEIGHT, 0.0 ),s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[17][0], objStartEnd[17][1]);
}

//----------------------------------------------------------------------------

function leftLowerArm() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( -LEFT_LOWER_ARM_WIDTH/2, LEFT_LOWER_ARM_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[15][0], objStartEnd[15][1]);
}

//----------------------------------------------------------------------------

function leftHand() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.46, LEFT_HAND_HEIGHT , 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[14][0], objStartEnd[14][1]);
}

//----------------------------------------------------------------------------

function rightUpperArm() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.0, RIGHT_UPPER_ARM_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[4][0], objStartEnd[4][1]);
}

//----------------------------------------------------------------------------

function rightLowerArm() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( -RIGHT_LOWER_ARM_WIDTH/2, RIGHT_LOWER_ARM_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[5][0], objStartEnd[5][1]);
}

//----------------------------------------------------------------------------

function rightHand() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.46, RIGHT_HAND_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[6][0], objStartEnd[6][1]);
}
//----------------------------------------------------------------------------

function leftUpperLeg() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult(translate( 0.0, LEFT_UPPER_LEG_HEIGHT, 0.0 ),s);    
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[18][0], objStartEnd[18][1]);
}

//----------------------------------------------------------------------------

function leftLowerLeg() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.0, LEFT_LOWER_LEG_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[16][0], objStartEnd[16][1]);
}

//----------------------------------------------------------------------------

function leftFoot() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult(translate( 0.56, LEFT_FOOT_HEIGHT, 0.0 ),s);    
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[13][0], objStartEnd[13][1]);
}

//----------------------------------------------------------------------------

function rightUpperLeg() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.0, RIGHT_UPPER_LEG_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[1][0], objStartEnd[1][1]);
}

//----------------------------------------------------------------------------

function rightLowerLeg() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.0, RIGHT_LOWER_LEG_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[3][0], objStartEnd[3][1]);
}

//----------------------------------------------------------------------------

function rightFoot() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( 0.56, RIGHT_FOOT_HEIGHT, 0.0), s);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[2][0], objStartEnd[2][1]);
}

//----------------------------------------------------------------------------

function rightNeck1() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( RIGHT_NECK1_WIDTH, 0.0, 0.0), s);
    instanceMatrix = mult( rotate(180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[9][0], objStartEnd[9][1]);
}

//----------------------------------------------------------------------------

function rightNeck2() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * RIGHT_NECK2_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[10][0], objStartEnd[10][1]);
}

//----------------------------------------------------------------------------

function rightNeck3() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * RIGHT_NECK3_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[11][0], objStartEnd[11][1]);
}

//----------------------------------------------------------------------------

function rightHead() {
    var s = scale4(6, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * RIGHT_HEAD_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[12][0], objStartEnd[12][1]);
}


//----------------------------------------------------------------------------

function middleNeck1() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( MIDDLE_NECK1_WIDTH, 0.0, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[9][0], objStartEnd[9][1]);
}

//----------------------------------------------------------------------------

function middleNeck2() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * MIDDLE_NECK2_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[10][0], objStartEnd[10][1]);
}

//----------------------------------------------------------------------------

function middleNeck3() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * MIDDLE_NECK3_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[11][0], objStartEnd[11][1]);
}

//----------------------------------------------------------------------------

function middleHead() {
    var s = scale4(6, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * MIDDLE_HEAD_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[12][0], objStartEnd[12][1]);
}

//----------------------------------------------------------------------------

function leftNeck1() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( LEFT_NECK1_WIDTH, 0.0, 0.0), s);
    instanceMatrix = mult( rotate(180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[9][0], objStartEnd[9][1]);
}

//----------------------------------------------------------------------------

function leftNeck2() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * LEFT_NECK2_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[10][0], objStartEnd[10][1]);
}

//----------------------------------------------------------------------------

function leftNeck3() {
    var s = scale4(4, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * LEFT_NECK3_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[11][0], objStartEnd[11][1]);
}

//----------------------------------------------------------------------------

function leftHead() {
    var s = scale4(6, 6, 4);
    var instanceMatrix = mult( translate( 0.0, 0.5 * LEFT_HEAD_HEIGHT, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[12][0], objStartEnd[12][1]);
}

//----------------------------------------------------------------------------

function upperTail()
{
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( -UPPER_TAIL_WIDTH, 0.0, 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[7][0], objStartEnd[7][1]);
}

//----------------------------------------------------------------------------

function lowerTail() {
    var s = scale4(4, 4, 4);
    var instanceMatrix = mult( translate( -LOWER_TAIL_WIDTH , LOWER_TAIL_HEIGHT / 2 , 0.0), s);
    instanceMatrix = mult( rotate( 180, 0, 1, 0 ), instanceMatrix);
    var t = mult(modelViewMatrix, instanceMatrix);
    gl.uniformMatrix4fv( modelViewMatrixLoc,  false, flatten(t) );
    gl.drawArrays( gl.TRIANGLES, objStartEnd[8][0], objStartEnd[8][1]);
}

//----------------------------------------------------------------------------
//TODO add actual func

function createNode(child, sibling, transform, renderPart, initPart) {
    var node = {
      child: child,
      sibling: sibling,
      transform: transform,
      renderPart: renderPart,
      initPart: initPart,
    }
    return node;
  }

function initBase(){
    initMatrix = rotate(theta[Base], 0, 1, 0 );
    initMatrix = mult(initMatrix, rotate(thetaY[5], 0, 0, 1 ));
    hydra["Base"] = createNode("LeftUpperArm", null, initMatrix, base, initBase);
    return initMatrix;
}

function initLeftUpperArm(){
    initMatrix  = translate(0.0,  0.0, 0.0);
    initMatrix = mult(initMatrix, translate(-BASE_WIDTH/2 - 0.37, -0.55, BASE_LENGTH/2 - 0.3));
    initMatrix  = mult(initMatrix, rotate(theta[LeftUpperArm], 0, 0, 1) );
    hydra["LeftUpperArm"] = createNode("LeftLowerArm", "RightUpperArm", initMatrix, leftUpperArm, initLeftUpperArm); 
    return initMatrix;
}

function initLeftLowerArm(){
    initMatrix = translate(-0.20, LEFT_UPPER_ARM_HEIGHT + BASE_HEIGHT/2 - 0.90, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[LeftLowerArm], 0, 0, 1 ));
    hydra["LeftLowerArm"] = createNode("LeftHand", null, initMatrix, leftLowerArm, initLeftLowerArm); 
    return initMatrix;
}

function initLeftHand(){
    initMatrix = translate(-0.20, LEFT_LOWER_ARM_HEIGHT + 0.15, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[LeftHand], 0, 0, 1 ));
    hydra["LeftHand"] = createNode(null, null, initMatrix, leftHand, initLeftHand); 
    return initMatrix;
}

function initRightUpperArm(){
    initMatrix  = translate(0.0,  0, 0.0);
    initMatrix = mult(initMatrix, translate(-BASE_WIDTH/2 - 0.37, -0.55, -BASE_LENGTH/2 + 0.3));
    initMatrix  = mult(initMatrix, rotate(theta[RightUpperArm], 0, 0, 1) );
    hydra["RightUpperArm"] = createNode("RightLowerArm", "LeftUpperLeg", initMatrix, rightUpperArm, initRightUpperArm); 
    return initMatrix;
}

function initRightLowerArm(){
    initMatrix = translate(-0.20, RIGHT_UPPER_ARM_HEIGHT + BASE_HEIGHT/2 - 0.90, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[RightLowerArm], 0, 0, 1 ));
    hydra["RightLowerArm"] = createNode("RightHand", null, initMatrix, rightLowerArm, initRightLowerArm); 
    return initMatrix;
}

function initRightHand(){
    initMatrix = translate(-0.20, RIGHT_LOWER_ARM_HEIGHT + 0.15, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[RightHand], 0, 0, 1 ));
    hydra["RightHand"] = createNode(null, null, initMatrix, rightHand, initRightHand); 
    return initMatrix;
}

function initLeftUpperLeg(){
    initMatrix  = translate(0.0, 0.0, 0.0);
    initMatrix = mult(initMatrix, translate(BASE_WIDTH/2 + 1.2, -0.35, BASE_LENGTH/2 - 0.3));
    initMatrix  = mult(initMatrix, rotate(theta[LeftUpperLeg], 0, 0, 1) );
    hydra["LeftUpperLeg"] = createNode("LeftLowerLeg", "RightUpperLeg", initMatrix, leftUpperLeg, initLeftUpperLeg); 
    return initMatrix;
}

function initLeftLowerLeg(){
    initMatrix = translate(-0.13, LEFT_UPPER_LEG_HEIGHT + BASE_HEIGHT/2 - 0.90, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[LeftLowerLeg], 0, 0, 1 ));
    hydra["LeftLowerLeg"] = createNode("LeftFoot", null, initMatrix, leftLowerLeg, initLeftLowerLeg); 
    return initMatrix;
}

function initLeftFoot(){
    initMatrix = translate(0.1, LEFT_LOWER_LEG_HEIGHT + 0.40, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[LeftFoot], 0, 0, 1 ));
    hydra["LeftFoot"] = createNode(null, null, initMatrix, leftFoot, initLeftFoot); 
    return initMatrix;
}

function initRightUpperLeg(){
    initMatrix  = translate(0.0,  0, 0.0);
    initMatrix = mult(initMatrix, translate(BASE_WIDTH/2 + 1.2, -0.35, -BASE_LENGTH/2 + 0.3));
    initMatrix  = mult(initMatrix, rotate(theta[RightUpperLeg], 0, 0, 1) );
    hydra["RightUpperLeg"] = createNode("RightLowerLeg", "RightNeck1", initMatrix, rightUpperLeg, initRightUpperLeg); 
    return initMatrix;
}

function initRightLowerLeg(){
    initMatrix = translate(-0.13, RIGHT_UPPER_LEG_HEIGHT + BASE_HEIGHT/2 - 0.90, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[RightLowerLeg], 0, 0, 1 ));
    hydra["RightLowerLeg"] = createNode("RightFoot", null, initMatrix, rightLowerLeg, initRightLowerLeg); 
    return initMatrix;
}

function initRightFoot(){
    initMatrix = translate(0.1, RIGHT_LOWER_LEG_HEIGHT + 0.40, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[RightFoot], 0, 0, 1 ));
    hydra["RightFoot"] = createNode(null, null, initMatrix, rightFoot, initRightFoot); 
    return initMatrix;
}

function initRightNeck1(){
    initMatrix  = translate(0.0,  0, 0.0);
    initMatrix = mult(initMatrix, translate(-BASE_WIDTH + 1.7 , BASE_HEIGHT + 0.5, -BASE_LENGTH + 1.5));
    initMatrix = mult(initMatrix, rotate(-40, 0, 1, 0 ));
    initMatrix = mult(initMatrix, rotate(thetaX[0], 1, 0, 0 ));
    initMatrix  = mult(initMatrix, rotate(theta[RightNeck1], 0, 0, 1) );
    hydra["RightNeck1"] = createNode("RightNeck2", "MiddleNeck1", initMatrix, rightNeck1, initRightNeck1); 
    return initMatrix;
}

function initRightNeck2(){
    initMatrix = translate(-1.8, MIDDLE_NECK2_HEIGHT - 0.1, 0.0); 
    initMatrix = mult(initMatrix, rotate(thetaX[8], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[RightNeck2], 0, 0, 1 ));
    hydra["RightNeck2"] = createNode("RightNeck3", null, initMatrix, rightNeck2, initRightNeck2); 
    return initMatrix;
}

function initRightNeck3(){
    initMatrix = translate(0.12, RIGHT_NECK2_HEIGHT + 0.3, 0.0); 
    initMatrix = mult(initMatrix, rotate(thetaX[11], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[RightNeck3], 0, 0, 1 ));
    hydra["RightNeck3"] = createNode("RightHead", null, initMatrix, rightNeck3, initRightNeck3); 
    return initMatrix;
}

function initRightHead(){
    initMatrix = translate(-0.3, RIGHT_NECK3_HEIGHT, 0.0); 
    initMatrix = mult(initMatrix, rotate(thetaX[5], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(thetaY[2], 0, 1, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[RightHead], 0, 0, 1 ));
    hydra["RightHead"] = createNode(null, null, initMatrix, rightHead, initRightHead); 
    return initMatrix;
}

 function initMiddleNeck1(){
    initMatrix  = translate(0.0,  0, 0.0);
    initMatrix = mult(initMatrix, translate(-BASE_WIDTH + 1 , BASE_HEIGHT + 1.2, 0));
    initMatrix = mult(initMatrix, rotate(thetaX[1], 1, 0, 0 ));
    initMatrix  = mult(initMatrix, rotate(theta[MiddleNeck1], 0, 0, 1) );
    hydra["MiddleNeck1"] = createNode("MiddleNeck2", "LeftNeck1", initMatrix, middleNeck1, initMiddleNeck1); 
    return initMatrix;
}

function initMiddleNeck2(){
    initMatrix = translate(-1.8, MIDDLE_NECK1_HEIGHT - 0.9, 0.0); 
    initMatrix = mult(initMatrix, rotate(thetaX[7], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[MiddleNeck2], 0, 0, 1 ));
    hydra["MiddleNeck2"] = createNode("MiddleNeck3", null, initMatrix, middleNeck2, initMiddleNeck2); 
    return initMatrix;
}

function initMiddleNeck3(){
    initMatrix = translate(0.1, MIDDLE_NECK2_HEIGHT + 0.2, 0.0); 
    initMatrix = mult(initMatrix, rotate(thetaX[10], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[MiddleNeck3], 0, 0, 1 ));
    hydra["MiddleNeck3"] = createNode("MiddleHead", null, initMatrix, middleNeck3, initMiddleNeck3); 
    return initMatrix;
}

function initMiddleHead(){
    initMatrix = translate(-0.1, MIDDLE_NECK3_HEIGHT, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[MiddleHead], 0, 0, 1 ));
    initMatrix = mult(initMatrix, rotate(thetaX[4], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(thetaY[1], 0, 1, 0 ));
    hydra["MiddleHead"] = createNode(null, null, initMatrix, middleHead, initMiddleHead); 
    return initMatrix;
}

function initLeftNeck1(){
    initMatrix  = translate(0.0, 0.0, 0.0);
    initMatrix = mult(initMatrix, translate(-BASE_WIDTH + 1.7, BASE_HEIGHT + 0.5, BASE_LENGTH -1.5 ));
    initMatrix = mult(initMatrix, rotate(40, 0, 1, 0 ));
    initMatrix = mult(initMatrix, rotate(thetaX[2], 1, 0, 0 ));
    initMatrix  = mult(initMatrix, rotate(theta[LeftNeck1], 0, 0, 1) );
    hydra["LeftNeck1"] = createNode("LeftNeck2", "UpperTail", initMatrix, leftNeck1, initLeftNeck1); 
    return initMatrix;
}

function initLeftNeck2(){
    initMatrix = translate(-1.8, LEFT_NECK2_HEIGHT - 0.1, 0.0); 
    initMatrix = mult(initMatrix, rotate(thetaX[6], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[LeftNeck2], 0, 0, 1 ));
    hydra["LeftNeck2"] = createNode("LeftNeck3", null, initMatrix, leftNeck2, initLeftNeck2); 
    return initMatrix;
} 

function initLeftNeck3(){
    initMatrix = translate(0.12, LEFT_NECK2_HEIGHT + 0.3, 0.0); 
    initMatrix = mult(initMatrix, rotate(thetaX[9], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[LeftNeck3], 0, 0, 1 ));
    hydra["LeftNeck3"] = createNode("LeftHead", null, initMatrix, leftNeck3, initLeftNeck3); 
    return initMatrix;
} 

function initLeftHead(){
    initMatrix = translate(-0.3, LEFT_NECK3_HEIGHT, 0.0); 
    initMatrix = mult(initMatrix, rotate(theta[LeftHead], 0, 0, 1 ));
    initMatrix = mult(initMatrix, rotate(thetaX[3], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(thetaY[0], 0, 1, 0 ));
    hydra["LeftHead"] = createNode(null, null, initMatrix, leftHead, initLeftHead); 
    return initMatrix;
} 

function initUpperTail(){
    initMatrix  = translate(0.0,  0.0, 0.0);
    initMatrix = mult(initMatrix, translate(BASE_WIDTH + 0.6, BASE_HEIGHT - 0.7 , 0));
    //initMatrix = mult(initMatrix, rotate(thetaX[12], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(thetaY[3], 0, 1, 0 ));
    initMatrix  = mult(initMatrix, rotate(theta[UpperTail], 0, 0, 1) );
    hydra["UpperTail"] = createNode("LowerTail", null, initMatrix, upperTail, initUpperTail); 
    return initMatrix;
}

function initLowerTail(){
    initMatrix = translate(UPPER_TAIL_WIDTH + 1.1, 1.22, 0.0); 
    //initMatrix = mult(initMatrix, rotate(thetaX[13], 1, 0, 0 ));
    initMatrix = mult(initMatrix, rotate(thetaY[4], 0, 1, 0 ));
    initMatrix = mult(initMatrix, rotate(theta[LowerTail], 0, 0, 1 ));
    hydra["LowerTail"] = createNode(null, null, initMatrix, lowerTail, initLowerTail); 
    return initMatrix;
} 
//TODO add init func

function initNodes(){
    initBase();
    initLeftUpperArm();
    initLeftLowerArm(); 
    initLeftHand();
    initRightUpperArm();
    initRightLowerArm();
    initRightHand();
    initLeftUpperLeg();
    initLeftLowerLeg(); 
    initLeftFoot();
    initRightUpperLeg();
    initRightLowerLeg();
    initRightFoot();
    initRightNeck1();
    initRightNeck2();
    initRightNeck3();
    initRightHead();
    initMiddleNeck1();
    initMiddleNeck2();
    initMiddleNeck3();
    initMiddleHead();
    initLeftNeck1();
    initLeftNeck2();
    initLeftNeck3();
    initLeftHead();
    initUpperTail();
    initLowerTail();
}
//TODO add to init nodes

function traverseTree(bodyPart){
    if(bodyPart == null){return;}
    if(modelViewMatrix != null) stack.push(modelViewMatrix);
    
    modelViewMatrix = mult(modelViewMatrix, hydra[bodyPart].initPart());
    hydra[bodyPart].renderPart();
    if (hydra[bodyPart].child != null) {
        traverseTree(hydra[bodyPart].child);
    }
    modelViewMatrix = stack.pop();
    if (hydra[bodyPart].sibling != null) {
        traverseTree(hydra[bodyPart].sibling); 
    }
}

function readObj(object){
    vertices = [];
    vertIndices = [];
    var countO = 0;
    var lastCountO = 0;
    var obj = document.getElementById(object).text;
    var lines = obj.split("\n");
    for(var i = 0; i < lines.length; i++){
        lines[i] = lines[i].trim();
        if(lines[i].charAt(0) == "o"){//To calculate the indices of each body part in points array
            countO *= 6;
            if(countO != 0)
                objStartEnd.push([lastCountO, countO]);
            lastCountO += countO;
            countO = 0;
        }
        if(lines[i].charAt(0) == "v" && lines[i].charAt(1) == "\ "){
            var verts = lines[i].split("\ ");
            vertices.push(vec4(parseFloat(verts[1]), parseFloat(verts[2]), parseFloat(verts[3]), 1.0));
        } else if(lines[i].charAt(0) == "f" && lines[i].charAt(1) == "\ "){
            var indices = lines[i].split("\ ");
            countO++;
            for(var j = 1; j < indices.length; j++){
                var vertLoc = indices[j].split("/");
                vertIndices.push(vertLoc[0]);
            }
        }
    }
    objStartEnd.push([lastCountO, countO*6]);// For the last file
    console.log(objStartEnd); 
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

var render = function() {
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

    if(play){
        if(frames.length <= 0){
            window.alert("You did not save frames!!!");
            play = false;
        }
        else{
            theta = JSON.parse(JSON.stringify(frames[playInd][0]));
            thetaY = JSON.parse(JSON.stringify(frames[playInd][1]));
            thetaX = JSON.parse(JSON.stringify(frames[playInd][2])); 
            playInd++;
            if(playInd == frames.length){
                if(click){ 
                    playInd = 0;
                    //play = false;
                }else{
                    theta = JSON.parse(JSON.stringify(frames[0][0]));
                    thetaY = JSON.parse(JSON.stringify(frames[0][1]));
                    thetaX = JSON.parse(JSON.stringify(frames[0][2])); 
                    play = false;
                }
            }
        }  
    }

    eye = vec3(radius*Math.sin(phi), radius*Math.sin(theta1), 
    radius*Math.cos(phi));

    modelViewMatrix = lookAt(eye, at , up);
    projectionMatrix = ortho(left, right, bottom, ytop, near, far);
    
    normalMatrix = [
    vec3(modelViewMatrix[0][0], modelViewMatrix[0][1], modelViewMatrix[0][2]),
    vec3(modelViewMatrix[1][0], modelViewMatrix[1][1], modelViewMatrix[1][2]),
    vec3(modelViewMatrix[2][0], modelViewMatrix[2][1], modelViewMatrix[2][2])
    ];
    
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix) );
    gl.uniformMatrix4fv(projectionMatrixLoc, false, flatten(projectionMatrix) );
    gl.uniformMatrix3fv(normalMatrixLoc, false, flatten(normalMatrix) );
    
    traverseTree("Base");
    
    requestAnimFrame(render);
    

}