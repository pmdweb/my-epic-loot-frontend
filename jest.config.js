/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageThreshold: { global: { branches: 0, functions: 0, lines: 0, statements: 0 } }
}
module.exports = config;
