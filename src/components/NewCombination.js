import React, { useState, useEffect } from "react";
// import "./newcombination.css";
// import Navbar from "./Navbar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Sidebar from "./Sidebar";
import { Divider } from "@mui/material";

const NewCombination = () => {
  const [data2, setData] = useState();
  const [formValues, setFormValues] = useState([]);
  const [show, setShow] = useState(false);
  const [hit, setHit] = useState(false);
  const [price, setPrice] = useState();

  let mj_sell_rate;
  let newcode;
  let troyounce_gold;

  useEffect(() => {
    const alldata = () => {
      fetch("http://localhost:4000/all")
        .then((res) => res.json())
        .then((data) => setData(data.rows));
      console.log(data2, "all data");
    };
    alldata();

    const interval = setInterval(() => {
      setHit(true);
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  if (hit === true) {
    const alldata = () => {
      fetch("http://localhost:4000/all")
        .then((res) => res.json())
        .then((data) => setData(data.rows));
      console.log(data2, "all data");
      console.log("hit is true");
      setHit(false);
      // console.log(formValues, "formvalues");
      // alert(" 😃 Page refresh complete.  ");
    };

    alldata();
  } else {
    console.log("hit is false");
  }

  const update = async (e) => {
    try {
      const response = await fetch(`http://localhost:4000/update/${newcode}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mj_sell_rate: mj_sell_rate,
          troyounce_gold: troyounce_gold,
        }),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const update_test = () => {
    data2?.forEach((value) => {
      newcode = value.new_code;
      mj_sell_rate = value.mj_sell_rate + 1;
      troyounce_gold = value.troyounce_gold + 1;
      console.log(newcode, mj_sell_rate, troyounce_gold, "newcode");
      update();
      console.log(newcode, mj_sell_rate, troyounce_gold, "newcode");
    });
  };

  var to_Delete = "";
  const delete_element = (element) => {
    console.log("element", element);
    to_Delete = element;
    var filteredArray = formValues.filter(function (e) {
      return e !== to_Delete;
    });
    setFormValues(filteredArray);
    console.log(formValues);
  };

  const change_value = (value) => {
    console.log(value, "value");
    // setTest(value)
    var one_row = data2.find((o) => o.new_code === value);
    console.log(one_row, "one roww");
    setFormValues([...formValues, one_row]);
    console.log(formValues);
  };

  const live_price = () => {
  fetch("https://b595-54-81-131-170.ngrok.io/liveprice")
      .then((res) => res.json())
      .then((data) => setPrice(data));
    console.log(price, "live price");
  };


  const columns = [
    { field: "supplier_id", headerName: "supplier_id", width: 120 },
    { field: "new_code", headerName: "new_code", width: 120 },
    { field: "baird_pamp", headerName: "baird_pamp", width: 120 },
    {
      field: "bar_cast_mint_type",
      headerName: "bar_cast_mint_type",
      width: 120,
    },
    { field: "bar_coin", headerName: "bar_coin", width: 120 },
    { field: "bmoutlet_price", headerName: "bmoutlet_price", width: 120 },
    { field: "brand_name", headerName: "brand_name", width: 120 },
    { field: "dimention_1", headerName: "dimention_1", width: 120 },
    { field: "dimention_2", headerName: "dimention_2", width: 120 },
    { field: "discription", headerName: "discription", width: 120 },
    { field: "fine_troy_ounce", headerName: "fine_troy_ounce", width: 120 },
    { field: "fineness", headerName: "fineness", width: 120 },
    { field: "gross_weight", headerName: "gross_weight", width: 120 },
    { field: "manufacturer_1", headerName: "manufacturer_1", width: 120 },
    { field: "manufacturer_2", headerName: "manufacturer_2", width: 120 },
    { field: "metal_cost_api", headerName: "metal_cost_api", width: 120 },
    { field: "metal_type", headerName: "metal_type", width: 120 },
    { field: "mj_margin", headerName: "mj_margin", width: 120 },
    { field: "mj_sell_rate", headerName: "mj_sell_rate", width: 120 },
    { field: "ppb_internal_use", headerName: "ppb_internal_use", width: 120 },
    {
      field: "purchase_rate_formula",
      headerName: "purchase_rate_formula",
      width: 120,
    },
    { field: "supplier_name", headerName: "supplier_name", width: 120 },
    { field: "supplier_ref", headerName: "supplier_ref", width: 120 },
    { field: "troyounce_gold", headerName: "troyounce_gold", width: 120 },
    {
      field: "uplift_fixed_price",
      headerName: "uplift_fixed_price",
      width: 120,
    },
  ];

  const rows = data2?.map((row) => ({
    new_code: row.new_code,
    supplier_id: row.supplier_id,
    baird_pamp: row.baird_pamp,
    bar_cast_mint_type: row.bar_cast_mint_type,
    bar_coin: row.bar_coin,
    bmoutlet_price: row.bmoutlet_price,
    brand_name: row.brand_name,
    dimention_1: row.dimention_1,
    dimention_2: row.dimention_2,
    fine_troy_ounce: row.fine_troy_ounce,
    fineness: row.fineness,
    gross_weight: row.gross_weight,
    manufacturer_1: row.manufacturer_1,
    manufacturer_2: row.manufacturer_2,
    metal_cost_api: row.metal_cost_api,
    metal_type: row.metal_type,
    mj_margin: row.mj_margin,
    mj_sell_rate: row.mj_sell_rate,
    ppb_internal_use: row.ppb_internal_use,
    purchase_rate_formula: row.purchase_rate_formula,
    supplier_name: row.supplier_name,
    supplier_ref: row.supplier_ref,
    troyounce_gold: row.troyounce_gold,
    uplift_fixed_price: row.uplift_fixed_price,
  }));

  //setInterval(()=>{alldata()} , 65000);
  // setInterval(()=>{setHit(true)} , 65000);

  return (
    < >
    <div style={{padding:20}}>
      {" "}
      <Sidebar />

      <button
        style={{
          padding: 10,
          fontSize: 15,
          width: 120,
          background: "#2F82D6",
          borderRadius: 12,
          margin: 10,
          color: "#fff",
          fontFamily: "roboto",
          border: "none",
        }}
        // onClick={alldata}
      >
        ⟳ Refresh
      </button>
      <button
        style={{
          padding: 10,
          fontSize: 15,
          width: 120,
          background: "#2F82D6",
          borderRadius: 12,
          margin: 10,
          color: "#fff",
          fontFamily: "roboto",
          border: "none",
        }}
        // onClick={live_price}
      >
        Fetch live price
      </button>


     <br />
     <Divider sx={{backgroundColor:"black",}}/>
     <br />

      {data2 ? (
        <DataGrid
          style={{ height: "28rem", width: "100%" }}
          rows={rows}
          columns={columns}
          pageSize={20}
          getRowId={(row) => row.supplier_id}
          rowsPerPageOptions={[20]}
          components={{ Toolbar: GridToolbar }}
        />
      ) : (
        <center>
          <h2>Loading.... </h2>
        </center>
      )}
      <div className="container-fluid add-table g-0 table-container">
        <div className=" overflow-scroll">
        
        </div>
        <div className="delete-button-class"></div>
      </div>
      </div>
    </>
  );
};

export default NewCombination;
