import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const list = products.map((product) => {
        return (
            <div className="four wide column" key={product.id} style={{flex: "1 0 30%",
                margin: "5px",
                display: "flex",
                justifyContent: "center"}}>
                <Link to={`/product/${product.id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={product.image} />
                            </div>
                            <div className="content">
                                <div className="header">{product.title}</div>
                                <div className="meta price">${product.price}</div>
                                <div className="meta">{product.category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>{list}</div>
    )
}

export default ProductComponent