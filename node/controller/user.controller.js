import db from "../db.js";

export const createUser = (req, res) => {
  const { name, email, phone, password, hobby, address } = req.body;

  const sql = " select * from user where email=?";

  db.query(sql, email, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result.length > 0) {
        res.send({
          statusCode: 300,
          message: "Email is already registered and exist!!",
        });
      } else {
        const sql = "select * from user where phone=?";
        db.query(sql, phone, (err, data) => {
          if (err) {
            res.send(err);
          } else {
            if (data.length > 0) {
              res.send({
                statusCode: 300,
                message: "Phone is already registered and exist!!",
              });
            } else {
              const sql =
                " insert into user(name, email, password, address, phone, hobby) values(?,?,?,?,?,?)";
              const values = [name, email, password, address, phone, hobby];
              db.query(sql, values, (err, result) => {
                if (err) {
                  res.send(err);
                } else {
                  res.send({ statusCode: 200, message: "succesfully added" });
                }
              });
            }
          }
        });
      }
    }
  });
};

export const updateUsers = (req, res) => {
  const { name, email, phone, password, hobby, address } = req.body;
  const { id } = req.params;
  const sql =
    "UPDATE user SET name=?, email=?, phone=?, password=?, hobby=?, address=? WHERE id=?";
  const values = [name, email, phone, password, hobby, address, id]; // Include id at the end

  db.query(sql, values, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ statusCode: 500, message: "Something went wrong", error: err });
    } else {
      res.status(200).send({
        statusCode: 200,
        message: "User updated successfully",
        result,
      });
    }
  });
};

export const deleteUser = (req, res) => {
  // const id = parseInt(req.params.id);
  const { id } = req.params;
  console.log(id);

  const sql = "delete from user where id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({ statusCode: 300, message: "something went wrong" });
    } else {
      res.send(result);
    }
  });
};

export const getAllUsers = (req, res) => {
  const sql = "select * from user";
  db.query(sql, (err, data) => {
    if (err) {
      res.send({ statusCode: 300, message: "Something gone wrong" });
    } else {
      res.send(data);
    }
  });
};

export const getSingleUser = (req, res) => {
  const { id } = req.params;
  console.log("ID: ", id);

  const sql = "select * from user where id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result[0]);
  });
};

// update, delete, select * from users
