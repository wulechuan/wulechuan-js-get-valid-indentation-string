# Get a Valid String that can be Used as One Level of Indetantion in Source Codes

<link rel="stylesheet" href="../node_modules/@wulechuan/css-stylus-markdown-themes/dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">


## Multilingual Editions of this Article

- 《[本文之简体中文版](../ReadMe.md)》




## NPM Page

<dl>
<dt>NPM Name</dt>
<dd>

[@wulechuan/get-valid-indentation-string](https://www.npmjs.com/package/@wulechuan/get-valid-indentation-string)

</dd>
<dt>Author</dt>
<dd><p>wulechuan (南昌吴乐川)</p></dd>
</dl>





## Introduction

### What is it

This program produces a string that could be used as a single level of indentation in any compute programing language source codes. Or it throws an error if it fails to evaluate such a string. The said string contains either all spaces(spacebar), or all tabs(`'\t'`). But it is not allowed to contain a mix of space and tab. Note that multiple tabs(`'\t'`) is allowed but not recommended. After all, generally we need only single tab for one level of indentation.

> **Also note that this program provides no so-called default value.** Because I'm not going to pander any possible "flavour" here, be it 2-spaced, 4-spaced, tabbed, or any kind. Thus, when this program is invoked, a so-called "fallback value" is recommended, in case the "formerly provided value" happens to be an invalid one. You can name the "fallback" value a "default" value if prefer.


## Usage

### Installation

```sh
npm  i  @wulechuan/get-valid-indentation-string
```


### Examples

These codes come from the `./test.js` of this repository, are good examples.

Checkout the full version of `./test.js` for more details.

The key parts are extracted below, as quick references:


```js
const { getValidIndentationString } = require('@wulechuan/get-valid-indentation-string')

// Throws an error.
// As neither the provided value nor the fallback value presents.
tryOneValue()


tryOneValue(3)     // Returns 3 spaces: '   '.
tryOneValue('3')   // Returns 3 spaces: '   '.
tryOneValue(' 8 ') // Returns 8 spaces: '        '.


// Returns 2 spaces: '  '.
// And an message is logged in verbose mode,
// hinting that number should not be negative.
tryOneValue(-1,    '  ')


// Throws an error.
// As neither the provided value nor the fallback value presents.
tryOneValue('-2',  ' \n ')


// Returns 1 tab: '\t'.
tryOneValue('\t',  '    ')


// Returns 4 spaces: '    '.
// And an message is logged in verbose mode,
// saying that space and tab should not mix up.
tryOneValue(' \t', '    ')


// Returns 2 spaces: '  '.
tryOneValue('',    '  ')  

// Throws an error,
// because the provided whitespace is way too long(67 spaces),
// plus the fallback value is absent.
tryOneValue('                                                                   ')


// Throws an error,
// because boolean values are not allowed,
// plus the fallback value is absent.
tryOneValue(true)


// It's valid, being 2 tabs: '\t\t'.
// But a warning message will issue.
// Think about it: Do we really need multiple tabs
// for just one level of indentaition?
tryOneValue('\t\t')

function tryOneValue(valueToTry, fallbackValue) {
    try {
        getValidIndentationString(valueToTry, fallbackValue, true)
    } catch(e) {
        console.log(e.message)
    }
}
```


### API

#### The Main Function

This program provides the only function as its interface. The said function is named `getValidIndentationString`. And its signature is:

```ts
function getValidIndentationString(
    providedIndentation: any,
    fallbackValue?: string | number,
    shouldLogVerbosely?: boolean
): string
```


Where

-   `providedIndentation` is so-called require. But due to it could be `undefined`, you might also treat it as an optinal one, virtually. Although the value could be any type, including `undefined`, `null`, etc., but only so-called "valid" values are accepted and used. If an invalid value is provided, it's ignored。 Thus the result value falls back to take the `fallbackValue`, which is the second argument of this function.

    For more details of what a "valid" value looks like, see below.


-   `fallbackValue` is an optional argument, but is recommended to present. Only a "valid" value is accept.

    For more details of what a "valid" value looks like, see below.


-   `shouldLogVerbosely` is an optional argument. It acts as a boolean. And when this argument takes a "truthy" value, then:

    -   If this program finally evaluates a valid indentation string, it also prints the decided indentation string in the Nodejs console, simply for us human being to inspect.

    -   If the `providedIndentation` is invalid, then no matter the `fallbackValue` is valid or not, this program will print some details about why the `providedIndentaion` is invalid in the Nodejs console.


> **IMPORTANT: If both `providedIndentation` and `fallbackValue` are invalid, this program throws an error and halt!**



#### Valid Values

-   A number, as long as the `Math.round` result of the number, is larger than `0` and less than or equal to `50` . And this number is treated as the count of spaces(spacebar) used as a single level of indentation.

-   A string whose content is a number of above. And the effect is the same as above.

-   A string contains nothing but spaces(spacebar), as long as the count of the spaces is no less than `1` and no more than `50`. Which also means both a single space and 50 spaces are valid.

-   A string contains nothing but tabs(`'\t'`), as long as the count of the tabs is no less than `1` and no more than `16`. Which also means both a single tab and 16 tabs are valid.

    > But if the count of tabs is more than 1, then a warning message issues. As generally we don't need multiple tabs for a single level of indentation.


Below are examples of some valid values:

`4`、`'4'`、`' 4  '`、`' '`、`" "`、`'      '`、`'\t'`、`"\t"`、`'\t\t'`。



---

## TODOs

-   Nothing at present.



