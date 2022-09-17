import React from 'react'
import Sidebar from './Sidebar'
import './styles.css'

const UserFormAddSupplier = () => {
  return (
    <>
      <Sidebar />
        <div className='container-fluid' style={{ backgroundColor: "whitesmoke" }}>
          <div className="row">
            <p className='bg-secondary text-white py-2'>Add Supplier</p>
          </div>
          <form className='p-4'>

            <div className="container" style={{ backgroundColor: "whitesmoke" }}>
              <div className="row">
                <div className="col-lg-6 py-2">
                  <div className="row g-0">
                    <div className="col-md-6 py-2">
                    </div>
                    <div className="col-md-6 py-2">
                      <input type="radio" className="form-label" value="option1" /> New &nbsp;
                      <input type="radio" className="form-label" value="option1" checked /> Old Updates
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 py-2">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className='form-label'>Supplier ID </p>
                    </div>
                    <div className="col-md-8">
                      <select class="form-control rounded-0">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 py-2">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className='form-label'>Name </p>
                    </div>
                    <div className="col-md-8">
                      <input type="email" class="form-control rounded-0" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 py-2">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className='form-label'>Email </p>
                    </div>
                    <div className="col-md-8">
                      <input type="email" class="form-control rounded-0" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 py-2">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className='form-label'>Phone 1 </p>
                    </div>
                    <div className="col-md-8">
                      <input type="email" class="form-control rounded-0" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 py-2">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className='form-label'>Phone 2 </p>
                    </div>
                    <div className="col-md-8">
                      <input type="email" class="form-control rounded-0" />
                    </div>
                  </div>
                </div>


              </div>
              <div className="botton-end">
                <div className="col-12 form-rows">
                  <button type="submit" class="btn btn-secondary rounded-0 px-4">Add</button> <button type="submit" class="btn btn-secondary rounded-0 px-3">Update</button>
                </div>
              </div>
            </div>

          </form>
        </div>
    </>
  )
}

export default UserFormAddSupplier