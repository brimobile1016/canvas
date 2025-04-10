async function fn(get, req, res) {
	const data = await get(req[get.type]);

	if (!res.headersSent) {
		res.status(parseInt(data.code));

		if (data.contentType) {
			res.setHeader('Content-Type', data.contentType);
		}

		if (data.data) {
			res.send(data.data);
		} else {
			res.json(data);
		}
	}
}

module.exports = fn;
