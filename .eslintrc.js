module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off'
        // Add your project-specific ESLint rules here
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2015,
    },
    globals: {
        process: true
    }
};