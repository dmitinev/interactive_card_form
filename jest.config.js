/** @type {import("jest").Config} */
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  modulePathIgnorePatterns: ['<rootDir>/templates/'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
