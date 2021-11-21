import React from 'react'
import * as products from '../../Api/productsdata';
import '../assets/styles/products.css';

export default function Products() {
    console.log(products)
    return (
        <div>
            <div className="offer-main">
                {
                    products.products.map((item) => (
                        <a href={item.link} className="offer-product" key={item.id}>
                            <img className={`image ${item.id}`} src={item.image} alt="" />

                            <div className="description">
                                <div className="title">
                                    <p className="name">{item.name}</p>
                                    <p className="price"> ₹{item.price}</p>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
