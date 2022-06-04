class Frame {
    
    constructor(page) {
      this.page = page;
      this.frame = page.frameLocator('#mce_0_ifr').locator('html');
      

    }
  
    async navigate() {
      await this.page.goto('iframe');
    }
    async theframe(txt) {
   
      await this.frame.click();
      await this.frame.type(txt);
    }
  }
  module.exports = Frame ;