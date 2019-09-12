/**
 * Main Functions for Smooth Scroller
 * @param options
 * Options:
 *  - Selector: What class or id to target.
 *  - Smooth: True/False
 *  - Header: Target class or id to add offset for fixed header
 *  - Offset: Offset to add in pixels
 */
function SmoothScroller(options) {
    if (options.selector.charAt(0) === '#' || options.selector.charAt(0) === '.' && isString(options.selector)) {
        let targets = document.querySelectorAll(options.selector);
        if (targets.length > 0) {
            if (options.header === '' || !isString(options.header)) {
                options.header = false;
            }
            if (options.definedOffset === '' || isNaN(options.definedOffset)) {
                options.definedOffset = 0;
            }
            if (options.smooth !== true && options.smooth !== false) {
                options.smooth = true;
            }
            targets.forEach(target => {
                target.addEventListener("click", function (e) {
                    scrollToElm(e.currentTarget, options.selector.substr(1), options.header, options.definedOffset, options.smooth);
                });
            });
        } else {
            throw new Error(`No objects found for smooth-scroll using selector: ${options.selector}`)
        }
    } else {
        throw new Error('Invalid selector for smooth-scroll')
    }
    function scrollToElm(elm, selector, header, definedOffset, behavior) {
        if (header) {
            let fixedHeader = document.getElementsByClassName(header);
            let topOfElement = document.getElementById(elm.target).offsetTop - (fixedHeader[0].clientHeight + definedOffset);
            if (behavior) {
                window.scroll({
                    top: topOfElement,
                    behavior: "smooth",
                });
            } else {
                window.scroll({
                    top: topOfElement,
                });
            }
        } else {
            let topOfElement = document.getElementById(elm.target).offsetTop - definedOffset;
            if (behavior) {
                window.scroll({
                    top: topOfElement,
                    behavior: "smooth",
                });
            } else {
                window.scroll({
                    top: topOfElement,
                });
            }
        }
    }
    function isString(s) {
        return typeof s === 'string' || s instanceof String;
    }
}

module.exports.SmoothScroller = SmoothScroller;