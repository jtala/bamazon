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
    inventory();
})

function inventory(){

    connection.query("SELECT * FROM products", (err, results)=>{
        if (err) throw err;
        console.log("Welcome to Bamazon, the most convenient of convenience stores!");
        for (let i =0 ; i < results.length; i++){  
        var selectQuant= results[i].stock_quantity;
        console.log("Product: " + results[i].product_name + "\n|Item ID: " + results[i].item_id + "\n|Department: " + results[i].department_name + "\n|Price: " +results[i].price+ "\n|Quantity Left: " + results[i].stock_quantity+ "\n");
        }
        
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Enter the product ID of the item you would like to purchase."
        },
        {
            name: "quantity",
            type: "input",
            message: "How many items would you like to purchase?" 
        }
    ]).then((answer)=>
    {
    //update quantity depending on how much user wanted to get.
    let newQuant = results[answer.id-1].stock_quantity - answer.quantity;
    let selectPrice = results[answer.id-1].price;

    if (answer.quantity> selectQuant)
    {
        return console.log("We don't have enough of that yet! Try ordering less or try a new product!");
    }
    
    else
    {
        connection.query(
            "UPDATE products SET ? WHERE ?",
        [
            {stock_quantity: newQuant},{item_id: answer.id}
        ],
        (err,res)=>
        {
            if (err) throw err;
            console.log("Your total for this order is: $"+ answer.quantity*selectPrice);    
        }
    );
    }
    });
    })
}