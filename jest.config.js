module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(ts|js)'],
}
