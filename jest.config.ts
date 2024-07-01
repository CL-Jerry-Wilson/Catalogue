import { getJestProjectsAsync } from '@nx/jest';

export default async () => ({
  preset: 'ts-jest',
  testEnvironment: 'node',
  projects: await getJestProjectsAsync(),
  testMatch: ['**/tests/**/*.test.ts'],
});
