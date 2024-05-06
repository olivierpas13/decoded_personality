import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/general/Navbar";
import Footer from "@/components/general/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  ),
});
