const { test, expect } = require('@playwright/test');

const navigate = test.extend({
  navigateToForm: async({ page }, use) => {

    await page.goto('https://demoqa.com/automation-practice-form', {waitUntil: "domcontentloaded"});
    await expect(async () => {
      await expect(await page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
      await expect(await page.getByRole('heading', { name: 'Student Registration Form' })).toBeVisible();

    }).toPass()

    await use(page)

    }
})

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

navigate('Form can be submitted successfully', async ({ navigateToForm }) => {
  await navigateToForm.goto('https://demoqa.com/automation-practice-form');

  await navigateToForm.getByRole('textbox', { name: 'First Name' }).fill('first');
  await navigateToForm.getByRole('textbox', { name: 'Last Name' }).fill('last');
  await navigateToForm.getByRole('textbox', { name: 'name@example.com' }).fill('name@example.com');
  await navigateToForm.getByText('Male', { exact: true }).click();
  await navigateToForm.getByRole('button', {name: 'Submit'}).click();
  
});