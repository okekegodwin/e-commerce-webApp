# e-commerce-webApp

Kozy is a modern, full-stack e-commerce web application where customers can browse products, manage their cart, and complete simulated checkouts. Admins can manage products, orders, and categories through a secure interface.


## Learning Objectives
	1. Advanced Data Modeling
	  •	Design relational structures: Products, Users, Orders, Inventory, Categories.
	2.	Full-Stack Integration
	  •	Connect a React frontend with a RESTful Node.js/Express backend.
	3.	Third-Party API Integration
	  •	Integrate a mock payment gateway and (optionally) an image hosting service.
	4.	Authentication & Authorization
	  •	Implement JWT-based auth with customer/admin roles and protected routes.
	5.	State Management
	  •	Manage complex UI state using Context API, Redux, or Zustand.
	6.	UI/UX Best Practices
	  •	Design responsive, intuitive interfaces across devices.
	7.	Testing & QA
	  •	Implement unit, integration, and E2E testing on both ends.
	8.	Scalability Considerations
	  •	Structure code and architecture for future scaling and performance.


## Core Features

F1 - User Authentication & Profile Management
  •	Customer registration: name, email, password (hashed with bcrypt).
	•	Secure login and JWT-based session.
	•	Profile page: view/edit info, see order history.
	•	Admin login or elevated privilege with role-based route protection.

F2: Product Catalog & Discovery
	•	Product listings in grid/list view with pagination.
	•	Product details: multiple images, description, SKU, stock, etc.
	•	Search by name/keywords.
	•	Filters: category, price, brand, rating.
	•	Sorting: by price, popularity, date added.

F3: Shopping Cart
	•	Add/update/remove items with quantities.
	•	View detailed cart (items, price, subtotal, total).
	•	Cart persistence: LocalStorage (guests) or DB (logged-in users).

F4: Simulated Checkout
	•	Collect shipping (and optional billing) address.
	•	Show order summary.
	•	Simulate payment with mock gateway (success/failure paths).
	•	Confirmation page post-“payment”.

F5: Order Management
	•	Customers: View past orders and individual details.
	•	Admins: View, filter, and update orders (status management: Pending → Delivered).

F6: Admin Panel
	•	Protected access for admins.
	•	Product CRUD with image support (upload or link).
	•	Category CRUD.
	•	View/update orders.
	•	(Optional): User management, analytics dashboard.

⸻

## Tech Stack

Backend (Node.js & Express)
	•	Database: MongoDB + Mongoose
	•	Auth: JWT (optional: Passport.js for extensibility)
	•	API: REST

Frontend (React)
	•	Routing: React Router
	•	State Management: Context API, Redux, or Zustand
	•	Styling: Tailwind CSS, CSS Modules, Styled Components, or a UI library like MUI/Chakra

General Tooling
	•	API Calls: Axios or fetch
	•	Version Control: Git + GitHub/GitLab
	•	Package Manager: npm or Yarn

Testing
	•	Backend: Jest + Supertest
	•	Frontend: React Testing Library + Jest