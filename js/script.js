
/// workshop images

$(document).ready(function () {
    $("#1, #one").click(function () {
        $(".hidden1").toggle();
        $("#1").toggle();
    });
});

$(document).ready(function () {
    $("#2, #two").click(function () {
        $(".hidden2").toggle();
        $("#2").toggle();

    });
});
$(document).ready(function () {
    $("#3, #three").click(function () {
        $(".hidden3").toggle();
        $("#3").toggle();

    });
});
$(document).ready(function () {
    $("#4, #four").click(function () {
        $(".hidden4").toggle();
        $("#4").toggle();
    });
});
$(document).ready(function () {
    $("#5, #five").click(function () {
        $(".hidden5").toggle();
        $("#5").toggle();
    });
});
$(document).ready(function () {
    $("#6, #six").click(function () {
        $(".hidden6").toggle();
        $("#6").toggle();
    });
});
$(document).ready(function () {
    $("#7, #seven").click(function () {
        $(".hidden7").toggle();
        $("#7").toggle();
    });
});
$(document).ready(function () {
    $("#8, #eight").click(function () {
        $(".hidden8").toggle();
        $("#8").toggle();
    });
});
$(document).ready(function () {
    $("#9, #nine").click(function () {
        $(".hidden9").toggle();
        $("#9").toggle();
    });
});



// submit button on contact
$(document).ready(function () {
    $("#comment").submit(function (event) {
        event.preventDefault();
        if ($("input").val() === " ") {
            alert('enter a valid data')
            return;
        }
        alert('Thank you for contacting us!')
        this.reset();
    });
});





$(document).ready(function () {
    $('form#myform').submit(function (event) {
        event.preventDefault();

        var foodKind = $('#food').val();

        var plateQty = parseInt($('#quantity').val());


        if (foodKind == 1) {
            var price = 900 * plateQty;
            alert("your choice is CHEESE BURGER and price:" + price)

        }
        else if (foodKind == 2) {
            var price = 600 * plateQty;
            alert("your choice is GREEK SALAD WITH CHICKEN and price:" + price)
        }
        else if (foodKind == 3) {
            var price = 400 * plateQty;
            alert("your choice is PAPRIKA CHIPS and price:" + price)
        }
        else if (foodKind == 4) {
            var price = 1000 * plateQty;
            alert("your choice is YELLOW RICE and price:" + price)
        }
        else if (foodKind == 5) {
            var price = 800 * plateQty;
            alert("your choice is MONGOLIAN BEFF and price:" + price)
        }
        else if (foodKind == 6) {
            var price = 1100 * plateQty;
            alert("your choice is CHOCOLATE COOKIES and price:" + price)
        }
        else if (foodKind == 7) {
            var price = 700 * plateQty;
            alert("your choice is ROAST CHICKEN WITH LEMON and price:" + price)
        }
        else if (foodKind == 8) {
            var price = 500 * plateQty;
            alert("your choice is POTATOES CHIPS and price:" + price)
        }
        else if (foodKind == 9) {
            var price = 1200 * plateQty;
            alert("your choice is GRILLED SWEET POTATOES and price:" + price)
        }
    });
});


$(document).ready(function () {
    $("#delivery").submit(function (event) {
        event.preventDefault();
        var name = $("input#names").val();
        var location = $("input#location").val();


        if ($("input#names").val() && $("input#location").val()) {
            alert("Hello, " + name + " located " + location + " your food will be delivered to you in 30 minutes,Thank you!!")
            return;
        }
    });
});
