import { expect, test } from '@playwright/test';
import * as mainPage from '../../pages/MainPage';
import * as contactPage from '../../pages/ContactPage';
import data from '../../data/Data';

test('Should fill the contact page', async ({ page }) => {
    // enter main page
    await mainPage.load(page);

    // moves to the Contact Page
    await contactPage.load(page);

    // fills data in the Contact Page form
    await contactPage.fillData(page, data);

    // expects
    await Promise.all(data.map(async (item) => {
        let selector = `[name=${item.key}]`;
        await page.locator(selector).waitFor({ state: "visible", timeout: 300000 });
        await expect(page.locator(selector)).toHaveValue(item.value);
    }));
})
