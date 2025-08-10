
// อันนี้ของ อจ 
// // src/components/TodoApp.tsx
// import { useState, useEffect } from "react";
// import axios from "axios";
// import type { TodoItem } from "../types";
// import dayjs from "dayjs";


// const TodoApp = () => {
//   const [todos, setTodos] = useState<TodoItem[]>([]);
//   const [inputText, setInputText] = useState("");
//   const [mode, setMode] = useState<"ADD" | "EDIT">("ADD");
//   const [curTodoId, setCurTodoId] = useState("");

//   const fetchData = async () => {
//     const res = await axios.get<TodoItem[]>("/api/todo");
//     setTodos(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSubmit = () => {
//     if (!inputText) return;
//     if (mode === "ADD") {
//       axios.put("/api/todo", { todoText: inputText })
//         .then(() => {
//           setInputText("");
//           fetchData();
//         });
//     } else {
//       axios.patch("/api/todo", { id: curTodoId, todoText: inputText })
//         .then(() => {
//           setInputText("");
//           setMode("ADD");
//           setCurTodoId("");
//           fetchData();
//         });
//     }
//   };

//   const handleDelete = (id: string) => {
//     axios.delete("/api/todo", { data: { id } }).then(fetchData);
//   };

//   const handleCancel = () => {
//     setMode("ADD");
//     setInputText("");
//     setCurTodoId("");
//   };

//   const formatDateTime = (dateStr: string) => {
//     const dt = dayjs(dateStr);
//     return {
//       date: dt.format("D/MM/YY"),
//       time: dt.format("HH:mm")
//     };
//   };

//   return (
//     <div>
//       <h1>Study Plan</h1>

      

//       <div style={{ display: "flex", alignItems: "start" }}>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button onClick={handleSubmit}>{mode === "ADD" ? "Submit" : "Update"}</button>
//         {mode === "EDIT" && <button onClick={handleCancel}>Cancel</button>}
//       </div>

//       {todos.map((item, idx) => {
//         const { date, time } = formatDateTime(item.createdAt);
//         return (
//           <article key={item.id} style={{ display: "flex", gap: "0.5rem" }}>
//             <div>({idx + 1})</div>
//             <div>📅 {date}</div>
//             <div>⏰ {time}</div>
//             <div>📰 {item.todoText}</div>
//             <div
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 setMode("EDIT");
//                 setInputText(item.todoText);
//                 setCurTodoId(item.id);
//               }}
//             >
//               ✏️
//             </div>
//             {mode === "ADD" && (
//               <div
//                 style={{ cursor: "pointer" }}
//                 onClick={() => handleDelete(item.id)}
//               >
//                 🗑️
//               </div>
//             )}
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default TodoApp;

//อันนี้ ok อยู่ 
// import { useState, useEffect } from "react";
// import axios from "axios";
// import dayjs from "dayjs";
// import type { TodoItem } from "../types";

// import AddSubject from "./AddSubject";
// import SubjectList from "./SubjectList";

// const TodoApp = () => {
//   const [todos, setTodos] = useState<TodoItem[]>([]);
//   const [inputText, setInputText] = useState("");
//   const [mode, setMode] = useState<"ADD" | "EDIT">("ADD");
//   const [curTodoId, setCurTodoId] = useState("");

//   const fetchData = async () => {
//     const res = await axios.get<TodoItem[]>("/api/todo");
//     setTodos(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSubmit = () => {
//     if (!inputText) return;
//     if (mode === "ADD") {
//       axios.put("/api/todo", { todoText: inputText }).then(() => {
//         setInputText("");
//         fetchData();
//       });
//     } else {
//       axios.patch("/api/todo", { id: curTodoId, todoText: inputText }).then(() => {
//         setInputText("");
//         setMode("ADD");
//         setCurTodoId("");
//         fetchData();
//       });
//     }
//   };

//   const handleDelete = (id: string) => {
//     axios.delete("/api/todo", { data: { id } }).then(fetchData);
//   };

//   const handleCancel = () => {
//     setMode("ADD");
//     setInputText("");
//     setCurTodoId("");
//   };

//   const formatDateTime = (dateStr: string) => {
//     const dt = dayjs(dateStr);
//     return {
//       date: dt.format("D/MM/YY"),
//       time: dt.format("HH:mm"),
//     };
//   };

