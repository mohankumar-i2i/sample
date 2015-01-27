# sample


Step 1 :

Installation:

1- Create a new database

  `` use TIME2DEALS ``


2. import json PRODUCT and CATEGORY

mongoimport --db TIME2DEALS --collection PRODUCT --type json --file PRODUCT.json  --jsonArray
mongoimport --db TIME2DEALS --collection CATEGORY --type json --file CATEGORY.json  --jsonArray

3- Install node modules

`` npm install``


4- Start application

`` node app.js``