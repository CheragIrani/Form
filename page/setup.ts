import { expect, test } from "@playwright/test";

type MyTest = {
    navigate: any
}
export const MyTest = test.extend<MyTest>({
    navigate: async({ page }, use) => {
    await page.goto('https://demoqa.com/automation-practice-form', {waitUntil: "domcontentloaded"});
    await expect(async () => {
      await expect(await page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
      await expect(await page.getByRole('heading', { name: 'Student Registration Form' })).toBeVisible();
    }).toPass()
    
    await use(page)
  },

})