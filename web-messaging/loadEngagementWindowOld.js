
const csdsButton = document.getElementById("lp_btn_login");

function retrieveDomains(csdsUrl) {
    let firstExpectedService = "accdn.lpsnmedia.net"; // for prod
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
                //sort results alphabetically so able to find first service first
                data.baseURIs.sort(function (a, b) {
                    var m1 = a.service.toLowerCase();
                    var m2 = b.service.toLowerCase();
                    if (m1 < m2) return -1;
                    if (m1 > m2) return 1;
                    return 0;
                })
                //console.log('first baseuri is ', data.baseURIs[0].baseURI);
                const site = $("#lp_account").val();
                console.log('site is: ', site)
                if (firstExpectedService === data.baseURIs[0].baseURI) {
                    // load production tag
                    console.log('Loading the production tag for old emulator');
                    window.lpTag = window.lpTag || {}, "undefined" == typeof window.lpTag._tagCount ? (window.lpTag = { site: site || "", section: lpTag.section || "", tagletSection: lpTag.tagletSection || null, autoStart: lpTag.autoStart !== !1, ovr: lpTag.ovr || { domain: 'lptag.liveperson.net', tagjs: 'lptag.liveperson.net' }, _v: "1.7.0", _tagCount: 1, protocol: "https:", events: { bind: function (t, e, i) { lpTag.defer(function () { lpTag.events.bind(t, e, i) }, 0) }, trigger: function (t, e, i) { lpTag.defer(function () { lpTag.events.trigger(t, e, i) }, 1) } }, defer: function (t, e) { 0 == e ? (this._defB = this._defB || [], this._defB.push(t)) : 1 == e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t)) }, load: function (t, e, i) { var n = this; setTimeout(function () { n._load(t, e, i) }, 0) }, _load: function (t, e, i) { var n = t; t || (n = this.protocol + "//" + (this.ovr && this.ovr.domain ? this.ovr.domain : "lptag.liveperson.net") + "/tag/tag.js?site=" + this.site); var a = document.createElement("script"); a.setAttribute("charset", e ? e : "UTF-8"), i && a.setAttribute("id", i), a.setAttribute("src", n), document.getElementsByTagName("head").item(0).appendChild(a) }, init: function () { this._timing = this._timing || {}, this._timing.start = (new Date).getTime(); var t = this; window.attachEvent ? window.attachEvent("onload", function () { t._domReady("domReady") }) : (window.addEventListener("DOMContentLoaded", function () { t._domReady("contReady") }, !1), window.addEventListener("load", function () { t._domReady("domReady") }, !1)), "undefined" == typeof window._lptStop && this.load() }, start: function () { this.autoStart = !0 }, _domReady: function (t) { this.isDom || (this.isDom = !0, this.events.trigger("LPT", "DOM_READY", { t: t })), this._timing[t] = (new Date).getTime() }, vars: lpTag.vars || [], dbs: lpTag.dbs || [], ctn: lpTag.ctn || [], sdes: lpTag.sdes || [], ev: lpTag.ev || [] }, lpTag.init()) : window.lpTag._tagCount += 1;

                } else {
                    // load alpha tag  
                    console.log('Loading the alpha tag for old emulator');
                    window.lpTag = window.lpTag || {}, "undefined" == typeof window.lpTag._tagCount ? (window.lpTag = { site: site || "", section: lpTag.section || "", tagletSection: lpTag.tagletSection || null, autoStart: lpTag.autoStart !== !1, ovr: lpTag.ovr || { domain: 'lptag-a.liveperson.net', tagjs: 'lptag-a.liveperson.net' }, _v: "1.7.0", _tagCount: 1, protocol: "https:", events: { bind: function (t, e, i) { lpTag.defer(function () { lpTag.events.bind(t, e, i) }, 0) }, trigger: function (t, e, i) { lpTag.defer(function () { lpTag.events.trigger(t, e, i) }, 1) } }, defer: function (t, e) { 0 == e ? (this._defB = this._defB || [], this._defB.push(t)) : 1 == e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t)) }, load: function (t, e, i) { var n = this; setTimeout(function () { n._load(t, e, i) }, 0) }, _load: function (t, e, i) { var n = t; t || (n = this.protocol + "//" + (this.ovr && this.ovr.domain ? this.ovr.domain : "lptag.liveperson.net") + "/tag/tag.js?site=" + this.site); var a = document.createElement("script"); a.setAttribute("charset", e ? e : "UTF-8"), i && a.setAttribute("id", i), a.setAttribute("src", n), document.getElementsByTagName("head").item(0).appendChild(a) }, init: function () { this._timing = this._timing || {}, this._timing.start = (new Date).getTime(); var t = this; window.attachEvent ? window.attachEvent("onload", function () { t._domReady("domReady") }) : (window.addEventListener("DOMContentLoaded", function () { t._domReady("contReady") }, !1), window.addEventListener("load", function () { t._domReady("domReady") }, !1)), "undefined" == typeof window._lptStop && this.load() }, start: function () { this.autoStart = !0 }, _domReady: function (t) { this.isDom || (this.isDom = !0, this.events.trigger("LPT", "DOM_READY", { t: t })), this._timing[t] = (new Date).getTime() }, vars: lpTag.vars || [], dbs: lpTag.dbs || [], ctn: lpTag.ctn || [], sdes: lpTag.sdes || [], ev: lpTag.ev || [] }, lpTag.init()) : window.lpTag._tagCount += 1;
                }
            }
        })
        .fail(function () {
            console.log("Unable to retrieve base URIs for account, please verify your account number.");
        })
}


if (site) {
    // $("#lp_account").attr("disabled", "disabled");
    $("#lp_account").val(site);
    csdsUrl = 'https://api.liveperson.net/api/account/' + site + '/service/baseURI?version=1.0';
    retrieveDomains(csdsUrl);
}

$("#lp_form").submit(function (e) {
    // on submit will append site id to url and then navigate to if statement above which will then load production tag
    e.preventDefault();
    const site = $("#lp_account").val();
    csdsUrl = 'https://api.liveperson.net/api/account/' + site + '/service/baseURI?version=1.0';

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


/*
     FILE ARCHIVED ON 19:07:52 Dec 05, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:52:28 Feb 04, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
