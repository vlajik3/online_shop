module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
            ts: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/prop-types': 0,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    ignorePatterns: ['src/serviceWorker.ts'],
};
