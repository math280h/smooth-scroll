# light-smooth-scroller

> A very light no nonsense javascript scroller, with smooth option. No dependencies, 2.5~KB Size.

## Features

    * Super fast and only getting faster.
    * Very light and only getting lighter.
    * No Dependencies and never getting any.

## Install

``` bash
# Using npm
npm install light-smooth-scroller

# Using yarn
yarn add light-smooth-scroller
```

You can now include light-smooth-scroller and you are all set!

``` js
// es6
import { SmoothScroller } from 'light-smooth-scroller';

// commonjs
const SmoothScroller = require('light-smooth-scroller');
```

## Usage

Javascript:

``` js
let scroller = new SmoothScroller({
    selector: '.scroll',
    header: 'navbar',
    definedOffset: 30,
    smooth: true,
});
```

HTML:

``` html
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

let scroller = new SmoothScroller({
    selector: '.scroll',
    header: 'navbar',
    definedOffset: 30,
    smooth: true,
});