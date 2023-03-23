module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb', // 'plugin:react/recommended',
        // 'standard-with-typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'file-extension-in-import-ts'],
    rules: {
        'prettier/prettier': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/require-default-props': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': [
            'off',
            { devDependencies: false, optionalDependencies: false, peerDependencies: false },
        ],
        'import/no-unresolved': [2, { caseSensitive: false }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                json: 'never',
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', 'tsx'],
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['src/', 'node_modules'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
