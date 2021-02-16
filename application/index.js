'use strict'
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.json([
	{
		name: 'Alec',
		email: 'alec@yahoo.com'
	}, 
	{
		name: 'Eva',
		email: 'eva@gmail.com'
	},
	{
		name: 'Bev',
		email: 'bererly@anothersite.com'
	}, 
	{
		name: 'Randy',
		email: 'randy@msn.com'
	} 
]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

