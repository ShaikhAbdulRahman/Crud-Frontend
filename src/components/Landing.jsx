import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import AddEmp from "./AddEmp";
import ShowData from "./ShowData";

const Landing = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/addemp" element={<AddEmp />} />
        <Route path="/showemp" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Landing;
