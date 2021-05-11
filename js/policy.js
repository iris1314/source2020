/**
 * policy.js 隱私權宣告
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var policyAccept = getCookie("policyAccept");
    if (policyAccept != "") {
        document.getElementById('policy-warning').style.display = 'none';
    }
}

$('#policy-close').on('click', function(e) {
    e.preventDefault();
    setCookie('policyAccept', 'true', 30);
    $('#policy-warning').hide();
});

checkCookie()