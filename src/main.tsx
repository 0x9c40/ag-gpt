import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/index.ts";

import App from "./App.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

if (process.env.NODE_ENV == "development")
  import(/* webpackMode: "lazy" */ "./mirage/server.ts");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>,
);
