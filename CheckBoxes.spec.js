const {test, expect} = require('@playwright/test')

test('Handle Checkboxes', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

// Single check box

// await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]').check();
await page.check('//input[@id="checkBoxOption1" and @type="checkbox"]');

expect(await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]')).toBeChecked();
expect(await page.locator('//input[@id="checkBoxOption1" and @type="checkbox"]').isChecked()).toBeTruthy();
expect(await page.locator('//input[@id="checkBoxOption2" and @type="checkbox"]').isChecked()).toBeFalsy();

// Multiple checkbox

const checkboxlocators = [
    '//input[@id="checkBoxOption1" and @type="checkbox"]',
    '//input[@id="checkBoxOption2" and @type="checkbox"]',
    '//input[@id="checkBoxOption3" and @type="checkbox"]'
];

for(const locator of checkboxlocators) {
    await page.locator(locator).check();
    };

for(const locator of checkboxlocators) {   // unselect multiple check boxes which are already selected
    if(await page.locator(locator).isChecked()) {
        await page.locator(locator).uncheck();

    }
        
};
 await page.waitForTimeout(8000);

});