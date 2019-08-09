$(document).ready(function () {
	var url = window.location.href;
	//add anchor links to all h3 titles. See respective functions below for what they do.
	anchors.add('h3, h4');
	linkload();
	sidebarClick();
	populateAnchors();
	menuDrop();
	codeButtons();
	mobileHamburger();
	isExplorer();
	searchFunction();
	capabilitiesSearch();
	allArticlesClick();
	scrollToHash();
	domainTool();
	searchClick(event);
	//detect if mobile user
	if (/Mobi|Android/i.test(navigator.userAgent) == false) {
		sidebarCollapse(url);
	}
	//check if refresh events are supported
	if (window.performance) {
		//if they are, check if refresh happened
		if (performance.navigation.type != 1) {
			//if there's no refresh, this is a load and linkload will be called
			linkload();
		}
		//refresh events can't be detected just call the function (enjoy explorer)
	} else {
		linkload();
	};
	//call scrolltofixed on the anchorlist box so that it goes fixed on scroll
	$('#anchorlist').scrollToFixed({
		marginTop: 10,
		dontSetWidth: false
	});
	//call smooth-scroll on all anchorlinks
	var scroll = new SmoothScroll('a[href*="#"]');
	//set breadcrumbs display if welcome page/normal page.
	var $title = $('.h1').text();
	if ($title.indexOf('Welcome') != -1) {
		console.log("Welcome to LivePerson Developers!");
	} else {
		$('.breadcrumbs').removeClass('breadhidden');
		$('.suggestbutton').removeClass('suggesthidden');
	}
});

