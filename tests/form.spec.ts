import { MyTest } from '../page/setup';

MyTest('Form can be submitted successfully', async ({ navigate }) => {
  await navigate.getByRole('textbox', { name: 'First Name' }).fill('first');
  await navigate.getByRole('textbox', { name: 'Last Name' }).fill('last');
  await navigate.getByRole('textbox', { name: 'name@example.com' }).fill('name@example.com');
  await navigate.getByText('Male', { exact: true }).click();
  await navigate.getByRole('button', {name: 'Submit'}).click();
  
});