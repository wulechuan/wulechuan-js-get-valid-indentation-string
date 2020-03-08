const { getValidIndentationString } = require('.')


const shouldLogVerbosely = true

let testIndex = 1

tryOneValue()    // Throws an error
tryOneValue(3)   // 3 spacesL '   '
tryOneValue('3') // 3 spaces: '   '

tryOneValue(' 8 ')         // 8 spaces: '        '
tryOneValue(-1,    '  ')   // 2 spaces: '  '
tryOneValue('-2',  ' \n ') // Throws an error.

tryOneValue('\t',  '    ') // 1 tab: '\t'
tryOneValue(' \t', '    ') // 4 spaces: '    '
tryOneValue('',    '  ')   // 2 spaces: '  '

// Throws an error, because the whitespace is way too long.
tryOneValue('                                                                   ')

// Throws an error. because boolean values are not allowed.
tryOneValue(true)

// It's valid, being 2 tabs: '\t\t'.
// But a warning message will issue.
// Do we really need multiple tabs for one level of indentaition?
tryOneValue('\t\t')





function tryOneValue(valueToTry, fallbackValue) {
    const testIndexString = ` test ${testIndex} `
    console.log(`-----${testIndexString}${'-'.repeat(35 - testIndexString.length)}`)

    try {
        getValidIndentationString(valueToTry, fallbackValue, shouldLogVerbosely)
    } catch(e) {
        console.log(e.message)
    }

    console.log('\n')
    testIndex ++
}