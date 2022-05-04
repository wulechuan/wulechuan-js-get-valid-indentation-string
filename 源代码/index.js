const 彩色粉笔工具 = require('chalk')
const 本程序之名称 = require('../package.json').name

const 日志消息文本前缀 = `\n${彩色粉笔工具.whiteBright(本程序之名称)} ：\n\n`





module.exports.求可靠的用于计算机源代码缩进的空白文本 = 求可靠的用于计算机源代码缩进的空白文本
module.exports.getValidIndentationString        = 求可靠的用于计算机源代码缩进的空白文本





/**
 * @param {*}                期望采用的缩进空白配置
 * @param {?string | number} 保险的备用缩进空白配置
 * @param {?boolean}         应在控制台记录运行细节
 *
 * @returns {string}
 */
function 求可靠的用于计算机源代码缩进的空白文本 (期望采用的缩进空白配置, 保险的备用缩进空白配置, 应在控制台记录运行细节) {
    const 拟采纳的缩进空白文本 = _求可靠的用于计算机源代码缩进的空白文本_内核程序(期望采用的缩进空白配置, 保险的备用缩进空白配置, 应在控制台记录运行细节)

    if (应在控制台记录运行细节) {
        console.log(`${日志消息文本前缀}${
            彩色粉笔工具.green(`    最终决定采用的缩进空白文本为“"${拟采纳的缩进空白文本.replace(/\t/g, '\\t')}"”。`)
        }`)
    }

    if (拟采纳的缩进空白文本 && /^\t{2,}$/.test(拟采纳的缩进空白文本)) {
        console.log(`${日志消息文本前缀}${
            彩色粉笔工具.yellow('    最终决定采用的缩进空白文本由不止一个制表符（即“"\\t"”）构成。\n    具体而言，其由')
        }`, 拟采纳的缩进空白文本.length, 彩色粉笔工具.yellow('个制表符构成。'))
    }

    return 拟采纳的缩进空白文本
}





/**
 * @param {*}               期望采用的缩进空白配置
 * @param {string | number} 保险的备用缩进空白配置
 * @param {boolean}         应在控制台记录运行细节
 *
 * @returns {string}
 */
function _求可靠的用于计算机源代码缩进的空白文本_内核程序 (期望采用的缩进空白配置, 保险的备用缩进空白配置, 应在控制台记录运行细节) {
    const {
        给出的值确实可采纳,
        给出的值视同未给出,
        出错时的消息文本,
        拟采纳的缩进空白文本,
    } = _求可靠的用于计算机源代码缩进的空白文本_考察该配置(期望采用的缩进空白配置)

    if (给出的值确实可采纳) {
        return 拟采纳的缩进空白文本
    }

    const {
        给出的值确实可采纳: 后备值确系无效,
        // 出错时的消息文本: 出错时的消息文本OfProcessingTheFallbackValue,
        拟采纳的缩进空白文本: 拟采纳的后备值,
    } = _求可靠的用于计算机源代码缩进的空白文本_考察该配置(保险的备用缩进空白配置)

    if (!给出的值视同未给出) {

        if (应在控制台记录运行细节) {
            console.log(
                `${日志消息文本前缀}${
                    彩色粉笔工具.red(出错时的消息文本)
                }\n    ${
                    彩色粉笔工具.red('而给出的原始值为：')
                }`,

                typeof 期望采用的缩进空白配置 === 'string'
                    ? 彩色粉笔工具.yellow(`"${
                        彩色粉笔工具.bgYellow.black(
                            期望采用的缩进空白配置
                                .replace(/\t/g, '\\t')
                                .replace(/\n/g, '\\n')
                                .replace(/\r/g, '\\r')
                        )
                    }"`)
                    : 期望采用的缩进空白配置
            )
        }
    }

    if (!后备值确系无效) {
        throw new TypeError(`${日志消息文本前缀}    ${
            彩色粉笔工具.red('给出的期望值和后备值均不合规。')
        }`)
    }

    return 拟采纳的后备值
}




