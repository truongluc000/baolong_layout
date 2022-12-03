$(document).ready(function () {
    $(".item-project").slice(0, 6).show();
    $(".btn-see-more").on('click', function (e) {
        e.preventDefault();
        $(".item-project:hidden").slice(0, 6).slideDown();
        if ($(".item-project:hidden").length == 0) {
            $(".btn-see-more").hide();
            $(".btn-hide").fadeIn('slow');
        }
    });
    $(".btn-hide").on('click', function (e) {
        e.preventDefault();
        let totalItem = $(".item-project").length;
        $(".item-project").slice(6, totalItem).slideUp();
        $(".btn-see-more").fadeIn('slow');
        $(".btn-hide").hide();
    });
    $(".navbar-toggle").click(function(){
        $("#header").toggle('slow');
    });
    continueReg1();
    onChangeReg1();
});

var ktraEmailReg1 = function() {
    var form_email_reg1 = $.trim($('#email').val());
    var aCong = form_email_reg1.indexOf("@");
    var dauCham = form_email_reg1.lastIndexOf(".");
    var ketquaKtEmailReg1 = true;
    if(form_email_reg1 == "") {
        $("#email").addClass("errorform");
        $('#email').attr('placeholder',"Vui lòng nhập Email");
        ketquaKtEmailReg1 = false;
    }
    else if ((aCong < 1) || (dauCham < aCong + 2) || (dauCham + 2 > form_email_reg1.length)) {
        $("#email").addClass("errorform");
        $('#email').val('');
        $('#email').attr('placeholder',"Email chưa hợp lệ");
        ketquaKtEmailReg1 = false;
    }
    else {
        $('#email').attr('placeholder',"");
        $("#email").removeClass("errorform");
    }
    return ketquaKtEmailReg1;
}
var ktraPassReg = function() {
    var form_pass_reg = $.trim($('#password').val());
    var ktraPassReg = true;
    if(form_pass_reg == ""){
        $("#password").addClass("errorform");
        $('#password').attr('placeholder',"Vui lòng nhập mật khẩu");
        ktraPassReg = false;
    }else if(form_pass_reg.length < 6 ) {
        $("#password").addClass("errorform");
        $('#password').val('');
        $('#password').attr('placeholder',"Mật khẩu ít nhất 6 ký tự");
        ktraPassReg = false;
    }else{
        $('#password').attr('placeholder',"");
        $("#password").removeClass("errorform");
    }
    return ktraPassReg;
}
var ktraAddress = function() {
    var form_address_reg1 = $.trim($('#address').val());
    var ktraAddressReg1 = true;
    if(form_address_reg1 == "") {
        $("#address").addClass("errorform");
        $('#address').attr('placeholder',"Vui lòng nhập địa chỉ");
        ktraAddressReg1 = false;
    }
    else {
        $('#address').attr('placeholder',"");
        $("#address").removeClass("errorform");
    }
    return ktraAddressReg1;
}
var continueReg1 = function() {
    var btnSubmit = $('.btn-register1');
        btnSubmit.on('click', function( e ) {
        e.preventDefault();
        var ktAddress1 = ktraAddress();
        if(ktAddress1==true) {
            $('.form-register1').submit();
        }
    });
}
var onChangeReg1 = function() {
    $('#address').blur(function(){ktraAddress();})
}