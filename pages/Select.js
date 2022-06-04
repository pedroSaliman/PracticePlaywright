class Select {
    
    constructor(page) {
      this.page = page;
      this.dropdown = page.locator('#dropdown');

    }
  
    async navigate() {
      await this.page.goto('dropdown');
    }
    async info(index) {
      await this.dropdown.selectOption(index)
    }
  }
  module.exports = Select ;