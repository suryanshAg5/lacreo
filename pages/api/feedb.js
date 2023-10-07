const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const saltRounds = 10;
const uri = "mongodb+srv://user:123@lacreodb.i4zhcd5.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'applications';
let cachedDb = null;
/*
async function connectToDatabase(uri) {
    //const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      client.connect(function(err) {
        assert.equal(null, err);
        console.log('conected');});
    const db = await client.db();
    
    cachedDb = db;
    return db;
    
  }
*/
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  
export default async function handler(req, res) {
   /* createUser(db, name, qualifications, capabilities, callback, function(creationResult) {
        res.status(200);
        return;
      });
      */

     // let { db } = await connectToDatabase(uri);
     if (req.method === 'POST') {
      client.connect(function(err) {
        assert.equal(null, err);
        console.log('conected');
        const db = client.db(dbName);
        const collection = db.collection('reviews');
      const data = req.body;
      collection.insertOne(data);
      res.status(200).json({ message: "Data posted successfully" });
    });
  }
  
















}

/*
  export default (req, res) => {
    if (req.method === 'POST') {
  
  
        
         
            // proceed to Create
            createUser(db, name, qualifications, capabilities, callback, function(creationResult) {
              if (creationResult.ops.length === 1) {
                const user = creationResult.ops[0];
                const token = jwt.sign(
                  {userId: user.userId, email: user.email},
                  jwtSecret,
                  {
                    expiresIn: 3000, //50 minutes
                  },
                );
                res.status(200).json({token});
                return;
              }
          
          
       
      });
    } else {
      // Handle any other HTTP method
      res.status(200).json({users: ['Nish']});
    }

  };

  function createUser(db, name, qualifications, capabilities, callback) {
  
    const collection = db.collection('user');
    
    collection.insertOne("collection-name").insertOne(  {
        userId: name,
        email,
        qualifications: qualifications,
        capabilities: capabilities,
        
      })
  }
  */