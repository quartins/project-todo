// old version by aj pooh
// import "dotenv/config";
// import { dbClient } from "@db/client.js";
// import { todoTable } from "@db/schema.js";
// import cors from "cors";
// import Debug from "debug";
// import { eq } from "drizzle-orm";
// import type { ErrorRequestHandler } from "express";
// import express from "express";
// import helmet from "helmet";
// import morgan from "morgan";
// import authRoutes from "./routes/auth.js";
// import subjectRoutes from "./routes/subjects.js";
// import taskRoutes from "./routes/tasks.js";

// const debug = Debug("pf-backend");

// //Intializing the express app
// const app = express();

// //Middleware
// app.use(morgan("dev", { immediate: false }));
// app.use(helmet());
// app.use(
//   cors({
//     origin: false, // Disable CORS
//     // origin: "*", // Allow all origins
//   })
// );
// // Extracts the entire body portion of an incoming request stream and exposes it on req.body.
// app.use(express.json());


// app.use("/auth", authRoutes); 
// app.use("/subjects", subjectRoutes);
// app.use("/tasks", taskRoutes);

// // Query
// app.get("/todo", async (req, res, next) => {
//   try {
//     const results = await dbClient.query.todoTable.findMany();
//     res.json(results);
//   } catch (err) {
//     next(err);
//   }
// });

// // Insert
// app.put("/todo", async (req, res, next) => {
//   try {
//     const todoText = req.body.todoText ?? "";
//     if (!todoText) throw new Error("Empty todoText");
//     const result = await dbClient
//       .insert(todoTable)
//       .values({
//         todoText,
//       })
//       .returning({ id: todoTable.id, todoText: todoTable.todoText });
//     res.json({ msg: `Insert successfully`, data: result[0] });
//   } catch (err) {
//     next(err);
//   }
// });

// app.get("/todo/owner", async (req, res, next) => {
//   try {
   
//     res.json({
//       id: "660610763",
//       name : "Thanchanok Naensin",
//       course_id : "261497",
//       section : "003"
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// // Update
// app.patch("/todo", async (req, res, next) => {
//   try {
//     const id = req.body.id ?? "";
//     const todoText = req.body.todoText ?? "";
//     if (!todoText || !id) throw new Error("Empty todoText or id");

//     // Check for existence if data
//     const results = await dbClient.query.todoTable.findMany({
//       where: eq(todoTable.id, id),
//     });
//     if (results.length === 0) throw new Error("Invalid id");

//     const result = await dbClient
//       .update(todoTable)
//       .set({ todoText })
//       .where(eq(todoTable.id, id))
//       .returning({ id: todoTable.id, todoText: todoTable.todoText });
//     res.json({ msg: `Update successfully`, data: result });
//   } catch (err) {
//     next(err);
//   }
// });

// // Delete
// app.delete("/todo", async (req, res, next) => {
//   try {
//     const id = req.body.id ?? "";
//     if (!id) throw new Error("Empty id");

//     // Check for existence if data
//     const results = await dbClient.query.todoTable.findMany({
//       where: eq(todoTable.id, id),
//     });
//     if (results.length === 0) throw new Error("Invalid id");

//     await dbClient.delete(todoTable).where(eq(todoTable.id, id));
//     res.json({
//       msg: `Delete successfully`,
//       data: { id },
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// app.post("/todo/all", async (req, res, next) => {
//   try {
//     await dbClient.delete(todoTable);
//     res.json({
//       msg: `Delete all rows successfully`,
//       data: {},
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// // JSON Error Middleware
// const jsonErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   debug(err.message);
//   const errorResponse = {
//     message: err.message || "Internal Server Error",
//     type: err.name || "Error",
//     stack: err.stack,
//   };
//   res.status(500).send(errorResponse);
// };
// app.use(jsonErrorHandler);

// // Running app
// const PORT = process.env.PORT || 3763;
// // * Running app
// app.listen(PORT, async () => {
//   debug(`Listening on port ${PORT}: http://localhost:${PORT}`);
// });

 /// Login OK ------
// import "dotenv/config";
// import { dbClient } from "@db/client.js";
// import { todoTable } from "@db/schema.js";
// import cors from "cors";
// import Debug from "debug";
// import { eq } from "drizzle-orm";
// import type { ErrorRequestHandler } from "express";
// import express from "express";
// import helmet from "helmet";
// import morgan from "morgan";
// import authRoutes from "./routes/auth.js";
// import subjectRoutes from "./routes/subjects.ts";
// import taskRoutes from "./routes/tasks.ts";

// const debug = Debug("pf-backend");
// const app = express();

// // Middleware
// app.use(morgan("dev", { immediate: false }));
// app.use(helmet());
// app.use(
//   cors({
//     origin: false, // หรือเปลี่ยนเป็น "*" ถ้าทดสอบจาก frontend ที่ port อื่น
//   })
// );
// app.use(express.json());

// // ✅ ใช้ /api/* สำหรับทุกเส้นทาง
// app.use("/auth", authRoutes); 
// app.use("/subjects", subjectRoutes);
// app.use("/tasks", taskRoutes);

// // ✅ เปลี่ยน /todo เป็น /api/todo
// app.get("/api/todo", async (req, res, next) => {
//   try {
//     const results = await dbClient.query.todoTable.findMany();
//     res.json(results);
//   } catch (err) {
//     next(err);
//   }
// });

