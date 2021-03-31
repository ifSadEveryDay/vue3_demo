/*
 * @Author: your name
 * @Date: 2021-01-09 13:05:33
 * @LastEditTime: 2021-01-09 13:39:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3\vue3_demo\babel.config.js
 */
module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        // 可选链插件, 其他babel插件也是一样的安装方式
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator"
    ]
};