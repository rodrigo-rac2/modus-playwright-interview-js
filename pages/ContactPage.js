export const load = (page) => 
    page.getByRole('link', { name: 'Contact' }).first().click();

export const fillData = async (page, data) => {
    for (const item of data) {
        let selector = `[name=${item.key}]`;
        await page.locator(selector).waitFor({ state: "visible", timeout: 300000 });
        await page.locator(selector).fill(item.value);
    }
}
