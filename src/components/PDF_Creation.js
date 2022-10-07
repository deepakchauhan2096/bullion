import React, { useEffect, useState } from 'react'
import ReactPDF, { Document, Page, Text, View, StyleSheet, PDFViewer,Image } from '@react-pdf/renderer';
import Sidebar from './Sidebar'
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from "@david.kucsai/react-pdf-table"
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const styles = StyleSheet.create({
    page: {
        padding: "20px"
    },
    table: {
        width: '100%',
        paddingBottom: "30px",
        paddingTop: "30px"
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        // borderTop: '1px solid #EEE',
        paddingTop: 8,
        paddingBottom: 8,
    },
    header: {
        borderTop: 'none',
    },
    bold: {
        fontWeight: "300",
        fontSize: "10px"
    },
    // So Declarative and unDRY 👌
    row1: {
        width: '33%',
    },
    row2: {
        width: '15%',
    },
    row3: {
        width: '15%',
    },
    row4: {
        width: '20%',
    },
    row5: {
        width: '27%',
    },
    productTableHeading: {
        padding: "10px",
        fontSize: "9px",
        fontWeight: "900",
        backgroundColor: "grey",
        color: "white"
    },
    productTableText: {
        padding: "10px",
        fontSize: "8px"
    },
})


// Create Document Component


