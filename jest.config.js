module.exports = {
  setupFilesAfterEnv: ['@testing-library/react'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
