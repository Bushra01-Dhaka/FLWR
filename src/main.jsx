import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./Routes/router";

import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
       <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "12px",
              background: "#ffffff",
              color: "#362E2B",
            },
          }}
        />
      <div className="md:max-w-screen-2xl mx-auto ">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>,
);
