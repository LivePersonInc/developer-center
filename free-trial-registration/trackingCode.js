// cookie functions
/* spell-checker: disable */
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `; expires=${date.toGMTString()}`;
  document.cookie = `${name}=${value}${expires}; path=/; domain=liveperson.com;`;
}

function formSubmissionComplete(pixelEvent, gtmEvent) {
  window.ga('send', 'event', 'form', 'submit', pixelEvent);
  window.dataLayer.push({ event: gtmEvent || 'form-submitted' });
  const capterraVkey = '2204790610e633c11ee2cfb2140ab50a';
  const capterraVid = '491';
  const capterraPrefix = ((document.location.protocol === 'https:') ? 'https://ct.capterra.com' : 'http://ct.capterra.com');
  (function submitCapterraInfo() {
    const ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
    ct.src = `${capterraPrefix}/capterra_tracker.js?viV${capterraVid}&vkey=${capterraVkey}`;
    const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
  }());
  window.uetq = window.uetq || [];
  window.uetq.push({ ec: 'form', ea: 'submit', el: pixelEvent });

  (function bingConverstionTracking(w, d, t, r, u) {
    let f; let n; let
      // eslint-disable-next-line
      i; w[u] = w[u] || [], f = function () { const o = { ti: '21000157' }; o.q = w[u], w[u] = new UET(o), w[u].push('pageLoad'); }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () { const s = this.readyState; s && s !== 'loaded' && s !== 'complete' || (f(), n.onload = n.onreadystatechange = null); }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i);
  }(window, document, 'script', '//bat.bing.com/bat.js', 'uetq'));
}

function getParam(p) {
  const match = RegExp(`[?&]${p}=([^&]*)`).exec(window.location.search);
  const gclid = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  return gclid;
}