function navigateContent(url) {
	//call ajax with the target url
	$.ajax(url)
		.done(function (content) {
			//once done, figure out if we're being redirected by the redirect plugin or not
			if (content.indexOf("<title>Redirecting…</title>") > -1 || content.indexOf("<title>Redirecting&hellip;</title>") > -1) {
				//if we are, set the URL to match the original one before redirect and then call navigate content again
				url = content.match(/<script>location=\"([^\"]+)\"<\/script>/)[1];
				navigateContent(url);
			} else {
				//if we're not being redirected, grab the various parts of the target page
				var $newData = $(content);
				var $content = $('#defaultcontent');
				var $titlecontainer = $('.documenttitle');
				var $breadcrumbs = $('.breadcrumbs');
				//exchange the content of those parts with the new parts loaded via ajax
				$breadcrumbs.html($newData.find('.breadcrumbs').html());
				$titlecontainer.html($newData.find('.documenttitle').html());
				$content.html($newData.find('#defaultcontent').html());
				//hide/display breadcrumbs if on welcome page or not
				var $title = $('.h1').text();
				if ($title.indexOf('Welcome') != -1) {
					$('.breadcrumbs').addClass('breadhidden');
				} else {
					$('.breadcrumbs').removeClass('breadhidden');
					$('.suggestbutton').removeClass('suggesthidden');
				}
			}
			//add anchor links to all h3 titles. See respective functions below for what they do.
			sidebarCollapse(url);
			anchors.add('h3, h4');
			populateAnchors();
			codeButtons();
			replaceTitle();
			searchFunction();
			capabilitiesSearch();
			searchHighlight();
			allArticlesClick();
			scrollToHash();
			domainTool();
			searchClick ();
			//call scrolltoFixed on the anchorlinks list to ensure good scrolling experience
			$('#anchorlist').scrollToFixed({
				dontSetWidth: false
			});
			//call smoothscrolling on all anchors
			var scroll = new SmoothScroll('a[href*="#"]');
			//from here, the rest of the code has to do with link highlighting for the sidebar
			var selected = $('a[href*="' + url + '"]');
			//make the string we found previously active
			$('.folder').removeClass("active");
			$('.innerlink').removeClass("active");
			selected = selected.addClass("activepage");
			//just some code to make sure sidebar styling works well.
			if (selected.parent().hasClass('innerpageitem')) {
				$('.innerpageitem').removeClass("activeitem");
				$(".activepage").parent().addClass("activeitem");
			}
			if (selected.parent().hasClass('pageitem')) {
				$('.innerpageitem').removeClass("activeitem");
			}
			//jump to top when page loads
			if (window.location.hash == "") {
				console.log(window.location.hash);
				window.scrollTo(0, 0);
			}
			if (/Mobi|Android/i.test(navigator.userAgent) == true) {
				$('#mysidebar').slideUp(400);
				$('#mysidebar').data("expanded", "false");
			};
		})
		.fail(function () {
			url = "http://developers.liveperson.com/404.html";
			navigateContent(url);
		});
}


//a function to create copy buttons on all code blocks
function codeButtons() {
	// get all <code> elements.
	var allCodeBlocksElements = $('div[class^="language-"]');
	allCodeBlocksElements.each(function (i) {
		// add a sequentially increasing id to each code block.
		var currentId = "codeblock" + (i + 1);
		$(this).attr('id', currentId);
		//define and then add a clipboard button to all code blocks.
		var clipButton = '<button class="codebtn" data-clipboard-target="#' + currentId + '"><i class="far fa-copy copybefore" aria-hidden="true"></i><i class="fas fa-check copyafter" aria-hidden="true" style="display: none;"></i></button>';
		var nightButton = '<button class="nightbtn"><i class="far fa-moon" aria-hidden="true"></i></button>'
		$(this).append(clipButton);
		$(this).append(nightButton);
	});
	//instantiate clipboardjs on the buttons. This controls the copy action.
	new ClipboardJS('.codebtn');
	//switch between clipboard icon to checkmark icon on click.
	$('.codebtn').click(function () {
		var before = $(this).find('.copybefore');
		var after = $(this).find('.copyafter');
		before.hide();
		after.show();
		setTimeout(function () {
			after.hide();
			before.show();
		}, 5000);
	});

	//simple code for removing and adding the darken and lighten classes + localStorage to remember the user's choice
	var selectedCodeHighlight = localStorage.getItem('selectedCode');
	if (selectedCodeHighlight == 'light') {
		$(".highlighter-rouge").removeClass("darken");
		$(".fa-moon").removeClass("fas");
		$(".fa-moon").addClass("far");
	} else if (selectedCodeHighlight == 'dark') {
		$(".highlighter-rouge").addClass("darken");
		$(".fa-moon").removeClass("far");
		$(".fa-moon").addClass("fas");
	}
	$('.nightbtn').click(function () {
		if ($(".highlighter-rouge").hasClass("darken")) {
			$(".fa-moon").removeClass("fas");
			$(".fa-moon").addClass("far");
			$(".highlighter-rouge").removeClass("darken");
			localStorage.setItem('selectedCode', 'light');
		} else {
			$(".fa-moon").removeClass("far");
			$(".fa-moon").addClass("fas");
			$(".highlighter-rouge").addClass("darken");
			localStorage.setItem('selectedCode', 'dark');
		};
	});
};


//a function to control a click on internal links
function linkclick(event, that) {
	//prevent the link from actually navigating to the url
	event.preventDefault();
	//grab the url to which the link is pointing
	var url = $(that).attr("href");
	// call the navigateContent function and pass that url to it
	navigateContent(url);
	//make sure the window recognizes this and adds it to the history queue for back and refresh actions
	window.history.pushState({
		url: url
	}, '', url);
};
//handle back/forward and refresh events
$(window).on('popstate', function (e) {
	var state = e.originalEvent.state;
	if (state && state.url) {
		navigateContent(state.url);
	}
});

function linkload() {
	//grab the url for the page
	var url = window.location.href;
	//make sure the window recognizes this and adds it to the history queue for back and refresh actions
	window.history.pushState({
		url: url
	}, '', url);
};
//handle back/forward and refresh events
$(window).on('popstate', function (e) {
	var state = e.originalEvent.state;
	if (state && state.url) {
		navigateContent(state.url);
	}
});


//a simple dropdown behavior for the anchorlinks box
function menuDrop() {
	//begin by setting the list's data to reflect that it's open
	$(".anchorlist > a").data("expanded", "true");
	//when a click on the list occurs
	$(".anchorlist").on("click", ".anchormain", function (event) {
		event.preventDefault();
		//set data to true for toggle behavior
		var hasExpanded = $(this).data("expanded") == "true";
		if (hasExpanded) {
			//if it is open, close it
			$(this).next().slideUp(400);
			$(this).data("expanded", "false");
		} else {
			//if it is closed, open it
			$(this).next().slideDown(400);
			$(this).data("expanded", "true");
		}
		return false;
	});
};

//a function to loop over all anchor elements and create a dropdown menu from them
function populateAnchors() {
	//remove all previous anchoritems populated in the box
	$(".anchoritem").remove();
	//find all h3 titles on the page
	var anchorlinks = document.getElementsByTagName("h3");
	var anchorlist = document.getElementById('inneranchors');
	let html;
	//if there are no anchrolinks, hide the box. Visibility is used instead of display so not to conflict with the scrollToFixed plugin.
	if (anchorlinks.length == 0) {
		$('.anchorlist').css('visibility', 'hidden');
		//if there are anchorlinks, display the box
	} else {
		html = '';
		$('.anchorlist').css('visibility', 'visible');
		//for each link found, append an item to the anchor list. The data-scroll attribute is used in the smooth-scroll plugin.
		$.each(anchorlinks, function () {
			html += '<li><a class="anchoritem" data-scroll href="#' + $(this).attr("id") + '">' + $(this).text() + '</a></li>'
		});
		anchorlist.innerHTML = html;
	};
};

//a function to control a click on the mobile hamburger button
function mobileHamburger() {
	var $hamburger = $('.hamburger');
	var sidebar = $('#mysidebar');
	//on click, set data to control the toggle behavior.
	$hamburger.on('click', function (e) {
		$hamburger.toggleClass('is-active');
		var hasExpanded = $(sidebar).data("expanded") == "true";
		if (hasExpanded) {
			//if clicked, slide up and set data to unclicked.
			$(sidebar).slideUp(400);
			$(sidebar).data("expanded", "false");
		} else {
			//if unclicked, slide down and set data to clicked.
			$(sidebar).slideDown(400);
			$(sidebar).data("expanded", "true");
		}
	});
}

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

	let scrollOnce;
//Refactored this a bit from its original nightmare-state. Needs improvement.
function sidebarCollapse(url) {
	var modifiedURL = '/' + url.split('/').reverse()[0].replace(/\#.*/, '');
	var currentPage = $('a[href="' + modifiedURL + '"]');
	var currentPageTitle = $(currentPage).html();
	//if this isn't the homepage
	if (currentPageTitle == "WELCOME"){
		//make sure no other links are set to active
		$(".innerfolder > .active > button").removeClass("clicked");
		$(".folder ul").slideUp(400, null);
		$(".folder > a").data("expanded", "false");
		$('a').removeClass("active");
		currentPage = currentPage.parent().addClass("active");
	};
	$('a').removeClass("activepage");
	$('.homeitem').removeClass("activepage");
	$('.innerpageitem').removeClass("activeitem");
	currentPage = currentPage.addClass("activepage");
	var toOpen = $(".activepage").parents("folder");
	if (toOpen) {
		$(".activepage").parents().show();
		$(".activepage").parents('ul').prev('.highlightlink').addClass('active');
		$("a.active").data("expanded", "true");
		if ($(".activepage").parent().hasClass("innerpageitem")) {
			$(".activepage").parent().addClass("activeitem");
		}
		$(".innerfolder > .active > button").addClass("clicked");
		$(".homeitem").removeClass("active");
		$(".homeitem > a").data("expanded", "false");
		$(".post-content").on("click", "a", function () {
			$(".sidebarbutton").removeClass("clicked");
			$(".topfolder > a").next().slideUp(400);
			$(".topfolder > a").data("expanded", "false");
			$(".homeitem > a").removeClass("active");
			$(".topfolder > a").removeClass("active");
		});
		if (currentPage.isInViewport() && !scrollOnce) {
		scrollOnce = true;
		$('#mysidebar').animate({
			scrollTop: currentPage.offset().top - 200
		}, 2000);
	};
	};
};

function allArticlesClick() {
	$(".listheader").data("expanded", "true");
	$(".alldocumentscontainer").on("click", ".listheader", function (){
		var hasExpanded = $(this).data("expanded") == "true";
		if (hasExpanded) {
			$(this).children('.alldocumentspagelist').slideUp(400);
			$(this).data("expanded", "false");
		} else {
			$(this).children('.alldocumentspagelist').slideDown(400);
			$(this).data("expanded", "true");
		}
	});
}

//control a click on the two types of sidebar menu items. See the above dropdown functions, they act the same with some CSS differences.
function sidebarClick() {
	$(".topfolder").on("click", ".highlightlink", function () {
		if (!$(this).hasClass("bottombuttons")) {
		var hasExpanded = $(this).data("expanded") == "true";
		if (hasExpanded) {
			$(this).next().slideUp(400);
			$(this).data("expanded", "false");
			$(this).removeClass("active");
			$(this).parent().removeClass("active");
			$(".innerfolder > .active > button").removeClass("clicked");
		} else {
			$(".innerfolder > .active > button").removeClass("clicked");
			$(".folder ul").slideUp(400, null);
			$(".folder > a").data("expanded", "false");
			$(this).next().slideDown(400);
			$(this).data("expanded", "true");
			$(".folder > a").removeClass("active");
			$(this).addClass("active");
		}
		return false;
	};
	});

	$(".innerfolder").on("click", ".highlightlink", function (event) {
		event.preventDefault();
		var hasExpanded = $(this).data("expanded") == "true";
		var button = $(this).find("button");
		if (hasExpanded) {
			$(this).next().slideUp(400);
			$(this).data("expanded", "false");
			$(this).removeClass("active");
			$(this).parent().removeClass("active");
			$(button).removeClass("clicked");
		} else {
			$(this).next().slideDown(400);
			$(this).data("expanded", "true");
			$(this).addClass("active");
			$(button).addClass("clicked");
		}
		return false;
	});
};

//a function to make sure the page's title is updated on load
function replaceTitle() {
	//grab the page's current title
	var $originalTitle = document.title;
	var $newDocument = document.getElementsByClassName("breadcrumb-item");
	if ($newDocument.length > 2) {
		var $newDocumentText = $newDocument[2].innerText;
		//lay out the new title
		var $newTitleText = $newDocumentText + " - " + $('.h1').text() + " |";
		//then set it as the document's title so it shows up properly in the tab
		var $newTitle = $originalTitle.replace(/^.*\|/, $newTitleText);
	} else {
		var $newTitle = $originalTitle.replace(/^.*\-.*\|/, "Welcome! |");
	};
	document.title = $newTitle;
};

//a function which creates and operates the search for the API Metrics and Report Builder Tables
function searchFunction() {
	var $title = $('.h1').text();
	//only run if on the relevant pages
	if ($title.indexOf('API Data Metrics') > -1 || $title.indexOf('Report Builder Data Metrics') > -1) {
		// Declare variables
		var input, filter, table, tr, td, i;
		input = document.getElementById("metricsSearch");
		td = document.getElementsByTagName("td");
		//fixing lack of commas and spaces on source data
		for (i = 0; i < td.length; i++) {
			td[i].innerText = td[i].innerText.replace(/,(?=[^\s])/g, ", ");
		}
		// Loop through all table rows, and hide those who don't match the search query (represented by the "filter" variable) on input. Both functions do the same thing but are called below on the separate pages.
		function reportDisplay() {
			table = document.getElementById("datametricstable");
			tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				tdMetric = tr[i].getElementsByTagName("td")[0];
				tdDashboard = tr[i].getElementsByTagName("td")[4];
				if (tdMetric || tdDashboard) {
					if (tdMetric.innerHTML.toUpperCase().indexOf(filter) > -1 || tdDashboard.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
						$('td').highlight(filter.toString(), {
							className: 'metricHighlight'
						});
					} else {
						tr[i].style.display = "none";
					}
				}
			}
		};
		function metricsDisplay() {
			//if this is the API metrics page
			table = document.getElementById("apimetricstable");
			tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				tdMetric = tr[i].getElementsByTagName("td")[0];
				tdApi = tr[i].getElementsByTagName("td")[2];
				if (tdMetric || tdApi) {
					if (tdMetric.innerHTML.toUpperCase().indexOf(filter) > -1 || tdApi.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
						$('td').highlight(filter.toString(), {
							className: 'metricHighlight'
						});
					} else {
						tr[i].style.display = "none";
					}
				}
			}
		};
		$(input).on('input', function () {
			//get rid of previous highligthing before we highlight anything new
			$('td').unhighlight({
				className: 'metricHighlight'
			});
			filter = input.value.toUpperCase();
			//if this is the report builder page
			if ($(".metricstable").is("#datametricstable")) {
				//timeout is important because the table is so large and if it tries to load in parallel to the function, it stalls.
				setTimeout(reportDisplay, 300);
			} else {
				metricsDisplay();
			}
		});
	};
};

