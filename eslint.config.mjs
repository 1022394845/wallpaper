import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,vue}']
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintPluginPrettierRecommended,

  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true, // 单引号
          semi: false, // 无分号
          printWidth: 100, // 每行宽度至多100字符
          trailingComma: 'none', // 不加对象|数组最后逗号
          endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
        }
      ],
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
        }
      ],
      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
      // 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭
      'no-undef': 'off',
      'vue/no-v-html': 'off', // 关闭v-html警告
      'vue/no-v-text-v-html-on-component': 'off'
    }
  }
])
