module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            {allowConstantExport: true},
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": "error",
        "no-console": "warn",
        "indent": [
            "error",
            "tab"
        ],
        "no-trailing-spaces": "error",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true
            }
        ],
        "complexity": [
            "error",
            10
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "max-lines": [
            "error",
            500
        ],
        "no-var": "error",
        "prefer-const": "error",
    },
}
