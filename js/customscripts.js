document.addEventListener("DOMContentLoaded", function(event) {
  anchors.add('h3');
});


$('#mysidebar').height($(".nav").height());

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

$( document ).ready(function() {
    //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
    // position as your scroll. if you have a lot of nav items, this height may not work for you.
    var h = $(window).height();
    //console.log (h);
    if (h > 800) {
        //$( "#mysidebar" ).attr("class", "nav affix");
    }
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    /**
     * AnchorJS
     */

    //solve problem with width tables in mobile
    if (mobileAndTabletcheck()) {
        $( "table" ).wrap( "<div style='max-width:100%;overflow:scroll'></div>" );
    }

});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});

//more-btn functionality to show/hide links on level1 pages
$(function() {
    $(".more-btn").each(function(){
        $(this).parent().siblings(":gt(2)").hide();
		if ($(this).parent().siblings().length > 3) $(this).show();
    });
    $(".more-btn").click(function(){
        var cur = $(this).text();
        if (cur == "show less") {
            $(this).parent().siblings(":gt(2)").hide();
            $(this).text("More...");
        } else {
            $(this).parent().siblings().show();
            $(this).text("show less");
        }
    });
});


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

  $(".folder > a").click(function(){
      var hasExpanded = $(this).data("expanded") == "true";
      if (hasExpanded) {
          $(this).next().slideUp(400,onSlideComplete);
          $(this).data("expanded","false");
          $(this).removeClass("active");
          $(this).parent().removeClass("active");
      } else {
          //$(".folder ul").slideUp(400,null);
          //$(".folder > a").data("expanded","false");
          //$(".folder > a").removeClass("active");

          $(this).next().slideDown(400,onSlideComplete);
          $(this).data("expanded","true");
          $(".folder > a").removeClass("active")
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

//need for open and close search input on mobile
$(function() {
    var mobile_open = false;
    $("#search-icon-mobile").click(function(){
        if(mobile_open == false){
            var width = $(window).width() - ($("#search-icon-mobile").width() + $(".mobilresizee-search-container .close-btn").outerWidth() + 35);
            $("#search-input-mobile").animate({'width': width},function() {
                setTimeout(function(){
                    $("#search-input-mobile").focus();
                },200);
            });
            $(".mobile-search-container").animate({'right': '9px'},200);
            $(".mobile-search-container .close-btn").show();
            $(".mobile-search-container").addClass("under-line");
            mobile_open = true;
        }
         if(mobile_open == true){
             //NEED TO DO SERACH
         }
        $(".mobile-search-container .close-btn").click(function(){
            $("#search-input-mobile").animate({'width': 0},200);

            $(".mobile-search-container").animate({'right': '46px'},200);
            $(".mobile-search-container .close-btn").hide();
            $(".mobile-search-container").removeClass("under-line");
            mobile_open = false;
        })

    })
    $(window).on("resize",function(){
        if(mobile_open){
            var width = $(window).width() - ($("#search-icon-mobile").width() + $(".mobilresizee-search-container .close-btn").outerWidth() + 35);
            $("#search-input-mobile").css({'width': width});
        }
    })
});

//need for open the preview on navigation documents and products
$(function(){
    var interval=0;
    $(".preview").mouseleave(function(){
        $(this).hide();
    });

    $("#bs-example-navbar-collapse-1 > ul > li > a").each(function() {
        var previewPage = $(this).attr("href").split('.')[0] + "-preview.html";
        $(this).parent().find(".preview").load(previewPage);
    });


    $("#bs-example-navbar-collapse-1 > ul > li > a").mouseenter(function(){

        //to solve the problem that ipad change mouseenter to click
       if(is_iPod())
       {
         $(this).trigger("click");
         return;
       }
       clearInterval(interval);
       $(".preview").hide();
       $(this).parent().find(".preview").show();

         //auto hide preview if mouse didn't move to preview div after one second and didnt stay on button
         interval = setInterval( function(){
             if($('.preview:hover').length == 0 && $("#bs-example-navbar-collapse-1  ul  li  a:hover").length == 0){
                  $(".preview").hide();
             }
            },1000);

    }

    )
})

//left side navigation
var breadcrumbs = {
    isOpen: 0,
    init: function() {
        $("#toc").ready(function(){
            setTimeout(function(){
                if ($("div#toc ul li").length == 0) {
                    breadcrumbs.disable();
                    return;
                }

                $("div#toc > ul > li a").click(function(event){
                    event.preventDefault();
                    var target = $(this).attr("href");
                    var top = $(target).offset().top;
                    $('html, body').animate({
                        scrollTop: top - 120
                    }, 500);
                    breadcrumbs.hide();
                });
                $(".breadcrumb-item.active").on("click",function(){
                    if (breadcrumbs.isOpen) breadcrumbs.hide();
                    else breadcrumbs.show();
                });

                $("body").click(function(){
                    if (breadcrumbs.isOpen && $(event.target).parents(".breadcrumb-item.active").length == 0) breadcrumbs.hide();
                });
            },150);
        });
    },
    show: function() {
        $("div#toc").slideDown(200);
        $(".breadcrumb-item.active").find(".down-arrow").removeClass("fa-chevron-down");
        $(".breadcrumb-item.active").find(".down-arrow").addClass("fa-chevron-up");
        breadcrumbs.isOpen = true;
    },
    hide: function() {
        $("div#toc").slideUp(200);
        $(".breadcrumb-item.active").find(".down-arrow").removeClass("fa-chevron-up");
        $(".breadcrumb-item.active").find(".down-arrow").addClass("fa-chevron-down");
        breadcrumbs.isOpen = false;
    },
    disable: function() {
        $("div#toc").remove();
        $(".breadcrumb-item.active").find(".down-arrow").removeClass("fa-chevron-down");
        $(".breadcrumb-item.active").removeClass("active");
    }
}
$(breadcrumbs.init);





    search = {
        store: null,
        idx: null,
        oldsearch:"",
        interval:0,
        keyUpTimeout: null,
        term: "",
        level3: null,
        init:function(){
            if ($(".sidebarTitle-holder").length > 0) search.level3 = $(".sidebarTitle-holder").text();
            if (search.level3 && search.level3.trim() == "") search.level3 = null;
            $("#search-input").on("keyup",function(){
                clearTimeout(search.keyUpTimeout);
                search.term = $("#search-input").val().trim().toLowerCase();

                if (search.term != "") search.show();
                else search.hide();

                search.keyUpTimeout = setTimeout(function(){
                    var href = "search.html?term="+search.term;
                    if (search.level3) href += "&level3="+search.level3;
                    $("#searchPageLink").attr("href",href);
                    search.showOnPage();
                    search.search(search.term, search.showAsOverlay);
                },400);
            });
            $('#search-input-mobile').keypress(function (e) {
                if (e.which == 13) {
                    search.term = $("#search-input-mobile").val().trim().toLowerCase();
                    var href = "search.html?term="+search.term;
                    if (search.level3) href += "&level3="+search.level3;
                    location.href = href;
                }
            });
            //we return the search result if field not empty
            $("#search-input").on("focus",function(){
                if(search.term != "") search.show();
            })

            $("body").click(function(e){
                if ($(event.target).parents("#search-demo-container").length == 0) search.hide();
            });

            var isSearch = location.href.indexOf("term=") != -1;
            if (isSearch) {
                search.term = getParameterByName("term");
                $("#search-input").val(search.term);
                var href = "search.html?term="+search.term;
                if (search.level3) href += "&level3="+search.level3;
                $("#searchPageLink").attr("href",href);
                $("#search-demo-container, #search-demo-container .search-line").animate({width: 'toggle'},1,function(){
                    setTimeout(function(){
                        $("#search-input").focus();
                    },100);
                });
            }
            if (location.href.indexOf("search.html") != -1 && isSearch) {
                search.level3 = getParameterByName("level3");
                if (search.level3 && search.level3.trim() == "") search.level3 = null;
                search.search(search.term,search.showAsSearch);
            }
            if (isSearch) {
                search.showOnPage();
                search.search(search.term,search.showAsOverlay);
            }
        },
        show: function() {
            $("#results-container").show();
        },
        hide: function() {
            $("#results-container").hide();
        },
        load: function(cb) {
            if (!search.store) {

                $.get("search.json").done(function(content){
                    search.store = content;

                    search.idx = lunr(function () {
                        this.ref("idx");
                        this.field('url');
                        this.field('title', { boost: 10 });
                        this.field('tags');
                        this.field('keywords');
                        this.field('content');

                        search.store.forEach(function (document,i) {
                            document.idx = i;
                            this.add(document);
                        },this);
                    });

                    if (cb) cb();
                }).error(function(err){
                    console.log(err);
                });
            } else if (cb) cb();

        },
        search: function(term,handler) {
            $(".resultsInDocuments, .resultsInProducts, .resultsInDocument").html("");
            $(".fa-cog").show();
            search.load(function(){
                var results = search.idx.search(term);
                if (handler) handler(results);
                $(".fa-cog").hide();
            });
        },
        showAsOverlay: function(results) {
            var resultsRefs = [];
            var li = $("#resultOverlayRecordTemplate");
            function template(result) {
                var record = li.html();
                record = record.replace("{url}",result.url+"?term="+search.term);
                record = record.replace("{title}",result.title);
                if (result.level3 && result.level3 != '') record = record.replace("{level3}","("+result.level3+")");
                else record = record.replace("{level3}","");
                return record;
            }

            var resultsInDocumentsCount = 0, resultsInProductsCount = 0, resultsInDocumentCount = 0;
            $(".resultsInDocuments, .resultsInProducts, .resultsInDocument").html("");
            results.forEach(function(result) {
                if (resultsRefs.indexOf(result.ref) != -1) return;
                resultsRefs.push(result.ref);
                result = search.store[result.ref];
                var resultsClass = null;
                if (result.level3 && search.level3 && result.level3 == search.level3) {
                    resultsClass = ".resultsInDocument";
                    resultsInDocumentCount++;
                    if (resultsInDocumentCount <= 3) $(template(result)).appendTo(resultsClass);
                }
                else if (result.level1.toLowerCase() == "documents") {
                    resultsClass = ".resultsInDocuments";
                    resultsInDocumentsCount++;
                    if (resultsInDocumentsCount <= 3) $(template(result)).appendTo(resultsClass);
                }
                else if (result.level1.toLowerCase() == "products") {
                    resultsClass = ".resultsInProducts";
                    resultsInProductsCount++;
                    if (resultsInProductsCount <= 3) $(template(result)).appendTo(resultsClass);
                }
            });
            $(".resultsInDocumentsTitle,.resultsInProductsTitle,.resultsInDocumentTitle").show();
            if (resultsInDocumentsCount == 0) $(".resultsInDocumentsTitle").hide();
            if (resultsInProductsCount == 0) $(".resultsInProductsTitle").hide();
            if (resultsInDocumentCount == 0) $(".resultsInDocumentTitle").hide();

            $(".resultsInDocumentsCount").text(resultsInDocumentsCount);
            $(".resultsInProductsCount").text(resultsInProductsCount);
            $(".resultsInDocumentCount").text(resultsInDocumentCount);
        },
        showAsSearch: function(results) {
            var li = $("#resultPageRecordTemplate");
            function template(result) {
                var record = li.html();

                var text = result.content.replace(/\+/g, " ");
                text = decodeURIComponent(text).substr(0,400);
                var lastSpace = text.lastIndexOf(" ");
                var firstTable = text.indexOf("###");
                ending = lastSpace;
                if (firstTable != -1 && firstTable < lastSpace) ending = firstTable;
                text = text.substring(0,ending);

                var re = new RegExp(search.term, 'ig');
                var mentions = 0;
                var matches = result.content.match(re);
                if (matches) mentions = matches.length;

                record = record.replace("{url}",result.url+"?term="+search.term);
                record = record.replace("{title}",result.title);
                record = record.replace("{text}",text);
                record = record.replace("{level1}",result.level1);
                record = record.replace("{level2}",result.level2);
                record = record.replace("{level3}",result.level3);
                if (result.level4 != "")
                    record = record.replace("{level4}",result.level4 + '<span class="r-a">></span>');
                else
                    record = record.replace("{level4}","");

                record = record.replace("{mentionsCount}",mentions);
                return record;
            }

            var resultsInDocumentsCount = 0, resultsInProductsCount = 0, resultsInDocumentCount = 0;
            $(".pageResultsInDocuments, .pageResultsInProducts, .pageResultsInDocument").html("");

            results.forEach(function(result) {
                result = search.store[result.ref];
                var resultsClass = null;
                if (result.level3 && search.level3 && result.level3 == search.level3) {
                    resultsClass = ".pageResultsInDocument";
                    resultsInDocumentCount++;
                    if (resultsInDocumentCount <= 3) $(template(result)).appendTo(resultsClass);
                }
                else if (result.level1.toLowerCase() == "documents") {
                    resultsClass = ".pageResultsInDocuments";
                    resultsInDocumentsCount++;
                    $(template(result)).appendTo(resultsClass);
                }
                else if (result.level1.toLowerCase() == "products") {
                    resultsClass = ".pageResultsInProducts";
                    resultsInProductsCount++;
                    $(template(result)).appendTo(resultsClass);
                }
            });

            $(".resultsInDocumentsTitle,.resultsInProductsTitle,.resultsInDocumentTitle").show();
            if (resultsInDocumentsCount == 0) $(".resultsInDocumentsTitle").hide();
            if (resultsInProductsCount == 0) $(".resultsInProductsCount").hide();
            if (resultsInDocumentCount == 0) $(".resultsInDocumentCount").hide();

            $(".resultsInDocumentsCount").text(resultsInDocumentsCount);
            $(".resultsInProductsCount").text(resultsInProductsCount);
            $(".resultsInDocumentCount").text(resultsInDocumentCount);

            $(".fa-cog").hide();
            $(".container.search").fadeIn();
        },
        showOnPage: function() {
            search.mark();
        },
        mark: function() {
            $(".post-content, .container.search").unmark();
            $(".post-content, .container.search").mark(search.term,{"element": "span","className":"mark","separateWordSearch": false} );
        }
    };

$(search.init);

function is_iPod(){
     return navigator.userAgent.match(/iPad/i) != null;
}

(function($) {
    $.fn.textfill = function(maxFontSize) {
        maxFontSize = parseInt(maxFontSize, 10);
        return this.each(function(){
            var ourText = $("span", this),
                parent = ourText.parent(),
                maxHeight = parent.height(),
                maxWidth = parent.width(),
                fontSize = parseInt(ourText.css("fontSize"), 10),
                multiplier = maxWidth/ourText.width(),
                newSize = (fontSize*(multiplier-0.1));
            ourText.css(
                "fontSize",
                (maxFontSize > 0 && newSize > maxFontSize) ?
                    maxFontSize :
                    newSize
            );
        });
    };
})(jQuery);


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
