

const { test, expect } = require ('@playwright/test');
const {chromium } = require ('playwright');
const {email, password} = require ("/Users/guseyanka/Desktop/jsaqa-code/7.3/playwright/tests/user.js");


test('valid password test', async ()=> {
  
const browser = await chromium.launch({
});
const page = await browser.newPage();

await page.goto('https://netology.ru');
await page.click ("text = Войти");

  
await page.getByRole('textbox', { name: 'Email' }).fill('efremenko_ira@mail.ru');
await page.getByRole('textbox', { name: 'Пароль' }).fill('Varthoff0810');

await page.getByTestId('login-submit-btn').click();


await expect(page).toHaveURL("https://netology.ru/profile/8884381");

});


test('invalid password test', async ()=> {

    const browser = await chromium.launch({
 });

 const page = await browser.newPage();



  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('efremenko_ira@mail.ru');

  await page.getByRole('textbox', { name: 'Пароль' }).click();
  await page.getByRole('textbox', { name: 'Пароль' }).fill('Varthoff');

  await page.getByTestId('login-submit-btn').click();

  await expect(page.locator('[data-testid = login-error-hint]')).toContainText(

    "Вы ввели неправильно логин или пароль."
    
  );

})

    
  

  
