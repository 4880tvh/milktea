import './style.scss';
import products from '../data/products.json'
import storeProduct from '../data/storeProducts.json'
import stores from '../data/stores.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown } from 'react-bootstrap'
import { useEffect, useState } from 'react';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
function SideBar(props) {
    const shopProducts = storeProduct.shopProducts;
    const [listProductOfShop, setListProductOfShop] = useState([]);
    const [activeShop, setActiveShop] = useState(1);

    // console.log(shopProducts);
    // const listProductOfShop = shopProducts.filter(item => item.shop === 2);
    // console.log(listProductOfShop);
    // console.log(stores.st);
    useEffect(() => {
        handleGetProduct(1);
    }, [])

    function handleGetProduct(shopId) {
        // setActiveShop(shopId);
        const shop = shopProducts.filter(item => item.shop === shopId);
        console.log(shop);
        let product;
        let listProduct = []
        for (let i = 0; i < shop.length; i++) {
            product = products.products.filter(item => item.id === shop[i].product);
            console.log(product);
            // listProduct.concat(product);
            listProduct.push(product[0]);
        }
        //  console.log(listProduct);
        setListProductOfShop(listProduct)
    }

    return (

        <div>
            <div className="SideBar d-none d-md-block">


                <h1 className="my-3" style={{ color: '#fff', textAlign: 'center' }}>Milk Tea Store</h1>
                {stores.stores.map((item, index) => {
                    return (<h3
                        key={item.id}
                        className={`SideBar_StoreName ${activeShop === item.id && 'ActiveShop'}`}
                        onClick={() => {
                            setActiveShop(item.id);
                            handleGetProduct(item.id)}}
                    >
                        {item.name}
                    </h3>)
                })}



            </div>
            {/* <div className="SideBar_sm d-block d-md-none">
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        <i className="fa-solid fa-bars"></i>
                    </Dropdown.Toggle>


                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Store 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Store 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Store 3</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Store 4</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div> */}
            <div className="ProductItems">
                <h1 className="" style={{ color: 'black', padding: '40px' }}> Store Menu</h1>

                <div className="tools">
                    <button className="ProductItems_Btn Filter">
                        Filter
                    </button>

                    <button className="ProductItems_Btn Order">
                        Name
                        <i className="fa-solid fa-caret-down"></i>
                    </button>

                </div>
                <div className="container text-center">
                    <div className="row">
                        {listProductOfShop.length > 0 ? listProductOfShop.map((item, index) => {
                            return <div key={index} className="col-3 items">
                                <p>{item.id}</p>
                                <h4 style={{ borderBottom: ' 2px solid #3e3e54', width: '100%', textAlign: 'left', paddingBottom: '12px' }}>{item.name}</h4>
                                <h5>Toppings :</h5>
                                <p>{item.toppings}</p>
                                <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
                                    <span className="top-sell">Trending</span>
                                    <span style={{ fontSize: '24px', fontWeight: '600' }}>{item.price}</span>
                                </div>
                            </div>
                        })
                            : <p>Cửa hàng đã hết hàng</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;