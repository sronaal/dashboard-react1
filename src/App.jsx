import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages

import Login from "./pages/auth/Login";
import Error404 from "./pages/Error404";
import  { Register } from "./pages/auth/Register";
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutAuth from "./layout/LayoutAuth";
import Home from "./pages/admin/Home";
import Chat from "./pages/admin/Chat";
import ForgetPassword from "./pages/auth/ForgetPassword";

function App() {
  return (
    <>
      <div className="text-gray-300">
        <BrowserRouter>
          <Routes>
           
            <Route path="/auth" element={<LayoutAuth />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path='olvide-password' element={<ForgetPassword/>} />
            </Route>

            <Route path="/" element={<LayoutAdmin />}>
              <Route index element={<Home />} />
              <Route path="chat" element={<Chat />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
