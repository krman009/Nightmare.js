#Nightmare.js

Easy to install and shitty to use.

Ever wanted to piss off your friends? Install Nightmare in there projects.

--------
For the purpose of this example we define:
```js
var $items = $("div");
```

The corrent DOM structure is:

```html
<div class="div-1">Hello</div>
<div class="div-2">World</div>
<div class="div-3"><span>!</span></div>
```

```js
$.fn.each
```

```js
$items.each(function(i) {
    console.log(i); // 2.. 1.. 0..
});
```

```js
$.fn.filter`
```

```js
$items.filter(function() {
    return $(this).text() == "Hello";
}).length // 2;
```

```js
$.fn.not
```

```js
$items.not(function() {
        return $(this).text() == "Hello";
}).length // 1;
```

---------

```js
Array.prototype.forEach
```

```js
[1,2,3].forEach(function(val) {
    console.log(val); // 3.. 2.. 1..
});
```

```js
Array.prototype.filter
```

```js
[1,2,3].filter(function(val) {
    return val === 2;
}); // [1, 3]
```
