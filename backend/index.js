const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "private-key": "5c02f552-aae1-4d5c-9657-35517ec9e8bd",
        },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(500).json(r.data);
  }
});

app.listen(3001);
