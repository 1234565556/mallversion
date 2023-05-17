module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-preset-env": {},
        "postcss-pxtorem": {
            rootValue: 37.5,     // 设置根元素字体大小
            unitPrecision: 6,
            propList: ["*"],     // 可以从px更改到rem的属性
            selectorBlackList: [".hairlines"],    // 过滤掉.hairlines开头的类选择器
            replace: true,
            mediaQuery: true,
            minPixelValue: 2
        },
        cssnano: {
            "cssnano-preset-advanced": {
                zindex: false,
                autoprefixer: false
            }
        }
    }
};
