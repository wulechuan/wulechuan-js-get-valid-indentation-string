export declare function 求可靠的用于计算机源代码缩进的空白文本(
    期望采用的缩进空白配置:  any,
    保险的备用缩进空白配置?: string | number,
    应在控制台记录运行细节?: boolean
): string

export declare function getValidIndentationString(
    providedIndentation: any,
    fallbackValue?:      string | number,
    shouldLogVerbosely?: boolean
): string
