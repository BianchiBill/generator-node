import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
    js.configs.recommended,
    {
        files:[ '**/*' ],
        plugins: {
            '@stylistic/js': stylisticJs,
        },
        rules:  {
            'no-console': 'off',
            'no-process-env': 'error',
            'import/prefer-default-export': 'off',
            'no-undef': 'off',
            'key-spacing': [ 'error', {
                'multiLine': {
                    'beforeColon': false,
                    'afterColon':true,
                },
                'align': {
                    'beforeColon': true,
                    'afterColon': true,
                    'on': 'colon',
                },
                'singleLine': {
                    'beforeColon': false,
                    'afterColon': true,
                },
            } ],
            '@stylistic/js/keyword-spacing': [ 'error', { 'after': true, 'before': true } ],
            '@stylistic/js/arrow-parens': [ 'error', 'always' ],
            '@stylistic/js/brace-style': 'error',
            '@stylistic/js/arrow-spacing': 'error',
            '@stylistic/js/block-spacing': 'error',
            '@stylistic/js/comma-dangle': [ 'error', 'always-multiline' ],
            '@stylistic/js/space-in-parens': [ 'error', 'always', { 'exceptions': [ '{}' ] } ],
            '@stylistic/js/space-before-blocks': 'error',
            '@stylistic/js/space-before-function-paren': 'error',
            '@stylistic/js/space-infix-ops': 'error',
            '@stylistic/js/spaced-comment': [ 'error', 'always' ],
            '@stylistic/js/switch-colon-spacing': [ 'error', { 'after': true, 'before': false } ],
            '@stylistic/js/comma-spacing': [ 'error', { 'before': false, 'after': true } ],
            'sort-imports': [ 'error', {
                'ignoreCase': false,
                'ignoreDeclarationSort': false,
                'ignoreMemberSort': false,
                'memberSyntaxSortOrder': [ 'none', 'all', 'multiple', 'single' ],
                'allowSeparatedGroups': false,
            } ],
            // '@stylistic/js/max-len': [ 'error', { 'code': 100 } ]
        },
    },
    eslintConfigPrettier,
    {
        rules: {
            indent: 'error',
            'max-len': [ 'error', { 'code': 100 } ],
            'semi': [ 'error', 'always' ],
            'object-curly-spacing': [ 'error', 'always' ],
            'array-bracket-spacing': [ 'error', 'always' ],
            'computed-property-spacing': [ 'error', 'always' ],
            'arrow-parens': [ 'error', 'always' ],
            'quotes': [
                'error',
                'single',
            ],
        },
    },
];

