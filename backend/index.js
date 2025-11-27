const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",               // local dev
    "https://redlife-frontend.vercel.app"  // Vercel deployed frontend
  ],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.zfo7i3z.mongodb.net/redlife_DB?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const db = client.db("redlife_DB");
    const donarCollection = db.collection("donars");


    // --------------donar data api ------
    app.post('/donars', async (req, res) => {
      try {
        const donarInfo = req.body;
        // console.log("Received data from frontend:", donarInfo);
        donarInfo.createAt = new Date();
        const result = await donarCollection.insertOne(donarInfo);
        console.log("Insertion result:", result);
        res.status(201).send(result);
      } catch (error) {
        console.error("Error inserting donar:", error);
        res.status(500).send({ error: "Failed to insert donar data" });
      }
    });

    app.get('/topDonars', async (req, res) => {
      const result = await donarCollection.find({}).sort({ createAt: -1 }).limit(6).toArray()
      res.send(result)
    })
    app.get('/donars', async (req, res) => {
      const result = await donarCollection.find({}).toArray()
      res.send(result)
    })
    // GET by id
    app.get("/donars/:id", async (req, res) => {
      try {
        const { id } = req.params;
        console.log(id)
        if (!ObjectId.isValid(id)) return res.status(400).send({ message: "Invalid id" });
        const donar = await donarCollection.findOne({ _id: new ObjectId(id) });
        if (!donar) return res.status(404).send({ message: "Donor not found" });
        res.send(donar);
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Server error" });
      }
    });
    app.delete('/donars/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await donarCollection.deleteOne(query)
      if (result.deletedCount > 0) {
        res.send({ message: "Donor deleted successfully" });
      } else {
        res.status(404).send({ message: "Donor not found" });
      }
    })

    app.get('/', (req, res) => {
      res.send("Server is running");
    });

    console.log("Connected to MongoDB and server ready...");
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

run().catch(console.dir);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));