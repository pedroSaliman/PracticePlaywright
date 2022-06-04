class Fill {
    
    constructor(page) {
      this.page = page;
      this.username = page.locator('#username');

      this.pass=page.locator("#password");
      this.btn=page.locator("button[type='submit']");
      this.flash=page.locator("#flash");
    }
  
    async navigate() {
      await this.page.goto('login');
    }
    async info(theusername,thepass) {
      await this.username.fill(theusername);
      await this.pass.fill(thepass);
      await this.btn.click();
    }
  }
  module.exports = Fill ;