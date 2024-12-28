# Overview

This project is an e-commerce web application built using React and Redux for state management. It allows users to browse products, add them to the cart, and proceed to checkout. The app also features a login/registration system, a cart system with the ability to remove items, and a modal for collection information.

## Key Features

**Product Display:** Users can view product details, including images, descriptions, dimensions, and prices.

**Add to Cart:** Users can add products to their shopping cart and receive a popup confirmation for successful addition.

**Cart Management:** Users can view their cart, remove items, and see the total price. The cart state is stored in Redux.

**User Authentication:** Users can register, log in, and log out.

**Checkout Flow:** Users can proceed to the checkout page and view collection details in a modal.

## File Structure

1. Cart.js

- Description: Displays the shopping cart, including product details, the total price, and the ability to remove items from the cart.
- Key Features:
Uses Redux to manage the state of the cart.
Calculates the total price dynamically and stores it in localStorage.
Allows the user to proceed to the checkout page.

2. Cards.js

- Description: Displays individual product cards for users to add items to their cart.
- Key Features:
Displays product details (image, name, description, dimensions, price).
Adds products to the cart using Redux and shows a popup confirming the addition.

3. CollectOrderDisplay.js

- Description: A modal that provides collection details for users who wish to collect their order in person.
- Key Features:
Displays office address, contact information, office hours, and instructions on how to collect the order.

4. Footer.js

- Description: Displays the footer with social media links.
Key Features:
Links to the company's social media profiles on Facebook and Instagram.

5. Header.js

- Description: Displays the header with navigation links and a cart display.
- Key Features:
Displays the number of items in the cart.
Provides login and logout functionality.
Links to different pages: Home, Shop, Contact.

6. Registration.js

- Description: Provides a registration form for new users.
- Key Features:
Form validation using Formik.
User registration with fields for first name, surname, username, email, and password.

7. AddressForm.js

The addressForm.js component is a form for capturing a user's shipping details. It uses Formik for handling form state and validation, and React Router for navigation.

### Key Features:
- Recipient Name: Required, max length of 15 characters.
- Recipient Number: Validates that it contains only digits and is between 10 and 15 characters long.
- Street Address: Required.
- Complex or Building Name: Optional, but can be included for addresses in complexes or buildings.
- Suburb, City, Province, Postal Code: All required fields with validation for postal codes (digits only).

### Formik Validation:
The form fields are validated using the following rules:

- Recipient Name: Required and can’t exceed 15 characters.
- Recipient Number: Must be numeric, at least 10 digits, and no more than 15.
- Street Address, Suburb, City, Province, Postal Code: All are required fields.
- Postal Code: Must only contain digits.

### Functionality:
On form submission, the onSubmit function logs the form values.
The handleCancel function redirects the user to the /shipping route if they cancel the form submission.


# Technologies Used

- React: JavaScript library for building user interfaces.
- Redux: State management for handling the cart and user authentication states.
- React Router: Used for navigation between pages.
- Formik: Form management for the registration form with validation.
- React-Bootstrap: Used for modal dialogs and UI components.