const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const axios = require("axios");
const pool = require("./db");
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

let all; //  all data from new combination
let all_LinkBBP;  // all data from link BBP
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

// all calculaed values for new combination.
let mj_sell_rate; 
let newcode;
let troyounce_gold;
let fine_troy_ounce;
let gross_weight;
let fineness;
let fine_weight;

// all calculaed values for link bbp.
let mj_sell_rate_linkBBP; 
let newcode_linkBBP;
let troyounce_gold_linkBBP;
let fine_troy_ounce_linkBBP;
let gross_weight_linkBBP;
let fineness_linkBBP;
let fine_weight_linkBBP;


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
    const alldata_linkBBP = await pool.query(
      "SELECT * FROM public.link_bbp_test"
    );
    all_LinkBBP= alldata_linkBBP.rows;
    all = alldata.rows;
    console.log(all, "set running");
    console.log(all_LinkBBP, "link bbp data");

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
    res.json(alldata);

    console.log(all, "set running");
  } catch (error) {
    console.log(error, "error");
  }
});

app.get("/all_suppliers", cors(), async (req, res) => {
  try {
    console.log("all data req send...");
    const alldata = await pool.query(
      "SELECT supplier_id , supplier_name, supplier_email, phone_1, phone_2 FROM public.add_supplier_form"
    );
    res.json(alldata);
    console.log( "set running");
  } catch (error) {
    res.send(error)
    console.log(error, "error");
  }
});

app.post("/add_suppliers", cors(), async (req, res) => {
  const supplier_data = req.body;
  console.log(supplier_data, "supplier");
  try {
    console.log(supplier_data, "suppliers data req send...");
    const alldata = await pool.query(
      "INSERT INTO public.add_supplier_form (supplier_name,supplier_email, phone_1,phone_2) VALUES( $1,$2,$3,$4);",
      [
        supplier_data.name,
        supplier_data.email,
        supplier_data.phone_1,
        supplier_data.phone_2,
      ]
    );
    res.send(alldata);
  } catch (error) {
    res.send(error);
    console.log(error, "error");
  }
});

app.post("/update_suppliers", cors(), async (req, res) => {
  const supplier_data = req.body;
  console.log(supplier_data, "supplier");
  try {
    console.log(supplier_data, "suppliers data req send...");
    const alldata = await pool.query(
      "UPDATE public.add_supplier_form SET supplier_name =$1, supplier_email =$2,  phone_1 =$3,phone_2 = $4 WHERE supplier_id =$5",
      [
        supplier_data.name,
        supplier_data.email,
        supplier_data.phone_1,
        supplier_data.phone_2,
        supplier_data.supplier_id,
      ]
    );
    res.send(alldata);
  } catch (error) {
    res.send(error);
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

app.get("/liveprice", cors(), async(req, res)=>{
  console.log("live price api hit")
  live_price()
  res.send(metal_price)
})

const update = async () => {
  try {
    await pool.query(
      "UPDATE public.new_combination_test SET fine_troy_ounce =$1, fine_weight =$2,  troyounce_gold =$3 WHERE new_code =$4",
      [fine_troy_ounce, fine_weight, troyounce_gold, newcode]
    );
    console.log("updated New combination");
  } catch (error) {
    console.log(error, "error in updating New Combination");
  }
};
const update_linkbbp = async () => {
  try {
    await pool.query(
      "UPDATE public.link_bbp_test SET fine_troy_ounce =$1, fine_weight =$2,  troy_ounce_content =$3 WHERE new_code =$4",
      [fine_troy_ounce_linkBBP, fine_weight_linkBBP, troyounce_gold_linkBBP, newcode]
    );
    console.log("updated Link bbp");
  } catch (error) {
    console.log(error, "error in updating Link BBP");
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

const update_test_linkbbp = async (e) => {
  await getall_data(); // to be revoved later
  all_LinkBBP?.forEach((value) => {
    newcode = value.new_code;
    fine_troy_ounce_linkBBP = rouundoff(
      (value.gross_weight * value.finess) / 31.1034768 / 1000
    );
    fine_weight_linkBBP = rouundoff((value.gross_weight * value.finess) / 1000);
    troyounce_gold_linkBBP = rouundoff(fine_weight_linkBBP / 31.1034768);
    console.log(
      newcode,
      fine_troy_ounce_linkBBP,
      fine_weight_linkBBP,
      troyounce_gold_linkBBP,
      "newcode + other values of link BBP"
    );
    update_linkbbp();
  });
};

setInterval(() => {
  // update_test(); 
  update_test_linkbbp();
}, 10000);

app.listen(port, () => {
  console.log(`listining at port ${port}`);
});
