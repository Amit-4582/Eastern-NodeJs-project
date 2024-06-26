const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});

(async () => {
    await redisClient.connect();
})();

redisClient.on('connect', () => {
    console.log('...Connected to Redis...');
});

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

module.exports = redisClient;
