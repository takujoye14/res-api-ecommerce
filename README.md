E-Commerce API Documentation

Getting Started

Follow these steps to manage users, products, and invoices via the provided API.

1. Create a User (Sign-Up)

Endpoint: POST /api/users/signup

Required fields:

First Name

Last Name

Email

Password

Role (admin or user)

Image (optional file upload)

2. User Login

Endpoint: POST /api/users/login

Provide:

Email

Password

You will receive an authentication token.

3. Add a Product (Admin only)

Endpoint: POST /api/products/addProduct

Headers:

Authorization: Bearer YOUR_TOKEN

Required fields:

Product Name

Brand

Category

Description

Price

Stock quantity

Image (file upload)

4. Retrieve All Products (Public)

Endpoint: GET /api/products/allproducts

5. Create an Invoice (User only)

Endpoint: POST /api/invoices/addInvoice

Headers:

Authorization: Bearer YOUR_TOKEN

Required fields:

Products (specify product names)

Quantity of each product

Total price is calculated automatically.

6. Retrieve Your Invoices (User only)

Endpoint: GET /api/invoices/myInvoices

Headers:

Authorization: Bearer YOUR_TOKEN

Response includes:

Invoice details

Product names

Quantities

Total price

Creation date

