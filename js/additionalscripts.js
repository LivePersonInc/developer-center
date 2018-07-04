function navigateContent(url) {
  var $content = $('#contentrow');
  $content.load(url + ' #contentrow > *');
  var selected = $('a[href="'+url+'"]');
  //make sure no other links are set to active
  $('a').removeClass("activepage");
  //make the string we found previously active
  $('.folder').removeClass("active");
  $('.folder > a').removeClass("active");
  selected = selected.addClass("activepage");
  $(".activepage").parent().parent().parent().addClass("active");
}

function linkclick(that) {
  //prevent the link from actually navigating to the url
  event.preventDefault();
  var url = $(that).attr("href");
  navigateContent(url);
  window.history.pushState({url}, '', url);
};

$(window).on('popstate', (e) => {
  var state = e.originalEvent.state;
  if (state && state.url) {
    navigateContent(state.url);
  }
});

function solutionsbuttonclick() {
  event.preventDefault();
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  documentsSideBar.fadeOut(200, function () {
    solutionsSideBar.fadeIn(200);
  })
}

$("#solutionsbutton").linkUnderlineAnim({
  "speed": 300,
  "color": "#162036",
  "thickness": 2
});

function sidebarbuttonclick() {
  event.preventDefault();
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  solutionsSideBar.fadeOut(200, function () {
    documentsSideBar.fadeIn(200);
  })
}


//$(document).ready(function () {
  //  $(".documentsbutton a").click(function () {
    //    $(this).animate({
      //      borderBottom: '2px solid #3399FF',
      //  }, 500);
    //});
//});
