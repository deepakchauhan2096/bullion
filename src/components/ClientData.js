import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const ClientData = () => {

    const Select = styled.select`
    width:100%;
    padding:0;
    margin:0;
    `
    const Option = styled.option`
    padding:0;
    margin:0;
    `


    return (
        <>
            <Sidebar />
            <div className='container-fluid' style={{ backgroundColor: "" }}>
                <div className="row">
                    <p className='bg-secondary text-white py-2'>Client Data</p>
                </div>
                <form className='p-4' >
                    <div className="container" style={{ backgroundColor: "" }}>
                        <div className="row">
                            <div className="col-lg-6 g-0">
                                <table className="table-border">
                                    <tbody>
                                        <tr>
                                            <th><b>Title</b></th>
                                            <th>
                                                <select class="form-control rounded-0" id="exampleFormControlSelect1">
                                                    <option>MR</option>
                                                    <option>MRS</option>
                                                    <option>MISS</option>
                                                    <option>DR</option>
                                                    <option>OTHER</option>
                                                </select>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td ><b>CLINT ID</b></td>
                                            <td >XXXXXXXX</td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>First Name*</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>Surname*</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>HOUSE NAME /#</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>Address L2</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>City/Town</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>Postcode</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col">Telephone*</td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>Mobile*</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col"><b>Email*</b></td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col">Date of Birth</td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col">I.D. CHECK 1</td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col">I.D. CHECK 2</td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col">PHOTO ID</td>
                                            <td scope="col"></td>
                                        </tr>
                                        <tr>
                                            <td scope="col">ADDRESS VER.</td>
                                            <td scope="col"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6 g-0">
                                <table className="table-border">
                                    <tbody>
                                        <tr>
                                            <td colspan="2"><b>Others Details:</b></td>

                                        </tr>
                                        <tr>
                                            <td><b>Relation</b></td>
                                            <td ><select class="form-control rounded-0" id="exampleFormControlSelect1">
                                                <option>PARTNER</option>
                                                <option>WIFE</option>
                                                <option>HUSBAND</option>
                                                <option>FRIEND</option>
                                                <option>EDITABLE AUTO ADD NEW</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><b>Name</b></td>
                                            <td ></td>
                                        </tr>
                                        <tr>
                                            <td><b>Surname</b></td>
                                            <td ></td>
                                        </tr>
                                        <tr>
                                            <td><b>Comments</b></td>
                                            <td>GB 372718438</td>
                                        </tr>
                                        <tr>
                                            <td><b>Mobile</b></td>
                                            <td>98xxxxxx</td>
                                        </tr>
                                        <tr>
                                            <td><b>Email</b></td>
                                            <td>a@m.com</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXP DATE(<em>office use only)</em></b></td>
                                            <td><input type='date'  /></td>
                                        </tr>
                                        <tr>
                                            <td><b>DUE DATE(<em>office use only</em>)</b></td>
                                            <td><input type='date'  /></td>
                                        </tr>
                                        <tr>
                                            <td><b>F DATE(<em>office use only</em>)</b></td>
                                            <td><input type='date'  /></td>
                                        </tr>


                                    </tbody>
                                </table>

                            </div>

                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12">
                            <b>I consent to marketing from Muljis Jewellers by post / <em>email</em> / <em>telephone</em> / <em>whats app</em></b>
                            <div className="row">
                                <div className='col-12 border border-dark' style={{height:"200px"}}>
                                    signature
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ClientData