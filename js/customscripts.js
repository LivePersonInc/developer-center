document.addEventListener("DOMContentLoaded", function(event) {
  anchors.add('h3');
});


$('#mysidebar').height($(".nav").height());


$('.sidebarTitle').ready(function(){
        //resize title text size if too width
        //$('.sidebarTitle').textfill(22);
        $('.sidebarTitle').css("visibility","visible");
        //var size = $('.titlespan').css('font-size');
        //$('.h1').css('font-size', size);
    }
);

//level4 collapsing
$(document).ready(function () {
  var originalURL = window.location.href;
  var modifiedURL = '/' + originalURL.split('/').reverse()[0];
  var currentPage = $('a[href="'+modifiedURL+'"]');
  currentPage = currentPage.addClass("activepage");
  var toOpen = $(".activepage").parent().parent().parent().parent().parent().parent().parent().hasClass("folder");
  var toOpenHigher = $(".activepage").parent().parent().parent().parent().parent().hasClass("folder");
  if (toOpen || toOpenHigher) {
      $(".activepage").parent().parent().show();
      $(".activepage").parent().parent().parent().show();
      $(".activepage").parent().parent().parent().parent().show();
      $(".activepage").parent().parent().parent().parent().parent().show();
      $(".activepage").parent().parent().parent().parent().parent().parent().show();
      $(".activepage").parent().show();
      $(".activepage").parent().parent().prev().data("expanded","true");
      $(".activepage").parent().parent().parent().parent().prev().data("expanded","true");
      $(".activepage").parent().parent().parent().parent().parent().parent().prev().data("expanded","true");
      $(".activepage").parent().parent().prev().addClass("active");
      $(".activepage").parent().parent().parent().parent().prev().addClass("active");
      $(".activepage").parent().parent().parent().parent().parent().parent().prev().addClass("active");
      $(".activepage").parent().prev().data("expanded","true");
      onSlideComplete();
      $("ul#mysidebar").css("visibility","visible");
  }
  else
      $("ul#mysidebar").css("visibility","visible");

  $(".topfolder > a").click(function(){
      var hasExpanded = $(this).data("expanded") == "true";
      if (hasExpanded) {
          $(this).next().slideUp(400,onSlideComplete);
          $(this).data("expanded","false");
          $(this).removeClass("active");
          $(this).parent().removeClass("active");
      } else {
          $(".folder ul").slideUp(400,null);
          $(".folder > a").data("expanded","false");
          $(this).next().slideDown(400,onSlideComplete);
          $(this).data("expanded","true");
          $(".folder > a").removeClass("active");
          $(this).addClass("active");
      }

      return false;
  });

  $(".innerfolder > a").click(function(event){
      event.preventDefault();
      var hasExpanded = $(this).data("expanded") == "true";
      if (hasExpanded) {
          $(this).next().slideUp(400,onSlideComplete);
          $(this).data("expanded","false");
          $(this).removeClass("active");
          $(this).parent().removeClass("active");
      } else {
          $(this).next().slideDown(400,onSlideComplete);
          $(this).data("expanded","true");
          $(".folder > a").removeClass("active");
          $(this).addClass("active");
      }

      return false;
  });

});


function onSlideComplete()
{
    //return;
    if($(window).width() <= 1190){
        $("#mysidebar, div.sidebarTitle").removeClass("fixed");
        return;
    }

    //not working good need to be fixed
    var sliderInnerHeight = 0;
    $("#mysidebar > li").each(function(){
        sliderInnerHeight += $(this).outerHeight();
    })
    console.log(sliderInnerHeight);
    var sidebarheight =  sliderInnerHeight + $("div.sidebarTitle").outerHeight() + $(".breadcrumbs").outerHeight() + $(".footer").outerHeight() + $(".topnavlinks").outerHeight();

    if((sidebarheight + 200) > $(window).height()  ){
         $("#mysidebar, div.sidebarTitle").removeClass("fixed");
          $("div.sidebarTitle").addClass("margin-top-68");
          //$("div.inside-page-content, .inside-page-content .h2").addClass("margin-top-zero");
          $(".sidebarTitle-holder").hide();

    }
    else{
        $("#mysidebar, div.sidebarTitle").addClass("fixed") ;
         $("div.sidebarTitle").removeClass("margin-top-68");
        // $("div.inside-page-content, .inside-page-content .h2").removeClass("margin-top-zero");
         $(".sidebarTitle-holder").show();
    }

}
$(window).on("resize",onSlideComplete);
$(window).load(onSlideComplete);
//need for open and close search input
$(function() {
    $(".close-btn, #search-icon").click(function(){
         $("#search-demo-container, #search-demo-container .search-line").animate({width: 'toggle'},function() {
             setTimeout(function(){
                $("#search-input").focus();
            },100);
         });
    })
});
