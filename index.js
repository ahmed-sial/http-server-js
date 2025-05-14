import http from 'http';

const log = console.log;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Home Page</h1>`);
    res.end();

  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>About Page</h1>`);
    res.end();

  } else if (req.url === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Contact Page</h1>`);
    res.end();

  }
});

const PORT = 3000;
server.listen(PORT, () => {
  log(`Listening at port ${PORT}...`)
})