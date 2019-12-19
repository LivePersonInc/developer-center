---
pagename: Debugger
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-debugger.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-debugger.html
---

### Debugger
The LivePerson Functions' Debugger allows you to debug your created `lambdas`. You can add or remove breakpoints to your `lambda` code by clicking on the left side of the linenumber (shown in the picture below on line 4)
<img class="fancyimage" src="img/faas-debugger.png" alt="LivePerson Functions Debugger">

### Buttons

<img src="img/faas-debugger-button-startup.png" alt="LivePerson Functions Debugger Button Startup"> Startup the Debugger<br/>

<img src="img/faas-debugger-button-start.png" alt="LivePerson Functions Debugger Button Start"> Start debugging<br/>

<img src="img/faas-debugger-button-resume.png" alt="LivePerson Functions Debugger Button Resume"> Resume to the next breakpoint<br/>

<img src="img/faas-debugger-button-stepover.png" alt="LivePerson Functions Debugger Button Stepover"> Stepover to the next line of code<br/>

<img src="img/faas-debugger-button-restart.png" alt="LivePerson Functions Debugger Button Restart"> Restart debugging<br/>

<img src="img/faas-debugger-button-stop.png" alt="LivePerson Functions Debugger Button Stop"> Stop debugging<br/>

### Debugger States
<table style="width: 100%;">
<thead>
  <tr>
    <th style="width:265px">State</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><img style="width:221px" src="img/faas-debugger-state-not-started.png" alt="LivePerson Functions Debugger State Not Started"></td>
    <td>In this state the Debugger hasn't been started yet.<br/>To startup the Debugger, press the <img style="width:30px" src="img/faas-debugger-button-startup.png" alt="LivePerson Functions Debugger Button Startup"> button. After startup the debug of your lambda code will directly be started.</td>
  </tr>
  <tr>
    <td><img style="width:221px" src="img/faas-debugger-state-session-starting.png" alt="LivePerson Functions Debugger State Starting"></td>
    <td>The Debugger is starting up. This will take around 30 seconds.</td>
  </tr>
  <tr>
    <td><img style="width:221px" src="img/faas-debugger-state-ready.png" alt="LivePerson Functions Debugger State Ready"></td>
    <td>The Debugger is ready to be started.<br/>To start debugging, press the <img style="width:30px" src="img/faas-debugger-button-start.png" alt="LivePerson Functions Debugger Button Start"> button and the Debugger will start to debug your lambda code.</td>
  </tr>
  <tr>
    <td><img style="width:221px" src="img/faas-debugger-state-loading-code.png" alt="LivePerson Functions Debugger State Loading Code"></td>
    <td>The Debugger is loading your lambda code.</td>
  </tr>
  <tr>
    <td><img style="width:221px" src="img/faas-debugger-state-running.png" alt="LivePerson Functions Debugger State Running"></td>
    <td>The Debugger is currently running. After a while the Debugger should go to state <b>Paused</b> or - if reached the end of the lambda code - <b>Ready To Receive</b></td>
  </tr>
  <tr>
    <td><img style="width:221px" src="img/faas-debugger-state-paused.png" alt="LivePerson Functions Debugger State Paused"></td>
    <td>The Debugger is paused. In this state you can inspect variables via the <b>Variable Inspector</b></td>
  </tr>
  <tr>
    <td><img style="width:221px" src="img/faas-debugger-state-crashed.png" alt="LivePerson Functions Debugger State Crashed"></td>
    <td>The Debugger has crashed. </td>
  </tr>
</tbody>
</table>

### Variable Inspector
If there is a breakpoint set, the debugger will pause at the next breakpoint in the code flow.
In this state you can inspect the current values of your variables.
<img class="fancyimage" src="img/faas-debugger-sidebar-paused.png" alt="LivePerson Functions Sidebar Debugger Paused">





