module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testRegex: '\\.(test|spec)\\.((js|ts))$',
  setupFilesAfterEnv: ['./jest/setup.ts'],
  cacheDirectory: './.jest/cache',
}
