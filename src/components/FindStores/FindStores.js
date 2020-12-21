import React , {useState} from 'react'
import './FindStores.css'

const FindStores = () => {
    const [zipCode, setZipCode] = useState("21111")
    return (
        <div className="find-stores-container">
            <h2 className="find-stores-header-text">Find Produce Markets Near You</h2> 
            <p style={{margin:"0 0 10px 0"}}>Enter Zip Code</p>
            <input type="textfield"/>
            <div id="google-map"></div>
            <div id="search-results">
                <h3 id="results-header-text">Produce Markets near <strong>{zipCode}</strong></h3>
                <div className="result">
                    <a href="https://www.google.com" className="website">Website</a>
                    <p className="address">1234, Monday Street,Baltimore, MD 21117</p>
                    <a href="tel:123-456-7890" className="phone">&#128222;</a>
                </div>
            </div>
        </div>
    )
}

export default FindStores