// NOTE: Could this be converted into a function. This functionality is repeated a lot
/* eslint-disable */
let leadSourceCookie = (name = new RegExp('(?:^|;\\s*)lp-leadSource=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
let lsRef = (name = new RegExp('(?:^|;\\s*)lp-lsRef=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
let lsTerms = (name = new RegExp('(?:^|;\\s*)lp-lsTerms=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
let lsCampaign = (name = new RegExp('(?:^|;\\s*)lp-lsCampaign=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
let lsSource = (name = new RegExp('(?:^|;\\s*)lp-lsSource=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
let lsMedium = (name = new RegExp('(?:^|;\\s*)lp-lsMedium=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
let lsContent = (name = new RegExp('(?:^|;\\s*)lp-lsContent=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
let queryString = (name = new RegExp('(?:^|;\\s*)lp-queryString=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
const _mkto_trk = (name = new RegExp('(?:^|;\\s*)_mkto_trk=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
/* eslint-enable */
let convoId;
let leadData;

if (lsTerms === '') {
  lsTerms = getParam('utm_term');
  if (!lsTerms) { lsTerms = getParam('keywords'); }
  if (!lsTerms) { lsTerms = getParam('keyword'); }
  if (!lsTerms) { lsTerms = getParam('oquery'); }
  if (!lsTerms) { lsTerms = getParam('query'); }
  if (!lsTerms) { lsTerms = getParam('_bk'); }
  setCookie('lp-lsTerms', lsTerms, 30);
}

if (lsCampaign === '') {
  lsCampaign = getParam('utm_campaign');
  setCookie('lp-lsCampaign', lsCampaign, 30);
}

if (lsSource === '') {
  lsSource = getParam('utm_source');
  setCookie('lp-lsSource', lsSource, 30);
}

if (lsMedium === '') {
  lsMedium = getParam('utm_medium');
  setCookie('lp-lsMedium', lsMedium, 30);
}

if (lsContent === '') {
  lsContent = getParam('utm_content');
  setCookie('lp-lsContent', lsContent, 30);
}

if (queryString === '') {
  queryString = window.location.search;
  setCookie('lp-queryString', queryString, 30);
}

if (lsRef === '') {
  setCookie('lp-lsRef', document.referrer, 1);
  lsRef = document.referrer;
}
const lsOrganic = ['www.google.', 'com.google', 'www.bing.', 'www.yahoo.', 'search.yahoo.', 'cn.bing.'];
const lsSocial = ['plus.url.google.com', 'plus.google.com', 'facebook.com', 'linkedin.com', 'twitter.com', '//t.co', 'youtube.com', 'pinterest.com', 't.umblr.com', 'instagram.com', 'lnkd.in', 'com.linkedin'];
const lsReview = ['capterra.', 'capmain.com', 'crozdesk.com', 'discovercloud.com', 'financesonline.com', 'g2crowd.com', 'consumersadvocate.org', 'saasgenius.com', 'softwareadvice.com', 'getapp.com', 'itcentralstation.com', 'financesonline.com', 'business.com', 'saasgenius.com', 'itcentralstation.com', 'selecthub.com', 'siftery.com', 'picksaas.com', 'bestcompany.com', 'softwaresuggest.com', 'serchen.com', 'ketchell.com', 'shanebarker.com'];
const lsPR = ['www.wsj.com', 'www.emarketer.com', 'www.inc.com', 'www.msn.com', 'www.bandt.com.au', 'www.christianpost.com', 'sg.news.yahoo.com', 'www.nasdaq.com', 'www.bizjournals.com', 'www.bloomberg.com', 'www.crmirewards.com', 'www.bizreport.com', 'mobilemarketingwatch.com', 'www.applianceretailer.com.au', 'www.independent.ie', 'detroit.cbslocal.com', 'truepundit.com', 'www.ibm.comblogs', 'www.businessinsider.com', 'www.everyjoe.com', 'www.bizreport.com', 'praisecleveland.com', 'www.breitbart.com', 'www.newsweek.com', 'uk.news.yahoo.com', 'redpilltimes.com', 'wtkr.com', 'www.cbs8.com', 'next.aftrs.edu.au', 'stlouis.cbslocal.com', 'baltimore.cbslocal.com', 'connecticut.cbslocal.com', 'philadelphia.cbslocal.com', 'denver.cbslocal.com', 'miami.cbslocal.com', 'dfw.cbslocal.com', 'www.studyfinds.org', 'www.chainstoreage.com', 'ciokurator.com', 'istart.com.au', 'www.medianet.com.au', 'www.mybusiness.com.au', 'www.dailymail.co.uk', 'www.governmentnews.com.au', 'marketingland.com', 'thenextweb.com', 'venturebeat.com', 'www.itwire.com', 'www.loyalty360.org', 'www.nojitter.com', 'www.huffingtonpost.de', 'www.huffingtonpost.com', 'www.nytimes.com', 'www.amny.com', 'www.metro.us', 'www.crainsnewyork.com', 'www.tnooz.com', 'www.travolution.com', 'www.thegrocer.co.uk', 'www.mycustomer.com', 'www.marconomy.de', 'www.cmo.com.au', 'www.cmo.com', 'www.usatoday.com', 'www.usnews.com', 'www.handelsblatt.com', 'fortune.com', 'www.entrepreneur.comus', 'www.financial-news.co.uk', 'www.ft.com', 'www.itproportal.com', 'www.smartertravel.com', 'www.smartcustomerservice.com', 'businesstech.co.za', 'skift.com', 'www.ags-airlinegroundservices.com', 'airlinegeeks.com', 'www.mobilemarketer.com', 'www.frequentbusinesstraveler.com', 'www.lead-digital.de', 'insidesmallbusiness.com.au', 'www.topbots.com', 'www.ibusiness.de', 'www.werbewoche.ch', 'www.contentmanager.de', 'www.markenartikel-magazin.de', 'www.tagesspiegel.de', 'www.startupsense.net', 'www.standard.co.uk', 'www.thetimes.co.uk', 'www.nbc29.com', 'www.richmond.com', 'www.computerworld.com.au', 'www.computerworld.com', 'www.itnews.com.au', 'www.globaladvisors.biz', 'magazineclick.com', 'www.thenibbler.com.au', 'thehustle.co', 'www.thrillist.com', 'qz.com', 'www.destinationcrmblog.com', 'www.nbcnews.com', 'www.cnbc.com', 'www.cnn.com', 'www.ibtimes.com', 'www.marketwatch.com', 'www.investors.com', 'www.retaildive.com', 'www.digitalcommerce360.com', 'www.wiwo.de', 'www.traveltalkmag.com.au', 'www.adnews.com.au', 'www.rfigroup.com', 'www.dynamicbusiness.com.au', 'www.deutschlandfunk.de', 'martechseries.com', 'martechtoday.com', 'www.retaildive.com', 'risnews.com', 'www.zdnet.de', 'www.content-technology.com', 'www.zdnet.com', 'www.theaustralian.com.au', 'www.marketingdive.com', 'www.techrepublic.com', 'www.newsbytesapp.com', 'www.ubergizmo.com', 'techgroundnews.com', 'sk8.tech', 'www.digitaltrends.com', 'www.inquisitr.com', 'www.macrumors.com', 'www.techtimes.com', 'appleinsider.com', 'techcrunch.com', 'www.thedrum.com', 'www.travelweekly.com.au', 'www.bbc.com', 'www.futureofeverything.io', 'www.bankingtech.com', 'www.finextra.com', 'wwd.com', 'www.cmswire.com', 'adexchanger.com', 'www.cable.co.uk', 'www.globalbankingandfinance.com', 'www.thesun.ie', 'internetretailing.net', 'www.express.co.uk', 'www.ciodive.com', 'www.paymentssource.com', 'chatbotsmagazine.com', 'www.marketingweek.com', 'www.pymnts.com', 'www.autonews.com', 'www.mediapost.com', 'www.foxbusiness.com', 'www.reuters.com', 'adage.com', 'www.adweek.com', 'www.ap.org', 'www.buzzfeed.com', 'digiday.com', 'www.fastcompany.com', 'www.forbes.com', 'hbr.org', 'mashable.com', 'www.recode.net', 'www.theverge.com', 'www.washingtonpost.com', 'www.vice.com', 'www.americanbanker.com', 'www.wired.com', 'arstechnica.com', 'bankinnovation.net', 'www.banktech.com', 'www.bankingtech.com', 'bgr.com', 'www.chiefmarketer.com', 'www.cnet.com', 'www.engadget.com', 'gizmodo.com', 'www.informationweek.com', 'multichannelmerchant.com', 'www.pcmag.com', 'www.retailtouchpoints.com', 'stores.org', 'www.techradar.com', 'www.theinquirer.net', 'www.travelpulse.com', 'www.economist.com', 'www.theguardian.com', 'www.itproportal.com', 'www.metro.us', 'www.techworld.com', 'www.cbr.com', 'www.information-age.com', 'www.financedigest.com', 'digitalmarketingmagazine.co.uk', 'cxm.co.uk', 'cxm.world', 'www.thebanker.com', 'www.marketingtechnews.net', 'www.computerweekly.com', 'uxmag.com', 'businessnewsdaily.com', 'prnewswire.com', 'channelpronetwork.com', 'crn.com', 'e-channelnews.com', 'channelpartnersonline.com', 'channelnomics.com', 'channelbuzz.ca', 'channelfutures.com', 'comptia.org', 'channele2e.com', 'channelinfo.net', 'channelinsider.com', 'smbnation.com', 'ascii.com', 'the2112group.com', '451research.com', 'channelemea.com', 'canalys.com', 'iteuropa.com', 'channelexecutivemag.com', 'independent.co.uk'];

function lsList() {
  for (let i = 0; i < lsOrganic.length; i += 1) {
    if (lsRef.indexOf(lsOrganic[i]) !== -1) {
      setCookie('lp-leadSource', 'Organic', 1);
      leadSourceCookie = 'Organic';
      return false;
    }
  }
  for (let i = 0; i < lsSocial.length; i += 1) {
    if (lsRef.indexOf(lsSocial[i]) !== -1) {
      setCookie('lp-leadSource', 'Social', 30);
      setCookie('lp-lsRef', lsRef, 30);
      leadSourceCookie = 'Social';
      return false;
    }
  }
  for (let i = 0; i < lsReview.length; i += 1) {
    if (lsRef.indexOf(lsReview[i]) !== -1) {
      setCookie('lp-leadSource', 'Review website', 30);
      setCookie('lp-lsRef', lsRef, 30);
      leadSourceCookie = 'Review website';
      return false;
    }
  }
  for (let i = 0; i < lsPR.length; i += 1) {
    if (lsRef.indexOf(lsPR[i]) !== -1) {
      setCookie('lp-leadSource', 'PR', 1);
      leadSourceCookie = 'PR';
      return false;
    }
  }

  setCookie('lp-leadSource', 'Other referral', 1);
  leadSourceCookie = 'Other referral';
  return true;
}

const lpindex = lsRef.indexOf('liveperson.com') || lsRef.indexOf('us.platform.sh');

if (leadSourceCookie === '') {
  if (getParam('utm_medium') === 'remarketing') { // Remarketing
    setCookie('lp-leadSource', 'Remarketing', 30);
    leadSourceCookie = 'Remarketing';
    setCookie('lp-lsRef', lsRef, 30);
  } else if (getParam('utm_medium') === 'display') { // Display
    setCookie('lp-leadSource', 'Display', 30);
    leadSourceCookie = 'Display';
    setCookie('lp-lsRef', lsRef, 30);
  } else if (getParam('utm_medium') === 'social') { // Social
    setCookie('lp-leadSource', 'Social', 30);
    leadSourceCookie = 'Social';
    setCookie('lp-lsRef', lsRef, 30);
  } else if (getParam('gclid')) { // Paid Search
    setCookie('lp-leadSource', 'Paid search', 30);
    leadSourceCookie = 'Paid search';
    setCookie('lp-lsRef', lsRef, 30);
  } else if (getParam('msclkid')) { // Paid Search
    setCookie('lp-leadSource', 'Paid search', 30);
    leadSourceCookie = 'Paid search';
    setCookie('lp-lsRef', lsRef, 30);
  } else if (getParam('utm_medium') === 'email') { // Email
    setCookie('lp-leadSource', 'Email', 1);
    leadSourceCookie = 'Email';
  } else if (lsRef.indexOf('go.liveperson.com') >= 0 || lsRef.indexOf('mkto-g0178.com') >= 0) {
    setCookie('lp-leadSource', 'Email', 1);
    leadSourceCookie = 'Email';
  } else if (lsRef === '' || !lsRef || (lpindex > -1 && lpindex < 15)) { // Direct
    setCookie('lp-leadSource', 'Direct', 1);
    leadSourceCookie = 'Direct';
    lsRef = document.location.href;
    setCookie('lp-lsRef', document.location.href, 1);
  } else {
    lsList(); // Everything else
  }
}

// cookie user with gclid
let gclid = getParam('gclid');
if (gclid) {
  // console.log('gclid is ' + gclid);
  const gclsrc = getParam('gclsrc');
  if (!gclsrc || gclsrc.indexOf('aw') !== -1) {
    setCookie('gclid', gclid, 30);
  }
} else {
  // NOTE: use the same function as before to generate this
  // eslint-disable-next-line
  gclid = (name = new RegExp('(?:^|;\\s*)gclid=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
}

// cookie user with msclkid
let msclkid = getParam('msclkid');
if (msclkid) {
  setCookie('msclkid', msclkid, 30);
} else {
  // NOTE: use the same function as before to generate this
  // eslint-disable-next-line
  msclkid = (name = new RegExp('(?:^|;\\s*)msclkid=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
}

function mobileCheck() {
  let check = false;
  // eslint-disable-next-line no-useless-escape
  (function checkMobileAgent(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; }(navigator.userAgent || navigator.vendor || window.opera));
  return check;
}

window.mobile = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    const r = (
      window.mobile.Android() || window.mobile.BlackBerry() || window.mobile.iOS() || window.mobile.Opera() || window.mobile.Windows()
    ) || [];
    const dev = r.pop();
    console.log(dev);
    return dev;
  },
};

let pixelFire = false;
let pixelFireSalesBot = false;
const JWTPayload = {
  type: 'ctmrinfo', // MANDATORY
  info: {
    cstatus: leadSourceCookie, // LEAD SOURCE
    ctype: _mkto_trk, // Munchkin cookie
    companyBranch: lsRef, // REFERING URL
    socialId: queryString, // URL QUERY
    accountName: typeof window.ABTest !== 'undefined' ? window.ABTest : '', // AB TEST KEY
    role: lsTerms || '', // SEARCH TERMS
    imei: lsCampaign || '', // CAMPAIGN NAME
  },
};
console.log(JWTPayload);
console.log(window.device);

const personalInfo = {
  type: 'personal', // MANDATORY
  personal: { company: window.location.href }, // VISITOR COMPANY NAME
};

const cart = {
  type: 'cart', // MANDATORY
  total: 1, // TOTAL VALUE OF THE CART AFTER DISCOUNT
  currency: 'USD', // CURRENCY CODE
  numItems: 6, // NUMBER OF ITEMS IN CART
  products: [{
    product: {
      name: `${leadSourceCookie.toLowerCase()}-${mobileCheck() ? 'mobile' : 'desktop'}`, // PRODUCT NAME
      category: (leadSourceCookie.toLowerCase() === 'direct') ? 'imessage' : 'normal', // PRODUCT CATEGORY NAME
      sku: window.mobile.any() || 'Desktop', // PRODUCT SKU OR UNIQUE IDENTIFIER
      price: 1, // SINGLE PRODUCT PRICE
    },
    quantity: 1, // NUMBER OF PRODUCTS
  }],
};
console.log(cart.products[0].product);

const pushSDEData = function pushSDEData() {
  window.lpTag.sdes.push(JWTPayload);
  window.lpTag.sdes.push(personalInfo);
  window.lpTag.sdes.push(cart);
};

function messageStartBot(message) {
  if ($('body:not(.cio) #lpChat div[data-lp-point="lines_area"]').length < 1) {
    setTimeout(() => {
      messageStartBot(message);
    }, 500);
  } else {
    sendDirectMessage(message);
  }
}

function updateLpTags() {
  window.lpTag.sdes = window.lpTag.sdes || [];
  pushSDEData();
  // setInterval(pushSDEData, 2000);
  if (localStorage.getItem('applyInputMute') === 'yes') {
    console.log(`applyInputMute is true, engagementId is ${localStorage.getItem('engagementId')}`);
    // NOTE: What is this menu hack for?
    showMenuHack(localStorage.getItem('engagementId'));
  }
  // NOTE: Is this needed?
  window.lpTag.events.bind('lpUnifiedWindow', 'conversationInfo', d => {
    console.log('Convo Info', d);
    if (d.conversationId) {
      convoId = d.conversationId;
      $.ajax({
        url: `https://mktg-util.liveperson.com/api/temp-cache/${convoId}`,
        method: 'PUT',
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify(leadData),
      }).done(result => {
        console.log(`Temp cache updated for ${convoId}`, result);
      });
    }
    inputUnMute();
    localStorage.setItem('applyInputMute', 'no');
    if (d.skill === 1236328214 && !pixelFireSalesBot) {
      window.dataLayer.push({ event: 'bot-connected' });
      pixelFireSalesBot = true;
    }
    if (d.skill === 1989549130) {
      window.ga('send', 'event', 'Website chat', 'Conversation started', 'Convo X Bot');
    }
    if (d.skill === 1875640030) {
      window.ga('send', 'event', 'Website chat', 'Conversation started', 'Meeting Bot - SELF');
    }
    if ((d.skill === 17 || d.skill === 1236327114 || d.skill === 1522489114) && !pixelFire) {
      console.log('Pixel fired');
      // dataLayer.push({'event':'agent-connected'});
      pushSDEData();
      pixelFire = true;
      formSubmissionComplete('Sales agent connections', 'agent-connected');
    }
  });

  window.lpTag.events.bind('LP_OFFERS', 'OFFER_CLICK', e => {
    console.log(e);
    window.ga('send', 'event', 'Website chat', 'Engagement clicked', 'Engagement');
    if (e.engagementId === 1864678630 || e.engagementId === 2455213230 || e.engagementId === 2499891030 || e.engagementId === 2499863530) {
      window.ga('send', 'event', 'Website chat', 'Engagement clicked', 'Meeting Bot - SELF');
      console.log('Hero engagement clicked');
      messageStartBot('Request Demo');
    } else if (e.engagementId === 2103873030) {
      messageStartBot('Request Info');
    } else if (e.engagementId === 2521602130) {
      messageStartBot('Download Automation for WhatsApp guide');
    } else if (e.engagementId === 2582925930) {
      messageStartBot('I\'d like to chat with an agent about a custom plan.');
    } else if (e.engagementId === 2308971330) {
      messageStartBot('I\'m interested in becoming a partner.');
    } else if (e.engagementId === 1940071730) {
      window.ga('send', 'event', 'Website chat', 'Engagement clicked', 'Convo X Bot');
      console.log('convo-x engagement start');
      setTimeout(() => {
        showMenuHack(e.engagementId);
      }, 1500);
    } else if (e.engagementId === 2190768130) {
      messageStartBot('Request Pricing');
    } else if (e.engagementId !== 1911263130 && e.engagementId !== 1872297230 && typeof messageFromPage !== 'undefined') {
      console.log(`messsageFromPage found as: ${window.messageFromPage}`);
      messageStartBot(window.messageFromPage);
    } else {
      console.log('Execute menu hack...');
      setTimeout(showMenuHack, 1500);
    }
  });

  window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', e => {
    console.log('Engagement offered', e);
    setTimeout(() => {
      $('body').addClass('engagement-offered');
    }, 500);
  });
}

function waitForLpTags() {
  if (window.lpTag) {
    updateLpTags();
  } else {
    setTimeout(waitForLpTags, 500);
  }
}

const welcomeMessage = '<div class="lp_chat_line_wrapper lp_agent agent_avatar_display lpc_message-area lpc_message-area_agent lpc_message-area_avatar-shown lpc_desktop lp_bubble_style lp_grouped avatar-padding conversation-starter" data-lp-cust-id="transcript_bubble_agent_parent" style="margin-top: 20px;"><div class="lp_time lpc_message-area__timestamp lpc_message-area__timestamp_agent lpc_message-area__timestamp_avatar-shown lpc_desktop" title="Concierge Bot" data-lp-cust-id="transcript_time" style="color:#6D6E70;font-weight:normal;font-family:Arial,Helvetica,sans-serif;font-style:normal"><div class="lp_sender">Concierge Bot</div></div><img class="agent_avatar lpc_message-area__avatar lpc_message-area__avatar_agent lpc_message-area__avatar_avatar-shown lpc_desktop" data-lp-cust-id="agentAvatarUrl" alt="" aria-hidden="true" src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/bot-avatar.png" style="opacity: 0;"><div id="lp_line_bubble_2" class="lpc_message lpc_message_agent lpc_message_avatar-shown lpc_desktop lp_line_grouped_start lp_new_chat_line" data-lp-point="lineBubble" data-lp-cust-id="transcript_bubble_agent" style="background-color:#767370;border-color:#767370"><div class="lp_title_text lpc_message__text lpc_message__text_agent lpc_message__text_avatar-shown lpc_desktop" data-lp-cust-id="transcript_bubble_agent_text" style="color:#FFFFFF;font-weight:normal;font-family:HelveticaNeue,Helvetica,Arial;font-style:normal">👋🏻 Hi! I am the LivePerson concierge bot.</div></div><div class="lpc_message-tail__border lpc_message-tail__border_agent lpc_message-tail__border_avatar-shown lpc_desktop lpHide" data-lp-cust-id="transcript_bubble_agentArrowBorder" style="border-right-color:#767370"></div><div class="lpc_message-tail lpc_message-tail_agent lpc_message-tail_avatar-shown lpc_desktop lpHide" data-lp-cust-id="transcript_bubble_agentArrow" style="border-right-color:#767370"></div><div class="lp_time lp_time_side lpc_message-area__side-timestamp lpc_message-area__side-timestamp_agent lpc_message-area__side-timestamp_avatar-shown lpc_desktop" title="Concierge Bot" data-lp-cust-id="transcript_time" style="color: rgb(109, 110, 112); font-weight: normal; font-family: Arial, Helvetica, sans-serif; font-style: normal; display: none;">Now</div><div class="lp_time lp_time_bottom lpc_message-area__timestamp lpc_message-area__timestamp_agent lpc_message-area__timestamp_avatar-shown lpc_desktop lpHide" title="Concierge Bot" data-lp-cust-id="transcript_time" style="color:#6D6E70;font-weight:normal;font-family:Arial,Helvetica,sans-serif;font-style:normal"><div class="lp_sender">Concierge Bot</div></div></div>';

const menuMessage = '<div id="iNeedAnId" class="lp_chat_line_wrapper lp_agent agent_avatar_display lpc_message-area lpc_message-area_agent lpc_message-area_avatar-shown lpc_desktop lp_bubble_style lp_grouped avatar-padding conversation-starter"><div class="lp_time lpc_message-area__timestamp lpc_message-area__timestamp_agent lpc_message-area__timestamp_avatar-shown lpc_desktop lpHide" title="Concierge bot" data-lp-cust-id="transcript_time" style="color:#6D6E70;font-weight:normal;font-family:Arial,Helvetica,sans-serif;font-style:normal"><div class="lp_sender">Concierge bot</div></div><img class="agent_avatar lpc_message-area__avatar lpc_message-area__avatar_agent lpc_message-area__avatar_avatar-shown lpc_desktop" data-lp-cust-id="agentAvatarUrl" alt="Concierge bot" src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/bot-avatar.png" style="opacity: 1;"><div id="lp_line_bubble_8" class="lp_rich_content_line lpc_message lpc_message_agent lpc_message_card lpc_message_avatar-shown lpc_desktop lp_line_grouped_end" data-lp-point="lineBubble" data-lp-cust-id="transcript_bubble_rich_content"><div class="lp_title_text lpc_message__text lpc_message__text_agent lpc_message__text_card lpc_message__text_avatar-shown lpc_desktop" data-lp-cust-id="transcript_bubble_rich_content_text"><div class="lp-json-pollock"><div class="lp-json-pollock-layout lp-json-pollock-layout-vertical lpc_rich_content_grouped lpc_card lpc_card_vertical lpc_desktop"><div class="lp-json-pollock-element-text lpc_card__text lpc_desktop" style=""><span style="" title="How can I help you today?" aria-label="How can I help you today?">How can I help you today?</span></div><div class="lp-json-pollock-element-button lpc_card__button lpc_desktop"><button title="I want to know more about LivePerson and your&nbsp;products" aria-label="I want to know more about LivePerson and your&nbsp;products" data-conv-id="41907011-f937-4977-ac91-2c9e0220fe92" onclick="sendLPButtonText(this);">I want to know more about LivePerson and your&nbsp;products</button></div><div class="lp-json-pollock-element-button lpc_card__button lpc_desktop"><button title="I\'m a customer and have a billing related&nbsp;question" aria-label="I\'m a customer and have a billing related&nbsp;question" data-conv-id="41907011-f937-4977-ac91-2c9e0220fe92" onclick="sendLPButtonText(this);">I\'m a customer and have a billing related&nbsp;question</button></div><div class="lp-json-pollock-element-button lpc_card__button lpc_desktop"><button title="I\'m a customer and need technical&nbsp;support" aria-label="I\'m a customer and need technical&nbsp;support" data-conv-id="41907011-f937-4977-ac91-2c9e0220fe92" onclick="sendLPButtonText(this);">I\'m a customer and need technical&nbsp;support</button></div></div></div></div></div><div class="lp_time lp_time_side lpc_message-area__side-timestamp lpc_message-area__side-timestamp_agent lpc_message-area__side-timestamp_avatar-shown lpc_desktop" title="Concierge bot" data-lp-cust-id="transcript_time" style="color: rgb(109, 110, 112); font-weight: normal; font-family: Arial, Helvetica, sans-serif; font-style: normal; display: none;">Now</div><div class="lp_time lp_time_bottom lpc_message-area__timestamp lpc_message-area__timestamp_agent lpc_message-area__timestamp_avatar-shown lpc_desktop lpHide" title="Concierge bot" data-lp-cust-id="transcript_time" style="color:#6D6E70;font-weight:normal;font-family:Arial,Helvetica,sans-serif;font-style:normal"><div class="lp_sender">Concierge bot</div></div></div>';

// eslint-disable-next-line no-unused-vars
function sendLPButtonText(target) {
  const text = $(target).html().replace(/&nbsp;/g, ' ');
  $('.lpview_form_textarea').val(text);
  $('.lp_paper_plane_button').prop('disabled', false).trigger('click');
  $('.conversation-starter').hide();
}

// same as above but you pass the message as a parameter
function sendDirectMessage(message) {
  $('.lpview_form_textarea').val(message);
  $('.lp_paper_plane_button').prop('disabled', false).trigger('click');
  $('.conversation-starter').hide();
}

function showInitMenu(initMenu) {
  $('body:not(.cio) #lpChat div[data-lp-point="lines_area"]').append(initMenu);
  $('.lp_location_center').animate({ scrollTop: $('.lp_transcript_widget').height() });
}

let conversationStarter = false;

function inputMute() {
  if (document.querySelector('.lp_bottom_area')) {
    document.querySelector('.lp_bottom_area').style.display = 'none';
    document.querySelector('.lp_location_bottom').style.opacity = '.25';
    document.querySelector('.lp_lpview_agent_is_typing.lp_agent_is_typing').style.color = '#000000';
  }
}

function inputUnMute() {
  if (document.querySelector('.lp_bottom_area')) {
    document.querySelector('.lp_bottom_area').style.display = 'block';
    document.querySelector('.lp_location_bottom').style.opacity = '1';
    document.querySelector('.lp_lpview_agent_is_typing.lp_agent_is_typing').style.color = '#6d6e70';
  }
}

function showMenuHack(engagementId) {
  console.log('Trying to run hack...');
  // NOTE: I don't think there is any reason for this next line
  // eslint-disable-next-line
  var engagementId = engagementId;
  if ($('body:not(.cio) #lpChat div[data-lp-point="lines_area"]').length < 1) {
    setTimeout(() => {
      showMenuHack(engagementId);
    }, 500);
  } else {
    console.log('Ok. Running hack.');
    localStorage.setItem('applyInputMute', 'yes');
    if (localStorage.getItem('engagementId') === null) {
      localStorage.setItem('engagementId', engagementId);
      console.log(`setting localStorage engID ${engagementId}`);
    } else {
      console.log(`this is the current engID ${engagementId}`);
    }
    console.log('adding local storage');
    inputMute();

    if (document.querySelector('.lp_header .lp_top-text') && document.querySelector('.lp_header .lp_top-text').textContent.toLowerCase() === 'message us') {
      if (!conversationStarter && $('body.cio #lp_line_0 .lp_title_text').text() === 'How can I help you today?') {
        $('body.cio #lp_line_0 .lp_title_text').text('I\'m the LivePerson concierge bot. I can tell you more about AI-powered conversational commerce.');
      } else if (!conversationStarter && $('body').hasClass('rapid-deploy')) {
        conversationStarter = true;
        $('#lp_line_0').remove();
        const message = 'Let\'s talk about upgrading my account.';
        sendDirectMessage(message);
      } else if (engagementId === 1940071730) {
        console.log('convo-x window');
        conversationStarter = true;
        inputMute();
      } else if (!conversationStarter) {
        console.log('Running generic menu hack');
        showInitMenu(welcomeMessage + menuMessage);
      }

      if (!conversationStarter && $('#lpChat div[data-lp-point="lines_area"]').length && !$('#lpChat div[data-lp-point="lines_area"]').children().last().attr('id')) {
        // conversationStarter = true;
        console.log('last if');
        showInitMenu(welcomeMessage + menuMessage);
      }
    }
  }
}

// NOTE: Why is only this part of the code encapsulated by a self-executing function?
(function initializeTrackingCode($) {
  setInterval(() => {
    if (document.querySelector('.lp_slider') && !$('.lp_notification_number.wsdkNotification').hasClass('lpHide') && $('.lp_agent.lp_chat_line_wrapper:last-child .lp_title_text, .lp_agent.lp_chat_line_wrapper:nth-last-child(2) .lp_title_text').text().indexOf('https://lvper.sn') > -1) {
      document.querySelector('.lp_slider').click();
      document.querySelector('.lpview_form_textarea').focus();
      document.querySelector('.lpview_form_textarea').blur();
    }
  }, 1000);

  // GA chat tracking
  setTimeout(waitForLpTags, 500);

  function removeNotification() {
    setCookie('mobile-notif', true, 4);
    $('.notification-image').remove();
  }

  function setAppleButtonClick() {
    window.appleurl = `https://bcrw.apple.com/sms:open?service=iMessage&body=%2A%2AHit%20send%20to%20get%20connected%20to%20the%20LivePerson%20chatbot%2A%2A&recipient=urn:biz:9c27617e-f108-4e9e-a010-81ea843471e4&biz-group-id=${leadSourceCookie}&biz-intent-id=${window.location.href}`;
    $('img[src*="banner_"]').click(e => {
      e.preventDefault();

      console.log(`clicked...${window.appleurl}`);
      window.ga('send', 'event', 'mobile', 'click', 'abc');
      window.open(window.appleurl, '_blank');
    });
  }

  function waitForSelector(selector, callback, time) {
    const waitTime = time || 500;
    if ($(selector).length) {
      (callback)(selector);
    } else {
      setTimeout(() => {
        waitForSelector(selector, callback, waitTime);
      }, waitTime);
    }
  }

  $(window).on('load', () => {
    // NOTE: Is all this code needed still?
    waitForSelector('img[src*="banner_"]', () => {
      setAppleButtonClick();
    });

    // NOTE: use the function defined before for this
    // eslint-disable-next-line
    const chatShutdown = (name = new RegExp('(?:^|;\\s*)chat-shutdown=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
    // eslint-disable-next-line
    const mobileNotification = (name = new RegExp('(?:^|;\\s*)mobile-notif=([^;]*)').exec(document.cookie)) ? name.split(',')[1] : '';
    // NOTE: can we enable console logs based on a query parameter, or a local storage value, so that it doesn't always write console messages?
    console.log(chatShutdown);

    if (!mobileNotification) {
      const mNotif = $('<img>');
      mNotif.attr('src', 'https://s3.amazonaws.com/lp-site-engagements/button_graphics/alert.svg');

      mNotif.addClass('notification-image');
      mNotif.click(() => {
        removeNotification();
      });

      waitForSelector('img[src*="/lp-site-engagements/button_graphics"]', selector => {
        $(selector).parent().append(mNotif);
      });
    }

    if (!chatShutdown) {
      waitForSelector('img[src*="/lp-site-engagements/button_graphics"]', selector => {
        const xControl = $('<img>');
        xControl.addClass('chat-shutdown');
        if ($('img[src*="qr_pr"]').length) {
          xControl.attr('style', 'position:fixed;right:7px !important;bottom:198px;z-index:99999999;left:auto !important;cursor:pointer;width:20px !important;top:unset !important;');
        } else {
          xControl.attr('style', 'position:fixed;right:25px !important;bottom:165px;z-index:99999999;left:auto !important;cursor:pointer;width:20px !important;top:unset !important;');
        }
        xControl.attr('src', 'https://s3.amazonaws.com/lp-site-engagements/button_graphics/Close+button.svg');
        xControl.click(function handleClick() {
          setCookie('chat-shutdown', true, 4);
          $(this).remove();
          $('img[src*="bubble-"]').remove();
          $('img[src*="qr_pr"]').remove();
        });
        $(selector).parent().after(xControl);
      }, 2000);
    } else {
      setTimeout(() => {
        $('img[src*="bubble-"]').remove();
        $('img[src*="qr_pr"]').remove();
      }, 1000);
      $('img[src*="bubble-"]').remove();
      $('img[src*="qr_pr"]').remove();
    }
  });
}(jQuery));
