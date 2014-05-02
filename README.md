# refresher.js

<img align="right" height="200" src="http://www.flaticon.com/png/256/2745.png">

A pure and simple Javascript utility to handle repetitive tasks using requestAnimationFrame().

This simple object has proven useful several times in the past, so I thought I'd share it with the world.   Please read below to get you started on repeating everything you can think of.  For those who might need it, there are plenty of helpful methods provided to allow for more advanced control.  I imagine it has potential for gaming clocks, data polling, and any other repetitive task your JS brains can come up with.  Have fun!


## Installation
**Basic**
: Simply download and source the file `refresher.js`.

```html
<script src="/js/refresher.js"></script>
```

**Bower**
: To maintain dependency, you may want to use Bower instead

```bash
bower install refresher.js
```   

## Getting started

> Live demo: http://jsbin.com/fofan/6/edit?js,console,output

The quickest way to use Refresher is to define it's callback and settings when instantiating the object

```javascript
// Refresh and run callback every 5 seconds, starting in 5 seconds.
var callbackA = function () {console.log("You repeat me!");};
var refreshA = new Refresher(callbackA, 5000);
refreshA.start();
```

You can also add or edit your options at any time after instantiation

```javascript
// Refresh and run callback every 20 seconds, starting in 20 seconds.
var callbackB = function () {console.log("Has it been 20 seconds already?");};
var refreshB = new Refresher();
refreshB.setCallback(callbackB);
refreshB.setFreq(20000);
refreshB.start();
```

## Advanced

### Instantly Apply Callback
In some cases you might need to instantly run your callback during instantiation. If so, just set the 3rd argument as `true`.

```javascript
// Run callback immediately, and then repeat once per minute.
var callbackC = function () {console.log("See you again in 60 seconds.");};
var refreshC = new Refresher(callbackC, 60000 , true);
refreshC.start();
```


## Methods
**getTotal**
: Returns total repeats since last reset

**getFreq**
: Returns current repeat frequency

**setFreq**
: Sets current repeat frequency (in milliseconds)

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
`requestAnimationFrame()` provides a few perks that the ol' `setInterval()` lacks.  Supported browsers use `rAF` more efficiently to issue synced with the browser's redraw time. This should be encouraged, since it could  potentially
reduce unnecessary network activity and processor/battery usage.

Another great feature is that `rAF` commands will not issue when a browser window or tab is not active.  This means your repetitive tasks are quickly muted until that window regains focus. Other than that, it's compact, easy to use and has all the options you need.


## More info on requestAnimationFrame()
- http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
- http://www.html5rocks.com/en/tutorials/speed/animations/
