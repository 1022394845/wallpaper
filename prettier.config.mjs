/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  // 不尾随分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 多行逗号分割的语法中，最后一行不加逗号
  trailingComma: 'none',
  // 行尾风格，设置为auto
  endOfLine: 'auto',
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 单个参数的箭头函数不加括号 x => x
  arrowParens: 'avoid',
  // 对象大括号内两边是否加空格 { a:0 }
  bracketSpacing: true
}

export default config
