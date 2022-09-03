const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
  // preset: 'ts-jest',
  moduleNameMapper: {
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@typedefs/(.*)$': '<rootDir>/src/typedefs/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@views/(.*)$': '<rootDir>/src/views/$1',
    '^@state/(.*)$': '<rootDir>/src/state/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
  },
  moduleDirectories: ['node_modules', __dirname],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testPathIgnorePatterns: ['node_modules/', './.next/'],
  transformIgnorePatterns: ['node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
