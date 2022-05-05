// business logic section 
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number3, number4) {
    return number3 - number4
}
function divide(number5, number6) {
    return number5 / number6
}
function multiply(number7, number8) {
    return number7 * number8
}
function modulo(number9, number10){
    return number9 % number10
}

// user interface logic 
$(document).ready(function(){
    $("#addition-button").click(function(){
        $("#add").show();
        $("#subtract").hide();
        $("#multiply").hide();
        $("#divide").hide();
        $("#modulo").hide()
        $("form#myCalculator").submit(function(event){
            event.preventDefault();
            const number1 = parseInt($("#add1").val());
            const number2 = parseInt($("#add2").val());
            const result = add(number1, number2);
            $("#result").text(result);
        });
    });
});
$(document).ready(function(){
    $("#sub-button").click(function(){
        $("#add").hide();
        $("#subtract").show();
        $("#multiply").hide();
        $("#divide").hide();
        $("#modulo").hide()
        $("form#myCalculator").submit(function (event) {
            event.preventDefault();
            const number3 = parseInt($("#subtract1").val());
            const number4 = parseInt($("#subtract2").val());
            const answer = subtract(number3, number4);
            $("#answer").text(answer);
        });
    });
});
$(document).ready(function(){
    $("#multi-button").click(function(){
        $("#add").hide();
        $("#subtract").hide();
        $("#multiply").show();
        $("#divide").hide();
        $("#modulo").hide()
        $("form#myCalculator").submit(function (event) {
            event.preventDefault()
            const number7 = parseInt($("#multiply1").val());
            const number8 = parseInt($("#multiply2").val());
            const product = multiply(number7, number8);
            $("#product").text(product);
        });
    });
});
$(document).ready(function(){
    $("#divide-button").click(function(){
        $("#add").hide();
        $("#subtract").hide();
        $("#multiply").hide();
        $("#divide").show();
        $("#modulo").hide()
        $("form#myCalculator").submit(function (event) {
            event.preventDefault()
            const number5 = parseInt($("#divide1").val());
            const number6 = parseInt($("#divide2").val());
            const resultant = divide(number5, number6);
            $("#resultant").text(resultant);
        });
    });
});
$(document).ready(function(){
    $("#modulo-button").click(function(){
        $("#add").hide();
        $("#subtract").hide();
        $("#multiply").hide();
        $("#divide").hide();
        $("#modulo").show()
        $("form#myCalculator").submit(function (event) {
            event.preventDefault()
            const number9 = parseInt($("#modulo1").val());
            const number10 = parseInt($("#modulo2").val());
            const conclusion = modulo(number9, number10);
            $("#conclusion").text(conclusion);
        });
    });
});
