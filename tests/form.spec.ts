import { test, expect } from '@playwright/test';

type MyFixture = {
  navigate: any
}
const MyTest = test.extend<MyFixture>({
  navigate: async({ page }, use) => {
    await page.goto('https://demoqa.com/automation-practice-form', {waitUntil: "domcontentloaded"});
    await expect(async () => {
      await expect(await page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
      await expect(await page.getByRole('heading', { name: 'Student Registration Form' })).toBeVisible();
    }).toPass()
    
    await use(page)

  }

})

MyTest('Form can be submitted successfully', async ({ navigate }) => {
  await navigate.getByRole('textbox', { name: 'First Name' }).fill('first');
  await navigate.getByRole('textbox', { name: 'Last Name' }).fill('last');
  await navigate.getByRole('textbox', { name: 'name@example.com' }).fill('name@example.com');
  await navigate.getByText('Male', { exact: true }).click();
  await navigate.getByRole('button', {name: 'Submit'}).click();
  
});