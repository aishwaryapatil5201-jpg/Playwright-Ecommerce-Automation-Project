import { test, expect } from '@playwright/test';

test('Practice flaky test', async ({ page }, testInfo) => {

    await page.setContent('<button>Continue</button>');

    if (testInfo.retry === 0) {
        throw new Error('Intentional first-attempt failure');
    }

    await expect(
        page.getByRole('button', { name: 'Continue' })
    ).toBeVisible();

});