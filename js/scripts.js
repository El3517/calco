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
// user interface logic 
$(document).ready(function () {
    $("form#myForm").submit(function (event) {
        event.prevenDefault()
        $("#plus").click(function () {
            $("form#add").submit(function (event) {
                event.preventDefault();
                const number1 = parseInt($("#add1").val());
                const number2 = parseInt($("#add2").val());
                const result = add(number1, number2);
                $("#result").text(result);
            });
            $("form#add").show();
            $("form#subtract").hide();
            $("form#multiply").hide();
            $("form#divide").hide();
        });
        $("#minus").click(function(){
            $("form#subtract").submit(function (event) {
                event.preventDefault();
                const number3 = parseInt($("#subtract1").val());
                const number4 = parseInt($("#subtract2").val());
                const answer = subtract(number3, number4);
                $("#answer").text(answer);
            });
            $("form#add").hide();
            $("form#subtract").show();
            $("form#multiply").hide();
            $("form#divide").hide();
        })
    })
});