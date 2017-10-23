import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import Html from './components/Html';
import App from './components/App';

const server = express();
const port = process.env.PORT || 3000;

server.get('*', (req, res) => {
    const body = ReactDOM.renderToString(<App/>);
    const html = ReactDOM.renderToString(<Html title="My App" description="Isomorphic Web Application" body={body} />);
    res.send(`<!doctype html>\n` + html)
});

server.listen(port, () => console.log(`Node.js Server is listening at http://localhost:${port}`));
