import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Newcombination = () => {

  const [formValues, setFormValues] = useState([])
  const [val, setVal] = useState(0)
  const [test, setTest] = useState('select')
  const [isedit, setIsedit] = useState(false)


  console.log(formValues)




  var to_Delete = '';
  const delete_image = image => {
    console.log('image', image);
    to_Delete = image;
    var filteredArray = formValues.filter(function (e) {
      return e !== to_Delete;
    });
    setFormValues(filteredArray);
    console.log('filteredArray', filteredArray);
  };



  const check = (formValues) => {
    setFormValues([...formValues, {}])
    delete_image(formValues[formValues.length])
  }

  const change_value = (element, value) => {
    element.test = value
    setFormValues(formValues)
    check(formValues)
  }

  let addFormFields = () => {
    setVal(val + 1)
    setFormValues([...formValues, { key: val, test: test }])

  }



  return (
    <>
      {/* <Navbar/> */}
      <Sidebar />


      <div className='container-fluid height-100 add-table g-0 table-container'>
        <table class="table table-striped">
          <thead>
            <tr>
              <td colSpan="3"></td>
              <td>USD/GM</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>gbp oz</td>
              <td>gbm/gm</td>
              <td>USD/GM</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">BID</th>
              <td>1489.30</td>
              <td>47.88210502</td>
              <td>10,200.00</td>
              <td>327.93737</td>
            </tr>
            <tr>
              <th scope="row">OFFER</th>
              <td>1491.95</td>
              <td>47.96730449</td>
              <td>1,738.43</td>
              <td>55.8917807</td>
            </tr>
            <tr>
              <th scope="row">AVERAGE</th>
              <td>1490.625</td>
              <td>47.92470475</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container-fluid add-table g-0 table-container">
        <div className=' overflow-scroll'>
          <table className='table-row-add'>
            <tr>
              <th>      <button className="button-green" onClick={() => setIsedit(!isedit)}>{isedit ? "done" : "edit"}</button></th>
              <th>NEW CODE</th>
              <th>SUPPLIER NAME</th>
              <th>BAR COIN</th>
              <th>METAL TYPE</th>
              <th>BAR/COIN TYPE -CAST / MINT</th>
              <th>description</th>
              <th>GROSS Weight (Grams)</th>
              <th>Fineness</th>
              <th>FINE Troy Ounce  Gold /SILVER  Content (OZ)</th>
              <th>BRAND NAME</th>
              <th>Weight (Grams)FINE WT</th>
              <th>Troy Ounce  Gold Content (OZ)</th>
              <th>BBP %ON METAL COST FORMULA</th>
              <th>SELL PRICE FORMULA BASED</th>
              <th>BBP LINK </th>
              <th>BBP SELL PRICE LINK BBP SELL PRICE LINK </th>
              <th>BBP MARGIN on LIVE LINK BASIS</th>
              <th>PPB BM INTERNAL USE</th>
            </tr>

            {formValues.map((element, index) =>

              <tr >
                <button className="button-delete" onClick={() => delete_image(element)}>remove</button>
                {isedit ? <td className='select-padding'><select onChange={e => change_value(element, e.target.value)} className='select-option'>
                  <option >{element.test}</option>
                  <option value='test 1'>test 1</option>
                  <option value='test 2'>test 2</option>
                  <option value='test 3' >test 3</option>
                  <option value='test 4' >test 4</option>
                  <option value='test 5' >test 5</option>
                  <option value='test 6'>test 6</option>
                  <option value='test 7'>test 7</option>
                </select>

                </td> : <td>{element.test}

                </td>}
                <td>{element.key}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </table>

        </div>
        <div className='delete-button-class'>
        </div>
      </div>


      <div className="container-fluid create-table g-0">
        <button className="button-add" onClick={() => addFormFields()} style={{ marginTop: "20px" }}>Add row</button>
      </div>

    </>

  )
}

export default Newcombination






// import Hallmark from './component/Hallmark';
// import Newcombination from './component/Newcombination';

// function App() {
//   return (
//     <div>
//       <Hallmark />
//       <Newcombination />
//     </div>
//   );
// }

// export default App;
