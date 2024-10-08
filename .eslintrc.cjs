/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  /*
   * "off" 或 0 ==> 關閉規則
   * "warn" 或 1 ==> 開啟的規則作為警告（不影響程式碼執行）
   * "error" 或 2 ==> 規則作為一個錯誤（程式碼不能執行，介面報錯）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允許多個空白行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空餘的多行
    'no-useless-escape': 'off', // 禁止不必要的轉義字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定義未使用的變數
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 類型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自訂 TypeScript 模組和命名空間。
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求元件名稱永遠為 "-" 連結的單字
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的變數<template>被標記為未使用
    'vue/no-mutating-props': 'off', // 不允許元件 prop的改變
    'vue/attribute-hyphenation': 'off' // 對模板中的自訂元件強制執行屬性命名樣式
  }
};
