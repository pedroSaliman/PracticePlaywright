const {PlaywrightTestConfig}=require("@playwright/test");
const config={
retries:1,
timout:60000,

use:{
    headless:false,
    viewport:{width:1200,height:720},
    video:'retain-on-failure',
    screenshot:'only-on-failure',
    baseURL:"https://the-internet.herokuapp.com/",
    trace:"on"


},
projects:[{
name:"Chrome",
use:{browserName:"chromium"}

},
{
name:"Firefox",
use:{browserName:"firefox"}
}
]

    
}
module.exports=config;