# 获取有效的代码缩进字符串

<link rel="stylesheet" href="./node_modules/@wulechuan/css-stylus-markdown-themes/dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">


## Multilingual Editions of this Article

- [English version of this ReadMe](./ReadMe.en-US.md)




## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/get-valid-indentation-string](https://www.npmjs.com/package/@wulechuan/get-valid-indentation-string)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>





## 简介

### 功用

该程序用于获取一个字符串，用于计算机源代码缩进。该字符串要么全是“空格”（`' '`），要么全是“制表符”（`'\t'`），但二者不可混用。并且，多于一个制表符是允许的，但本程序会给出警告信息。因为，一般的，我们仅需采用单一制表符。

> 注意，本程序故意未提供所谓“默认值”。因此，本程序既不迎合喜欢采用“制表符”的程序员们，也不迎合喜欢采用“两个空格”的程序员们，也不迎合我本人喜欢的“四个空格”的风格。调用本程序时，必须明确给出一个所谓“后备值”，或者说“默认值”。



## 用法

### 安装

```sh
npm  i  @wulechuan/get-valid-indentation-string
```


### 具体示例

本项目代码库中自带的 `./test.js` 大致如下。

```js
const getValidIndentationString = require('@wulechuan/get-valid-indentation-string')

tryOneValue()      // 会抛出错误，因为“期望值”、“备用值”均不合格。
tryOneValue(3)     // 采纳三个空格，即'   '。
tryOneValue('3')   // 采纳三个空格，即'   '。
tryOneValue(' 8 ') // 采纳八个空格，即'        '。


// 采纳两个空格，即'  '。在“繁冗汇报模式”还会在控制台打印“期望值”无效的细节说明。
tryOneValue(-1,    '  ')


// 会抛出错误，因为“期望值”、“备用值”均不合格。
tryOneValue('-2',  ' \n ')


// 采纳一个制表符，即'\t'。
tryOneValue('\t',  '    ')


// 采纳四个空格，即'    '。在“繁冗汇报模式”还会在控制台打印“期望值”无效的细节说明。
tryOneValue(' \t', '    ')


// 采纳两个空格，即'  '。
tryOneValue('',    '  ')


// 会抛出错误，因为“期望值（六十七个空格）”太长了，超出限度，同时“备用值”又未给出。
tryOneValue('                                                                   ')


// 会抛出错误，因为“期望值”不允许设置为布尔值，同时“备用值”又未给出。
tryOneValue(true)


// 下方代码的期望值有效，汇报采纳，即两个制表符（'\t\t'）。
// 但在被采纳的同时，控制台还会给出一则警告信息，提及制表符多于一个。
// 不妨思考一下，果真有必要采用超过一个制表符来当做“单级别”缩进吗？
tryOneValue('\t\t')



function tryOneValue(valueToTry, fallbackValue) {
    try {
        getValidIndentationString(valueToTry, fallbackValue, true)
    } catch(e) {
        console.log(e.message)
    }
}
```


### 应用编程接口（所谓 API）

#### 主函数

本工具提供唯一的函数用于，名为 `getValidIndentationString`。该函数之签名（Signature）如下：

```ts
function getValidIndentationString(
    providedIndentation: any,
    fallbackValue?: string | number,
    shouldLogDecidedValue?: boolean
): string
```


其中：

-   `providedIndentation` 该值不能省略，可以是任何值，但仅有效并会被采纳为最终决定的值，无效值不被采纳。当该值无效时，本程序转而尝试采用 `fallbackValue` 的值。所谓“有效”的值，参见下文。


-   `fallbackValue`，该值可以省略，其取值可以是任何值，但仅有效并会被采纳为最终决定的值，无效值不被采纳。所谓“有效”的值，参见下文。


-   `shouldLogVerbosely`，该值可以省略。其取值可以是任意值，但会被视作布尔值。当该值为“真性（truthy）”时：

    -   如果本程序最终采纳了一个有效值，将在 Nodejs 的控制台打印出最终采纳的值，供人类审阅。
    -   如果给出的原始值有任何错误，那么，不论本程序最终是否（借助“后备值”）得到一个有效值，均会在 Nodejs 的控制台打印出与原始值相关的错误信息。


> **注意：如果 `providedIndentation`  和 `fallbackValue` 均无效，则本程序故意抛出错误！**



#### 有效的值

-   四舍五入后大于 `0` 且小于等于 `50` 的数字值。视作用于代码缩进**一级**所采用的空格之个数。

-   包含上述数字的字符串值，例如 `'4'` 或 `"  8 "`。含义同上。

-   一个**仅**包含**空格**的字符串，其中的空格数量不少于 `1` 且不多于 `50`（可以等于 `1`，可以等于 `50`）。

-   一个**仅**包含**制表符**的字符串，其中的制表符数量不少于 `1` 且不多于 `16`（可以等于 `1`，可以等于 `16`）。但仅推荐采用单一制表符。一般情况我认为根本没必要使用两个或更多制表符。


以枚举（但不穷举）一些有效值：

`4`、`'4'`、`' 4  '`、`' '`、`" "`、`'      '`、`'\t'`、`"\t"`、`'\t\t'`。


---

## 未来计划

-   暂无。



