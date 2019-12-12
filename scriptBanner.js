var id = 1;
var slike = ["images/slika1.jpg", "images/slika2.jpg", "images/slika3.jpg"];
var intervalID;

function menjaj(smer = "napred")
{
    if(smer == "napred")
    {
        id++;
        if(id == 3)
            id = 0;
    }
    else
    {
        id--;
        if(id == -1)
            id = 2;
    }

    $("#bannerSlika").animate({opacity: 0}, 500, function () { $("#bannerSlika").attr("src", slike[id]); } );
    $("#bannerSlika").animate({opacity: 1}, 500);
}

function menjajNapred()
{
    window.clearInterval(intervalID);
    menjaj("napred");
    intervalID = window.setInterval(menjaj, 3000);
}

function menjajNazad()
{
    window.clearInterval(intervalID);
    menjaj("nazad");
    intervalID = window.setInterval(menjaj, 3000);
}


$(document).ready(function ()
{
    intervalID = window.setInterval(menjaj, 3000);
    $("#levo").click(menjajNazad);
    $("#desno").click(menjajNapred);
});