//very similar to the search function above, just for the capabilities comparison table
function capabilitiesSearch() {
	var $title = $('.h1').text();
	if ($title.indexOf('Rich Messaging Channel Capabilities') > -1) {
		// Declare variables
		console.log('run');
		var input, filter, table, tr, categorytr, td, i;
		input = document.getElementById("capabilitiesSearch");
		table = document.getElementById("featurestable");
		tr = table.getElementsByTagName("tr");
		td = document.getElementsByTagName("td");
		$(input).on('input', function () {
		filter = input.value.toUpperCase();
		$('td').unhighlight({
			className: 'metricHighlight'
		});
		for (i = 0; i < tr.length; i++) {
			capabilityName = tr[i].getElementsByTagName("td")[0];
			if (capabilityName) {
				if (capabilityName.innerHTML.toUpperCase().indexOf(filter) > -1) {
					tr[i].style.display = "";
					$(capabilityName).highlight(filter.toString(), {
						className: 'metricHighlight'
					});
				} else {
					tr[i].style.display = "none";
				};
			};
			//if the tr being looped over is one of the blue categoryrows
			if ($(tr[i]).hasClass("categoryrow")) {
				//hide it always
					$(tr[i]).css("display", "none");
					//except when user has deleted the input
				if (input.value == "") {
					$(tr[i]).css("display", "table-row");
				};
			};
		};
	});
	};
};

