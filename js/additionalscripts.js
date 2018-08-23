function navigateContent(url) {
  var $content = $('#defaultcontent');
  var $title = $('.documenttitle');
  var $breadcrumbs = $('.breadcrumbs');
  //go to the indicated url passed from the linkclick function and find the content div and load it
  $content.load(url + ' #defaultcontent > *', function () {
    //add anchor links to all h3 titles. See respective functions below for what they do.
    anchors.add('h3');
    populateAnchors ();
    codeButtons();
    $('#anchorlist').scrollToFixed({ marginTop: 10, dontSetWidth: false });
    var scroll = new SmoothScroll('a[href*="#"]');
  });
  //go to the indicated url passed from the linkclick function and find the title div and load it
  $title.load(url + ' .documenttitle > *');
  //go to the indicated url passed from the linkclick function and find the breadcrumbs div and load it. Then, set breadcrumbs display if welcome page/normal page.
  $breadcrumbs.load(url + ' .breadcrumbs > *', function () {
    if (url.indexOf('index') != -1) {
      $(this).addClass('breadhidden');
    } else {
      $(this).removeClass('breadhidden');
    }
  });
  //from here, the rest of the code has to do with link highlighting for the sidebar
  var selected = $('a[href="'+url+'"]');
  //make sure no other links are set to active
  $('a').removeClass("activepage");
  //make the string we found previously active
  $('.folder').removeClass("active");
  selected = selected.addClass("activepage");
  //just some code to make sure sidebar styling works well.
  if (selected.parent().hasClass('innerpageitem')) {
    $('.innerpageitem').removeClass("activeitem");
    $(".activepage").parent().addClass("activeitem");
  }
  $(".activepage").parent().parent().parent().addClass("active");
}

$(document).ready(function () {
  //add anchor links to all h3 titles. See respective functions below for what they do.
  anchors.add('h3');
  populateAnchors ();
  menuDrop ();
  codeButtons();
  //call scrolltofixed on the anchorlist box so that it goes fixed on scroll
  $('#anchorlist').scrollToFixed({ marginTop: 10, dontSetWidth: false });
  //call smooth-scroll on all anchorlinks
  var scroll = new SmoothScroll('a[href*="#"]');
  //set breadcrumbs display if welcome page/normal page.
  if (window.location.href.indexOf('index') != -1) {
    return false;
  } else {
    $('.breadcrumbs').removeClass('breadhidden');
  }
});

function codeButtons () {
  // get all <code> elements.
  var allCodeBlocksElements = $('div[class^="language-"]');
  allCodeBlocksElements.each(function(i) {
   	// add different id for each code block.

	// add a sequentially increasing id to each code block.
  var currentId = "codeblock" + (i + 1);
  $(this).attr('id', currentId);

  //define and then add a clipboard button to all code blocks.
  var clipButton = '<button class="codebtn" data-clipboard-target="#' + currentId + '"><img class="copybefore" src="https://clipboardjs.com/assets/images/clippy.svg" width="13" alt="Copy to clipboard"><img class="copyafter" src="img/done.svg" width="13" alt="Copy to clipboard"></button>';
     $(this).append(clipButton);
  });
//instantiate clipboardjs on the buttons.
  new ClipboardJS('.codebtn');
  //switch between clipboard icon to checkmark icon on click.
  $('.codebtn').click(function() {
    $(this).find('.copybefore').hide();
    $(this).find('.copyafter').show();
  });
};

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
  //show/hide the appropriate sidebar when clicking on the button
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  documentsSideBar.fadeOut(200, function () {
    solutionsSideBar.fadeIn(200);
  });
  //show/hide the underline on the appropriate sidebar when clicking on the button
  $('.documentsbutton > .underline').removeClass('lined');
  $('.solutionsbutton > .solutionsunderline').addClass('lined');
};

function sidebarbuttonclick(event) {
  event.preventDefault();
  //same as above, just the other button
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  solutionsSideBar.fadeOut(200, function () {
    documentsSideBar.fadeIn(200);
  });
  $('.solutionsbutton > .solutionsunderline').removeClass('lined');
  $('.documentsbutton > .underline').addClass('lined');
};


function menuDrop () {
  //a simple dropdown behavior for the anchorlinks box
  console.log("called");
  var called = true;
  $(".anchorlist > a").data("expanded", "false");
  $(".anchorlist > a").click(function(event){
      event.preventDefault();
      var hasExpanded = $(this).data("expanded") == "true";
      if (hasExpanded) {
          $(this).next().slideUp(400);
          $(this).data("expanded","false");
          console.log("false happened");
      } else {
          $(this).next().slideDown(400);
          $(this).data("expanded","true");
          console.log("true happened");
      }
      return false;
  });
};

function populateAnchors () {
  //remove all previous anchoritems populated in the box
  $(".anchoritem").remove();
  //find all h3 titles on the page
  var anchorlinks = document.getElementsByTagName("h3");
  var anchorlist = $('.anchorlist ul');
  //if there are no anchrolinks, hide the box
  if (anchorlinks.length == 0){
    $('.anchorlist').css('display', 'none');
    //if there are anchorlinks, display the box
  }else {
    $('.anchorlist').css('display', 'block');
    //for each link found, append an item to the anchor list. The data-scroll attribute is used in the smooth-scroll plugin.
    $.each(anchorlinks, function() {
      $(anchorlist).append('<li><a class="anchoritem" data-scroll href="#' + $(this).attr("id") + '">' +  $(this).text() + '</a></li>');
    });
  };
};
