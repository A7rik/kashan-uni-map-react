import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});


export default async function handler(req, res) {
  const keyName = req.query.key || req.body.key; // Get key/name from query params or body
  if (!keyName) {
    return res.status(400).json({ error: 'Missing key/name in request' });
  }

  const data = await redis.hgetall(keyName); // Assuming key holds hash data
  if (!data) {
    return res.status(404).json({ error: 'Key not found' });
  }
  //await redis.quit();
  res.status(200).json(data);
}
