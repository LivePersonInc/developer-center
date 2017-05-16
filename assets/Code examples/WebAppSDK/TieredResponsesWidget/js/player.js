//Skip to the middle of the commented HTML section to see the main parsing logic; alternatively Ctrl + F for "parsedHtml"

var stepped = 0, chunks = 0, rows = 0;
var start, end;
var parser;
var pauseChecked = false;
var printStepChecked = false;

$(function()
{
	$('#submit-parse').click(function()
	{
		stepped = 0;
		chunks = 0;
		rows = 0;

		var txt = $('#input').val();
		var localChunkSize = $('#localChunkSize').val();
		var remoteChunkSize = $('#remoteChunkSize').val();
		var files = $('#files')[0].files;
		var config = buildConfig();

		// NOTE: Chunk size does not get reset if changed and then set back to empty/default value
		if (localChunkSize)
			Papa.LocalChunkSize = localChunkSize;
		if (remoteChunkSize)
			Papa.RemoteChunkSize = remoteChunkSize;

		pauseChecked = $('#step-pause').prop('checked');
		printStepChecked = $('#print-steps').prop('checked');


		if (files.length > 0)
		{
			if (!$('#stream').prop('checked') && !$('#chunk').prop('checked'))
			{
				for (var i = 0; i < files.length; i++)
				{
					if (files[i].size > 1024 * 1024 * 10)
					{
						alert("A file you've selected is larger than 10 MB; please choose to stream or chunk the input to prevent the browser from crashing.");
						return;
					}
				}
			}

			start = performance.now();
			
			$('#files').parse({
				config: config,
				before: function(file, inputElem)
				{
					//console.log("Parsing file:", file);
				},
				complete: function()
				{
					//console.log("Parsing complete.");
				}
			});
		}
		else
		{
			start = performance.now();
			var results = Papa.parse(txt, config);
			//console.log("Synchronous parse results:", results);
		}
	});

	$('#submit-unparse').click(function()
	{
		var input = $('#input').val();
		var delim = $('#delimiter').val();

		var results = Papa.unparse(input, {
			delimiter: delim
		});

		//console.log("Unparse complete!");
		//console.log("--------------------------------------");
		//console.log(results);
		//console.log("--------------------------------------");
	});

	$('#insert-tab').click(function()
	{
		$('#delimiter').val('\t');
	});
});



function buildConfig()
{
	return {
		delimiter: $('#delimiter').val(),
		newline: getLineEnding(),
		header: $('#header').prop('checked'),
		dynamicTyping: $('#dynamicTyping').prop('checked'),
		preview: parseInt($('#preview').val() || 0),
		step: $('#stream').prop('checked') ? stepFn : undefined,
		encoding: $('#encoding').val(),
		worker: $('#worker').prop('checked'),
		comments: $('#comments').val(),
		complete: completeFn,
		error: errorFn,
		download: $('#download').prop('checked'),
		fastMode: $('#fastmode').prop('checked'),
		skipEmptyLines: $('#skipEmptyLines').prop('checked'),
		chunk: $('#chunk').prop('checked') ? chunkFn : undefined,
		beforeFirstChunk: undefined,
	};

	function getLineEnding()
	{
		if ($('#newline-n').is(':checked'))
			return "\n";
		else if ($('#newline-r').is(':checked'))
			return "\r";
		else if ($('#newline-rn').is(':checked'))
			return "\r\n";
		else
			return "";
	}
}

function stepFn(results, parserHandle)
{
	stepped++;
	rows += results.data.length;

	parser = parserHandle;
	
	if (pauseChecked)
	{
		//console.log(results, results.data[0]);
		parserHandle.pause();
		return;
	}
	
	if (printStepChecked){
		//console.log(results, results.data[0]);
  }
}

