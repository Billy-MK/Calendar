var now = luxon.DateTime.local();
var currentHour = now.hour;

$("#save9").on("click", function(event) {
    event.preventDefault;
    var comment9value = document.querySelector("#comment9").value;
    localStorage.setItem("comment9", comment9value);
})

$("#save10").on("click", function(event) {
    event.preventDefault;
    var comment10value = document.querySelector("#comment10").value;
    localStorage.setItem("comment10", comment10value);
})

$("#save11").on("click", function(event) {
    event.preventDefault;
    var comment11value = document.querySelector("#comment11").value;
    localStorage.setItem("comment11", comment11value);
})

$("#save12").on("click", function(event) {
    event.preventDefault;
    var comment12value = document.querySelector("#comment12").value;
    localStorage.setItem("comment12", comment12value);
})

$("#save13").on("click", function(event) {
    event.preventDefault;
    var comment13value = document.querySelector("#comment13").value;
    localStorage.setItem("comment13", comment13value);
})

$("#save14").on("click", function(event) {
    event.preventDefault;
    var comment14value = document.querySelector("#comment14").value;
    localStorage.setItem("comment14", comment14value);
})

$("#save15").on("click", function(event) {
    event.preventDefault;
    var comment15value = document.querySelector("#comment15").value;
    localStorage.setItem("comment15", comment15value);
})

$("#save16").on("click", function(event) {
    event.preventDefault;
    var comment16value = document.querySelector("#comment16").value;
    localStorage.setItem("comment16", comment16value);
})

$("#save17").on("click", function(event) {
    event.preventDefault;
    var comment17value = document.querySelector("#comment17").value;
    localStorage.setItem("comment17", comment17value);
})

function init() {
    var initComment9 = localStorage.getItem("comment9");
    document.querySelector("#comment9").value = initComment9;

    var initComment10 = localStorage.getItem("comment10");
    document.querySelector("#comment10").value = initComment10;

    var initComment11 = localStorage.getItem("comment11");
    document.querySelector("#comment11").value = initComment11;

    var initComment12 = localStorage.getItem("comment12");
    document.querySelector("#comment12").value = initComment12;

    var initComment13 = localStorage.getItem("comment13");
    document.querySelector("#comment13").value = initComment13;

    var initComment14 = localStorage.getItem("comment14");
    document.querySelector("#comment14").value = initComment14;

    var initComment15 = localStorage.getItem("comment15");
    document.querySelector("#comment15").value = initComment15;

    var initComment16 = localStorage.getItem("comment16");
    document.querySelector("#comment16").value = initComment16;

    var initComment17 = localStorage.getItem("comment17");
    document.querySelector("#comment17").value = initComment17;
}

init();

// WORKING DONT TOUCH

// $("#save9").on("click", function() {
//     var comment9value = document.querySelector("#comment9").value
//     localStorage.setItem("comment9", comment9value);
// })