function PDF_Creation() {

    const [showInvoice, setShowInvoice] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalWeight, setTotalWeight] = useState(0)
    const [customer_info, setCustomer_info] = useState(
        {
            "title": "wait..",
            "client_id": "XXXXXXX",
            "first_name": "wait..",
            "surname": "wait..",
            "house_name": "wait..",
            "address_l2": "",
            "city_and_town": "wait..",
            "postcode": "wait..",
            "telephone": "wait..",
            "mobile": "+wait..",
            "email": "wait..",
            "relation_OD": "",
            "name_OD": "",
            "surname_OD": "",
            "comments_OD": "",
            "email_OD": "",
            "mobile_OD": "",
            "consent": true
        }
    )
    const [products_info, setProducts_info] = useState([
        {
            "item_id": 4,
            "item": "wait..",
            "TodayDate": "01/10/2022",
            "dropdown": [
                "RING",
                "PENDANT",
                "S CHAIN",
                "H CHAIN ",
                "BRACELET",
                "NECKLACE",
                "EARSTUD",
                "EARRINGS",
                "EARDROPS",
                "BANGLES L",
                "BANGLES C",
                "PONCHA",
                "SET",
                "H SET",
                "P SET",
                "TWIN SET",
                "BRANDS",
                "ANKLETS",
                "ETERNITY",
                "HALF ETERNITY"
            ],
            "product_sub_cat_dropdown": [
                "PLAIN",
                "STONE SET"
            ],
            "supplier_dropdown": [
                "THC",
                "CTS",
                "BAB",
                "DLP",
                "JJ",
                "MJ",
                "OG",
                "PCOG",
                "SUS",
                "GETA",
                "LDSK",
                "LDSK",
                "LDSK",
                "LDSK",
                "LDSK",
                "MB",
                "NLL",
                "NLL",
                "SJ",
                "SJ",
                "SJ",
                "SJ",
                "SJ",
                "AM",
                "SRK",
                "SJ",
                "zes"
            ],
            "Wt_est": 49.13,
            "product_ref": "9375001",
            "price": 121.8813,
            "product_size_dropdown": [
                "F",
                "F+",
                "G",
                "G+",
                "H",
                "H+",
                "I",
                "I+",
                "J",
                "J+",
                "K",
                "K+",
                "L",
                "L+",
                "M",
                "M+",
                "N",
                "N+",
                "O",
                "O+",
                "P",
                "P+",
                "Q",
                "Q+",
                "R",
                "R+",
                "S",
                "S+",
                "T",
                "T+",
                "U",
                "U+",
                "V",
                "V+",
                "W",
                "W+",
                "X",
                "X+",
                "Y",
                "Y+",
                "Z",
                "Z+",
                "Z1",
                "Z1+",
                "Z2",
                "Z2+",
                "Z3",
                "z3+"
            ],
            "item_type_selected": "wait..",
            "product_sub_cat_selected": "wait..",
            "supplier_selected": "wait..",
            "product_size_selected": "wait..",
            "metal_selected": "wait..",
            "notes_selected": ""
        },

    ])
    const location = useLocation();
    const navigate = useNavigate();
    // useEffect(() => {
    // setCustomer_info(location.state.customer_info)
    // setProducts_info(location.state.products)
    // }, []);

    // let customer_info = location.state.customer_info
    // let products_info = location.state.products



    const MyDocument = () => (

        <Document>
            <Page size="A4" style={styles.page}>

                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", paddingBottom: "30px" ,borderBottom:"2px solid grey"}}>
                    <Image source="http://data.mjspos.co.uk/wp-content/uploads/2022/10/muljis_logo.jpg" style={{width:"50 px",height:"50 px"}}></Image>
                    <View>
                    <Text style={{fontSize:"29px",color:"red", alignSelf:"center"}}>MULJIS</Text>
                    <Text style={{color:"red", alignSelf:"center"}}>Jewellers</Text>
                    </View>
                    
                    <Image source="http://data.mjspos.co.uk/wp-content/uploads/2022/10/muljis_logo.jpg" style={{width:"50 px",height:"50 px"}}></Image>
                </View>

                <View style={styles.table}>

                    <View style={[styles.bold, styles.row]} wrap={false}>
                        <Text style={styles.row1}>{customer_info.title} {customer_info.first_name} {customer_info.surname}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Order Number:</Text> {customer_info.order_id}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Order Date:</Text> {customer_info.TodayDate}</Text>
                    </View>
                    <View style={[styles.bold, styles.row]} wrap={false}>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>House Name:</Text> {customer_info.house_name}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>City/Town:</Text> {customer_info.city_and_town}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Postcode:</Text> {customer_info.postcode}</Text>
                    </View>
                    <View style={[styles.bold, styles.row]} wrap={false}>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Mobile:</Text> {customer_info.mobile}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Email:</Text> {customer_info.email}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Telephone:</Text> {customer_info.telephone}</Text>
                    </View>

                    <Text style={{ fontSize: "13px" }}>Others Details:</Text>
                    <View style={[styles.bold, styles.row]} wrap={false}>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Relation:</Text> {customer_info.relation_OD}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Name:</Text> {customer_info.name_OD} {customer_info.surname_OD}</Text>
                        
                    </View>
                    <View style={[styles.bold, styles.row]} wrap={false}>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Email:</Text> {customer_info.email_OD}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Mobile:</Text> {customer_info.mobile_OD}</Text>
                        <Text style={styles.row1}><Text style={{ fontWeight: "900" }}>Comments:</Text> {customer_info.comments_OD}</Text>
                    </View>
                </View>

                <Table
                    data={products_info}
                >
                    <TableHeader>
                        <TableCell style={styles.productTableHeading} >ITEM</TableCell>
                        <TableCell style={styles.productTableHeading} >ITEM TYPE</TableCell>
                        <TableCell style={styles.productTableHeading} >PRODUCT SUB CAT.</TableCell>
                        <TableCell style={styles.productTableHeading} >WT EST</TableCell>
                        <TableCell style={styles.productTableHeading} >REF SU</TableCell>
                        <TableCell style={styles.productTableHeading} >SIZE</TableCell>
                        <TableCell style={styles.productTableHeading} >METAL</TableCell>
                        <TableCell style={styles.productTableHeading} >PRICE</TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.item} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.item_type_selected} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.product_sub_cat_selected} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.Wt_est} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.supplier_selected} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.product_size_selected} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.metal_selected} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => r.price} />

                    </TableBody>
                </Table>
                <Table
                    data={[{}]}
                >
                    
                    <TableBody>
                        <DataTableCell style={styles.productTableText} getContent={(r) => ""} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => ""} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => "Total Weight"} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => totalWeight.toFixed(2)} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => ""} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => ""} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => "Total Price"} />
                        <DataTableCell style={styles.productTableText} getContent={(r) => totalPrice.toFixed(2)} />

                    </TableBody>
                </Table>

                <View style={{ justifyContent: "center", flexDirection:"column", paddingBottom: "30px" }}>
                
                <View style={{paddingTop:"10px",paddingBottom:"10px"}}>
                <View style={{alignSelf:"center",width:"100%",backgroundColor:"#A020F0",margin:"5px"}}><Text style={{fontSize:"10px",color:"#FFA500", alignSelf:"center",padding:"6px",alignSelf:"center"}}>PLATINUM</Text></View>
                <View style={{alignSelf:"center",width:"100%",backgroundColor:"#A020F0",margin:"5px"}}><Text style={{fontSize:"10px",color:"#FFA500", alignSelf:"center",padding:"6px",alignSelf:"center"}}>GOLD</Text></View>
                <View style={{alignSelf:"center",width:"100%",backgroundColor:"#A020F0",margin:"5px"}}><Text style={{fontSize:"10px",color:"#FFA500", alignSelf:"center",padding:"6px",alignSelf:"center"}}>FINE DIAMONDS</Text></View>
                <Text style={{fontSize:"8px", alignSelf:"center"}}>We do not sell or share your personal data with anyone else. (GDPR COMPLIANT)</Text>
                <Text style={{fontSize:"8px", alignSelf:"center"}}>216-218 Upper Tooting Road • London • SW17 7EW</Text>
                <Text style={{fontSize:"8px", alignSelf:"center"}}>Tel: +44 (0)20 8767 8815 • Email: info@muljis.com •</Text>
                
                
                </View>
                
                
            </View>
            </Page>
        </Document>
    );
    return (
        <>
            <Sidebar />

            {showInvoice ? <PDFViewer style={{ height: "80vh", width: "78vw" }}>

                <MyDocument />

            </PDFViewer> : null}

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "25px"
            }}>
                <Button variant="contained"

                    onClick={() => {
                        // console.log("button : ", formData)
                        //    navigate.goback()
                        navigate(-1)
                    }}
                >Go Back</Button>
                <Button variant="contained"

                    onClick={() => {
                        if(location.state!=null){

                            // console.log("button : ", formData)
                            //    navigate.goback()
                            // navigate(-1)
                            console.log("loc : ", location)
                            let totalPriceTemp = 0;
                            let totalWeightTemp = 0;
                            location.state.products.map((e)=>{
                                totalPriceTemp+=parseFloat(e.price)
                                totalWeightTemp+=parseFloat(e.Wt_est)
                            })
                            
                            setTotalPrice(totalPriceTemp);
                            setTotalWeight(totalWeightTemp)
                            setCustomer_info(location.state.customer_info)
                            setProducts_info(location.state.products)
                            setShowInvoice(true)
                        }else{
                            alert("Some Error Occured")
                        }
                    }}
                >Preview Invoice</Button>

            </div>
        </>
    )
}

export default PDF_Creation