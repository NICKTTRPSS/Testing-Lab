const puppeteer = require("puppeteer");
test("Test: Getting the information of student through the user interface.", async () => {
    // Create browser using puppeteer
    const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
    executablePath:
    "", 
});
    // Create a new page
    const page = await browser.newPage();
    // Set the page to the web location
    await page.goto("http://localhost:3100/");
    // Click and type value "2" into the textbox STU_ID""
    await page.click("input#STU_ID"); await page.type("input#STU_ID", "2");
    page.on("dialog", async (dialog) => { 
    await dialog.accept();
    });
    // Click on "Select" button to search for the student
    await page.click("input#select"); 
    }, 20000);