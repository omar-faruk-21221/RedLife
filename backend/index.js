const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

// ==== midle ware ======
const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.zfo7i3z.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();
        const db = client.db("Red_Life_DB")
        const donorCollection = db.collection("donors")

        app.post('/donors', async (req, res) => {
            const donorInfo = req.body
            donorInfo.createAt = new Date()
            const result = await donorCollection.insertOne(donorInfo)
            res.send(result)
        })

        app.get('/donors', async (req, res) => {
            const result = await donorCollection.find({}).toArray()
            res.send(result)
        })
        app.get('/topDonors', async (req, res) => {
            const result = await donorCollection.find({}).sort({ createAt: -1 }).limit(6).toArray()
            res.send(result)
        })

        // GET by id
        app.get("/donors/:id", async (req, res) => {
            try {
                const { id } = req.params;
                console.log(id)
                if (!ObjectId.isValid(id)) return res.status(400).send({ message: "Invalid id" });
                const query = { _id: new ObjectId(id) }
                const donar = await donorCollection.findOne(query);
                if (!donar) return res.status(404).send({ message: "Donor not found" });
                res.send(donar);
            } catch (err) {
                console.error(err);
                res.status(500).send({ message: "Server error" });
            }
        });

        // ===========n remove data==============
        app.delete('/donors/:id', async (req, res) => {
            const { id } = req.params;

            // Validate ObjectId
            if (!ObjectId.isValid(id)) {
                return res.status(400).send({ message: "Invalid donor ID" });
            }

            try {
                const result = await donorCollection.deleteOne({ _id: new ObjectId(id) });
                if (result.deletedCount > 0) {
                    return res.send({ message: "Donor deleted successfully" });
                } else {
                    return res.status(404).send({ message: "Donor not found" });
                }
            } catch (err) {
                console.error(err);
                return res.status(500).send({ message: "Internal server error" });
            }
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('this server is runing ......')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
