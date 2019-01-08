# bamazon

Bamazon is a makeshift backend node.js and mySQL application that takes in user orders and updates quantities left in storage in real time.


## Getting Started

This application uses 2 node modules

1. mySQL
2. inquirer

These modules are included as dependencies in the original node module. Be sure to either run

```
npm i
```

or
```
npm i mySQL
npm i inquirer
```

before beginning.

## Running the Application as a CUSTOMER

After running

```
node bamazonCustomer.js
```

in the terminal,  a list of purchasable items will be displayed:

<img src="assets/bamazon-menu.JPG" alt="Bamazon Menu">

## Purchasing Items

To purchase items enter the ID of the item you would like to purchase into the terminal. The terminal will also ask how many items you would like to buy, along with the total cost to the user.

<img src="assets/bamazon-checkout.JPG" alt="Checkout Example">

Rerunning the terminal command, the quantity left will be updated depending on the quantity the user has input.


<img src="assets/bamazon-aftercheckout.JPG" alt="Checkout Example">

The mySQL database also automatically updates depending on the user input. Pay particular attention to the stock_quantity of  item_id 10, where the user orders 3 quantities.

### Before Inquiry
<img src="assets/mysql-before.JPG" alt="mySQL Before Example" width="80%">

### After Inquiry
<img src="assets/mysql-after.JPG" alt="mySQL Before Example" width="80%">

## Out of Stock Inquiries
If the amount that the customer orders exceeds the amount currently in the storage,the order will automatically be cancelled, prompting the user to either select a lower quantity or a different item.

<img src="assets/outofstock.JPG" alt="mySQL Before Example" width="80%">

This invalid inquiry leaves the database uneffected.

<img src="assets/outofstock-mysql.JPG" alt="mySQL Before Example" width="80%">



## Built With

* [mySQL] (https://www.npmjs.com/package/mysql) - database manager
* [inquirer] (https://www.npmjs.com/package/inquirer) - prompts interactive commands to user