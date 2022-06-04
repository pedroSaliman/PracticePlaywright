class Drag {
    
    constructor(page) {
      this.page = page;
      this.src = page.locator('#column-a');
      this.trget=page.locator("#column-b");

    }
  
    async navigate() {
      await this.page.goto('drag_and_drop');
    }
    async drop() {
      await this.src.dragTo(this.trget);
    }
  }
  module.exports = Drag ;