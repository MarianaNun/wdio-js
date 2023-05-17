import Page from './base.page.js';

class LandingPage extends Page {
    get searchInput () {
        return $('.nav-search-input');
    }

    get firstSuggestion () {
        return $('#sb-suggestions-1 li');
    }

    get categorySearch () {
        return $('#categorySearch');
    }

    get searchButton () {
        return $('.nav-search button');
    }

    /**
     * Search for a given word
     * e.g. search for "camisetas"
     */
    async search (criteria) {
        await this.searchInput.setValue(criteria);
        await this.firstSuggestion.click();
        await this.searchButton.click();
        await this.searchButton.click();
    }
}

export default new LandingPage();
