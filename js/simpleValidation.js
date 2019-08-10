$(document).ready(function(){

    $("#myForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                password: true
            }
        }
    });
$("#myForm").validate();
});