function searchHighlight() {
	//grab the filter element from local storage. We define this element in the inline script on the default page.
	var toHighlight = localStorage.getItem('filter');
	//if the element has been created
	if (toHighlight) {
		//find its content within the page and apply the highlight class
		$('#defaultcontent').highlight(toHighlight, {
			className: 'searchHighlight'
		});
	};
	//set the filter element to empty so that filtering doesn't "carry over" to future navigation
	localStorage.setItem('filter', '');
}

function scrollToHash () {
	setTimeout(function () {
		if (window.location.hash && window.location.hash != "#top") {
		var hash = window.location.hash;
		var linkScroll = $('a[href*="' + hash + '"]');
		if (linkScroll.length > 1) {
			var linkOffset = $(linkScroll[1]).offset().top;
		} else {
			var linkOffset = $(linkScroll).offset().top;
		}
		$("body, html").animate(
			{
				scrollTop: linkOffset,
			},
			1000,
			"swing"
		);
		}
	}, 1000);
}

function domainTool() {
	var $title = $('.h1').text();
	if ($title == "Domain API") {
	let input;
	let accountInput;
	const csdsButton = document.getElementById("csds-button");
	const csdsResult = document.getElementById("csds-result");
	let csdsUrl;
	let html = "";
	csdsButton.addEventListener("click", event => {
			input = document.getElementById("account");
			accountInput = input.value;
			csdsUrl = 'https://api.liveperson.net/api/account/' + accountInput + '/service/baseURI?version=1.0';
	    retrieveDomains(accountInput);
	});
	const retrieveDomains = (account) => {
	      $.ajax({
	          url: csdsUrl,
	          headers: {
	            'Accept': 'application/json'
	          },
	          dataType: "json",
	          success: function(data) {
							html = '';
							$(csdsResult).css('display', 'table');
	              if (data.baseURIs.length > 0) {
										html += '<thead><th>Service name</th><th>Base URI</th></thead><tbody>';
										data.baseURIs.sort(function(a, b){
							        var m1 = a.service.toLowerCase();
							        var m2 = b.service.toLowerCase();
							        if(m1< m2) return -1;
							        if(m1> m2) return 1;
							        return 0;
							    	})
	                  data.baseURIs.forEach((entry) => {
	                          html += `<tr><td>${entry.service}</td><td>${entry.baseURI}</td></tr>`;
	                      });
										html += '</tbody>'
	                  csdsResult.innerHTML = html;
	              } else {
	                  csdsResult.innerHTML = "Unable to retrieve base URIs for account, please verify your account number.";
	              }
	          }
	      });
	  }
		}
}

