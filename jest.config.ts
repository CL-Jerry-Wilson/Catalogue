import { getJestProjectsAsync } from '@nx/jest';

export default async () => ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/tests/**/*.test.ts'],
  projects: await getJestProjectsAsync(),
});
