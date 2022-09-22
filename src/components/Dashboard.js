import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  const [data2, setData] = useState();
  const [formValues, setFormValues] = useState([]);
  const [hit, setHit] = useState(false);
  const [value, setValue] = useState();
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [ispopular, setIspopular] = useState(false);

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

  const change_value = () => {
    console.log(value, "value");
    if (value) {
      if (formValues?.find((o) => o.new_code === value)) {
        alert("Product is selected, please choose diffrent product");
      } else {
        var one_row = data2.find((o) => o.new_code === value);
        console.log(one_row, "one roww");

        setFormValues([...formValues, one_row]);
        console.log(formValues);
      }
    } else {
      alert("Please select a valid option");
    }
  };

  const handle_input = (value) => {
    setShow(true);
    setInput(value);
    console.log(input, "input");
  };

  const handle_ok = () => {};

  const columns = [
    {
      field: "action",
      headerName: "Action",
      renderCell: (cellValues) => (
        <button
          style={{
            padding: 10,
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
            style={{ width: "70%", height: "50%" }}
            onChange={(e) => handle_input(e.target.value)}
          />{" "}
          {show && input.length > 0 ? (
            <button
              style={{
                padding: 1,
                background: "#fff",
                color: "#fff",
                borderRadius: 1,
                height: "60%",
                width: "20%",
                marginLeft: "2%",
              }}
              onClick={() => {
                alert(input);
                console.log(typeof input);
                setShow(false);
              }}
            >
              ✔️
            </button>
          ) : null}
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
    color = "#fff";
  } else {
    color = "#66cc66";
    color2 = "#fff";
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
          <option value="M500 BM">M500 BM</option>
          <option value="M10 OZ BM">M10 OZ BM</option>
          <option value="C10 OZ BM">C10 OZ BM</option>
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
          {data2?.map((value) => (
            <>
              <option value={value.new_code}>{value.new_code}</option>
            </>
          ))}
        </select>
      )}

      <button
        onClick={change_value}
        style={{
          padding: 8,
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
          padding: 8,
          color: "#000",
          border: "none",
          background: color2,
          marginLeft: "1%",
          width: "8%",
        }}
      >
        Popular
      </button>
      <button
        onClick={() => setIspopular(false)}
        style={{
          padding: 8,
          color: "#000",
          border: "none",
          background: color,
          width: "8%",
        }}
      >
        All
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
