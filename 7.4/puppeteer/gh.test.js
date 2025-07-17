const puppeteer = require("puppeteer");


let page;


beforeEach(async () => {

  const browser = await puppeteer.launch();

  page = await browser.newPage();
  //await page.goto("https://github.com/team"); 
});

afterEach(() => {
  page.close();
});



describe("Github page tests", () => {



  beforeEach(async () => {
    //page = await browser.newPage();
    await page.goto("https://github.com/team"); 
  });



  test("The h1 header content'", async () => {
    const expected = 'GitHub: Where the world builds software · GitHub';
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual(expected);
  });



  test("The first link attribute", async () => {
    const expected = "#start-of-content";
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual(expected);
  });





  test("The page contains Sign in button", async () => {
    const expected = "Sign up for free";
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain(expected);
  });



});



//await page.goto(url, {waitUntil: 'load', timeout: 60000});
