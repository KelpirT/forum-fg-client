import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  BrowserRouter,
  Route,

} from "react-router-dom";
import HomePage from "../pages/HomePage";

const MainRoute = () => (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<HomePage />} />
              {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
);
export default MainRoute;
