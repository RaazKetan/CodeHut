import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
function RootLayout() {
  return (
    <div>
    <Header />
    <main>
      <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;