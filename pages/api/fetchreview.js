import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Connection URI
  const uri = "mongodb+srv://user:123@lacreodb.i4zhcd5.mongodb.net/?retryWrites=true&w=majority";

  // Connect to the MongoDB database
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  try {
    const collection = client.db('applications').collection('reviews');
    
    const result = await collection.find({}).toArray();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
}