# Examples of commonly used string operations in JavaScript:

* length: returns the length of a string.
```js
let text = "Hello World";
let length = text.length; // 11
```
* slice(start, end): extracts a part of a string and returns the extracted part in a new string.
```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // "Banana"
```
* substring(start, end): similar to slice(), but treats negative start and end values as 0.
```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13); // "Banana"
```
* substr(start, length): similar to slice(), but the second parameter specifies the length of the extracted part.
```js 
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); // "Banana"
```
* replace(searchValue, newValue): replaces a specified value with another value in a string.
```js  
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // "Please visit W3Schools!"
```
* toUpperCase(): converts a string to uppercase letters.
```js  
let text = "Hello World";
let upperText = text.toUpperCase(); // "HELLO WORLD"
```
* toLowerCase(): converts a string to lowercase letters.
```js
let text = "Hello World";
let lowerText = text.toLowerCase(); // "hello world"
```
* concat(string2, string3, ..., stringX): joins two or more strings.
```js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); // "Hello World"
```
* trim(): removes whitespace from both ends of a string.
```js
let text = "   Hello World   ";
let trimmedText = text.trim(); // "Hello World"
```
* charAt(index): returns the character at the specified index in a string.
```js
let text = "HELLO WORLD";
let char = text.charAt(0); // "H"
```
* charCodeAt(index): returns the Unicode of the character at the specified index in a string.
```js
let text = "HELLO WORLD";
let charCode = text.charCodeAt(0); // 72
```
* split(separator): splits a string into an array of substrings.
```js
let text = "a,b,c,d,e";
let splitText = text.split(","); // ["a", "b", "c", "d", "e"]
```