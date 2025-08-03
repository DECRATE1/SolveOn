import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/Global.css";
import { store } from "./store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.tsx";
import { Provider } from "react-redux";
import SecondPage from "./pages/SecondPage.tsx";
import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/newPage" element={<SecondPage></SecondPage>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);
