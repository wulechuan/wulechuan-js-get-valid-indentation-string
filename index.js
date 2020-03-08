const chalk = require('chalk')

const LOG_PREFIX = '\n@wulechuan/get-valid-indetantion-string:\n'


module.exports.getValidIndentationString = function (providedIndentation, fallbackValue, shouldLogVerbosely) {
    const decidedIndentation = _getValidIndentationString_core(providedIndentation, fallbackValue, shouldLogVerbosely)

    if (shouldLogVerbosely) {
        console.log(`${LOG_PREFIX}${
            chalk.green(`The decided indentation is: "${decidedIndentation.replace(/\t/g, '\\t')}"`)
        }`)
    }

    if (decidedIndentation && /^\t{2,}$/.test(decidedIndentation)) {
        console.log(`${LOG_PREFIX}${
            chalk.yellow('The decided indentation contains\nmore than 1 tabs("\\t"),')
        }`, decidedIndentation.length, chalk.yellow('in total.'))
    }

    return decidedIndentation
}





function _getValidIndentationString_core(providedIndentation, fallbackValue, shouldLogVerbosely) {
    const {
        providedValueIsValid,
        valueIsTreatedAsNotProvided,
        errorMessage,
        decidedIndentation,
    } = _parseOneValue(providedIndentation)

    if (providedValueIsValid) {
        return decidedIndentation
    }

    const {
        providedValueIsValid: fallbackValueIsValid,
        // errorMessage: errorMessageOfProcessingTheFallbackValue,
        decidedIndentation: decidedFallbackValue,
    } = _parseOneValue(fallbackValue)

    if (!valueIsTreatedAsNotProvided) {

        if (shouldLogVerbosely) {
            console.log(
                `${LOG_PREFIX}${chalk.red(`${errorMessage}\nWhile the provided value was:`)}`,

                typeof providedIndentation === 'string'
                    ? `"${
                        providedIndentation
                            .replace(/\t/g, '\\t')
                            .replace(/\n/g, '\\n')
                            .replace(/\r/g, '\\r')
                    }"`
                    : providedIndentation
            )
        }
    }

    if (!fallbackValueIsValid) {
        throw new TypeError(`${LOG_PREFIX}${
            chalk.red('Neither the provided value\nnor the fallback value is valid.')
        }`)
    }

    return decidedFallbackValue
}





function _parseOneValue(providedIndentation) {
    let valueIsTreatedAsNotProvided = false
    let decidedIndentation
    let errorMessage

    if (providedIndentation === undefined || providedIndentation === null || providedIndentation === '') {
        // Nothing to do. We will simply try the default value.
        valueIsTreatedAsNotProvided = true

    } else if (typeof providedIndentation !== 'string' && typeof providedIndentation !== 'number') {

        errorMessage ='The indentation must be either a number, or a string.'

    } else {
        let providedAPureWhiteSpaceString = false
        let providedAWayTooLongWhiteSpaceString = false
        let providedAValidWhiteSpaceString = false
        if (typeof providedIndentation === 'string') {
            if (/^[\s\r\n\t]+$/.test(providedIndentation)) {
                providedAPureWhiteSpaceString = true

                if (/^ {1,}$/.test(providedIndentation) || /^\t{1,}$/.test(providedIndentation)) {
                    if (/^ {1,50}$/.test(providedIndentation) || /^\t{1,16}$/.test(providedIndentation)) {
                        decidedIndentation = providedIndentation
                        providedAValidWhiteSpaceString = true
                    } else {
                        providedAWayTooLongWhiteSpaceString = true
                        errorMessage = 'The provided whitespace string is way too long.'

                        if (/^ {1,}$/.test(providedIndentation)) {
                            errorMessage += `\nIt contains ${chalk.yellow(providedIndentation.length)} spaces.`
                        } else {
                            errorMessage += `\nIt contains ${chalk.yellow(providedIndentation.length)} tabs.`
                        }

                        errorMessage += '\nFor spaces(spacebar), the allowed range is [1, 50];' +
                        '\nFor tabs("\\t"), the allowed range is [1, 16],\nbut single tab is prefered.'

                    }
                }

            }
        }

        let providedANumber = false

        if (!providedAPureWhiteSpaceString) {
            // Be careful:
            //     +'   ' === 0
            //     +true === 1,
            //         but I don't want the boolean value `true`
            //         to be an allowed value.
            //         while a string like '2' is allowed.

            const provideIndentationAsNumber = Math.round(+ providedIndentation)

            if (!isNaN(provideIndentationAsNumber)) {
                providedANumber = true

                if (provideIndentationAsNumber > 0 && provideIndentationAsNumber <= 50) {
                    decidedIndentation = ' '.repeat(Math.round(provideIndentationAsNumber))
                } else {
                    errorMessage = 'The indentation number must be between 1 and 50,' +
                        '\naka be in the range of [1, 50] or (0, 51).'
                }
            }
        }

        if (typeof providedIndentation === 'string'
            && !providedANumber
            && !providedAValidWhiteSpaceString
            && !providedAWayTooLongWhiteSpaceString
        ) {
            errorMessage = 'The indentation string must contain nothing but' +
                '\neither pure spaces(spacebar), or pure tabs("\\t"). ' +
                '\nSpaces and tabs can not present at the same time.'
        }

    }





    return {
        valueIsTreatedAsNotProvided,
        providedValueIsValid: !!decidedIndentation,
        errorMessage,
        decidedIndentation,
    }
}