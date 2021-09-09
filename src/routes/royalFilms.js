const scraper = require('../services/scraper');

async function get(req, res) {
	try {
		const pageTitle = await scraper.getArticles('https://listado.mercadolibre.com.co/audifonos_OrderId_PRICE');
		res.writeJSONResponse({ articulos: pageTitle }, 200);
	} catch(err) {
		res.writeJSONResponse({ data: null, err: err.message }, 500);
	}
}

module.exports = {
	get,
};
