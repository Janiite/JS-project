const express = require("express"); // for creating server
const mysql = require("mysql"); // for connecting to database
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "to-do",
});

app.listen(3001, () => {
  console.log("Server is running");
});

app.post("/create", (req, res) => {
  const task = req.body.task;
  const day = req.body.day;
  const reminder = req.body.reminder;

  db.query("INSERT INTO tasks (task, day, reminder) VALUE (?, ?, ?)", [task, day, reminder], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/todos", (req, res) => {
  db.query(
    "SELECT * FROM tasks",

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/delete", (req, res) => {
  const id = req.body.id;
  db.query("DELETE FROM tasks WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/update", (req, res) => {
  const reminder = !req.body.reminder;
  const id = req.body.id;
  db.query("UPDATE tasks SET reminder = ? WHERE id = ?", [reminder, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



