module.exports = {
    env: {
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
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'import/no-extraneous-dependencies': [
            'off',
            { devDependencies: false, optionalDependencies: false, peerDependencies: false },
        ],
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
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
