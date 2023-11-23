const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

// Middle ware to extract info from the html
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Middle ware to have access to the frontend

// var corsOption = {
//   origin: ["http://localhost:3000/", "http://localhost:3001/"],
// };
app.use(cors());
app.use(express.json());

// User account info
var connection = mysql.createConnection({
  host: "localhost",
  user: "yabsira",
  password: "Yeab#yab@05",
  database: "apple_iphones",
  port: "3305",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected to MySQL");
});

// Route: / => Homepage route
app.get("/", (req, res) => res.send("Up and running..."));

// Route: /create-table => To create the tables
app.get("/create-table", (req, res) => {
  // Putting Query on a variable
  let products = ` CREATE TABLE if not exists Products(
  product_id int auto_increment,
  product_url varchar(225) not null,
  procuct_name varchar(255) not null,
  PRIMARY KEY (product_id)
  )`;

  let ProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  let ProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  // Executing the query's we wrote above
  connection.query(products, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  connection.query(ProductDescription, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  connection.query(ProductPrice, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  res.end("Tables Created");
  console.log("Tables Created");
});

app.post("/add-product", (req, res) => {
  console.table(req.body);
  let product_url = req.body.productUrl;
  // console.log(productUrl);
  let product_name = req.body.productName;
  let product_brief_description = req.body.product_brief_description;
  let product_description = req.body.product_description;
  let product_img = req.body.product_img;
  let product_link = req.body.product_link;
  let starting_price = req.body.starting_price;
  let price_range = req.body.price_range;

  let insertProduct = `INSERT INTO Products (product_url, procuct_name) VALUES (?, ?)`;
  let insertProductDescription = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)`;
  let insertProductPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)`;

  connection.query(
    insertProduct,
    [product_url, product_name],
    function (error, results, fields) {
      if (error) throw error;
      const id = results.insertId;
      // console.log("Product inserted successfully");
      // console.log(`result Found: ${results.productValues}`);

      connection.query(
        insertProductDescription,
        [
          id,
          product_brief_description,
          product_description,
          product_img,
          product_link,
        ],
        function (error, results, fields) {
          if (error) throw error;
          console.log("Product description inserted successfully");
        }
      );
      connection.query(
        insertProductPrice,
        [id, starting_price, price_range],
        function (error, results, fields) {
          if (error) throw error;
          console.log("Product price inserted successfully");
        }
      );
    }
  );

  res.end("product added");
});

// Route: /customers-detail-info => To retrieve data from the tables
app.get("/iphonesdata", (req, res) => {
  connection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND ProductDescription.product_id = ProductPrice.product_id",
    (err, results, fields) => {
      if (err) {
        console.log("Error during selection", err);
        res.status(500).json({ error: "Error during selection" });
      } else {
        const product = Array.from(results); // Convert the results to an array and assign it to the 'products' variable
        res.status(200).json({ product }); // Send the response with the 'products' array
      }
    }
  );
});

const port = 1234;
app.listen(port, () =>
  console.log(`listening and running on http://localhost:${port}`)
);
