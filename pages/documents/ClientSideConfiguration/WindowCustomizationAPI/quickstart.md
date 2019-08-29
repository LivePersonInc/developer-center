---
pagename: Quick Start
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Window Customization API
permalink: window-customization-api-quick-start.html
indicator: both
---
# Window Customization

You can easily customize the unified window yourself by using these classes and examples. Classes are broken up into "blocks" and "elements".


### Naming convention

`lpc` - general namespace for the customization classes

`block` - a component of the window

`element` - a specific item within a block   

`modifier` - defines the appearance, state, or behavior of a block or element (for example, `maximized` vs. `minimized`)

    lpc_block__element_modifier
    
    lpc_block_modifier
    
### Window

The primary container for all elements.

Available modifiers:

`maximized` `minimized` `slider-open` 

```css
.lpc_window {

}
```

### Maximized Header

```css
.lpc_maximized-header {

}

.lpc_maximized-header__close-button {

}

.lpc_maximized-header__close-button-asset {
    
}

.lpc_maximized-header__minimize-button {

}

.lpc_maximized-header__minimize-button-asset {
    
}

.lpc_maximized-header__slider-button {

}

.lpc_maximized-header__slider-button-asset {
    
}

.lpc_maximized-header__text-wrapper {
     
}

.lpc_maximized-header__text {

}

.lpc_maximized-header__icon {

}

.lpc_maximized-header__icon-asset {
    
 }
```

### Minimized Header

```css
.lpc_minimized-header {

}

.lpc_minimized-header__close-button {

}

.lpc_minimized-header__close-button-asset {
    
}

.lpc_minimized-header__text-wrapper {
    
}

.lpc_minimized-header__text {

}

.lpc_minimized-header__icon {

}

.lpc_minimized-header__icon-asset {
    
}

.lpc_minimized-header__maximize-button {

}

.lpc_minimized-header__maximize-button-asset {
    
}

.lpc_minimized-header__notification-counter {

}
```

### Body

Full area below the header.

Available modifiers: `maximized` `slider-open`

```css
.lpc_body {

}
```

### Layout

The area between the header and the footer.

```css
.lpc_layout {

}
```

### Banner Image

Top banner logo.

```css
.lpc_banner-image-area {

}

.lpc_banner-image-area__image-wrapper {
     
}

.lpc_banner-image-area__image {
 
}

.lpc_banner-image-area__link {

}
```

### Hero Image

Hero image of the window.

```css
.lpc_hero-image-area {
    
}

.lpc_hero-image-area__image-wrapper {
   
}

.lpc_hero-image-area__image {

}
```

### History spinner

The loading icon when waiting for the conversation history to be retrieved.

```css
.lpc_history-spinner {

}
```

### Transcript

Transcript area.

```css
.lpc_transcript {

}
```

### Message Area

Element entry into transcript.


Available modifiers: `agent` `visitor` `system` `visitor-fs` `avatar-shown` `avatar-hidden`.

```css
.lpc_message-area {

}

.lpc_message-area__timestamp {

}

.lpc_message-area__avatar {

}

.lpc_message-area__indicator {
        
}
```

 
### Message

A received message in the window, whether agent or visitor (see modifiers).

Available modifiers: `agent` `visitor` `system` `card` `visitor-fs` `avatar-shown` `avatar-hidden`.

```css
.lpc_message {
    
}

.lpc_message__text {
        
 }
```

### Message Tail

Available modifiers: `agent` `visitor` `system` `visitor-fs`.

```css
.lpc_message-tail {
    
}

.lpc_message-tail__border {
    
}
```

### Typing Indication

Typing indicator.

Available modifiers: `agent`.

```css
.lpc_typing-indication {

}
```

### Action Menu

Menu which is accessed with the footer action button. Appears in keyboard area.

```css
.lpc_menu {

}

.lpc_menu__item {

}

.lpc_menu__banner {

}
```

### Composer

Area in which the user composes their messages.

```css
.lpc_composer {

}

.lpc_composer__text-area {

}

.lpc_composer__text-area-wrapper {

}

.lpc_composer__menu-button {

}

.lpc_composer__menu-button-asset {
     
}

.lpc_composer__send-button {

}

.lpc_composer__send-button-asset {
    
}

.lpc_composer__file-attachment-button {
    
}

.lpc_composer__file-attachment-button-asset {
    
}
```

### Slider 

Area where a widget is loaded when opened, including its header.

```css
.lpc_slider {

}

.lpc_slider__body {

}
```

### Slider Header

```css
.lpc_slider-header {

}

.lpc_slider-header__minimize-button {

}

.lpc_slider-header__minimize-button-asset {
    
}

.lpc_slider-header__refresh-button {

}

.lpc_slider-header__refresh-button-asset {
    
}

.lpc_slider-header__text {

}
```

### Confirmation Dialog

Prompt for user interaction.

```css
.lpc_confirmation-dialog {

}

.lpc_confirmation-dialog__confirm-button {

}

.lpc_confirmation-dialog__cancel-button {

}

.lpc_confirmation-dialog__title {

}
```

### Card

Structured Content card.

Available modifiers: `horizontal` `vertical`.

```css
.lpc_card {

}

.lpc_card__button {

}

.lpc_card__image {

}

.lpc_card__map {
    
}

.lpc_card__text {
        
}
```

### Survey Area Wrapper

Used to define survey common styles. Primarily background for the survey.

```css
.lpc_survey-area-wrapper {

}
```

### Survey Area

Survey Area of the window.

Available modifiers: `logo`.

```css
.lpc_survey-area {

}

.lpc_survey-area__question-wrapper {

}

.lpc_survey-area__question-label {

}

.lpc_survey-area__question-content {

}

.lpc_survey-area__header {

}

.lpc_survey-area__disclaimer {

}

.lpc_survey-area__previous-button {

}

.lpc_survey-area__cancel-button {
    
}

.lpc_survey-area__next-button {
    
}

.lpc_survey-area__submit-button {
    
}

.lpc_survey-area__close-button {
    
}
```

### Device Types

To specify different device type CSS, chain the below selectors to the above class names. If no device type class is chained, it will apply to all devices.

```
.lpc_desktop
.lpc_mobile
.lpc_tablet
```

### Tips and Best Practices

### Overriding styles

To actually override the existing styles of a block or an element, it is suggested to use the `!important` property for each style.

For example:

```css
.lpc_desktop.lpc_window_maximized {
    width: 400px !important;
}
```

In the unlikely case that `!important` does not override the style, we suggest using `#lpChat` as a parent selector so there will be more priority.

```css
#lpChat .lpc_desktop.lpc_window_maximized {
    width: 400px !important;
}
``` 
