import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: './videos/' },
    viewport: { width: 390, height: 844 }, // iPhone 12 Pro dimensions
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
  });
  const page = await context.newPage();
  
  try {
    console.log("Navigating to register page...");
    await page.goto('http://localhost:3000/register', { timeout: 60000 });
    await page.waitForSelector('#firstName', { timeout: 60000 });
    await page.waitForTimeout(1000);
    
    // Step 1
    console.log("Filling step 1...");
    await page.fill('#firstName', 'Alex');
    await page.waitForTimeout(400);
    await page.fill('#lastName', 'Carter');
    await page.waitForTimeout(400);
    await page.fill('#age', '12');
    await page.waitForTimeout(400);
    await page.click('button[role="combobox"]:has-text("Select gender")');
    await page.waitForTimeout(400);
    await page.click('div[role="option"]:has-text("Male")');
    await page.waitForTimeout(400);
    await page.fill('#school', 'Tech Prep Academy');
    await page.waitForTimeout(400);
    
    // T-shirt size
    if (await page.isVisible('button[role="combobox"]:has-text("Select shirt size")')) {
        await page.click('button[role="combobox"]:has-text("Select shirt size")');
        await page.waitForTimeout(400);
        await page.click('div[role="option"]:has-text("Medium")');
        await page.waitForTimeout(800);
    }
    
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(1000);
    
    // Step 2
    console.log("Filling step 2...");
    await page.fill('#parentName', 'Sarah Carter');
    await page.waitForTimeout(400);
    await page.click('button[role="combobox"]:has-text("Select relationship")');
    await page.waitForTimeout(400);
    await page.click('div[role="option"]:has-text("Mother")');
    await page.waitForTimeout(400);
    await page.fill('#email', `sarah.demo.${Date.now()}@example.com`);
    await page.waitForTimeout(400);
    await page.fill('#phone', '+1234567890');
    await page.waitForTimeout(800);
    
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(1500);
    
    // Step 3
    console.log("Reviewing and submitting...");
    await page.waitForTimeout(2000);
    await page.click('button:has-text("Submit Registration")');
    
    // Wait for redirect to success or error
    await page.waitForTimeout(4000);
    
  } catch (error) {
    console.error("Error during recording:", error);
  } finally {
    await context.close();
    await browser.close();
    console.log("Recording finished.");
  }
})();
