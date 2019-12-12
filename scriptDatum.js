$(document).ready(function ()
{
    var date = new Date();
    $("#datum").html(date.getDate() + ". " + (date.getMonth()+1) + ". " + date.getFullYear() + ".");
});
