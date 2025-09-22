#!/usr/bin/env node

'use strict';

import os from 'node:os';
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

let id = 0;

app.get('/greeting', (req, res) => {
	const parsedUrl = new URL(`http://${os.hostname()}${req.url}`);
	const searchParams = parsedUrl.searchParams;
	const name = searchParams.get('name') || 'World';
	res.setHeader('Content-Type', 'application/json');
	res.json({ id: ++id, content: `Hello ${name}!` });
});

app.listen(PORT, () => {
	console.log(`Application listening at URL http://${os.hostname()}:${PORT}.`);
});
