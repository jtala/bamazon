var mysql = require("mysql");
var inquirer = require("inquirer");

//Establish a SQL connection variable.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Flaming0s321!",
    database: "bamazon"
});

// Start Connection
connection.connect((err)=>{
    if(err) throw err;
    manager();
})



function manager(){
    inquirer.prompt([
        {
            name: "view",
            type: "rawlist",
            message: "Welcome Manager, what would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then((answer) =>{

         switch (answer.view){
            case "View Products for Sale":
            viewProducts();
            break;
            case "View Low Inventory":
            viewLow();
            
            break;
            case "Add to Inventory":
            addInventory();
            
            break;
            case "Add New Product":
            addProducts();
            break;
        }
    });
}


function viewProducts(){
    connection.query("SELECT * FROM products",(err,res)=>{
        if (err) throw err;
        console.log("Current Inventory");
        for (let i = 0; i < res.length; i++) {
        
            console.log("Item ID: "+ res[i].item_id + "\nItem: "+ res[i].product_name + "\nPrice: "+ res[i].price + "\nQuantity Left: "+ res[i].stock_quantity);
            console.log("-------------------");
        }
    });
}

function viewLow(){
    connection.query("SELECT * FROM products WHERE stock_quantity<5",(err,res)=>{
        if(err) throw err;

        console.log("Currently Low Inventory");
        console.log("----------------------------------------------------------");

        for (let i = 0; i < res.length; i++) {
            console.log("Your items with low inventory are: "+ res[i].product_name + "\nCurrent Quantity: " + res[i].stock_quantity);
            console.log("------------------------");
        }
    });
}



function addInventory(){

    connection.query("SELECT * FROM products",(err,res)=>{
        if (err) throw err;
        // I need an array to give to inquirer which has all the items to choose from.
        
        var toAdd = [];

        for (let i = 0; i < res.length; i++) {
             toAdd.push(res[i].product_name);
           
        }
    inquirer.prompt([
            {
                name: "item",
                type: "rawlist",
                message: "What item would you like to add more of?",
                choices: toAdd
            },
            {
                name: "amt",
                type: "input",
                message: "How many would you like to add?"
            },
        ]).then((answer)=>{
            connection.query("UPDATE products SET stock_quantity = ? WHERE product_name = ?",
            [answer.amt, answer.item],
            (err,res)=>{
            console.log("Check the database, the quantity has been changed!");

            });
        });

    });  
}

function addProducts(){
    inquirer.prompt([
        {
            name: "product",
            type: "input",
            message: "What product would you like to add?"
        },
        {
            name: "department",
            type: "input",
            message: "What department would this product be under?"
        },
        {
            name: "price",
            type: "input",
            message: "What price would you like to set this product?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many of this product would you like to add to the inventory?"
        },
    ]).then((answer)=>{
        
        connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?);",
        [
        answer.product,
        answer.department,
        answer.price,
        answer.quantity
        ],
        (err,res)=>{
            console.log("Check your database, the item has been added!");
        });
    });

}