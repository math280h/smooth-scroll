# What is this?

A very light smooth scroller used to scroll from elements to element

# Installation

`npm i light-smooth-scroller`

Then...

```
import { smoothScroller } from 'light-smooth-scroller';

smoothScroller({
    selector: '.scroll',
    header: 'headerClass',
    definedOffset: 30,
    smooth: true,
});

HTML:
<a id="top" target="bottom" class="scroll">
    Click me!
</a>
<a id="bottom" target="top" class="scroll">
    Click me!
</a>
```

## Options

light-smooth-scroller supports 4 options, 3 which are optional

* *selector* - _class / id_ (Required - Must be a valid class name or ID of element) - No Default Selector
* *header* - _class_ (Optional - Select the class of your fixed header to calculate needed padding for scroll) - Default: none
* *definedOffset* - _number_ (Optional - If you want to add more offset to the scroll) - Default: 0
* *smooth* - _boolean_ (Optional - Defines if you want smooth scrolling or not) - Default: true