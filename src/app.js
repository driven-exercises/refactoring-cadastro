import bcrypt from "bcrypt";
import cors from "cors";
import dayjs from "dayjs";
import express from "express";
import { db } from "./database/database.connection.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", async (req, res) => {
  try {
    const { name, email, password, birthday } = req.body;

    if (!name || !email || !password || !birthday) {
      return res.sendStatus(400);
    }

    const eighteenYearsAgo = dayjs().add(-18, "years");
    if (dayjs(birthday).isAfter(eighteenYearsAgo)) {
      return res.sendStatus(418);
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await db.query(
      `
        INSERT INTO users (name, email, password, birthday) VALUES ($1, $2, $3, $4)
      `,
      [name, email, hashedPassword, birthday]
    );

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
