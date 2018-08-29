$(document).ready(function () {
  //add anchor links to all h3 titles. See respective functions below for what they do.
  anchors.add('h3');
  populateAnchors ();
  menuDrop ();
  codeButtons();
  mobileHamburger();
  sidebarMenuClick();
  //call scrolltofixed on the anchorlist box so that it goes fixed on scroll
  $('#anchorlist').scrollToFixed({ marginTop: 10, dontSetWidth: false });
  //call smooth-scroll on all anchorlinks
  var scroll = new SmoothScroll('a[href*="#"]');
  //set breadcrumbs display if welcome page/normal page.
  var $title = $('.h1').text();
  if ($title.indexOf('Welcome') != -1) {
    return false;
  } else {
    $('.breadcrumbs').removeClass('breadhidden');
  }
});

function navigateContent(url) {
  var $content = $('#defaultcontent');
  var $titlecontainer = $('.documenttitle');
  var $breadcrumbs = $('.breadcrumbs');
  //go to the indicated url passed from the linkclick function and find the breadcrumbs div and load it. Then, set breadcrumbs display if welcome page/normal page.
  $breadcrumbs.load(url + ' .breadcrumbs > *', function () {
    if (url.indexOf('index') != -1) {
      $(this).addClass('breadhidden');
    } else {
      $(this).removeClass('breadhidden');
    }
  });
  //go to the indicated url passed from the linkclick function and find the title div and load it
  $titlecontainer.load(url + ' .documenttitle > *', function () {
    //after the title is loaded, find the text of the title
    var $title = $('.h1').text();
    //then set it as the document's title so it shows up properly
    $(document).prop('title', $title);
  });
  //go to the indicated url passed from the linkclick function and find the content div and load it
  $content.load(url + ' #defaultcontent > *', function () {
    //add anchor links to all h3 titles. See respective functions below for what they do.
    anchors.add('h3');
    populateAnchors ();
    codeButtons();
    $('#anchorlist').scrollToFixed({ marginTop: 10, dontSetWidth: false });
    var scroll = new SmoothScroll('a[href*="#"]');
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
  if (selected.parent().hasClass('pageitem')) {
    $('.innerpageitem').removeClass("activeitem");
  }
  $(".activepage").parent().parent().parent().addClass("active");
  window.scrollTo(0,0);
};



//a function to create copy buttons on all code blocks
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

//a function to wrap the function which controls the sidebar links - yes I know this is dumb, blame Firefox and the way it handles events.
function sidebarMenuClick() {
//grab all the innerlinks
var sidebarlink = document.getElementsByClassName('innerlink');
//a function to control a click on the sidebar links
function linkclick(event) {
  //prevent the link from actually navigating to the url
  event.preventDefault();
  //grab the url to which the link is pointing
  var url = $(this).attr("href");
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
//for every lnnerlink, add an event listener that will call the above function.
for (var i = 0 ; i < sidebarlink.length; i++) {
   sidebarlink[i].addEventListener('click' , linkclick , false ) ;
}
};

//a function to creaste the animation when you click the "solutions" button
function solutionsbuttonclick(event) {
  event.preventDefault();
  //show/hide the appropriate sidebar when clicking on the button
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  documentsSideBar.fadeOut(200, function () {
    solutionsSideBar.fadeIn(200);
  });
  //show/hide the underline on the appropriate sidebar when clicking on the button
  $('.documentsbutton').removeClass('lined');
  $('.solutionsbutton').addClass('lined');
};

//a function to creaste the animation when you click the "documents" button
function sidebarbuttonclick(event) {
  event.preventDefault();
  //same as above, just the other button
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  solutionsSideBar.fadeOut(200, function () {
    documentsSideBar.fadeIn(200);
  });
  $('.solutionsbutton').removeClass('lined');
  $('.documentsbutton').addClass('lined');
};


//a simple dropdown behavior for the anchorlinks box
function menuDrop () {
  //begin by setting the list's data to reflect that it's closed
  $(".anchorlist > a").data("expanded", "false");
  //when a click on the list occurs
  $(".anchorlist > a").click(function(event){
      event.preventDefault();
      //set data to true for toggle behavior
      var hasExpanded = $(this).data("expanded") == "true";
      if (hasExpanded) {
        //if it has been clicked before, close it
          $(this).next().slideUp(400);
          $(this).data("expanded","false");
      } else {
        //if it hasn't been clicked before, open it
          $(this).next().slideDown(400);
          $(this).data("expanded","true");
      }
      return false;
  });
};

//a function to loop over all amchpr;omls amd create a dropdown menu from them
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

function mobileHamburger (){
  var $hamburger = $('.hamburger');
  var sidebar = $('#mysidebar');
  $hamburger.on('click', function(e) {
  $hamburger.toggleClass('is-active');
  var hasExpanded = $(sidebar).data("expanded") == "true";
  if (hasExpanded) {
      $(sidebar).slideUp(400);
      $(sidebar).data("expanded","false");
  } else {
      $(sidebar).slideDown(400);
      $(sidebar).data("expanded","true");
  }
 });
}
