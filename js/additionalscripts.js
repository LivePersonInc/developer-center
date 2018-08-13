function navigateContent(url) {
  var $content = $('#defaultcontent');
  //go to the indicated url passed from the linkclick function and find the content div and load it
  $content.load(url + ' #defaultcontent > *', function () {
    anchors.add('h3');
    populateAnchors ();
    menuDrop ();
    $('#anchorlist').scrollToFixed({ marginTop: 10, dontSetWidth: true });
  });
  //from here, the rest of the code has to do with link highlighting for the sidebar
  var selected = $('a[href="'+url+'"]');
  //make sure no other links are set to active
  $('a').removeClass("activepage");
  //make the string we found previously active
  $('.folder').removeClass("active");
  selected = selected.addClass("activepage");
  if (selected.parent().hasClass('innerpageitem')) {
    $('.innerpageitem').removeClass("activeitem");
    $(".activepage").parent().addClass("activeitem");
  }
  $(".activepage").parent().parent().parent().addClass("active");
}

$(document).ready(function () {
  menuDrop ();
  populateAnchors ();
  $('#anchorlist').scrollToFixed({ marginTop: 10, dontSetWidth: true });
});


function linkclick(that) {
  //prevent the link from actually navigating to the url
  event.preventDefault();
  //grab the url to which the link is pointing
  var url = $(that).attr("href");
  // call the navigateContent function and pass that url to it
  navigateContent(url);
  //make sure the window recognizes this and adds it to the history queue for back and refresh actions
  window.history.pushState({url}, '', url);
};
//handle back/forward and refresh events
$(window).on('popstate', (e) => {
  var state = e.originalEvent.state;
  if (state && state.url) {
    navigateContent(state.url);
  }
});

function solutionsbuttonclick(event) {
  event.preventDefault();
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  documentsSideBar.fadeOut(200, function () {
    solutionsSideBar.fadeIn(200);
  });
  $('.documentsbutton > .underline').removeClass('lined');
  $('.solutionsbutton > .solutionsunderline').addClass('lined');
};

function sidebarbuttonclick(event) {
  event.preventDefault();
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  solutionsSideBar.fadeOut(200, function () {
    documentsSideBar.fadeIn(200);
  });
  $('.solutionsbutton > .solutionsunderline').removeClass('lined');
  $('.documentsbutton > .underline').addClass('lined');
};


function menuDrop () {
  $(".anchorlist > a").click(function(event){
      event.preventDefault();
      var hasExpanded = $(this).data("expanded") == "true";
      if (hasExpanded) {
          $(this).next().slideUp(400,onSlideComplete);
          $(this).data("expanded","false");
      } else {
          $(this).next().slideDown(400,onSlideComplete);
          $(this).data("expanded","true");
      }
      return false;
  });
};

function populateAnchors () {
  var anchorlinks = document.getElementsByTagName("h3");
  var anchorlist = $('.anchorlist ul');
  if (anchorlinks.length == 0){
    $(anchorlist).append('<li>No here. Happy scrolling.</li>');
  }else {
    $.each(anchorlinks, function() {
      $(anchorlist).append('<li><a href="#' + $(this).attr("id") + '">' +  $(this).text() + '</a></li>');
    });
  };
};
