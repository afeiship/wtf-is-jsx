// .babelrc or babel.config.js

module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "h", // 设置 h 函数的名称
        pragmaFrag: "Fragment", // 设置 Fragment 组件的名称
      },
    ],
  ],
};
