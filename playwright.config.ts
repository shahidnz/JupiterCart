import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: 1,
    workers: 1,
    reporter: [
      ['html'],
      ['allure-playwright']
    ],
    use: {
      baseURL: 'https://jupiter.cloud.planittesting.com/#/',
      headless: false,
      trace: 'on-first-retry',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure'
    },
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] }
      }
    ]
  });
