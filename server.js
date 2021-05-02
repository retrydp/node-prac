const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

const server = http.createServer((req, res) => {
  // res.statusCode = 404;
  // res.setHeader('Content-type', 'application/json');
  // res.setHeader('X-Powered-By', 'Node.js');

  res.writeHead(405, {
    'Content-type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  let body = [];

  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    }),
  );
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
