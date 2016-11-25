'use strict';

$(document).ready(function () {
    function phoneMask() {
        var num = $(this).val().replace(/\D/g, '');
        $(this).val(num.substring(0, 2) + '(' + num.substring(2, 5) + ')' + num.substring(5, 8) + '-' + num.substring(8, 10) + '-' + num.substring(10, 12));
    }

    $('[type="tel"]').keyup(phoneMask);

    $(".send").on('click', function (e) {
        var errorMessage = "";
        e.preventDefault();
        var regex1 = /^([a-zA-Z0-9_.+-]{3,20})+$/;
        var regex2 = /^([0-9]{2})+\((([0-9]{3})+\))+([0-9]{3})+\-([0-9]{2})\-([0-9]{2})+$/;

        var isValid = function isValid(val, regex) {
            return regex.test(val);
        };

        if (!isValid($("#your-name").val(), regex1)) {
            errorMessage = " Please enter a valid email address, ";
            $('.name .error').html("Please enter a valid email address");
            $("#your-name").addClass('error-shadow');
        } else {
            $('.name .error').html("");
            $("#your-name").removeClass('error-shadow');
        }

        if (!isValid($("#your-phone").val(), regex2)) {
            errorMessage += "Please enter a valid phone number, ";
            $('.phone .error').html("Please enter a valid phone number");
            $("#your-phone").addClass('error-shadow');
        } else {
            $('.phone .error').html("");
            $("#your-phone").removeClass('error-shadow');
        }
        if ($("input[type=radio]:checked").length > 0 == false) {
            errorMessage += " Please check any time ";
            $('.form-group-hours .error').html("Please check any time");
        } else {
            $('.form-group-hours .error').html("");
        }
        if (errorMessage == "") {
            console.log("success");
            console.log($("#your-name").val());
            console.log($("#your-phone").val());
            console.log($("input[type=radio]:checked").val());

            // $("#form").submit();
        } else {
            console.log(errorMessage);
        }
    });
    $('#close').on('click', function () {
        $('.form-container').fadeOut(400);
    });
});