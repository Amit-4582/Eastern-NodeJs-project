# Eastern-NodeJs-project

In this Project, we are implement a CRUD operations using sequelize library which tracked mysql, and also using validation, jwt aurhentication ad further more.

<!-- To start the project -->

STEPS ::::

1. First install the node modules and its required dependencies.
   ---> npm install

2. Here we have to create database in our system so that pre-defined tables and its data should store.
   Database name:- eastern_node_practical_database

3. And changed the user and password of mysql db regarding to your system.

4. First we have to insert the per-defined data (default data) of the table
   ---> npx sequelize-cli db:seed:all

5. Then to run the project
   ---> npm start

6. After that, first you have to register user to generate a token for further process.

<!-- List of user api -->

http://localhost:8080/api/v1/users/register_user
http://localhost:8080/api/v1/users/get_all_users
http://localhost:8080/api/v1/users/get_user_by_id/:id
http://localhost:8080/api/v1/users/update_user/:id
http://localhost:8080/api/v1/users/delete_user/:id

<!-- List of role api -->

http://localhost:8080/api/v1/roles/create_role
http://localhost:8080/api/v1/roles/get_all_roles
http://localhost:8080/api/v1/roles/get_role_by_id/:id
http://localhost:8080/api/v1/roles/update_role/:id
http://localhost:8080/api/v1/roles/delete_role/:id

<!-- List of User Role api which join user with role -->

http://localhost:8080/api/v1/roles/attach_user_role
http://localhost:8080/api/v1/roles/detach_user_role

<!-- List of supplier api -->

http://localhost:8080/api/v1/suppliers/create_role
http://localhost:8080/api/v1/suppliers/get_all_suppliers
http://localhost:8080/api/v1/suppliers/get_supplier_by_id/:id
http://localhost:8080/api/v1/suppliers/update_supplier/:id
http://localhost:8080/api/v1/suppliers/delete_supplier/:id

<!-- List of customer api -->

http://localhost:8080/api/v1/customers/create_role
http://localhost:8080/api/v1/customers/get_all_customers
http://localhost:8080/api/v1/customers/get_customer_by_id/:id
http://localhost:8080/api/v1/customers/update_customer/:id
http://localhost:8080/api/v1/customers/delete_customer/:id
