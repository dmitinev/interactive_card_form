/** @type {import("jest").Config} */
export default {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!src/main.tsx', '!src/**/index.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
    '\\.(png|jpg)$': 'jest-transform-stub',
  },
  testPathIgnorePatterns: [
    '<rootDir>/templates/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
