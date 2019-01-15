//////////////////////////////////////
//  CS301 INTERNET APP DEV JAN 2019
//  Group Project 3: StarBird Game
//  Group JAAB (Jude, Alyssa, Apoorv, Becca)
//  Last edit: 1/14/2019
//  Purpose: Makes arrowkeys controllers for Bird
//////////////////////////////////////

/*
sources: 
https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-move-an-element-using-left-right-up-and-down-arrow-keys
https://jeremyckahn.github.io/keydrown/

*/
var moveDist = 9;

/* Down arrow key makes the bird move down.
    Checks and ensures bird does not go past the bottom 
    of the screen.*/
kd.DOWN.down = function () {
    var $bird = $("#bird");
    var birdTop = $bird.position().top;
    var birdHeight = $bird.height();
    var birdBottom = birdTop + birdHeight;

    var $gameBox = $("#gameBox");
    var gameBoxTop = $gameBox.position().top;
    var gameBoxHeight = $gameBox.height();
    var gameBoxBottom = gameBoxTop + gameBoxHeight;
    var distance = gameBoxBottom - birdBottom;

    if (distance < moveDist) {
        $(".bird").finish().animate({
            top: "+=" + distance
        });
    }
    else {
        $(".bird").finish().animate({
            top: "+=" + moveDist
        });
    }
};

/* up arrow key makes the bird move up.
    Checks and ensures bird does not go past the top 
    of the screen.*/
kd.UP.down = function () {
    var $bird = $("#bird");
    var birdTop = $bird.position().top;

    var $gameBox = $("#gameBox");
    var gameBoxTop = $gameBox.position().top;

    var distance = birdTop - gameBoxTop;

    if (distance < moveDist) {
        $(".bird").finish().animate({
            top: "-=" + distance
        });
    }
    else {
        $(".bird").finish().animate({
            top: "-=" + moveDist
        });
    }
};

/* Same as above but left*/
kd.LEFT.down = function () {
    var $bird = $("#bird");
    var birdLeft = $bird.position().left;

    var $gameBox = $("#gameBox");
    var gameBoxLeft = $gameBox.position().left;
    var distance = birdLeft - gameBoxLeft;
    
    if (distance < moveDist) {
        $(".bird").finish().animate({
            left: "-=" + distance
        });
    }
    else {
        $(".bird").finish().animate({
            left: "-=" + moveDist
        });
    }
};

/* Same as above but right*/
kd.RIGHT.down = function () {
    var $bird = $("#bird");
    var birdLeft = $bird.position().left;
    var birdWidth = $bird.width();
    var birdRight = birdLeft + birdWidth;

    var $gameBox = $("#gameBox");
    var gameBoxLeft = $gameBox.position().left;
    var gameBoxWidth = $gameBox.width();
    var gameBoxRight = gameBoxLeft + gameBoxWidth;
    var distance = gameBoxRight - birdRight;

    if (distance < moveDist) {
        $(".bird").finish().animate({
            left: "+=" + distance
        });
    }
    else {
        $(".bird").finish().animate({
            left: "+=" + moveDist
        });
    }
};

kd.run(function () {
    kd.tick();
});
