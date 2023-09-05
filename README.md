# jQuery

- jQuery is a JavaScript Library.
- jQuery greatly simplifies JavaScript programming.

## <br>

### jQuery CDN (Content Delivery Network)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
```

## <br>

## [jQuery Selector Tester](https://www.w3schools.com/jquery/trysel.asp)

## jQuery Selectors
- `$("*")` - Selects all elements
- `$(this)` - Selects the current HTML element
- `$("p.intro")` - Selects all `<p>` elements with `class="intro"`
- `$("p:first")` - Selects the first `<p>` element
- `$("ul li:first")` - Selects the first `<li>` element of the first `<ul>`
- `$("ul li:first-child")` - Selects the first `<li>` element of every `<ul>`
- `$("[href]")` - Selects all elements with an href attribute
- `$("a[target='_blank']")` - Selects all `<a>` elements with a target attribute value equal to `"_blank"`
- `$("a[target!='_blank']")` - Selects all `<a>` elements with a target attribute value NOT equal to `"_blank"`
- `$(":button")` - Selects all `<button>` elements and `<input>` elements of `type="button"`
- `$("tr:even")` - Selects all even `<tr>` elements
- `$("tr:odd")` - Selects all odd `<tr>` elements

## <br>

### Add space and + make string convert to number

```js
var a = 10;
var b = "10";
console.log(a + b); // Output 20

if (a == b) {
    console.log("some kind of text"); // Output true
}

if (a === b) {
    console.log("some kind of text") // Output false
}
```