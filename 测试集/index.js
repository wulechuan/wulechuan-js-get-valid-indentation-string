const { 求可靠的用于计算机源代码缩进的空白文本 } = require('..')




const 运行测试程序时应在控制的记录运行细节 = true





let 已运行的测试用例之计数 = 0

试一把()    // Throws an error
试一把(3)   // 3 spacesL '   '
试一把('3') // 3 spaces: '   '



试一把(' 8 ')         // 8 spaces: '        '
试一把(-1,    '  ')   // 2 spaces: '  '
试一把('-2',  ' \n ') // Throws an error.



试一把('\t',  '    ') // 1 tab: '\t'
试一把(' \t', '    ') // 4 spaces: '    '
试一把('',    '  ')   // 2 spaces: '  '



// Throws an error, because the whitespace is way too long.
试一把(' '.repeat(67))



// Throws an error. because boolean values are not allowed.
试一把(true)



// It's valid, being 2 tabs: '\t\t'.
// But a warning message will issue.
// Do we really need multiple tabs for one level of indentaition?
试一把('\t\t')



// Throws an error. because mixing spacebar and tab is not allowed.
试一把(' \t')





function 试一把 (期望采用的缩进空白之配置, 保险的备用配置) {
    const 本次测试之序号 = ` 测试用例 ${已运行的测试用例之计数 + 1} `
    console.log(`-----${本次测试之序号}${'-'.repeat(51 - 本次测试之序号.length)}`)

    try {

        // 请留意下方的函数调用语句。
        求可靠的用于计算机源代码缩进的空白文本(
            期望采用的缩进空白之配置,
            保险的备用配置,
            运行测试程序时应在控制的记录运行细节
        )

    } catch(错误之记载) {
        console.log(错误之记载.message)
        // console.log(错误之记载)
    }

    console.log('\n\n\n')

    已运行的测试用例之计数 ++
}