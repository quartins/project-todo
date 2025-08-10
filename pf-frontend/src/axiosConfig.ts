import axios from "axios";

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // เช็คว่าหน้าเว็บตอนนี้ไม่ใช่ /login อยู่ก่อน
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);


