import React from 'react'
import './ShopFeature.css'

function ShopFeature() {
    return (
        <div className="shop-bg">
            <p className="shop-header-text">Shop Fresh Produce</p>
            <div className="shop-img" id="shop-fruits">
                <p style={{margin:0}}>Fruits</p>
            </div>
             <div className="shop-img" id="shop-vegetables">
                <p style={{margin:0}}>Vegetables</p>
            </div>
        </div>
    )
}

export default ShopFeature
