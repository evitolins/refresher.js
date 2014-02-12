refresher.js
=============

Simply repeat a definable callback using requestAnimationFrame().


## Getting started
The quickest way to use Refresher is to define it's callback and settings when instantiating the object

       // Refresh and run callback every 5 seconds, starting in 5 seconds.
       var refreshA = new Refresher( function () {console.log("a");}, 5);

You can also add or edit your options at any time after instantiation

       // Refresh and run callback every 20 seconds, starting immediately.
       var refreshB = new Refresher();
       refreshB.setCallback(function () {console.log("b");});
       refreshB.setFreq(20);

## Options
**getTotal**
: Returns total repeats since last reset

**getFreq**
: Returns current repeat frequecy

**setFreq**
: Sets current repeat frequency (in seconds)

**getCallback**
: Returns callback function, if defined.

**setCallback**
: Sets repeat callback to given function

**mute**
: Allow repeat to continue, but do not issue callback.

**unmute**
: Allow repeat to continue, and issue callback.

**reset**
: Sets default options and stops refresh.

**stop**
: Stops refresh

**start**
: Continue refresh

       
## Why Refresher?
`requestAnimationFrame()` provides a few perks that the ol' `setInterval()` lacks.  Most specifically, browsers' behavior with "RAF" is more efficently issued, and does not fire when a browser window or tab is not active.  This means your repeatitive tasks are quickly muted until that window regains focus. Other than that, it's compact, easy to use and has all the options you need.
