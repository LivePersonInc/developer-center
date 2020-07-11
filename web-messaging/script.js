

if (site) {
    // $("#lp_account").attr("disabled", "disabled");
    $("#lp_account").val(site);
}

if (site && username) {
    // $("#lp_username").attr("disabled", "disabled");
    $("#lp_username").val(username);
    lpTag.identities = [];
    lpTag.identities.push(identityFn);
    console.log("hello world i am in script");
    const usernameResult = 'lpTest' + username;
    function identityFn(callback) {
        callback({
            iss: "LivePerson",
            acr: "loa1",
            sub: usernameResult
        });
    }

    lpTag.sdes.push({ "type": "ctmrinfo", "info": { customerId: usernameResult } });

    window.LPJsMethodName = function (callback) {
        callback(username);
    };

    LPGetAuthenticationToken = function (callback) {
        callback(username);
    }
}

$("#lp_form").submit(function (e) {
    e.preventDefault();
    const site = $("#lp_account").val();
    const username = $("#lp_username").val();

    if (window.location.href.includes(username) && username === "") {
        window.history.replaceState(null, null, window.location.pathname);
    }
    if (username === "") {
        window.location.href = updateQueryStringParameter(window.location.href, "site", site);

    } else {
        const href = updateQueryStringParameter(window.location.href, "site", site);
        window.location.href = updateQueryStringParameter(href, "username", username);
    }
});

function updateQueryStringParameter(uri, key, value) {
    const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    const separator = uri.indexOf('?') !== -1 ? "&" : "?";

    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}


$('#lp_lnk_setup').click(function () {
    var isDescriptionDisplay = $('#lp_account_setup_description').css('display') === 'block';
    $('#lp_account_setup_description').css('display', isDescriptionDisplay ? 'none' : 'block');
});

/*
     FILE ARCHIVED ON 19:07:52 Dec 05, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:52:28 Feb 04, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 127.332 (3)
  esindex: 0.009
  captures_list: 145.036
  CDXLines.iter: 13.058 (3)
  PetaboxLoader3.datanode: 82.336 (4)
  exclusion.robots: 0.436
  exclusion.robots.policy: 0.417
  RedisCDXSource: 0.71
  PetaboxLoader3.resolve: 60.842 (4)
  load_resource: 26.998
*/
