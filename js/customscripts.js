$('#mysidebar').height($(".nav").height());


$('.sidebarTitle').ready(function(){
        //resize title text size if too width
        //$('.sidebarTitle').textfill(22);
        $('.sidebarTitle').css("visibility","visible");
        //var size = $('.titlespan').css('font-size');
        //$('.h1').css('font-size', size);
    }
);

//sidebar collpasing
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
      if ($(".activepage").parent().hasClass("innerpageitem")) {
        $(".activepage").parent().addClass("activeitem");
      }
      $(".activepage").parent().parent().prev().addClass("active");
      $(".activepage").parent().parent().parent().parent().prev().addClass("active");
      $(".activepage").parent().parent().parent().parent().parent().parent().prev().addClass("active");
      $(".activepage").parent().prev().data("expanded","true");
      $("ul#mysidebar").css("visibility","visible");
      $(".innerfolder > .active > button").addClass("clicked");
  }
  else
      $("ul#mysidebar").css("visibility","visible");

  $(".topfolder > a").click(function(){
      var hasExpanded = $(this).data("expanded") == "true";
      if (hasExpanded) {
          $(this).next().slideUp(400);
          $(this).data("expanded","false");
          $(this).removeClass("active");
          $(this).parent().removeClass("active");
          $(".innerfolder > .active > button").removeClass("clicked");
      } else {
          $(".innerfolder > .active > button").removeClass("clicked");
          $(".folder ul").slideUp(400,null);
          $(".folder > a").data("expanded","false");
          $(this).next().slideDown(400);
          $(this).data("expanded","true");
          $(".folder > a").removeClass("active");
          $(this).addClass("active");
      }

      return false;
  });

  $(".innerfolder > a").click(function(event){
      event.preventDefault();
      var hasExpanded = $(this).data("expanded") == "true";
      var button = $(this).find("button");
      if (hasExpanded) {
          $(this).next().slideUp(400);
          $(this).data("expanded","false");
          $(this).removeClass("active");
          $(this).parent().removeClass("active");
          $(button).removeClass("clicked", );
      } else {
          $(this).next().slideDown(400);
          $(this).data("expanded","true");
          $(this).addClass("active");
          $(button).addClass("clicked");
      }
      return false;
  });

});
