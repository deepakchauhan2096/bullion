import React, { useEffect, useState, useContext } from "react";
import { dataContext } from "../helpers/context";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [alllist, setAllList] = useState();
  const [popularlist, setPopularList] = useState();
  const [hit, setHit] = useState(false);
  const [value, setValue] = useState();
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [ispopular, setIspopular] = useState(false);
  const [agreePrice, setAgreePrice] = useState("");
  const { setFormValues } = useContext(dataContext);
  const { formValues } = useContext(dataContext);

  useEffect(() => {
    const allListdata = () => {
      fetch("http://localhost:4000/full_products_code")
        .then((res) => res.json())
        .then((data) =>
          setAllList(
            data.rows.filter((value) => {
              return value.product_code != null;
            })
          )
        );
    };
    allListdata();

    const populardata = () => {
      fetch("http://localhost:4000/popular_products_code")
        .then((res) => res.json())
        .then((data) =>
          setPopularList(
            data.rows.filter((value) => {
              return value.product_code != null;
            })
          )
        );
      console.log(popularlist, "popular product list");
    };
    populardata();

    const interval = setInterval(() => {
      setHit(true);
    }, 300000);

    console.log(alllist, "all products list");

    return () => clearInterval(interval);
  }, []);

  var to_Delete = "";
  const delete_element = (cellValues) => {
    console.log("element", cellValues);
    to_Delete = cellValues;
    console.log(to_Delete, "to delete");
    var filteredArray = formValues.filter(function (e) {
      return e.new_code !== to_Delete.new_code;
    });
    setFormValues(filteredArray);
    console.log(formValues);
  };

  const change_value = async () => {
    console.log(value, " list value");
    const response = await fetch('http://localhost:4000/suppliers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value:value }),
    });
    const body = await response.text()
    console.log(body,"body")

    // if (value) {
    //   if (formValues?.find((o) => o.new_code === value)) {
    //     alert("Product is selected, please choose diffrent product");
    //   } else {
    //     var one_row = alllist.find((o) => o.new_code === value);
    //     console.log(one_row, "one roww");

    //     setFormValues([...formValues, one_row]);
    //     console.log(formValues);
    //   }
    // } else {
    //   alert("Please select a valid option");
    // }
  };

  const handle_input = (value, cellValues) => {
    const newArr = formValues.map((obj) => {
      if (obj.new_code === cellValues.new_code) {
        return { ...obj, quant: value };
      }
      return obj;
    });

    console.log(newArr, "newarr");
  };

  const handle_ok = (cellValues) => {};

  const columns = [
    {
      field: "action",
      headerName: "Action",
      renderCell: (cellValues) => (
        <button
          style={{
            padding: 5,
            background: "#ff3d3d",
            color: "#fff",
            borderRadius: 10,
            border: "none",
          }}
          onClick={() => {
            delete_element(cellValues.row);
          }}
        >
          Delete
        </button>
      ),
    },
    { field: "new_code", headerName: "new_code", width: 120 },
    { field: "discription", headerName: "discription", width: 120 },

    { field: "mj_sell_rate", headerName: "BM MINTED", width: 120 },
    { field: "1", headerName: "BM CAST", width: 120 },
    { field: "2", headerName: "MJ PAMP", width: 120 },
    {
      field: "select",
      headerName: "QNT",
      width: 180,
      renderCell: (cellValues) => (
        <>
          <input
            style={{ width: "70%", height: "60%" }}
            onChange={(e) => handle_input(e.target.value, cellValues.row)}
          />
        </>
      ),
    },
    { field: "3", headerName: "BBP BV LINK PRICE", width: 120 },
    {
      field: "4",
      headerName: "BBP PAMP FORMULA PRICE",
      width: 120,
    },
    { field: "5", headerName: "BBP PAMP LINK PRICE", width: 120 },
    { field: "6", headerName: "BBP PAMP FORMULA", width: 120 },
    { field: "7", headerName: "GBS BV", width: 120 },
    { field: "8", headerName: "GBS UMICO", width: 120 },
    { field: "9", headerName: "GBS PAMP", width: 120 },
    { field: "10", headerName: "OTHER CBV", width: 120 },
    { field: "11", headerName: "OTHER C PAMP", width: 120 },
    { field: "12", headerName: "BM MINTED TABLE ", width: 120 },
    {
      field: "uplift_fixed_price",
      headerName: "BM COST TABLE",
      width: 120,
    },
  ];

  const rows = formValues?.map((row) => ({
    new_code: row.new_code,
    supplier_id: row.supplier_id,
    mj_sell_rate: row.mj_sell_rate,
  }));

  let color;
  let color2;
  if (ispopular) {
    color2 = "#66cc66";
    color = "#e6e6e6";
  } else {
    color = "#66cc66";
    color2 = "#e6e6e6";
  }
  return (
    <div style={{ padding: 20 }}>
      {/* <Navbar /> */}
      <Sidebar />
      {ispopular ? (
        <select
          style={{
            color: "black",
            fontSize: 20,
            width: 200,
            height: 40,
            border: "1.5px solid #267ED4",
            borderRadius: 15,
            margin: 4,
          }}
          onChange={(e) => setValue(e.target.value)}
          className="select-option"
        >
          <option selected disabled>
            Popular Option
          </option>
          {popularlist?.map((value) => (
            <>
              <option value={value.product_code}>{value.product_code}</option>
            </>
          ))}
        </select>
      ) : (
        <select
          style={{
            color: "black",
            fontSize: 20,
            width: 200,
            height: 40,
            border: "1.5px solid #267ED4",
            borderRadius: 15,
            margin: 4,
          }}
          onChange={(e) => setValue(e.target.value)}
          className="select-option"
        >
          <option selected disabled>
            All Option
          </option>
          {alllist?.map((value) => (
            <>
              <option value={value.product_code}>{value.product_code}</option>
            </>
          ))}
        </select>
      )}

      <button
        onClick={change_value}
        style={{
          padding: 5,
          color: "#fff",
          background: "#267ED4",
          border: "none",
          borderRadius: 10,
        }}
      >
        Select
      </button>

      <button
        onClick={() => setIspopular(true)}
        style={{
          padding: 5,
          color: "#000",
          border: "none",
          background: color2,
          marginLeft: "1%",
          width: "8%",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderLeft: "1px solid black",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        Popular
      </button>
      <button
        onClick={() => setIspopular(false)}
        style={{
          padding: 5,
          color: "#000",
          border: "none",
          background: color,
          width: "8%",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderRight: "1px solid black",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        All
      </button>
      <input
        placeholder="Price"
        style={{ width: "10%", marginLeft: "1%", padding: 3, borderRadius: 10 }}
        onChange={(e) => setAgreePrice(e.target.value)}
      />
      <button
        style={{
          border: "none",
          marginLeft: "0.5%",
          background: "#267ED4",
          color: "#fff",
          padding: 5,
          width: "5%",
          borderRadius: 10,
        }}
        onClick={handle_ok}
      >
        ok
      </button>

      {formValues ? (
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
    </div>
  );
};

export default Dashboard;
