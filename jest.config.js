module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: './coverage',
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },
    globals: {
        window: true,
    },
};
