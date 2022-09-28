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
  const [show, setShow] = useState(false);
  const [ispopular, setIspopular] = useState(false);
  const [agreePrice, setAgreePrice] = useState("");
  const { setFormValues } = useContext(dataContext);
  const { formValues } = useContext(dataContext);
  const [body, setBody] = useState([]);

  let finalArray = [];
  let value2;

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
    var filteredArray = body.filter(function (e) {
      return e.code !== to_Delete.code;
    });
    setBody(filteredArray);
    console.log(body);
  };

  const insertObject = (jsonbody) => {
    finalArray = [...finalArray, jsonbody];
    setBody((prev) => {
      return [...prev, jsonbody];
    });
    console.log(finalArray, "final");
    console.log(body, "state value");
    setShow(false)
  };

  const change_value = async () => {


    if (value2) {
      if (body?.find((o) => o.code === value2)) {
        alert("Product is selected, please choose diffrent product");
      } else {
        setShow(true)
        console.log(value2, " list value");
        const response = await fetch("http://localhost:4000/suppliers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ value: value2 }),
        });
        const body = await response.text();
        const jsonbody = JSON.parse(body);
        insertObject(jsonbody);
      }
    } else {
      alert("Please select a valid option");
    }
  };

  const handle_input = (value, cellValues) => {
    const newArr = body.map((obj) => {
      if (obj.code === cellValues.code) {
        return { ...obj, quant: value };
      }
      return obj;
    });
  setBody(newArr)
    console.log(newArr, "newarr");
  };

  const handle_ok = () => {
    navigate('/')
  };

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
    { field: "code", headerName: "new_code", width: 120 },
    { field: "description", headerName: "discription", width: 120 },

    { field: "bm_minted_value", headerName: "BM MINTED", width: 120 },
    { field: "1", headerName: "BM CAST", width: 120 },
    { field: "mj_pamp_value", headerName: "MJ PAMP", width: 120 },
    {
      field: "quantity",
      headerName: "QNT",
      width: 120,
      renderCell: (cellValues) => (
        <>
          <input
            style={{ width: "100%", height: "60%" }}
            onChange={(e) => handle_input(e.target.value, cellValues.row)}
          />
        </>
      ),
    },
    { field: "quant", headerName: "QNT Value", width: 80 },
    {
      field: "bbp_bv_link_price_value",
      headerName: "BBP BV LINK PRICE",
      width: 150,
    },
    {
      field: "bbp_bv_formula_price_value",
      headerName: "BBP PAMP FORMULA PRICE",
      width: 160,
    },
    {
      field: "bbp_pamp_link_price_value",
      headerName: "BBP PAMP LINK PRICE",
      width: 150,
    },
    {
      field: "bbp_pamp_formula_value",
      headerName: "BBP PAMP FORMULA",
      width: 150,
    },
    { field: "7", headerName: "GBS BV", width: 120 },
    { field: "8", headerName: "GBS UMICO", width: 120 },
    { field: "9", headerName: "GBS PAMP", width: 120 },
    { field: "10", headerName: "OTHER CBV", width: 120 },
    { field: "11", headerName: "OTHER C PAMP", width: 120 },
    { field: "12", headerName: "BM MINTED TABLE ", width: 120 },
    {
      field: "13",
      headerName: "BM COST TABLE",
      width: 120,
    },
  ];

  const rows = body?.map((row) => ({
    code: row.code,
    description: row.description,
    bm_minted_value: row.bm_minted_value,
    mj_pamp_value: row.mj_pamp_value,
    bbp_bv_link_price_value: row.bbp_bv_link_price_value,
    bbp_bv_formula_price_value: row.bbp_bv_formula_price_value,
    bbp_pamp_link_price_value: row.bbp_pamp_link_price_value,
    bbp_pamp_formula_value: row.bbp_pamp_formula_value,
    quant:row.quant
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
          onChange={(e) => (value2 = e.target.value)}
          // className="select-option"
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
          onChange={(e) => (value2 = e.target.value)}
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
      {body ? (
        <>
        {!show?<DataGrid
          style={{ height: "28rem", width: "100%" }}
          rows={rows}
          columns={columns}
          pageSize={20}
          getRowId={(row) => row.code}
          rowsPerPageOptions={[20]}
          components={{ Toolbar: GridToolbar }}
        />:<center style={{marginTop:'20%'}}><h6>Fetching data from api...</h6></center>}
        </>
      ) : (
        <center>
          <h2>Loading.... </h2>
        </center>
      )}
    </div>
  );
};

export default Dashboard;
