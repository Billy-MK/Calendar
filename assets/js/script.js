var now = luxon.DateTime.local();
var currentHour = now.hour;
console.log(currentHour)

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

// Sets the values (the text in the text boxes) to whatever is stored in local memory

function init() {
    for (var i = 9; i < 17; i++) {
        document.querySelector("#comment" + i).value = localStorage.getItem("comment" + i);
        console.log(i);
    }
}

// Sets the color of the blocks based on the current time

function checkTime() {
    for (var i = 0; i < 24; i++)
        if (currentHour > i) {
            $("#block" + i).css("background-color", "gray");
            console.log(i);
        } else {
            if (currentHour === i) {
                $("#block" + i).css("background-color", "palegoldenrod")
                console.log(i);
            } else{
                if (currentHour < i) {
                    $("#block" + i).css("background-color", "rgb(91, 214, 97)");
                    console.log(i);
                } 
            }
        }
}

init();
checkTime();

// WORKING DONT TOUCH

// $("#save9").on("click", function() {
//     var comment9value = document.querySelector("#comment9").value
//     localStorage.setItem("comment9", comment9value);
// })