/**
 * @typedef {object} 范_考察某配置之结论
 *
 * @property {boolean} 给出的值视同未给出
 * @property {string | undefined} 拟采纳的缩进空白文本
 * @property {boolean} 给出的值确实可采纳
 * @property {string | undefined} 出错时的消息文本
 */

/**
 * @param {string | number} 给出的值
 *
 * @returns {范_考察某配置之结论}
 */
function _求可靠的用于计算机源代码缩进的空白文本_考察该配置 (给出的值) {
    let 给出的值视同未给出 = false

    /** @type {string | undefined} */
    let 拟采纳的缩进空白文本

    /** @type {string | undefined} */
    let 出错时的消息文本

    if (给出的值 === undefined || 给出的值 === null || 给出的值 === '') {
        // Nothing to do. We will simply try the default value.
        给出的值视同未给出 = true

    } else if (typeof 给出的值 !== 'string' && typeof 给出的值 !== 'number') {

        出错时的消息文本 ='    输入值必须要么是数字值，要么是字符串值。'

    } else {
        let 给出的值系全空白文本 = false
        let 给出的值系全空白文本且符合规格 = false
        let 给出的值系全空白文本但过长 = false

        if (typeof 给出的值 === 'string') {
            if (/^[\s\r\n\t]+$/.test(给出的值)) {
                给出的值系全空白文本 = true

                if (/^ {1,}$/.test(给出的值) || /^\t{1,}$/.test(给出的值)) {
                    if (/^ {1,50}$/.test(给出的值) || /^\t{1,16}$/.test(给出的值)) {

                        拟采纳的缩进空白文本 = 给出的值
                        给出的值系全空白文本且符合规格 = true

                    } else {

                        给出的值系全空白文本但过长 = true
                        出错时的消息文本 = '    给出的值虽为大体合规的纯空白文本，但长度超限。'

                        if (/^ {1,}$/.test(给出的值)) {
                            出错时的消息文本 += `\n    其由 ${彩色粉笔工具.yellow(给出的值.length)} 个空格构成。`
                        } else {
                            出错时的消息文本 += `\n    其由 ${彩色粉笔工具.yellow(给出的值.length)} 制表符（即“"\\t"”）构成。`
                        }

                        出错时的消息文本 += '\n    若欲采用空格作为缩进空白，则空格数必须在 [1, 50] 范围内；' +
                        '\n    若欲采用制表符（即“"\\t"”），则制表符之数量必须在 [1, 16] 范围内。' +
                        '\n        且仅推荐采用 1 个制表符，不推荐采用多余 1 个的制表符。'

                    }
                }

            }
        }

        let 给出值可理解为一个数字 = false

        if (!给出的值系全空白文本) {
            // Be careful:
            //     +'  ' === 0
            //     +true === 1,
            //         but I don't want the boolean value `true`
            //         to be an allowed value.
            //         while a string like '2' is allowed.

            const 给出值等效的整数值 = Math.round(+ 给出的值)

            if (!isNaN(给出值等效的整数值)) {
                给出值可理解为一个数字 = true

                if (给出值等效的整数值 > 0 && 给出值等效的整数值 <= 50) {
                    拟采纳的缩进空白文本 = ' '.repeat(给出值等效的整数值)
                } else {
                    出错时的消息文本 = '    若给出的值为数字值，' +
                        '\n    或给出的字符串之内容可以理解为一个数字，' +
                        '\n    则该数字取值须在 1 至 50 之间，可以为 1，亦可为 50。' +
                        '\n    其取值范围之表示为 [1, 50] 或 (0, 51) 。'
                }
            }
        }

        if (typeof 给出的值 === 'string'
            && !给出值可理解为一个数字
            && !给出的值系全空白文本且符合规格
            && !给出的值系全空白文本但过长
        ) {
            出错时的消息文本 = '    若给出的值为字符串，而其内容又不可理解为数字的化，' +
                '\n    则其必须要么完全由空格构成，' +
                '\n    要么完全由制表符（即“"\\t"”）构成。' +
                '\n    空格与制表符不可混用。'
        }

    }





    return {
        给出的值视同未给出,
        拟采纳的缩进空白文本,
        给出的值确实可采纳: !!拟采纳的缩进空白文本,
        出错时的消息文本,
    }
}
