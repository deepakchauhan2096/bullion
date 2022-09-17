import React from 'react'
import Sidebar from './Sidebar'

const OrderToSupplier = () => {
    return (
        <>
            <Sidebar />

            <div className='container-fluid' style={{ backgroundColor: "whitesmoke" }}>
                <div className="row">
                    <p className='bg-secondary text-white py-2'>Order To Supplier</p>
                </div>
                <form className='p-4' >
                    <div className="container" style={{ backgroundColor: "whitesmoke" }}>
                        <div className="row">
                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Order ID</p>
                                    </div>
                                    <div className="col-md-6">
                                        <select class="form-control rounded-0" id="exampleFormControlSelect1">
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
                                    <div className="col-md-6">
                                        <p className='form-label'>Order Date</p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="date" class="form-control rounded-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Supplier Id </p>
                                    </div>
                                    <div className="col-md-6">

                                        <select class="form-control rounded-0" id="exampleFormControlSelect1">
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
                                    <div className="col-md-6">
                                        <p className='form-label'>Item Id Supplier </p>
                                    </div>
                                    <div className="col-md-6">

                                        <select class="form-control rounded-0" id="exampleFormControlSelect1">
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
                                    <div className="col-md-6">
                                        <p className='form-label'>Order By </p>
                                    </div>
                                    <div className="col-md-6">

                                        <select class="form-control rounded-0" id="exampleFormControlSelect1">
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
                                    <div className="col-md-6">
                                        <p className='form-label'>Qty </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" class="form-control rounded-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Order Method </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" class="form-control rounded-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Expected Price </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" class="form-control rounded-0"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Purpose of Order </p>
                                    </div>
                                    <div className="col-md-6">
                                        <select class="form-control rounded-0" id="exampleFormControlSelect1">
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
                                    <div className="col-md-6">
                                        <p className='form-label'>Actual Price </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" class="form-control rounded-0"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>STOCK Order ID </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" class="form-control rounded-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Current Rate </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" class="form-control rounded-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Expected Date of Delivery </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" class="form-control rounded-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 py-2">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <p className='form-label'>Customer Order ID </p>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" class="form-control rounded-0" />
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

export default OrderToSupplier