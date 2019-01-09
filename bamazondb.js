// dependencies..
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//creating DataBase connection..
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});



//function that manages customer experience
var storeFront = function () {

  connection.query("SELECT * FROM products", function (err, res) {
    var table = new Table({
    head: ["item_id", "product_name", "department_name", "price", "stock_quantity"]
    })
    
    
    console.log("----------------");
    console.log("WELCOME TO BAMAZON! SEARCH OUR ITEMS BELOW TO FIND SOMETHING COOL!");
    for (i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    console.log(table.toString());
   
    console.log("----------------");
  

    inquirer.prompt([
      {
      name: "itmId",
      type: "input",
      message: "What is the item_id of the item you'd like to purchase today?"
      },
      {
        name: "qnty",
        type: "input",
        message: "How many units of this item would you like to purchase?"
        },
        ]).then(function(answer) {
          var id = answer.itmId - 1;
          var prod = res[id];
          var qnty = answer.qnty;

          if (qnty < res[id].stock_quantity) {
            console.log("");
            console.log("Ok, thanks. Your total for " + qnty + " " + res[id].product_name + "(s) is: $" + res[id].price.toFixed(2) * qnty);

            connection.query("UPDATE products SET ? WHERE ?", [{
              stock_quantity: res[id].stock_quantity - qnty
            },
            {
              item_id: res[id].item_id
            }],
            function (err, res) {
              storeFront();
            });
          } else {
            console.log("");
            console.log("We're sorry, insufficient quantity. We currently have only " + res[id].stock_quantity + " in inventory.");
            storeFront();
          }
        })
      });
    }
    storeFront();
    


    
  
// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       product_name: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         product_name: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       product_name: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
// storeFront();
