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
import { dataContext } from "./helpers/context";
import ClientData from "./components/ClientData";
import PDF_Creation from "./components/PDF_Creation";

const drawerWidth = 280;

  function App() {
    const [formValues, setFormValues] = useState([]);
   




// ***resize code***
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
<dataContext.Provider value={{formValues, setFormValues}}>
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
        <Route path="/clientdata" element={<ClientData />} />
        <Route path="/PDF_Creation" element={<PDF_Creation />} />
      </Routes>
    </Router>
  </Section>
  </dataContext.Provider>
</>
  );
}

export default App;
