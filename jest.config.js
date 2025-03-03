module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/src/tests/**/*.test.tsx'],
  transform: {
    '.*\\.(tsx?)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  setupFilesAfterEnv: ['jest-extended/all'],
}
