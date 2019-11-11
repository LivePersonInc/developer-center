---
pagename: CSS Sample
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Window Customization API
subfoldername: Samples
permalink: window-customization-api-samples-css-sample.html
indicator: both
---

The below is an example of a full CSS file making use of the CSS classes reserved for window customization. If you load it into a webpage with the LE-tag and start a conversation, you'll see the changes these CSS classes enact.

```css
.lpc_desktop.lpc_body {
    background: #e7e4e3 !important;
}
.lpc_desktop.lpc_window_maximized {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2) !important;
}

.lpc_desktop.lpc_message-area {
    padding: 0 20px 4px !important;
}

.lpc_desktop.lpc_window_minimized {
    height: 50px !important;
}

.lpc_desktop.lpc_minimized-header__notification-counter {
    margin-top: 13px !important;
}

.lpc_desktop.lpc_window_maximized,
.lpc_desktop.lpc_window_minimized {
    width: 350px !important;
    border: none!important;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2) !important;
    overflow: hidden;
}

.lpc_desktop.lpc_maximized-header,
.lpc_desktop.lpc_minimized-header {
    border: none!important;
    background: #5879da !important;
    height: 50px !important;
    border-radius: 0 !important;
    box-shadow: none !important;
}

.lpc_desktop.lpc_minimized-header__text,
.lpc_desktop.lpc_maximized-header__text {
    color: #fff !important;
    font-family: 'Helvetica' !important;
    font-weight: 100 !important;
    font-size: 16px !important;
    margin-top: 5px !important;
    margin-left: 10px !important;
}

.lpc_desktop.lpc_minimized-header__text {
    margin-left: 30px !important;
}

.lpc_desktop.lpc_maximized-header__icon,
.lpc_desktop.lpc_minimized-header__icon {
    background-image: url("https://www.liveperson.com/sites/default/files/chatbubble-white.png") !important;
    background-repeat: no-repeat !important;
    background-position: 2px 1px !important;
    background-size: 20px !important;
    height: 20px !important;
    width: 25px !important;
}

.lpc_desktop.lpc_maximized-header__icon-asset,
.lpc_desktop.lpc_minimized-header__icon-asset {
    display: none !important;
}

.lpc_desktop.lpc_maximized-header__slider-button {
    height: 36px !important;
}

.lpc_desktop.lpc_maximized-header__slider-button:focus {
    outline: none !important;
}

.lpc_desktop.lpc_maximized-header__slider-button {
    background-image: url("https://www.liveperson.com/sites/default/files/dots-white.png") !important;
    background-repeat: no-repeat !important;
    background-position: 2px 3px !important;
    background-size: 25px !important;
    height: 30px !important;
    width: 30px !important;
}

.lpc_desktop.lpc_maximized-header__slider-button-asset,
.lpc_desktop.lpc_maximized-header__slider-button-asset {
    display: none;
}

.lpc_desktop.lpc_maximized-header__minimize-button,
.lpc_desktop.lpc_maximized-header__close-button,
.lpc_desktop.lpc_minimized-header__close-button{
    margin-right: 5px !important;
}

.lpc_desktop.lpc_minimized-header__maximize-button,
.lpc_desktop.lpc_minimized-header__close-button,
.lpc_desktop.lpc_maximized-header__minimize-button,
.lpc_desktop.lpc_maximized-header__close-button {
    margin-right: 5px !important;
    height: 30px !important;
    width: 30px !important;
}

.lpc_desktop.lpc_minimized-header__maximize-button:focus,
.lpc_desktop.lpc_minimized-header__close-button:focus,
.lpc_desktop.lpc_maximized-header__minimize-button:focus ,
.lpc_desktop.lpc_maximized-header__close-button:focus {
    outline: none !important;
}

.lpc_desktop.lpc_maximized-header__minimize-button {
    background-image: url("https://www.liveperson.com/sites/default/files/minus-white.png") !important;
    background-repeat: no-repeat !important;
    background-position: 8px 10px !important;
    background-size: 16px !important;
    height: 40px !important;
}

.lpc_desktop.lpc_maximized-header__minimize-button-asset {
    display: none;
}

.lpc_desktop.lpc_minimized-header__maximize-button {
    background-image: url("https://www.liveperson.com/sites/default/files/expand-white.png") !important;
    background-repeat: no-repeat !important;
    background-position: 8px 10px !important;
    background-size: 16px !important;
    height: 40px !important;
}

.lpc_desktop.lpc_minimized-header__maximize-button-asset {
    display: none;
}

.lpc_desktop.lpc_maximized-header__close-button,
.lpc_desktop.lpc_minimized-header__close-button{
    background-image: url("https://www.liveperson.com/sites/default/files/close-white.png") !important;
    background-repeat: no-repeat !important;
    background-position: 8px 10px !important;
    background-size: 16px !important;
    height: 40px !important;
}
.lpc_desktop.lpc_maximized-header__close-button-asset,
.lpc_desktop.lpc_minimized-header__close-button-asset {
    display: none;
}

.lpc_desktop.lpc_window_maximized {
    height: 650px !important;
    border-radius: 6px !important;
    margin-bottom: 15px !important;
    max-height: calc(100% - 15px) !important;
}

.lpc_desktop.lpc_layout {
    background: #e7e4e3 !important;
}

.lpc_desktop.lpc_maximied-header {
    border: none!important;
}

.lpc_desktop.lpc_window_slider-open {
    width: 1350px !important;
}

.lpc_desktop.lpc_body_slider-open,
.lpc_desktop.lpc_maximized-header_slider-open {
    width: 350px !important;
}

.lpc_desktop.lpc_slider {
    height: 650px !important;
    width: 1000px !important;
    right: 350px !important;
    max-height: calc(100% - 15px) !important;
}

.lpc_desktop.lpc_slider__body {
    top: 50px !important;
    box-shadow: none !important;
    border-right: 1px solid #d6d6d6;
}

.lpc_desktop.lpc_slider-header {
    box-shadow: none !important;
    background: #5879da !important;
    border-radius: 0 !important;
    height: 50px !important;
    border: none !important;
}

.lpc_desktop.lpc_slider-header__minimize-button {
    background-image: url("https://www.liveperson.com/sites/default/files/expand-white.png") !important;
    background-repeat: no-repeat !important;
    background-position: 0 10px !important;
    background-size: 16px !important;
    height: 40px !important;
    -webkit-transform: rotate(90deg) !important;
    -moz-transform: rotate(90deg) !important;
    -o-transform: rotate(90deg) !important;
    -ms-transform: rotate(90deg) !important;
    transform: rotate(90deg) !important;
}

.lpc_desktop.lpc_slider-header__minimize-button:focus {
    outline: none;
}

.lpc_desktop.lpc_slider-header__minimize-button-asset {
    display: none;
}

.lpc_desktop.lpc_slider-header__refresh-button {
    top: 10px !important;
    left: 10px !important;
    background-repeat: no-repeat;
    background-position: 2px 3px;
    background-size: 20px;
    height: 30px !important;
    width: 30px !important;
}

.lpc_desktop.lpc_slider-header__refresh-button:focus {
    outline: none;
}

.lpc_desktop.lpc_body {
    top: 50px !important;
    overflow: hidden !important;
    border: none !important;
}

.lpc_desktop.lpc_banner-image-area {
    height: auto!important;
    border: none !important;
    padding-top: 0 !important;
}

.lpc_desktop.lpc_banner-image-area__image-wrapper{
    height: auto!important;
    border: none !important;
    padding-top: 0 !important;
}

.lpc_desktop.lpc_banner-image-area__link {
    height: auto !important;
    margin: 0 !important;
    border: none !important;
}

.lpc_desktop.lpc_banner-image-area__image {
    width: 100% !important;
}
.lpc_desktop.lpc_message-area__timestamp {
    margin-top: 10px !important;
}

.lpc_desktop.lpc_message-area_system {
    margin-left: -2px;
}

.lpc_desktop.lpc_message-area_system,
.lpc_desktop.lpc_message_sytem {
    text-align: left !important;
}

.lpc_desktop.lpc_message-area__timestamp_system {
    text-align: left !important;
}

.lpc_desktop.lpc_message-area__timestamp_agent {
    padding: 3px 3px 3px 43px !important;
}

.lpc_desktop.lpc_message_agent {
    background: #fff !important;
    border: none !important;
    padding: 10px !important;
    border-radius: 20px !important;
}

.lpc_desktop.lpc_message__text,
.lpc_desktop.lpc_message_agent__text p {
    color: #333 !important;
    font-family: Helvetica !important;
}

.lpc_desktop.lpc_message__text_agent strong,
.lpc_desktop.lpc_message__text_agent p strong,
.lpc_desktop.lpc_message__text_agent b,
.lpc_desktop.lpc_message__text_agent p b {
    font-weight: 600 !important;
}

.lpc_desktop.lpc_message__text_agent:after {
    background: url("https://www.liveperson.com/sites/default/files/conv_page/chat-tail-white.svg") no-repeat;
    display: block;
    content: ' ';
    width: 10px;
    height: 15px;
    position: absolute;
    margin-left: -16px;
    bottom: 0;
    margin-top: -10px;
}

.lpc_desktop.lpc_message-area_agent {
    padding: 0 20px 4px !important;
}

.lpc_desktop.lpc_message-area__avatar_agent {
    width: 20px !important;
    height: 20px !important;
    border-radius: 0!important;
}

.lpc_desktop.lpc_card {
    border: 1px solid #fff !important;
    border-radius: 20px 20px 20px 0 !important;
    overflow: hidden !important;
    max-width: none !important;
}

.lpc_desktop.lpc_card__text {
    background: #fff !important;
    padding: 10px !important;
}

.lpc_desktop.lpc_card__text span {
    font-weight: normal !important;
    color: #333 !important;
}

.lpc_desktop.lpc_card__button {
    border-top: 1px solid #fff !important;
}

.lpc_desktop.lpc_card__button button {
    background: #e7e4e3 !important;
    margin-bottom: 0 !important;
    color: #333 !important;
}

.lpc_desktop.lpc_card__button button:focus {
    outline: none !important;
}

.lpc_desktop.lpc_card__button button:hover {
    background: #fff !important;
}

.lpc_desktop.lpc_message-tail_agent,
.lpc_desktop.lpc_message-tail__border_agent {
    display: none !important;
}

.lpc_desktop.lpc_message_visitor {
    border: none !important;
    background: #adc5ec !important;
    padding: 10px !important;
    border-radius: 20px !important;
}

.lpc_desktop.lpc_message__text_visitor,
.lpc_desktop.lpc_message__text_visitor p {
    color: #333 !important;
    font-family: Helvetica !important;
}

.lpc_desktop.lpc_message_card {
    background: unset !important;
}

.lpc_desktop.lpc_message__text_card:after {
    background: unset !important;
}

.lpc_desktop.lpc_message__text_visitor:after {
    background: url("https://www.liveperson.com/sites/default/files/conv_page/chat-tail-lightblue.svg") no-repeat;
    display: block;
    content: ' ';
    width: 10px;
    height: 15px;
    position: absolute;
    bottom: -10px;
    right: -12px;
    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    transform: scaleX(-1);
}

.lpc_desktop.lpc_message-tail__border_visitor,
.lpc_desktop.lpc_message-tail_visitor {
    display: none !important;
}

.lpc_desktop.lpc_composer {
    height: 50px !important;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2) !important;
    border-top: none !important;
}

.lpc_desktop.lpc_composer__text-area-wrapper {
    padding: 18px 0 !important;
}

.lpc_desktop.lpc_composer__text-area {
    font-size: 14px !important;
}

.lpc_desktop.lpc_composer__text-area:focus {
    outline: none !important;
}

.lpc_desktop.lpc_composer__text-area::placeholder {
    font-style: normal !important;
    color: #d6d6d6 !important;
}

.lpc_desktop.lpc_composer__menu-button {
    top: 14px !important;
}

.lpc_desktop.lpc_composer button::focus {
    outline: none !important;
}

.lpc_desktop.lpc_composer__send-button {
    top: 14px !important;
}

.lpc_desktop.lpc_composer__send-button-asset {
    display: none;
}

.lpc_desktop.lpc_composer__send-button {
    background-image: url("https://www.liveperson.com/sites/default/files/darksend.png");
    background-repeat: no-repeat;
    background-position: 0 4px;
    background-size: 18px;
    height: 30px !important;
}
```

