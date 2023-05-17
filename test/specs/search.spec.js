import LandingPage from '../pageobjects/landing.page.js';
import ResultsPage from '../pageobjects/results.page.js';

describe('Get search data', function () {
    it('should get data from a search', async function () {
        await LandingPage.open('/');

        await LandingPage.search('camiseta');
        const data = await ResultsPage.getResultsData(3);
        await expect(data.length).toBeGreaterThanOrEqual(1);
        
        await ResultsPage.writeAFile(data, 'result');
    })
})


