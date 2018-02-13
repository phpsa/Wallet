module.exports = {
    printWidth: 80,
    parser: 'typescript',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',

    overrides: [
        {
            files: '*.json',
            options: {
                parser: 'json',
                printWidth: 1000,
            },
        },
        {
            files: '*.js',
            options: {
                parser: 'babylon',
            },
        },
    ],
};
