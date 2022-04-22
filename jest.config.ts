module.exports = {
    preset: "ts-jest",
    testMatch: ["<rootDir>/tests/**/*.(spec|test).ts?(x)"],
    transform: {
        // 将.js后缀的文件使用babel-jest处理
        "^.+\\.js$": "babel-jest",
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    // 下面非要从重要, 将不忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"],
    setupFiles: ['<rootDir>/test.setup.js'],
 
    moduleNameMapper: {
        '\\.(css|scss)': 'identity-obj-proxy', // mock 在react组件里import的CSS
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/testMocks/assetsMocks.ts', //mock 在react组件里import的图片
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: "jsdom"
};
export {}
