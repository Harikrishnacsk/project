import React, { useState } from "react";


const ManageAddress = () => {

    const countries = {
        "US" : "US",
        "AR" : "Argentina",
        "AUS" : "Australia",
        "Bel" : "Belgium",
        "BR"  : "Brazil"
    }

    const States = {
        "US" : ["alaska", "New York", "California"],
        "Argentina" : ["Argentina1", "Argentina2"]
    }
    
    const [selectCountry, setSelectCountry] = useState('');
    const [selectState, setSelectState] = useState('');

    const handleCountryChange = (e) => {
        setSelectCountry(e.target.value);
        setSelectState('');
    }

    const handleStatechange = (e) => {
         setSelectState(e.target.value);
    }
   return(
    <form>
    <h6>Shipping Address</h6>
    Name <input type="text" name="username"/>
    Mobile <input type="number" name="mobilenumber"/>
    Address Line 1 <input type="text" name="address1"/>
    <p>Our shipping partners do not deliver to PO Boxes / APO, 
        Virgin Islands and Puerto Rico addresses. Please provide your full street address.</p>
    Address Line 2 <input type="text" name="address2"/>
    City <input type="text" name="city"/>
    Zipcode <input type="text" name="zipcode"/>
    Country <select onClick={handleCountryChange}>
           <option>select</option>
           {Object.keys(countries).map(country => (
            <option>{countries[country]}</option>
           ))}
    </select>
    {/* State
     {/* <select onClick={handleStatechange}>
        <option>select</option>
      {selectCountry && States[selectCountry] && (  
        {States[selectCountry].map((state, index) =>(
        <option key={index} value={state}>{state}</option>
        ))}
        </select> */}
        
    )} */
    </form>
   )
}

export default ManageAddress;