//   return (
//     <div>
      
//       <AddSubject />
//       <SubjectList />

//       <div style={{ display: "flex", alignItems: "start" }}>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button onClick={handleSubmit}>{mode === "ADD" ? "Submit" : "Update"}</button>
//         {mode === "EDIT" && <button onClick={handleCancel}>Cancel</button>}
//       </div>

//       {todos.map((item, idx) => {
//         const { date, time } = formatDateTime(item.createdAt);
//         return (
//           <article key={item.id} style={{ display: "flex", gap: "0.5rem" }}>
//             <div>({idx + 1})</div>
//             <div>📅 {date}</div>
//             <div>⏰ {time}</div>
//             <div>📰 {item.todoText}</div>
//             <div
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 setMode("EDIT");
//                 setInputText(item.todoText);
//                 setCurTodoId(item.id);
//               }}
//             >
//               ✏️
//             </div>
//             {mode === "ADD" && (
//               <div
//                 style={{ cursor: "pointer" }}
//                 onClick={() => handleDelete(item.id)}
//               >
//                 🗑️
//               </div>
//             )}
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default TodoApp;




// // อันใหม่  OK  use this 
// src/components/TodoApp.ts
// import { useState } from "react";
// import AddSubject from "./AddSubject";
// import SubjectList from "./SubjectList";
// import AddTask from "./AddTask";
// import TaskList from "./TaskList";

// export default function TodoApp() {
//   const [refreshSubject, setRefreshSubject] = useState(false);
//   const [refreshTask, setRefreshTask] = useState(false);

//   return (
//     <div>
//        {/* <h2>Add Subject</h2> */}
//       <AddSubject onAdded={() => setRefreshSubject(!refreshSubject)} />

//       <h3>Subject List</h3>
//       {/* <SubjectList key={refreshSubject.toString()} /> */}
//       <SubjectList refreshTrigger={refreshSubject} />

//       <hr />

//       <h2>📝 Tasks</h2>
//       <AddTask
//         onAdded={() => setRefreshTask(!refreshTask)}
//         refreshTrigger={refreshSubject} 
//       />
//       <TaskList key={refreshTask.toString()} />
//     </div>
//   );
// }


// อันนี test ของนิ 

import { useState, useEffect } from "react";
import axios from "axios";

import AddSubject from "./AddSubject";
import SubjectList from "./SubjectList";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "../css/TodoApp.css";
interface Subject {
  id: number;
  name: string;
}

export default function TodoApp() {
  const [refreshSubject, setRefreshSubject] = useState(false);
  const [refreshTask, setRefreshTask] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [_subjects, setSubjects] = useState<Subject[]>([]);


    useEffect(() => {
    document.body.classList.add("todo-page");
    return () => {
      document.body.classList.remove("todo-page");
    };
  }, []);
  
  useEffect(() => {
    axios.get("/api/subjects").then((res) => {
      setSubjects(res.data);
    });
  }, [refreshSubject]);

  const handleTaskAdded = () => {
    setRefreshTask(!refreshTask);
    setShowAddTask(false);
  };

  const handleCancelAddTask = () => {
    setShowAddTask(false);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <nav className="sidebar">
        <AddSubject onAdded={() => setRefreshSubject(!refreshSubject)} />
        <h3 style={{ marginTop: 0 }}>🗐 Subjects</h3>
        <div style={{ flex: 1 }}>
          <SubjectList refreshTrigger={refreshSubject} />
        </div>
      </nav>

      {/* Main */}
      <main style={{ marginLeft: "280px", flex: 1 }}>
        <div className="task-header">
          <h2 className="task-title">📝 Tasks</h2>

          {!showAddTask && (
            <button
              className="add-task-button"
              onClick={() => setShowAddTask(true)}
            >
              Add Task
            </button>
          )}
        </div>

        {showAddTask && (
          <div>
            <AddTask
              onAdded={handleTaskAdded}
              onCancel={handleCancelAddTask}
              refreshTrigger={refreshSubject}
            />
          </div>
        )}

        {/* รายการ Tasks แยกตาม Subject */}
        <div style={{ marginTop: "1rem" }}>
          <TaskList key={refreshTask.toString()} />
        </div>
       </main>
     
    
    </div>
  );
}

