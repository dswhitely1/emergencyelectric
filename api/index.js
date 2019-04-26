const express = require('express');

const server = express();

server.get('/', (req, res) => {
	res.status(200).send(`I'm Alive`);
});

server.listen(5000, () => {
	console.log('\n\n*** Server running on port 5000 ***\n\n');
});
