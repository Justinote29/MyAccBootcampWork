$(document).ready(function() {
    $("#form").submit(function (event) {
        //prevents default form submission behavior 
        event.preventDefault(); 

        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

        if ($("#password").val().length <= 6) {
            $("#error").html("Your password is too short").addClass("error-msg");
            $("#password").addClass("inputError");
        }
        else if (!regex.test($("#email").val())) {
            $("#error").html("Invalid email address").addClass("error-msg");
            $("#email").addClass("inputError");
        }
        else {
            $("#error").html("").removeClass("error-msg");
            $("#password").removeClass("inputError");
            $("#email").removeClass("inputError");

        }
    });
});




    








