import { Route, Router, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Home from "../Components/Home/Home";

function RouterComponent (){
return (
    <Routes>
    <Route path="/" exact element={<Login/>}/>
    <Route path='/singup' element={<SignUp/>}/>
    <Route path='/home'  element={<Home/>}/>
    </Routes>
)
}

export default RouterComponent;