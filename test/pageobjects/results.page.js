import Page from './base.page.js';


class ResultsPage extends Page {

    get breadCrumb () {
        return $('ol[class*=grid] li[class*=item]');
    }

    get resultItemTitle () {
        return $$('.ui-search-result__content a');
    }

    get resultItemPrice () {
        return $$('[class*="second-line"] .price-tag-amount');
    }

    get nextPageButton () {
        return $('[class*=button--next] a');
    }

    async getResultsData (pages) {
        let data= [];
        await this.breadCrumb.waitForDisplayed();
        for (let page = 1; page <= pages; page += 1) {
            for (let index = 0; index < (await this.resultItemTitle).length ; index += 1) {
                const title = await this.resultItemTitle[index].getText();
                const url = await this.resultItemTitle[index].getAttribute('href');
                const price = await this.resultItemPrice[index].getText();
                data.push([title, url, price.replace('\n', '')]);
            }
            await this.nextPageButton.scrollIntoView({ block: 'center' });
            await this.nextPageButton.click();
        }
        return data
    }
}

export default new ResultsPage();
