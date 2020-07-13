
const csdsButton = document.getElementById("lp_btn_login");

function retrieveDomains(csdsUrl) {
    $.ajax({
        url: csdsUrl,
        headers: {
            'Accept': 'application/json'
        },
        dataType: "json"
    })
        .done(function (data) {
            console.log("baseuri is ", data.baseURIs);
            if (data.baseURIs.length > 0) {
                //sort results alphabetically
                data.baseURIs.sort(function (a, b) {
                    var m1 = a.service.toLowerCase();
                    var m2 = b.service.toLowerCase();
                    if (m1 < m2) return -1;
                    if (m1 > m2) return 1;
                    return 0;
                })
                $.each(data.baseURIs, function () {
                    console.log(" service is ", this.service);
                    console.log(" base uri is ", this.baseURI);
                    // html += `<tr><td>${this.service}</td><td>${this.baseURI}</td></tr>`;
                });
            }
        })
        .fail(function () {
            console.log("Unable to retrieve base URIs for account, please verify your account number.");
        })
}


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
}
$("#lp_form").submit(function (e) {
    e.preventDefault();
    const site = $("#lp_account").val();
    csdsUrl = 'https://api.liveperson.net/api/account/' + site + '/service/baseURI?version=1.0';
    retrieveDomains(csdsUrl);

});
// $("#lp_form").submit(function (e) {
//     e.preventDefault();
//     const site = $("#lp_account").val();
//     const username = $("#lp_username").val();

//     if (window.location.href.includes(username) && username === "") {
//         window.history.replaceState(null, null, window.location.pathname);
//     }
//     if (username === "") {
//         window.location.href = updateQueryStringParameter(window.location.href, "site", site);

//     } else {
//         const href = updateQueryStringParameter(window.location.href, "site", site);
//         window.location.href = updateQueryStringParameter(href, "username", username);
//     }
// });

// function updateQueryStringParameter(uri, key, value) {
//     const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
//     const separator = uri.indexOf('?') !== -1 ? "&" : "?";

//     if (uri.match(re)) {
//         return uri.replace(re, '$1' + key + "=" + value + '$2');
//     } else {
//         return uri + separator + key + "=" + value;
//     }
// }


// $('#lp_lnk_setup').click(function () {
//     var isDescriptionDisplay = $('#lp_account_setup_description').css('display') === 'block';
//     $('#lp_account_setup_description').css('display', isDescriptionDisplay ? 'none' : 'block');
// });

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
