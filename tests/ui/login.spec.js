import {test} from '@playwright/test'
import { LoginPage } from '../../page/LoginPage'
import { HomePage } from '../../page/HomePage'
import{assertVisible} from '../../utils/assertHelper'
import{getTestData} from '../../utils/dataReader'
import{getEnv} from '../../utils/envReader'

test('valdiate Login APP', async ({page})=>{
    //read data from env -url
    const baseUrl =getEnv('BASE_URL');
    //get Data from Json file 
    const loginData=getTestData('login');
    //Page object
    const  loginPage=new LoginPage(page);
    const homePage=new HomePage(page);
    await page.goto(baseUrl)
    await loginPage.loginAPP(loginData.username,loginData.password);
    await assertVisible(homePage.homeScreen);
})

//tests\ui\login.spec.js


