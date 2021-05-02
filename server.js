const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  let body = [];

  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      let status = 404;
      const responce = {
        success: false,
        data: null,
        error: null,
      };

      if (method === 'GET' && url === '/todos') {
        status = 200;
        responce.success = true;
        responce.data = todos;
      } else if (method === 'POST' && url === '/todos') {
        const { id, text } = JSON.parse(body);
        if (!id || !text) {
          status = 400;
          responce.error = 'Please add id and text';
        } else {
          todos.push({ id, text });
          status = 201;
          responce.success = true;
          responce.data = todos;
        }
      }

      res.writeHead(status, {
        'Content-type': 'application/json',
        'X-Powered-By': 'Node.js',
      });
      res.end(JSON.stringify(responce));
    });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
