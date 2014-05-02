/*

   # Refresher
  
    A simple callback w/ refresh using requestAnimationFrame().

    Since this class uses "requestAnimationFrame()", you can automatically
    benefit from the browser's behavior to supress refreshes when a page is
    not in focus.  This should be encouraged, since it could  potentially
    reduce network activity and/or processor/battery usage.

   _Example_

       // Refresh and run callback every 5 seconds, starting in 5 seconds.
       var refreshA = new Refresher( function () {console.log("a");}, 5);

       // Refresh and run callback every 20 seconds, starting immediately.
       var refreshB = new Refresher( function () {console.log("b");}, 20, true);

  */
/*jslint
browser: true, devel: true, plusplus: true, unparam: true, todo: true, vars: true, white: true, nomen: true
*/
/*global requestAnimationFrame */

// Shim for those less fortunate.
(function() {
    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

/**
 * Class providing a simple callback w/ refresh using requestAnimationFrame().
 * @param {Function}  callback  Executes at each refresh interval
 * @param {Number}    milliseconds   Time between each refresh
 * @param {Boolean}   immediate Forces to execute refresh immediately upon init.
 */
var Refresher = function (callback, ms, immediate) { "use strict";
    var self = this,
        cb   = callback,
        freq = ms || 0,
        im   = immediate || false,
        first, prev, total, refreshing, mute,

        runCallback = function () {
            if (typeof cb === "function" && !mute) {
                cb.apply(self);
            }
        },
        step = function (timestamp) {
            var elapsed = timestamp - prev;
            if (refreshing) {
                requestAnimationFrame(step);
            }
            if (first === 0) { first = timestamp; }
            if (elapsed >= freq) {
                prev = timestamp;
                total++;
                runCallback();
            }
        },
        start = function () {
          refreshing = true;
          if (im) {
              runCallback();
          }
          requestAnimationFrame(step);
        },
        reset = function () {
            first = 0;
            prev  = 0;
            refreshing = false;
            mute  = false;
            total = 0;
        };

    // Init
    reset();

                                                            
    // API
    return {
      getTotal    : function () { return total; },
      getFreq     : function () { return freq; },
      setFreq     : function (ms) { freq = ms; },
      getCallback : function () { return cb; },
      setCallback : function (func) { cb = func; },
      mute        : function () { mute = true; },
      unmute      : function () { mute = false; },
      reset       : function () { reset(); },
      stop        : function () { refreshing = false; },
      start       : function () { start(); }
    };

};
