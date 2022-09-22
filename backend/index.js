const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const axios = require("axios");
const pool = require("./db");
const fs = require("fs");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let all;
let metal_price;

let mj_sell_rate;
let newcode;
let troyounce_gold;
let fine_troy_ounce;
let gross_weight;
let fineness;
let fine_weight;

const rouundoff = (value) => {
  var return_value = Math.round((value + Number.EPSILON) * 100) / 100;
  return return_value;
};

const getall_data = async () => {
  try {
    console.log("all data req send...");
    const alldata = await pool.query(
      "SELECT * FROM public.new_combination_test"
    );
    all = alldata.rows;
    console.log("all", "set running");
  } catch (error) {
    console.log(error, "error");
  }
};

app.get("/all", cors(), async (req, res) => {
  try {
    const alldata = await pool.query(
      "SELECT * FROM public.new_combination_test"
    );
    res.json(alldata);
    all = alldata.rows;
    console.log( "ALL DATA API");
  } catch (error) {
    console.log(error, "error");
  }
});


const live_price =async () => {
  try {
    await axios.get('https://4f36-54-81-131-170.ngrok.io/liveprice').then(resp => {
      metal_price = resp.data;
      console.log(metal_price[0],"metal price")
      fs.writeFileSync("datafile.json", JSON.stringify(metal_price))
  });
  } catch (error) {
    console.log(error,"error")
  }
  };

const update = async () => {
  try {
    await pool.query(
      "UPDATE public.new_combination_test SET fine_troy_ounce =$1, fine_weight =$2,  troyounce_gold =$3 WHERE new_code =$4",
      [fine_troy_ounce, fine_weight, troyounce_gold, newcode]
    );
    console.log("updated");
  } catch (error) {
    console.log(error, "error");
  }
};

const update_test = async (e) => {
  await getall_data();
  await live_price()
  all?.forEach((value) => {
    newcode = value.new_code;
    fine_troy_ounce = rouundoff(
      (value.gross_weight * value.fineness) / 31.1034768 / 1000
    );
    fine_weight = rouundoff((value.gross_weight * value.fineness) / 1000);
    troyounce_gold = rouundoff(fine_weight / 31.1034768);
    console.log(
      newcode,
      fine_troy_ounce,
      fine_weight,
      troyounce_gold,
      "newcode + other values"
    );
    update();
  });
};

setInterval(() => {
  update_test();
}, 30000);

app.listen(port, () => {
  console.log(`listining at port ${port}`);
});
