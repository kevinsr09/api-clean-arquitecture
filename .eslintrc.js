module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
 
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/strict-boolean-expressions": "off"
    },

    "ignorePatterns": [
        "dist",
        "node_modules",
        ".eslintrc.js"
    ],

}
