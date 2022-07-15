# HTML Table Widget
This is an example widget of how you can send HTML tables through chat, and style them by using on page CSS. By using the on page CSS, it allows for the client to customize the look of the tables and have them match the branding of their chat window.

You can view a live example here:[HTML Table Widget](https://scottwestover.herokuapp.com/liveengageWidgets/JCrewWidget/)

## Background
This widget was built as a proof of concept for a client that needed to be able to send an HTML table through chat. Originally the client was copying table information from an Excel spreadsheet, but when this was pasted into chat, it would lose all of its formatting. 

The solution that I can up with was if the client code send an HTML table through chat, we could use on page CSS to style the table, and make it easier to read for the visitor.

One challenge I came accross, was any styling that was applied to the table was either preventing the table from being sent through chat, or it was being removed when it was sent. So, we added class elements to the table, that way the client could control the styling on their side.

## Instructions
If you want to stylize the table in the chat window, you will need to add some on page CSS to your website. 

```css
/* This class is added to all of the td elements in every other row of the table starting with the second */
.sizingWidgetClassForLE {
    background-color: #FFDEAD !important;
}
/* This class is added to all of the td elements in the first row of the table */
.sizingWidgetClassForLE2 {
    background-color: #2F4F4F !important;
}
/* This class is added to every td element of the table */
.sizingWidgetClassForLETable{
border: 1px solid yellow !important;
}
```

## Other Use Cases
This widget could be used for styling other html elements that are sent through chat.

## Author
Scott Westover 
Email: swestover@liveperson.com