// app.put("/api/todo", async (req, res, next) => {
//   try {
//     const todoText = req.body.todoText ?? "";
//     if (!todoText) throw new Error("Empty todoText");
//     const result = await dbClient
//       .insert(todoTable)
//       .values({ todoText })
//       .returning({ id: todoTable.id, todoText: todoTable.todoText });
//     res.json({ msg: `Insert successfully`, data: result[0] });
//   } catch (err) {
//     next(err);
//   }
// });

// app.patch("/api/todo", async (req, res, next) => {
//   try {
//     const id = req.body.id ?? "";
//     const todoText = req.body.todoText ?? "";
//     if (!todoText || !id) throw new Error("Empty todoText or id");

//     const results = await dbClient.query.todoTable.findMany({
//       where: eq(todoTable.id, id),
//     });
//     if (results.length === 0) throw new Error("Invalid id");

//     const result = await dbClient
//       .update(todoTable)
//       .set({ todoText })
//       .where(eq(todoTable.id, id))
//       .returning({ id: todoTable.id, todoText: todoTable.todoText });
//     res.json({ msg: `Update successfully`, data: result });
//   } catch (err) {
//     next(err);
//   }
// });

// app.delete("/api/todo", async (req, res, next) => {
//   try {
//     const id = req.body.id ?? "";
//     if (!id) throw new Error("Empty id");

//     const results = await dbClient.query.todoTable.findMany({
//       where: eq(todoTable.id, id),
//     });
//     if (results.length === 0) throw new Error("Invalid id");

//     await dbClient.delete(todoTable).where(eq(todoTable.id, id));
//     res.json({ msg: `Delete successfully`, data: { id } });
//   } catch (err) {
//     next(err);
//   }
// });

// app.post("/api/todo/all", async (req, res, next) => {
//   try {
//     await dbClient.delete(todoTable);
//     res.json({ msg: `Delete all rows successfully`, data: {} });
//   } catch (err) {
//     next(err);
//   }
// });

// app.get("/api/todo/owner", async (req, res, next) => {
//   try {
//     res.json({
//       id: "660610763",
//       name: "Thanchanok Naensin",
//       course_id: "261497",
//       section: "003",
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// // Error Middleware
// const jsonErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   debug(err.message);
//   res.status(500).send({
//     message: err.message || "Internal Server Error",
//     type: err.name || "Error",
//     stack: err.stack,
//   });
// };
// app.use(jsonErrorHandler);

// // Start app
// const PORT = process.env.PORT || 3763;
// app.listen(PORT, async () => {
//   debug(`Listening on port ${PORT}: http://localhost:${PORT}`);
// });

// -------  not now ------
// // src/index.ts
// import "dotenv/config";
// import cors from "cors";
// import Debug from "debug";
// import express, { type ErrorRequestHandler } from "express";
// import helmet from "helmet";
// import morgan from "morgan";

// import authRoutes from "./routes/auth.js";
// import subjectRoutes from "./routes/subjects.js";
// import taskRoutes from "./routes/tasks.js";

// const debug = Debug("pf-backend");
// const app = express();

// // 🔐 Middleware
// app.use(morgan("dev"));
// app.use(helmet());
// app.use(
//   cors({
//     origin: "*", // ✅ ให้ frontend access ได้
//   })
// );
// app.use(express.json());

// // ✅ API routes
// app.use("/api/auth", authRoutes);
// app.use("/api/subjects", subjectRoutes);
// app.use("/api/tasks", taskRoutes);

// // ❌ ไม่มี /api/todo อีกต่อไป

// // 🧯 Error handler
// const jsonErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   debug(err.message);
//   res.status(500).json({
//     message: err.message || "Internal Server Error",
//     type: err.name || "Error",
//     stack: err.stack,
//   });
// };
// app.use(jsonErrorHandler);

// // 🚀 Start server
// const PORT = process.env.PORT || 3763;
// app.listen(PORT, () => {
//   debug(`Listening on port ${PORT}: http://localhost:${PORT}`);
// });


/// Login OK ------
import "dotenv/config";
import { dbClient } from "@db/client.js";
//import { todoTable } from "@db/schema.js";
import cors from "cors";
import Debug from "debug";
import { eq } from "drizzle-orm";
import type { ErrorRequestHandler } from "express";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import subjectRoutes from "./routes/subjects.ts";
import taskRoutes from "./routes/tasks.ts";

const debug = Debug("pf-backend");
const app = express();

// Middleware
app.use(morgan("dev", { immediate: false }));
app.use(helmet());
app.use(
  cors({
    origin: false, 
  })
);
app.use(express.json());

// ✅ ใช้ /api/* สำหรับทุกเส้นทาง
app.use("/auth", authRoutes); 
app.use("/subjects", subjectRoutes);
app.use("/tasks", taskRoutes);



// Error Middleware
const jsonErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  debug(err.message);
  res.status(500).send({
    message: err.message || "Internal Server Error",
    type: err.name || "Error",
    stack: err.stack,
  });
};
app.use(jsonErrorHandler);

// Start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  debug(`Listening on port ${PORT}: http://localhost:${PORT}`);
});
