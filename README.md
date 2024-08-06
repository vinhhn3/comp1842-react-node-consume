# Labs

Based on the given API endpoints, here are the requirements to create the remaining pages for the project:

1. **Product List Page**

- **Endpoint:** `/products` (GET)
- **Description:** Fetch and list all products.
- **Components:**

  - Fetch products from the API.
  - Display products in a list or table format.

2. **Product Details Page**

- **Endpoint:** `/products/{id}` (GET)
- **Description:** Fetch and display details of a product by its ID.
- **Components:**

  - Fetch product details based on the ID from the URL.
  - Display product details.

3. **Create Product Page**

- **Endpoint:** `/products` (POST)
- **Description:** Create a new product.
- **Components:**

  - Form to input product details (e.g., name, price, description).
  - Submit form to create a new product.

4. **Update Product Page**

- **Endpoint:** `/products/{id}` (PUT)
- **Description:** Update an existing product.
- **Components:**

  - Form to update product details.
  - Fetch existing product details to pre-fill the form.
  - Submit form to update the product.

5. **Delete Product**

- **Endpoint:** `/products/{id}` (DELETE)
- **Description:** Remove a product.
- **Components:**

  - Provide a delete button or action on the product list or details page.
  - Implement deletion functionality.

6. **Category Details Page**

- **Endpoint:** `/categories/{id}` (GET)
- **Description:** Fetch and display details of a category by its ID.
- **Components:**

  - Fetch category details based on the ID from the URL.
  - Display category details.

7. **Update Category Page**

- **Endpoint:** `/categories/{id}` (PUT)
- **Description:** Update an existing category.
- **Components:**

  - Form to update category details.
  - Fetch existing category details to pre-fill the form.
  - Submit form to update the category.

8. **Delete Category**

- **Endpoint:** `/categories/{id}` (DELETE)
- **Description:** Remove a category.
- **Components:**

  - Provide a delete button or action on the category list or details page.
  - Implement deletion functionality.
    **Styling with SCSS**

- **Setup:** Install SCSS in your project by creating `.scss` files.
- **Usage:** Create and import SCSS files into each component.
- **Structure:** Organize SCSS files in a way that allows for modular and reusable styles.

### Example Directory Structure

```css
src/
  components/
    RegisterPage.js
    LoginPage.js
    CategoriesList.js
    CreateCategory.js
    ProductList.js
    ProductDetails.js
    CreateProduct.js
    UpdateProduct.js
    UpdateCategory.js
  styles/
    _variables.scss
    _mixins.scss
    _base.scss
    RegisterPage.scss
    LoginPage.scss
    CategoriesList.scss
    CreateCategory.scss
    ProductList.scss
    ProductDetails.scss
    CreateProduct.scss
    UpdateProduct.scss
    UpdateCategory.scss
  App.js
  index.js
```

**Sample SCSS Usage**

```scss
// src/styles/RegisterPage.scss
$primary-color: #3498db;

h1 {
  color: $primary-color;
}

form {
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    padding: 8px;
  }

  button {
    background-color: $primary-color;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
}
```

Ensure each page component has corresponding SCSS styles for a consistent look and feel across the application.
