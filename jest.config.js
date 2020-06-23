module.exports = {
  collectCoverageFrom: ['**/src/**/*.ts?(x)', '!**/*.d.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRunner: 'jest-circus/runner',
  retryTimes: 5, //TODO(Alec): Make this only when CI is true
}
