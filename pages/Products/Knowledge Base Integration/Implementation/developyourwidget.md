---
title: Develop Your Widget
level1: Products
level2: 
level3: KnowledgeBase Integration
level4: Implementation

order: 20
permalink: products-agent-efficiency-kbintegration-developyourwidget.html

indicator:
---

In order to begin creating your widget, you would need to have a design in mind - both for required functionality as well as for the look and feel.

Host your widget on any platform (github pages, amazon, your own servers - your choice) but ensure it it hosted securely (https).

Use LiveEngage Agent Widget SDK calls such as get, command and bind to build the actions you require. 

When building your widget please keep in mind two important considerations:

1. _**Ensure there is no LiveEngage code in your widget at all**_ - this includes the LE tag or any engagement buttons or banner codes.  Having such code on your widget will cause errors or inception and prevent the widget from working smoothly. 

2. Make your widget dynamically resizable in order to allow it to adjust to the area within LiveEngage where it will appear. 

Below is a very simplistic example of widget code that you can use as a starting point to your development. 

        <!DOCTYPE html>

        <html>
        <head>

                <meta http-equiv="content-type" content="text/html; charset=UTF-8"> 

                <title>LivePerson SDK client example 1</title>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

                <script src="../../node_modules/client-SDK/dist/client-SDK.js"></script>

                <script type="text/javascript">

                var SDK = lpTag.agentSDK || {};

                $(function() {

                SDK.init({

                notificationCallback: getLogFunction('INFO', 'Notification received!'),

                visitorFocusedCallback: getLogFunction('INFO', 'Visitor Focused received!'),

                visitorBlurredCallback: getLogFunction('INFO', 'Visitor Blurred received!')

                });

                });
                  
                function getLogFunction(type, message){
                  
                return function(data) {
                  
                if (typeof data === 'object') {
                  
                data = JSON.stringify(data, null, 2);
                  
                }
                  
                logger(type, message + ' The ' + type + ' data: ' + data);
                  
                }
                  
                }
                  
                function writeCommand() {
                  
                var commandVal = $(".commandInput").val();
                  
                SDK.command('Write ChatLine',{text:commandVal}, createCallback('Write'));
                  
                }
                  
                function get() {
                  
                var getKey = $(".getInput").val();
                  
                SDK.get(getKey, getSuccess, getLogFunction('ERROR', 'Error in get!'));
                  
                }
                  
                function bind() {

                var bindKey = $(".bindInput").val();
                  
                SDK.bind(bindKey, bindSuccess, createCallback('Bind'));
                  
                }

                function unbind() {

                clearLogger();

                var bindKey = $(".bindInput").val();
                  
                SDK.unbind(bindKey, bindSuccess, createCallback('Unbind'));
                  
                }
                  
                function createCallback(name) {
                  
                return function(error) {
                  
                if (error) {
                  
                getLogFunction('ERROR', 'Error in ' + name + '!')(error);
                  
                } else {
                  
                getLogFunction('INFO', name + ' success!')();

                }  
                  
                } 

                }
                  
                function getSuccess(data){
                  
                $(".getResults").html(JSON.stringify(data));
                  
                getLogFunction('INFO', 'Get success!')(data);
                  
                }
                  
                function bindSuccess(data){
                  
                $(".bindResults").html(JSON.stringify(data)); 

                getLogFunction('INFO', 'Bind success!')(data); 

                }
                  
                function logger(type, text){
                  
                if (typeof text === 'object') {
                  
                text = JSON.stringify(text, null, 2);
                  
                }
                  
                var area = $(".logBox textarea");  

                area.val(new Date().toTimeString() + ": " + type + " - " + text + '\n' + area.val());  

                }

                </script>
          
        </head> 
        <body style="word-break: break-word">
          
                <div class="commandBox">
                  
                        <input class="commandInput" type="text" name="commandInput" />

                        <button class="commandButton" onclick="writeCommand()" title="Write">Write</button>

                </div>

                <div class="getBox">
                  
                        <input class="getInput" type="text" name="getInput" />
                  
                        <button class="getButton" onclick="get()" title="Write">Get</button>
                  
                        <div class="getResults"></div>
                  
                </div>
                  
                <div class="bindBox">
                  
                        <input class="bindInput" type="text" name="bindInput" />
                  
                        <button class="bindButton" onclick="bind()" title="bind">Bind</button><button class="unbindButton" onclick="unbind()" title="bind">Unbind</button>
                  
                        <div class="bindResults"></div>
                  
                </div>
                  
                <div class="logBox">
                  
                        <textarea disabled style="width: 100%; height: 200px;"></textarea>
                  
                </div>
          
        </body>
          
        </html></p>