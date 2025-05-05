// src/utils/logout.js
export function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  