//detect if explorer and then add a bunch of classes with its own CSS because it's oh so special
function isExplorer() {
	var ua = window.navigator.userAgent;
	var is_ie = /MSIE|Trident/.test(ua);

	if (is_ie) {
		var wrapper = document.getElementById('defaultwrapper');
		var header = document.getElementById('defaultheader');
		var sidebar = document.getElementById('defaultsidebar');
		var documenttitlecontainer = document.getElementById('documenttitlecontainer');
		var footer = document.getElementById('defaultfooter');
		var content = document.getElementById('defaultcontent')
		var heroPanel = document.getElementById('heroPanel')
		var cardInnerText = document.getElementsByClassName('cardInnerText');
		var secondConfirmCardImg = document.getElementsByClassName('secondConfirmCardImg');
		var thirdPanel = document.getElementById('thirdPanel');
		var confirmationFooter = document.getElementById('confirmationFooter');
		var formContainer = document.getElementById('formContainer');
		wrapper.classList.add('defaultwrapperexplorer');
		header.classList.add('defaultheaderexplorer');
		sidebar.classList.add('defaultsidebarexplorer');
		documenttitlecontainer.classList.add('documenttitlecontainerexplorer');
		footer.classList.add('defaultfooterexplorer');
		content.classList.add('defaultcontentexplorer');
		heroPanel.classList.add('heroPanelExplorer');
		cardInnerText.classList.add('cardInnerTextExplorer');
		secondConfirmCardImg.classList.add('secondConfirmCardImgExplorer');
		thirdPanel.classList.add('thirdPanelExplorer');
		confirmationFooter.classList.add('confirmationFooterExplorer');
		formContainer.classList.add('formContainerExplorer');
	}
};

function searchClick (event) {
	$('.ds-dropdown-menu').on('click', 'a', function (event) {
	event.preventDefault();
	linkclick(event, this);
})
};

$('#mysidebar').height($(".nav").height());
