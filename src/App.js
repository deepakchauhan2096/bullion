import Sidebar from "./components/Sidebar";
import { useState } from "react";
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import NewCombinatin from "./components/NewCombinatin";
import LinkBBP from "./components/LinkBBP";
import UseFormAddSupplier from "./components/AddSupplier";
import AddNewItem from "./components/AddNewItem";
import Inquiry from "./components/Inquiry";
import OrderToSupplier from "./components/OrderToSupplier";


const drawerWidth = 280;









function App() {

  const Section = styled.section`
  margin-top:64px;
  position:relative;
  background-color: whitesmoke;
  height:calc(100vh - 64px);
  padding-left:${drawerWidth}px;
  @media (max-width: 600px) {
  padding-left:0;
  margin-top:56px;
    }
  `







  return (

    <>
      {/* <Sidebar /> */}
      <Section >
        <Router>
          <Routes>
            <Route path="/" element={<NewCombinatin />} />
            <Route path="/listbbp" element={<LinkBBP />} />
            <Route path="/userformaddsupplier" element={<UseFormAddSupplier />} />
            <Route path="/addnewitem" element={<AddNewItem />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/ordertosupplier" element={<OrderToSupplier />} />
          </Routes>
        </Router>
      </Section>
    </>
  );
}

export default App;
