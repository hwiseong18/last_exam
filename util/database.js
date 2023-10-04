const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://HwiseongI:qwer1234@cluster0.wbsmx1b.mongodb.net/'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client;