import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
import PostProvider from "./contextApi/PostContext";

createRoot(document.getElementById("root")).render(
  <PostProvider>
    <App />
  </PostProvider>
);
