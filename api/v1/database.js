const { Client } = require('pg');

const client = new Client(process.env.PG_URI);
client.connect().then(() => {}).catch((error) => error);

exports.client = client;
