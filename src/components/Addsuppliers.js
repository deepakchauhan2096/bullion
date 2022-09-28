import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { NoEncryption } from '@mui/icons-material';
import styled from 'styled-components'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const btn = {
    texrDecoration: "none",
}

const Button = styled.button`
 border:none;
 background-color:white;
 padding:10px;
 margin:20px 0;
 color:#3596d9;
 border-radius:7px;
 border:1px solid #3596d9;
 &:hover {
    background:;
 }
`

export default function AddSuppliers() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <Button onClick={handleOpen} sx={btn}>Add New Supplier</Button> */}
            <Button onClick={handleOpen} >Add New Supplier</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div className='container-fluid' style={{ backgroundColor: "whitesmoke" }}>
                        <div className="row  bg-secondary">
                            <div className="col-12 text-white py-2 d-flex bar">
                                <div>Add Supplier</div>
                                <div onClick={handleClose} className="bar-btn">&#x2716;</div>
                            </div>
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
                </Box>
            </Modal>
        </div>
    );
}
