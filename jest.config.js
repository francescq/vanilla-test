module.exports = {
  'rootDir': './',
  'verbose': true,
  'collectCoverage': false,
  'collectCoverageFrom': ['./src/**/*.js'],
  'coverageDirectory': '<rootDir>/coverage',
  'moduleFileExtensions': [
    'js'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest'
  },
  "moduleNameMapper": {
    "\\.(scss|css)$": "identity-obj-proxy"
  }
  // },
  //   "globalSetup": "jest-browser/setup",
  //   "globalTeardown": "jest-browser/teardown",
  //   "testEnvironment": "jest-browser"
  
};