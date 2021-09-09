const puppeteer = require('puppeteer');

/**
 * Go to url and return the page title
 * @param {string} url
 * @returns {string}
 */
async function getPageTitle(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(url, { waitUntil: 'networkidle0' });
	const title = await page.evaluate(() => document.querySelector('head > title').innerText);

	await browser.close();

	return title;
}

async function getArticles(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url, { waitUntil: 'networkidle0' });
	await page.waitForSelector('h2.ui-search-item__title');
	const titles = await page.evaluate(() => {
		const nombres = document.querySelectorAll('h2.ui-search-item__title')
		let noms = []
		for (let i =0; i<15;i++) {
			noms.push(nombres[i].innerText)
		}
		return noms
	});
	return titles
}

module.exports = {
	getPageTitle,
	getArticles,
};
