const {test,expect}= require("@playwright/test");
const SearchPage=require("../pages/SearchPage");
const Fill=require("../pages/Fill");
const Select=require("../pages/Select");
const Drag=require("../pages/Drag");
const Frame=require("../pages/Frame");
const Upload=require("../pages/Upload");
const Hover=require("../pages/Hover");

test.skip("firsttest",async({page,browserName})=>{
    // test.skip(browserName==="firefox","working to fix error");
    let Home = await new SearchPage(page);
    await Home.navigate();
    await Home.search("Admin","admin123");

//    await page.goto("https://www.google.com");
  // await page.screenshot({path:"scree.png"});
    
})
test.skip("Authentication",async({page,browserName})=>{
let input=await new Fill(page);
await input.navigate();
await input.info("tomsmith","SuperSecretPassword!");


})
test.skip("dropdown",async({page,browserName})=>{
    let select=await new Select(page);
    await select.navigate();
    await select.info("1");
    
    
    });
    test.skip("drag",async({page,browserName})=>{
        let drag=await new Drag(page);
        await drag.navigate();
        await drag.drop();
        
        
        });
        test.skip("Frame",async({page,browserName})=>{
            let frame=await new Frame(page);
            await frame.navigate();
            await frame.theframe("this is very well");
            
            
            });
            test.skip("upload",async({page,browserName})=>{
                let upload=await new Upload(page);
                await upload.navigate();
                await upload.uploadfile();
                
                
                });
                test.only("hovers",async({page,browserName})=>{
                    let hov=await new Hover(page);
                    await hov.navigate();
                    await hov.hoverimg();
                    
                    
                    });