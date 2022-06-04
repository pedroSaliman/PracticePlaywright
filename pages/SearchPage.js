class SearchPage {
    
    constructor(page) {
      this.page = page;
      this.username = page.locator('#txtUsername');

      this.pass=page.locator("#txtPassword");
      this.btn=page.locator("#btnLogi");
    }
    async navigate() {
      await this.page.goto('/');
    }
    async search(theusername,thepass) {
      await this.username.fill(theusername);
      await this.pass.fill(thepass);
      await this.btn.click();
    }
  }
  module.exports = SearchPage ;