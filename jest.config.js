module.exports = {
  projects: [
    {
      runner: 'jest-runner-eslint',
      displayName: 'lint',
      testMatch: ['<rootDir>/**/*.js']
    },
    {
      displayName: 'test',
      moduleDirectories: ['node_modules', '<rootDir>/']
    }
  ],
  watchPlugins: ['jest-runner-eslint/watch-fix']
};
