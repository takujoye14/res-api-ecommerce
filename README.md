E-Commerce API Guide
Step-by-step usage:
1. Create a User (Sign-Up):
Send a POST request to the signup endpoint (/api/users/signup).

Provide necessary fields such as:

First Name

Last Name

Email

Password

Role (admin or user)

Image (optional, as file upload)

2. Login the User:
Send a POST request to the login endpoint (/api/users/login).

Provide your email and password.

Receive a token in response.

3. Add a Product (Admin Only):
Ensure you log in as an admin user.

Use your authentication token in the request header (Bearer Token).

Send a POST request to (/api/products/addProduct) with product details:

Product Name

Brand

Category

Description

Price

Stock quantity

Image (file upload)

4. Retrieve all Products:
Send a GET request to (/api/products/allproducts) to view all products.

No authentication required (public access).

5. Create an Invoice (User):
Log in as a regular user (non-admin).

Use your token in the request header (Bearer Token).

Send a POST request to (/api/invoices/addInvoice) with details:

Products (provide the exact product names)

Quantity for each product

The system automatically calculates the total price.

6. View Your Invoices:
Send a GET request to (/api/invoices/myInvoices).

Use your token for authentication.

You'll receive a detailed list of your invoices, including:

Invoice ID

Purchased products (with product names and quantities)

Total price

Date created

