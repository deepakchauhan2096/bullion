import Sidebar from "./components/Sidebar";
import { useState } from "react";
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import NewCombination from "./components/NewCombination";
import LinkBBP from "./components/LinkBBP";
import UseFormAddSupplier from "./components/AddSupplier";
import AddNewItem from "./components/AddNewItem";
import Inquiry from "./components/Inquiry";
import OrderToSupplier from "./components/OrderToSupplier";
import PurchaseNewOrder from "./components/PurchaseNewOrder";
import BullionInvoice from "./components/BullionInvoice"
import BullionReciept from "./components/BullionReciept";
import Dashboard from "./components/Dashboard";


const drawerWidth = 280;

  function App() {

  const Section = styled.section`
  margin-top:64px;
  position:relative;
  height:calc(100vh - 64px);
  padding-left:${drawerWidth}px;
  @media (max-width: 600px) {
    padding - left:0;
    }
  `








  return (

  <>
    {/* <Sidebar /> */}
    <Section >
    <Router>
      <Routes>
        <Route path="/" element={<NewCombination />} />
        <Route path="/listbbp" element={<LinkBBP />} />
        <Route path="/userformaddsupplier" element={<UseFormAddSupplier />} />
        <Route path="/addnewitem" element={<AddNewItem />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/ordertosupplier" element={<OrderToSupplier />} />
        <Route path="/purchaseordernew" element={<PurchaseNewOrder />} />
        <Route path="/BullionInvoice" element={<BullionInvoice />} />
        <Route path="/BullionReciept" element={<BullionReciept />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Router>
  </Section>
</>
  );
}

export default App;
