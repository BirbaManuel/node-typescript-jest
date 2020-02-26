// jest.config.js
const { defaults } = require("jest-config")

module.exports = {
  verbose: true,
  transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
};


