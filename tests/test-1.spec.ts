import { test, expect } from '@playwright/test';

test.afterEach('Close page', async({page}) => {
  await page.close()
})

test('Verify QA form page', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form', {waitUntil: "domcontentloaded"});
  
  await expect(async () => {
    await expect(await page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
    await expect(await page.getByRole('heading', { name: 'Student Registration Form' })).toBeVisible();

  }).toPass()
  
  
});
test('Form can be submitted successfully', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.getByRole('textbox', { name: 'First Name' }).fill('first');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('last');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('name@example.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('button', {name: 'Submit'}).click();
  
});