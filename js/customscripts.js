
$('#mysidebar').height($(".nav").height());


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
    anchors.add('h2,h3,h4,h5');

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
        $('.sidebarTitle').textfill(20);
        $('.sidebarTitle').css("visibility","visible");
    }
);
//level4 collapsing
$(function() {
   

    var toOpen = $(".activepage").parent().parent().hasClass("folder")
    if (toOpen) {
        $(".activepage").parent().show();
        $(".activepage").parent().prev().data("expanded","true");
        $(".activepage").parent().prev().addClass("active");
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
        } else {
            $(".folder ul").slideUp(400,null);
            $(".folder > a").data("expanded","false");
            $(".folder > a").removeClass("active");

            $(this).next().slideDown(400,onSlideComplete);
            $(this).data("expanded","true");
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
        $(".toc").ready(function(){
            setTimeout(function(){

            },100);
        });

        if ($("div#toc ul li").length == 0) {
            breadcrumbs.disable();
            return;
        }

        $("div#toc > ul > li a").click(function(event){
            event.preventDefault();

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
            if (breadcrumbs.isOpen) breadcrumbs.hide();
        });
    },
    show: function() {
        $("div#toc").slideDown(200);  
        $(this).find(".down-arrow").removeClass("fa-chevron-down");
        $(this).find(".down-arrow").addClass("fa-chevron-up");
        breadcrumbs.isOpen = true;
    },
    hide: function() {
        $("div#toc").slideUp(200);
        $(this).find(".down-arrow").removeClass("fa-chevron-up");
        $(this).find(".down-arrow").addClass("fa-chevron-down");
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
