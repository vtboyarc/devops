const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    // from the redis-server we setup in the docker compose file
    host: 'redis-server',
    port: 6379 // default port for redis
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits',  parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listen on port 8081');
});
