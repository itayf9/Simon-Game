var isGameOn= false;
var level= 0;
var currentTile= 0;
var seqTiles= [];
var colors= ["red", "green", "blue", "yellow"];

$(".startBtn").click(function ()
{
    isGameOn= true;
    level ++;
    $(".levelVal").text(level);
    seqTiles.push(nextColor());
    playSeq();
});

function nextColor()
{
    var randColor= Math.floor(Math.random()*4);
    return colors[randColor];
}

async function playSeq()
{
    for(var i=0; i< seqTiles.length; i++)
    {
        $("."+seqTiles[i]+"Tile").css("background-color", "purple");
        await sleep(1000);
        $("."+seqTiles[i]+"Tile").css("background-color", seqTiles[i]);
        await sleep(1000);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(".tile").click(function ()
{
    if (isGameOn)
    {
        if ($(this).hasClass(seqTiles[currentTile]+"Tile"))
        {
            currentTile++;
        }
        else
        {
            level=0;
            $(".levelVal").text(level);
            isGameOn= false;
            while (seqTiles.length!== 0)
            {
                seqTiles.pop();
            }
        }

        if (currentTile=== level)
        {
            level++;
            seqTiles.push(nextColor());
            playSeq();
            currentTile=0;
        }
    }
});