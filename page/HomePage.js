export class HomePage{
    constructor(page){
        this.page=page;
        this.homeScreen=page.locator('#nivo-slider').locator('a').nth(1)
    }
}