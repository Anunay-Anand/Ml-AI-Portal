function fn() {
    var Check = document.getElementById('check');
    var slidr = document.getElementById('slider');
    var line = document.getElementById('line');
    if (Check.checked) {
        slidr.style.display = "none";
        line.style.display = "none";
    } else {
        slidr.style.display = "block";
        line.style.display = "block";
    }
}

var w = document.getElementById("one");
var x = document.getElementById("two");
var y = document.getElementById("three");
var z = document.getElementById("four");

function cnt1() {

    if (w.style.display === "none") {
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";

    } else {
        w.style.display = "none";
    }
}


function cnt2() {


    if (x.style.display === "none") {
        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";

    } else {
        x.style.display = "none";
    }
}


function cnt3() {


    if (y.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";

    } else {
        y.style.display = "none";
    }
}


function cnt4() {

    if (z.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";

    } else {
        z.style.display = "none";
    }
}

$(document).ready(function () {
    $('.cnt').click(function () {
        $('.cnt.cntactive').removeClass("cntactive");
        $(this).addClass("cntactive");

    });
});