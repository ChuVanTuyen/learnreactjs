import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import Home from './Example/Home';
import ListUser from "./Users/ListUser";

function App() {
    return (
        <div className='App'>
            <nav>
                <Link to={"/"}>Home</Link><br />
                <Link to={"/todos"}>Todo</Link><br />
                <Link to={"/about"}>About</Link><br />
                <Link to={"/listUser"}>List User</Link><br />
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<ListTodo />} />
                <Route path="/about" element={<MyComponent />} />
                <Route path="/listUser" element={<ListUser />} />
            </Routes>
        </div>
    );
}

export default App;