function chunkFn(results, streamer, file)
{
	if (!results)
		return;
	chunks++;
	rows += results.data.length;

	parser = streamer;

	if (printStepChecked){
		//console.log("Chunk data:", results.data.length, results);
  }

	if (pauseChecked)
	{
		//console.log("Pausing; " + results.data.length + " rows in chunk; file:", file);
		streamer.pause();
		return;
	}
}

function errorFn(error, file)
{
	//console.log("ERROR:", error, file);
}

function completeFn()
{
	end = performance.now();
	if (!$('#stream').prop('checked')
			&& !$('#chunk').prop('checked')
			&& arguments[0]
			&& arguments[0].data)
		rows = arguments[0].data.length;
	
	//console.log("Finished input (async). Time:", end-start, arguments);
	//console.log("Rows:", rows, "Stepped:", stepped, "Chunks:", chunks);
    parseToHtml(arguments[0].data);
}

function parseToHtml(obj){
    var length = obj[0].length;
    var responseNum;
    var lastNum;
    for(var k = 0; k < length; k++){
        if(obj[0][k] == "Response Text"){
            responseNum = k;
            break;
        }
    }
    var parsedHtml = 
`<html>
<head>
    <meta charset="utf-8">
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/CollapsibleLists.js"></script>
    <script type="text/javascript" charset="utf8" src="https://lpcdn.lpsnmedia.net/webagent/client-SDK.min.js"></script>
    <style>
        .tooltip {
            position: relative;
            display: inline-block;
        }
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 300px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
            top: 150%;
            left: 50%;
            margin-left: -60px;
            /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
            opacity: 0;
            transition: opacity 1.5s;
            padding: 5px;
        }
        .tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent black transparent;
        }
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        body {
            font-family: "Myriad pro", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif;
            font-size: 13px;
            background-color: #F0F0F0;
            line-height: 25px;
            color: #767678;
            margin: 0;
            padding: 0;
        }
        ul {
            margin: 0;
            padding: 0 0 0 30;
        }
        #list {
            margin: 5 0 0 0;
            padding: 0;
        }
        .collapsibleList li {
            list-style-image: none;
            cursor: pointer;
        }
        li.collapsibleListClosed {            
            list-style-image: url('img/button-closed.png');
            list-style-position: inside;
            cursor: pointer;
            color: #767678;
        }
        li.collapsibleListOpen {            
            list-style-image: url('img/button-open.png');
            list-style-position: inside;
            cursor: pointer;
            color: #515254;
        }
        li.response {
            padding: 5px 0px 5px 10px;
            border-top: 1px solid rgba(193, 194, 195, .4);
        }
        li.subcategory {
            padding: 5px 0px 5px 10px;
            border-top: 1px solid rgba(193, 194, 195, .7);
        }
        li.category {
            padding: 5px 0px 5px 10px;
            border-top: 1px solid rgba(193, 194, 195, 1);
        }
        .titles {
            font-weight: bold;
            padding: 10px auto 10px auto;
        }
        .item {
            font-weight: normal;
        }
        .lpview_search_input_container {
            height: 28px;
            width: 276.25px;
        }
        .lpview_search_input_container:hover {
            border: 1px solid #c6c6c6;
        }
        .lpview_search_input_container:hover .lpview_clear_search_icon {
            display: block;
        }
        .lpview_search_input {
            height: 28px;
            width: -webkit-calc(100% - 48px);
            margin: 0 26px 0 22px;
            border: 0;
        }
        .lpview_search_input:focus {
            outline: none !important;
        }
        .lpview_search_icon {
            position: absolute;
            top: 8px;
            left: 10px;
            height: 12px;
            width: 12px;
            background: url('img/12x12-sprite.png') -860px 0 no-repeat;
        }
        .text_input_field {
            height: 30px;
            font-size: 12px;
            line-height: 23px;
            border: 1px solid #dcdcdc;
            background: #fff;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0 4px !important;
            border-radius: 1px;
        }
        .lpview_clear_search_icon:hover {
            background: url('img/16x16-sprite.png') -680px -20px no-repeat;
            opacity: .35;
        }
        .lpview_clear_search_icon {
            display: none;
            position: absolute;
            top: 6px;
            right: 10px;
            height: 16px;
            width: 16px;
            background: url('img/16x16-sprite.png') -400px 0 no-repeat;
            opacity: .85;
        }
        .searchCat,.searchSub,.searchResp{
            display:inline-block !important;
        }
      </style>
</head>
<body>
    <div id="LP_SearchInputViewController_1" style="display: block;">
        <div class="lpview_search_input_container text_input_field" style="width:100%">
            <div class="lpview_search_icon search_icon"></div>
            <div class="lpview_clear_search_icon clear_search_icon"></div>
            <input type="text" class="lpview_search_input search_input"></div>
    </div>
    <!--Paste Code Below This Line -->`

    //Start list parsing
    parsedHtml += "<ul id='list' class='collapsibleList'><li class='titles category' id='catTitles'><div class='searchCat' id='searchableText'>";
    var first = true;
    for(var i = 1; i < obj.length-1; i++){
        if(obj[i][0] == "X") { //If it's an expandable menu row (category,subcategory) as denoted by first column

            if(first === true){ //Create first category
                parsedHtml += obj[i][1]+"</div><ul>";
                first = false;
                lastNum = 1;
            }
            else { //Everything but first category
                for(var j = 1; j < length; j++){
                    if(obj[i][j] != ""){

                        if(j > lastNum){  //If it's a tabbed over descendant but not a response: must be a subcategory
                            parsedHtml += "<li class='titles subcategory' id='subTitles'><div class='searchSub' id='searchableText'>"+obj[i][j]+"</div><ul>";
                            lastNum = j;
                            break;
                        }
                        else if (j == lastNum){  //On the same level as last category or subcategory

                            if (j == 1){  //J==1 is always the main category
                              parsedHtml += "</ul></li><li class='titles category' id='catTitles'><div class='searchCat' id='searchableText'>"+obj[i][j]+"</div><ul>";
                            } else{       //Otherwise it's a subcategory
                              parsedHtml += "</ul></li><li class='titles subcategory' id='subTitles'><div class='searchSub' id='searchableText'>"+obj[i][j]+"</div><ul>";
                            }

                            lastNum = j;
                            break;
                        }
                        else { //j < lastNum, if the current pointer is on a column before the level of the last subcategory: must be a new category or subcategory

                            //Back up and close levels
                            var diff = lastNum - j;
                            for(var k = 0; k < diff; k++){
                                parsedHtml += "</ul></li>";
                            }

                            if (j == 1){  //J==1 is always the main category
                              parsedHtml += "</ul></li><li class='titles category' id='catTitles'><div class='searchCat' id='searchableText'>"+obj[i][j]+"</div><ul>";
                            } else{       //Otherwise it's a subcategory              
                              parsedHtml += "</ul></li><li class='titles subcategory' id='subTitles'><div class='searchSub' id='searchableText'>"+obj[i][j]+"</div><ul>";
                            }
                            
                            lastNum = j;
                            break;
                        }
                    }
                }
            }
        }
        else {  //it's a response row
            for(var j = 1; j < length; j++){

                if(obj[i][j] != ""){  //Hop over empty fields
                    parsedHtml += "<li class='titles response' id='respTitles'><div class='searchResp tooltip' id='searchableText'>"+obj[i][j]+"<div class='item tooltiptext'>"+obj[i][responseNum]+"</div></div></li>";
                    break;
                }
                
            }
        }
    }

    //Backup and close final levels
    var lastRow = lastNum;
    for(var k = 0; k < lastRow; k++){
        parsedHtml += "</ul></li>";
    }
    parsedHtml += "</ul>";
    parsedHtml += 
`<!--Paste Code Above This Line -->
    <script>
         var SDK = lpTag.agentSDK;
        SDK.init();
        // make the appropriate lists collapsible
        CollapsibleLists.apply();

        $(".response .searchResp .item").click(function() {
            var data = {
                text: $(this).html()
            };
            SDK.command('Write ChatLine', data);
            //console.log("item: " + data.text);
            event.stopPropagation();
        });
        $(".response").click(function() {
            var data = {
                text: $(".item", this).html()
            };
            SDK.command('Write ChatLine', data);
            //console.log("response: " + data.text);
        });
        //delay for keyup to reduce lag
        //i.e. searches after typing stops + delay time elapses
        function delay(fn, duration) {
            var timer;
            return function() {
                clearTimeout(timer);
                timer = setTimeout(fn, duration);
            }
        }

        (function($) {
            function searchList(elm, list) { // elm is any element, list is an unordered list

                $(".lpview_search_input").bind('input', delay(function() {
                    var query = $(".lpview_search_input").val().toLowerCase();
                    //console.log("Input change");

                    //Reset state
                    $('#list').find('.hidethis,.showthis').removeClass('hidethis showthis').show();
                    $('#list').find('.category,.subcategory').removeClass('collapsibleListOpen').addClass('collapsibleListClosed');
                    $('#list').find('ul').css('display', 'none');

                    if (query.length) {

                        //For the text of each category title
                        $('.category > .searchCat').each(function() {
                            if ($(this).text().toLowerCase().indexOf(query) >= 0) {
                                $(this).parent().removeClass('collapsibleListClosed').addClass('collapsibleListOpen showthis').show();
                                $(this).parent().children().css('display', 'block');
                            }
                        });

                        //For the text of each subcategory title
                        $('.subcategory > .searchSub').each(function() {
                            if ($(this).text().toLowerCase().indexOf(query) >= 0) {
                                $(this).parent().removeClass('collapsibleListClosed').addClass('collapsibleListOpen showthis').show();
                                $(this).parent().children().css('display', 'block');
                                $(this).parents('ul').css('display', 'block');
                                $(this).parents('li').removeClass('collapsibleListClosed').addClass('collapsibleListOpen');
                            }
                        });

                        //For the text of each response title
                        $('.response > .searchResp').each(function() {
                            if ($(this).text().toLowerCase().indexOf(query) >= 0) {
                                $(this).parent().children().css('display', 'block');
                                $(this).parents('ul').css('display', 'block');
                                $(this).parents().not('.response').removeClass('collapsibleListClosed').addClass('collapsibleListOpen');
                            }
                        });

                        $('.titles').each(function() {
                            if (!$(this).find('.showthis').length && $(this).text().toLowerCase().indexOf(query) < 0) {
                                $(this).addClass('hidethis').hide();
                            }
                        });

                        $('.showthis > ul li').removeClass('hidethis').addClass('showthis').show();
                    }

                }, 300));
            }
            //ondomready
            $(function() {
                searchList($(".lpview_search_input"), $("#list"));
            });
            $(function() { //clear search and reset state
                $(".clear_search_icon").click(function() {
                    $(".lpview_search_input").val("");
                    $('#list').find('.hidethis,.showthis').removeClass('hidethis showthis').show();
                    $('#list').find('.category,.subcategory').removeClass('collapsibleListOpen').addClass('collapsibleListClosed');
                    $('#list').find('ul').css('display', 'none');
                });
            });
        }(jQuery));

        // For the hilight hover color
        var hoverColor = "#61AECF";
        $(".titles.response")
            .mouseover(function() {
                $(this).css("background-color", hoverColor);
                $(this).css("color", "white");
            })
            .mouseout(function() {
                $(this).css("background-color", "");
                $(this).css("color", "");
            });

        $('.lpview_search_input')
            .focusin(function() {
                $('.lpview_clear_search_icon').css('display', 'block');
            })
            .focusout(function() {
                $('.lpview_clear_search_icon').css('display', '');
            });
         
      </script>
</body>
</html>`
    $('#output').text(parsedHtml);
}