## Setup the Project

```bash
npx create-react-app my-app
cd my-app
npm install react-router-dom

```

## Add empty pages

**src/RegisterPage.js**

```javascript
// src/RegisterPage.js
import React from "react";

function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
    </div>
  );
}

export default RegisterPage;
```

**src/LoginPage.js**

```javascript
// src/LoginPage.js
import React from "react";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
}

export default LoginPage;
```

**src/CategoriesList.js**

```javascript
// src/CategoriesList.js
import React from "react";

function CategoriesList() {
  return (
    <div>
      <h1>Categories List</h1>
    </div>
  );
}

export default CategoriesList;
```

**src/CreateCategory.js**

```javascript
// src/CreateCategory.js
import React from "react";

function CreateCategory() {
  return (
    <div>
      <h1>Create Category</h1>
    </div>
  );
}

export default CreateCategory;
```

**src/App.js**

```javascript
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import CategoriesList from "./CategoriesList";
import CreateCategory from "./CreateCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
```
