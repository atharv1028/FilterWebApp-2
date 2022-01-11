function preload()
{

}

function setup()
{
    
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function save()
{
    save('myFilterPhoto.png');
}

function draw()
{
    image(video, 0, 0, 450, 400);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = ");
        console.log("nose y = ");
    }
}