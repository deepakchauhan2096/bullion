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
let full_code;
let popular;
let metal_price;

let bm_minted_value;
let mj_pamp_value;
let bbp_bv_link_price_value;
let bbp_bv_formula_price_value;
let bbp_pamp_link_price_value;
let bbp_pamp_formula_value;

let testarr = {};

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
    console.log(all, "set running");
  } catch (error) {
    console.log(error, "error");
  }
};

app.get("/all", cors(), async (req, res) => {
  try {
    console.log("all data req send...");
    const alldata = await pool.query(
      "SELECT * FROM public.new_combination_test"
    );
    res.json(alldata)

    console.log(all, "set running");
  } catch (error) {
    console.log(error, "error");
  }
});

app.get("/full_products_code", cors(), async (req, res) => {
  try {
    const alldata = await pool.query("SELECT * FROM public.full_code");
    res.json(alldata);
    full_code = alldata.rows;
    console.log("ALL DATA API");
  } catch (error) {
    console.log(error, "error");
  }
});

app.get("/popular_products_code", cors(), async (req, res) => {
  try {
    const alldata = await pool.query("SELECT * FROM public.popular_code");
    res.json(alldata);
    popular = alldata.rows;
    console.log("popular DATA API");
  } catch (error) {
    console.log(error, "error");
  }
});

app.post("/suppliers", cors(), async (req, res) => {
  let code = req.body.value;
  console.log(code, "code");

  try {
    const test_desc = await pool.query(
      "SELECT description FROM full_code WHERE product_code=$1",
      [code]
    );
    const bm_minted = await pool.query(
      "SELECT mj_sell_rate FROM public.new_combination WHERE new_code=$1 AND supplier_name='BAIRD MINT'",
      [code]
    );

    const mj_pamp = await pool.query(
      "SELECT mj_sell_rate FROM new_combination WHERE new_code=$1 AND supplier_name='BOXERDOME'",
      [code]
    );

    const bbp_bv_link_price = await pool.query(
      "SELECT sell_price_formula FROM link_bbp_1 WHERE new_code=$1  AND supplier_name='BBP BEST VALUE'",
      [code]
    );

    const bbp_bv_formula_price = await pool.query(
      "SELECT bbp_sell_price_link FROM link_bbp_1 WHERE new_code=$1  AND supplier_name='BBP BEST VALUE'",
      [code]
    );

    const bbp_pamp_link_price = await pool.query(
      "SELECT bbp_sell_price_link FROM link_bbp_1 WHERE new_code=$1 AND supplier_name='BBP PAMP'",
      [code]
    );

    const bbp_pamp_formula = await pool.query(
      "SELECT sell_price_formula FROM link_bbp_1 WHERE new_code=$1 AND supplier_name='BBP PAMP'",
      [code]
    );

    testarr.bm_minted_value = bm_minted.rows
      .map((e) => e.mj_sell_rate)
      .toString();
    testarr.mj_pamp_value = mj_pamp.rows.map((e) => e.mj_sell_rate).toString();
    testarr.bbp_bv_link_price_value = bbp_bv_link_price.rows
      .map((e) => e.sell_price_formula)
      .toString();
    testarr.bbp_bv_formula_price_value = bbp_bv_formula_price.rows
      .map((e) => e.bbp_sell_price_link)
      .toString();
    testarr.bbp_pamp_link_price_value = bbp_pamp_link_price.rows
      .map((e) => e.bbp_sell_price_link)
      .toString();
    testarr.bbp_pamp_formula_value = bbp_pamp_formula.rows
      .map((e) => e.sell_price_formula)
      .toString();
    testarr.code = code;
    testarr.description = test_desc.rows.map((e) => e.description).toString();
  } catch (error) {
    res.send(error);
  }
  res.json(testarr);
});

const live_price = async () => {
  try {
    await axios
      .get("https://4f36-54-81-131-170.ngrok.io/liveprice")
      .then((resp) => {
        metal_price = resp.data;
        console.log(metal_price[0], "metal price");
        // fs.writeFileSync("datafile.json", JSON.stringify(metal_price));
      });
  } catch (error) {
    console.log(error, "error");
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
  await live_price();
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
}, 90000);

app.listen(port, () => {
  console.log(`listining at port ${port}`);
});
