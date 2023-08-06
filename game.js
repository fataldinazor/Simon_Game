var buttonColor=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var level=0;
var started=false;

//step6
$(document).keydown(function()
{
    if(!started)
    {
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});
//step3
$(".btn").click(function()
{
    var userChosenColor=(this.id);
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    checkAnswer(userClickedPattern.length-1);
});
    // step7
    function checkAnswer(currentLevel)
    {
        if(gamePattern[currentLevel]=== userClickedPattern[currentLevel])
        {
            console.log("Success");
            if(gamePattern.length===userClickedPattern.length)
            {
                setTimeout(function()
                {
                    nextSequence();
                },1000);
            }
        }
            else
            {
                console.log("Wrong");
                playSound("wrong");
                $(body).addClass("game-over");
                setTimeout(function()
                {
                    $(body).removeClass("game-over");
                },200);
                $("h1").text("Game Over, Press any Key to restart");
                startOver();
            }
    }

function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);

    //step1
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor=buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);

    //step2
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}


    //step4
    function playSound(name)
    {
        var audio=new Audio("./sounds/"+name+".mp3");
        audio.play();
    }
    //step5
    function animatePress(currentColor)
    {
        $("#"+currentColor).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColor).removeClass("pressed")
        },100);
    }
    // step8
    function startOver()
    {
        started=false;
        level=0;
        gamePattern=[];
    }


   

