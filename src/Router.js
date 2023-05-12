/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import React from "react";
import { Routes, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import Error from "./components/Error";
// Write component imports here //

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/car/:id" element={<Car />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </HashRouter>
    );
}
// Start Router function here //
