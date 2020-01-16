module.exports = {
    parserPreset: './.parser-preset',
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-min-length': [2, 'always', 30], // lower-case subject
        'references-empty': [2, 'never'],
        'type-enum': [2, 'always', [
            'new',     // New feature
            'bug',      // Bug fix
            'improvement',
            'revert',
            'component',
            'style',
            'refactor',
            'performance'
        ]
        ],
        "type-case": [2, 'always', 'upper-case'],
        "subject-case": [2, 'always', 'sentence-case']
    }
}
