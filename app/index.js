const http = require('http');
const app = require('./app')
const server = http.createServer(app);

const { NODE_DOCKER_PORT } = process.env;
const { NODE_LOCAL_PORT } = process.env;
const port = NODE_DOCKER_PORT || NODE_LOCAL_PORT;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});