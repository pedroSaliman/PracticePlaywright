class Hover {
    
    constructor(page) {
      this.page = page;
     this.img=page.locator("//div[@class='example']//div[1]//img[1]");
      

    }
  
    async navigate() {
      await this.page.goto('hovers');
    }
    async hoverimg() {
   
      
      await this.img.hover();
    }
  }
  module.exports = Hover ;