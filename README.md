### ECOM-ORM

The back end for an e-commerce site.
Includes a working Express.js API to use Sequelize to interact with a MySQL database. 


# User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

# Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```


***Getting Started:***
- [ ] update the .env file to include your mysql username and password
- [ ] prepare the database in mysql:
```
$ mysql -u root -p;
$ (enterpassword);
$ SOURCE db/schema.sql;
$ quit;
```
- [ ] install dependencies using: 
```       
$ npm install
```
- [ ] seed database w/ 
```
$ node seeds
```
- [ ] start the server w/ 
```
$ node server.js
```
- [ ] open insomnia to live server at "http://localhost:3001/api"
- [ ] view, add, change and delete data in 'Cateory', 'Product', & 'Tag' models using the api routes

## *resources*<br>

[WALKTHROUGH VIDEO](https://youtu.be/EzH3HI7bUmo)
```md
recording of set up and capabilities
```




