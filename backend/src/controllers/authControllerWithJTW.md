// import { Router, Request, Response } from "express";
// import { Person } from "../databases/postgres/entities/user";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const controller = Router();

// // POST /api/v1/login - Login route
// controller.post("/login", async (req: Request, res: Response) => {
//     const { email, password } = req.body;

//     try {
//         // Find the user by email
//         const user = await Person.findOneBy({ email });
//         if (!user) {
//             return res.status(400).json({ error: "Invalid email or password" });
//         }

//         // Compare the provided password with the stored hash
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ error: "Invalid email or password" });
//         }

//         // Generate a JWT token
//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

//         // Return success response with token
//         return res.json({ message: "Login successful", token });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("An error occurred during login");
//     }
// });

// // POST /api/v1/logout - Logout route (optional, depending on your session strategy)
// controller.post("/logout", (req: Request, res: Response) => {
//     // Here you could implement logic to handle token invalidation if you're using a token-based approach
//     return res.json({ message: "Logout successful" });
// });

// export default controller;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Controllers:

Depending on the functionality and complexity of your application, you might consider adding the following controllers:

HomeController: For handling requests related to the home page or landing page of your application.

ProductController: If your application deals with products or services, this controller would manage operations like listing, creating, updating, and deleting products.

OrderController: For managing user orders, including placing orders, viewing order history, and updating order statuses.

ProfileController: To handle user profile management, including viewing and updating user details.

AdminController: For administrative tasks, such as managing users, reviewing reports, or configuring application settings.

NotificationController: If your application has a notification system, this controller would manage sending, receiving, and displaying notifications.

SettingsController: For managing application-wide settings or user-specific preferences.

ContactController: If your application has a contact form or support system, this controller would handle inquiries and manage contact data.

SearchController: If you have search functionality, this controller could handle search queries and results.

PaymentController: For managing payment processing if your application involves transactions.

Adding controllers depends on your application’s specific needs and functionalities. Each controller should encapsulate the logic and handling related to a particular aspect of your application.
