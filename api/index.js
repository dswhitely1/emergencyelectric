const express = require('express');
const cors = require('cors');
const messageRoutes = require('./message/messageRoutes');
const applicationRoutes = require('./application/applicationRoutes');
const server = express();
server.use(cors());
server.use(express.json());
server.use('/messages', messageRoutes);
server.use('/application', applicationRoutes);

server.listen(5000, () => {
	console.log('\n\n*** Server running on port 5000 ***\n\n');
});
