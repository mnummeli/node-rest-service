#!/usr/bin/env node

'use strict';

import os from 'node:os';
import express from 'express';
import type { Application, Request, Response } from 'express';

const PORT: number = Number(process.env.PORT) || 3000;
const app: Application = express();

let id: number = 0;

app.get('/greeting', (req: Request, res: Response) => {
	const parsedUrl: URL = new URL(`http://${os.hostname()}${req.url}`);
	const searchParams: URLSearchParams = parsedUrl.searchParams;
	const name: string = searchParams.get('name') || 'World';
	res.setHeader('Content-Type', 'application/json');
	res.json({ id: ++id, content: `Hello ${name}!` });
});

app.listen(PORT, () => {
	console.log(`Application listening at URL http://${os.hostname()}:${PORT}.`);
});
