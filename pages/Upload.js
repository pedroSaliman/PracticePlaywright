class Upload {
    
    constructor(page) {
      this.page = page;
      this.upload = page.setInputFiles('#file-upload','uploads/file.txt');
      this.btn=page.locator("#file-submit");
      

    }
  
    async navigate() {
      await this.page.goto('upload');
    }
    async uploadfile() {
   
      await this.upload;
      await this.btn.click();
    }
  }
  module.exports = Upload ;