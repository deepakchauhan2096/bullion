import React from 'react'
import AddNewItems from './AddNewItems'
import AddSuppliers from './Addsuppliers'
import Sidebar from './Sidebar'
import './styles.css'

const UserFormAddSupplier = () => {
  return (
    <>
      <Sidebar />
      {/* <div className='container-fluid' style={{ display: "flex" }}> */}
        {/* <AddNewItems /> */}
        <AddSuppliers />
      {/* </div> */}
    </>
  )
}

export default UserFormAddSupplier